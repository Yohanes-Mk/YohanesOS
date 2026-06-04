import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface TerminalModeProps {
  theme: 'dark' | 'light';
  onClose: () => void;
}

type TerminalEntry = {
  id: number;
  input: string;
  output: string[];
  timestamp: Date;
};

type FileSystemFile = {
  type: 'file';
  content: string;
  description?: string;
};

type FileSystemDirectoryMarker = {
  type: 'dir';
  description: string;
};

type FileSystemDirectory = {
  [key: string]: FileSystemEntry;
};

type FileSystemEntry = FileSystemFile | FileSystemDirectoryMarker | FileSystemDirectory;

const isDirectory = (entry: FileSystemEntry): entry is FileSystemDirectory =>
  typeof entry === 'object' && entry !== null && !('type' in entry);

// File system structure
const fileSystem: Record<'/', FileSystemDirectory> = {
  '/': {
    'home': {
      'yohannes': {
        'projects': Object.fromEntries(
          portfolioData.projects.map((project) => [
            project.fileSlug,
            { type: 'dir', description: project.fileDescription }
          ])
        ),
        'documents': {
          'resume.pdf': { type: 'file', content: 'Yohannes Resume - Full-Stack Developer' },
          'cover-letter.txt': { type: 'file', content: 'Professional cover letter template' }
        },
        'skills': Object.fromEntries(
          Object.entries(portfolioData.skills.files).map(([fileName, content]) => [
            fileName,
            { type: 'file', content }
          ])
        ),
        'education': {
          ...Object.fromEntries(
            portfolioData.education.map((education) => [
              education.fileName,
              { type: 'file', content: education.fileContent }
            ])
          ),
          'coursework.txt': { type: 'file', content: portfolioData.education[0].coursework.join(', ') }
        },
        'contact': {
          'email.txt': { type: 'file', content: portfolioData.contact.email },
          'linkedin.txt': { type: 'file', content: portfolioData.contact.linkedinDisplay },
          'github.txt': { type: 'file', content: portfolioData.contact.githubDisplay }
        }
      }
    },
    'usr': {
      'bin': {
        'node': { type: 'file', content: 'Node.js runtime' },
        'python': { type: 'file', content: 'Python interpreter' },
        'git': { type: 'file', content: 'Git version control' }
      }
    },
    'etc': {
      'hostname': { type: 'file', content: 'yohannes-os' },
      'os-release': { type: 'file', content: 'YohannesOS 2.1.0' }
    }
  }
};

let currentPath = '/home/yohannes';

const getProjectTitleBySlug = (fileSlug: string) =>
  portfolioData.projects.find((project) => project.fileSlug === fileSlug)?.title ?? fileSlug;

const formatProjectLines = () => [
  '╭─────────────────────────────────────────╮',
  '│            Featured Projects            │',
  '╰─────────────────────────────────────────╯',
  '',
  ...portfolioData.projects.flatMap((project) => [
    `${project.terminalIcon} ${project.title} [${project.terminalStatus}]`,
    `   ${project.terminalStack.join(' • ')}`,
    `   ${project.terminalDescription}`,
    ''
  ]),
  'Use "cd projects" and "ls" to explore project directories!',
  ''
];

const formatSkillLines = () => [
  '╭─────────────────────────────────────────╮',
  '│            Technical Skills             │',
  '╰─────────────────────────────────────────╯',
  '',
  ...portfolioData.skills.terminalCategories.flatMap((category) => [
    category.label,
    `   ${category.items.join(' • ')}`,
    ''
  ]),
  'Use "cd skills" and "cat <file>" to see detailed skill lists!',
  ''
];

const formatEducationLines = () => {
  const scsuEducation = portfolioData.education[0];
  const umbcEducation = portfolioData.education[1];

  return [
    '╭─────────────────────────────────────────╮',
    '│              Education                  │',
    '╰─────────────────────────────────────────╯',
    '',
    `🎓 ${scsuEducation.school} — ${scsuEducation.location}`,
    `   ${scsuEducation.terminalDegree}`,
    `   GPA: ${scsuEducation.gpa} • Expected Graduation: ${scsuEducation.expected}`,
    '',
    `🎓 ${umbcEducation.terminalSchool}`,
    `   Computer Science transfer (${umbcEducation.period}) • Dean's List`,
    '',
    '📚 Recent Coursework',
    ...scsuEducation.terminalCoursework.map((course) => `   • ${course}`),
    '',
    '🏆 Programs & Memberships',
    ...scsuEducation.terminalPrograms.map((program) => `   • ${program}`),
    ''
  ];
};

const formatContactLines = () => [
  '╭─────────────────────────────────────────╮',
  '│           Contact Information           │',
  '╰─────────────────────────────────────────╯',
  '',
  '📧 Email',
  `   ${portfolioData.contact.email}`,
  '',
  '🔗 Professional Links',
  `   LinkedIn: ${portfolioData.contact.linkedinDisplay}`,
  `   GitHub:   ${portfolioData.contact.githubDisplay}`,
  '',
  '📍 Location',
  `   ${portfolioData.contact.location}`,
  '',
  '💼 Current Status',
  `   ${portfolioData.contact.status}`,
  '',
  'Use "cd contact" and "cat <file>" for specific contact files!',
  ''
];

const TerminalMode: React.FC<TerminalModeProps> = ({ theme, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message
    setHistory([{
      id: 0,
      input: '',
      output: [
        'YohannesOS Terminal v2.1.0',
        'Welcome to YohannesOS! Type "help" for available commands.',
        'Current directory: /home/yohannes',
        ''
      ],
      timestamp: new Date()
    }]);
    
    // Focus input
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Helper functions
  const getPathObject = (path: string) => {
    const parts = path.split('/').filter(p => p);
    let current: FileSystemEntry = fileSystem['/'];
    
    for (const part of parts) {
      if (isDirectory(current) && current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    return current;
  };

  const resolvePath = (inputPath: string) => {
    if (inputPath.startsWith('/')) {
      return inputPath;
    }
    if (inputPath === '..') {
      const parts = currentPath.split('/').filter(p => p);
      parts.pop();
      return '/' + parts.join('/');
    }
    if (inputPath === '.') {
      return currentPath;
    }
    return currentPath === '/' ? `/${inputPath}` : `${currentPath}/${inputPath}`;
  };

  const commands = {
    help: [
      'YohannesOS Terminal Commands:',
      '',
      'File System:',
      '  ls [path]     - List directory contents',
      '  cd <path>     - Change directory',
      '  pwd           - Print working directory',
      '  cat <file>    - Display file contents',
      '  tree          - Show directory tree',
      '',
      'Portfolio:',
      '  about         - About me',
      '  projects      - My projects',
      '  skills        - Technical skills',
      '  education     - Educational background',
      '  contact       - Contact information',
      '  whoami        - Current user info',
      '',
      'System:',
      '  clear         - Clear terminal',
      '  exit          - Return to desktop',
      '  uname         - System information',
      ''
    ],
    about: [
      '╭─────────────────────────────────────────╮',
      '│              About Yohannes             │',
      '╰─────────────────────────────────────────╯',
      '',
      portfolioData.about.terminalHeadline,
      '',
      ...portfolioData.about.terminalSummary,
      '',
      'Recent highlights:',
      `• ${getProjectTitleBySlug('ai-event-aggregator')} demoed live at NSBE 2026`,
      `• ${getProjectTitleBySlug('researchmate').split(' — ')[0]} multi-agent literature review engine (~85% topic relevance)`,
      `• ${getProjectTitleBySlug('sign-speech').split(' — ')[0]} interpreter bridging ASL gestures and lip-reading in real time`,
      '',
      `Currently: ${portfolioData.about.currentStatus}`,
      `Status: ${portfolioData.about.availability}`,
      ''
    ],
    projects: formatProjectLines(),
    skills: formatSkillLines(),
    education: formatEducationLines(),
    contact: formatContactLines()
  };

  // Linux-style commands
  const executeLinuxCommand = (cmd: string, args: string[]): string[] => {
    switch (cmd) {
      case 'ls': {
        const targetPath = args[0] ? resolvePath(args[0]) : currentPath;
        const targetObj = getPathObject(targetPath);
        
        if (!targetObj) {
          return [`ls: cannot access '${args[0] || currentPath}': No such file or directory`];
        }
        
        if ('type' in targetObj && targetObj.type === 'file') {
          return [args[0] || targetPath.split('/').pop() || ''];
        }
        
        const directoryObj = isDirectory(targetObj) ? targetObj : {};
        const items = Object.keys(directoryObj).filter(key => key !== 'type' && key !== 'content' && key !== 'description');
        if (items.length === 0) {
          return [''];
        }
        
        return items.map(item => {
          const itemObj = directoryObj[item];
          const isDir = isDirectory(itemObj);
          return isDir ? `${item}/` : item;
        });
      }

      case 'pwd':
        return [currentPath];

      case 'cd': {
        if (!args[0]) {
          currentPath = '/home/yohannes';
          return [''];
        }
        
        const newPath = resolvePath(args[0]);
        const newObj = getPathObject(newPath);
        
        if (!newObj) {
          return [`cd: no such file or directory: ${args[0]}`];
        }
        
        if ('type' in newObj && newObj.type === 'file') {
          return [`cd: not a directory: ${args[0]}`];
        }
        
        currentPath = newPath;
        return [''];
      }

      case 'cat': {
        if (!args[0]) {
          return ['cat: missing file operand'];
        }
        
        const filePath = resolvePath(args[0]);
        const fileObj = getPathObject(filePath);
        
        if (!fileObj) {
          return [`cat: ${args[0]}: No such file or directory`];
        }
        
        if (!('type' in fileObj) || fileObj.type !== 'file') {
          return [`cat: ${args[0]}: Is a directory`];
        }
        
        return [fileObj.content || 'Empty file'];
      }

      case 'tree': {
        const buildTree = (obj: FileSystemDirectory, prefix = ''): string[] => {
          const result: string[] = [];
          const items = Object.keys(obj).filter(key => key !== 'type' && key !== 'content' && key !== 'description');
          
          items.forEach((item, index) => {
            const isLastItem = index === items.length - 1;
            const itemObj = obj[item];
            const isDir = isDirectory(itemObj);
            const connector = isLastItem ? '└── ' : '├── ';
            const itemName = isDir ? `${item}/` : item;
            
            result.push(`${prefix}${connector}${itemName}`);
            
            if (isDir) {
              const newPrefix = prefix + (isLastItem ? '    ' : '│   ');
              result.push(...buildTree(itemObj, newPrefix));
            }
          });
          
          return result;
        };
        
        const treeObj = getPathObject(currentPath);
        if (!treeObj) {
          return ['tree: cannot access current directory'];
        }
        
        return [
          currentPath,
          ...(isDirectory(treeObj) ? buildTree(treeObj) : [])
        ];
      }

      case 'whoami':
        return ['yohannes'];

      case 'uname': {
        if (args[0] === '-a') {
          return ['YohannesOS 2.1.0 yohannes-portfolio x86_64 GNU/Linux'];
        }
        return ['YohannesOS'];
      }

      case 'date':
        return [new Date().toString()];

      case 'echo': {
        return [args.join(' ')];
      }

      default:
        return null;
    }
  };

  const executeCommand = (cmd: string) => {
    const parts = cmd.trim().split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    let output: string[] = [];

    if (command === '') {
      output = [''];
    } else if (command === 'clear') {
      setHistory([]);
      return;
    } else if (command === 'exit') {
      onClose();
      return;
    } else if (commands[command as keyof typeof commands]) {
      output = commands[command as keyof typeof commands];
    } else {
      // Try Linux commands
      const linuxOutput = executeLinuxCommand(command, args);
      if (linuxOutput) {
        output = linuxOutput;
      } else {
        output = [`bash: ${command}: command not found`, 'Type "help" for available commands.', ''];
      }
    }

    const newEntry: TerminalEntry = {
      id: Date.now(),
      input: cmd,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commands = history.filter(h => h.input !== '').map(h => h.input);
      if (commands.length > 0 && historyIndex < commands.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commands[commands.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const commands = history.filter(h => h.input !== '').map(h => h.input);
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commands[commands.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const getPrompt = () => {
    const user = 'yohannes';
    const hostname = 'os';
    const shortPath = currentPath === '/home/yohannes' ? '~' : currentPath.replace('/home/yohannes', '~');
    return `${user}@${hostname}:${shortPath}$`;
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#08171E] via-[#042B44] to-[#096B90]' 
        : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'
    }`}>
      {/* Terminal header */}
      <div className={`flex items-center justify-between px-4 py-2 border-b ${
        theme === 'dark' 
          ? 'bg-[#08171E]/90 border-[#096B90]/30 backdrop-blur-sm' 
          : 'bg-white/90 border-gray-300 backdrop-blur-sm'
      }`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className={`ml-4 font-mono text-sm ${
            theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
          }`}>YohannesOS Terminal</span>
        </div>
        <button
          onClick={onClose}
          className={`transition-colors ${
            theme === 'dark' 
              ? 'text-[#A1CCDC] hover:text-[#71B7D5]' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <X size={20} />
        </button>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className={`flex-1 p-4 overflow-y-auto font-mono text-sm ${
          theme === 'dark' 
            ? 'bg-[#08171E]/80 backdrop-blur-sm' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        {history.map((entry) => (
          <div key={entry.id} className="mb-2">
            {entry.input && (
              <div className="flex">
                <span className={theme === 'dark' ? 'text-[#71B7D5]' : 'text-blue-600'}>{getPrompt()} </span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{entry.input}</span>
              </div>
            )}
            {entry.output.map((line, index) => (
              <div key={index} className={theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'}>{line}</div>
            ))}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex">
          <span className={theme === 'dark' ? 'text-[#71B7D5]' : 'text-blue-600'}>{getPrompt()} </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 bg-transparent outline-none ${
              theme === 'dark' 
                ? 'text-[#A1CCDC] caret-[#71B7D5]' 
                : 'text-gray-800 caret-gray-600'
            } focus:outline-none`}
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalMode;
