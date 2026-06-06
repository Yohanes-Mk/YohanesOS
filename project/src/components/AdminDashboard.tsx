import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

interface AdminDashboardProps {
  theme: 'dark' | 'light';
  wallpaperAccents: WallpaperAccents;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ theme, wallpaperAccents, onClose }) => {
  const [scores, setScores] = useState<Array<{ name: string; from: string; score: number }>>([]);

  useEffect(() => {
    const stored = localStorage.getItem('snakeHighScores');
    if (stored) {
      setScores(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative w-full max-w-md rounded-2xl p-6 ${
          theme === 'dark'
            ? 'bg-[#08171E]/95 border border-[#096B90]/30'
            : 'bg-white border border-gray-200'
        }`}
        style={{ boxShadow: `0 25px 50px -12px ${wallpaperAccents.glow}` }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold" style={{ color: wallpaperAccents.primary }}>
            Admin Dashboard
          </h3>
          <button
            onClick={onClose}
            aria-label="Close admin dialog"
            className={`p-1 rounded hover:scale-110 transition-transform duration-150 ${
              theme === 'dark'
                ? 'text-[#71B7D5] hover:bg-[#096B90]/20'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div
            className={`rounded-lg border px-4 py-3 text-sm ${
              theme === 'dark'
                ? 'border-[#096B90] bg-[#042B44]/50 text-[#A1CCDC]'
                : 'border-gray-300 bg-gray-50 text-gray-700'
            }`}
          >
            Admin dashboard not available in public portfolio. Leaderboard data remains visible below as a local, browser-only feature.
          </div>
            <div
              className={`overflow-hidden rounded-lg border ${
                theme === 'dark'
                  ? 'border-[#096B90] bg-[#042B44]/50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              <div
                className={`grid grid-cols-4 gap-2 px-4 py-2 text-xs font-semibold uppercase ${
                  theme === 'dark' ? 'bg-[#042B44]/70 text-[#A1CCDC]' : 'bg-gray-200 text-gray-700'
                }`}
              >
                <span>Player</span>
                <span className="text-center">From</span>
                <span className="text-right">Score</span>
                    <span className="text-right">Notes</span>
              </div>
              <ul
                className={`divide-y text-sm ${
                  theme === 'dark'
                    ? 'divide-[#096B90]/30 text-[#A1CCDC]'
                    : 'divide-gray-200 text-gray-700'
                }`}
              >
                {scores.length === 0 && (
                  <li className="px-4 py-3 text-center opacity-70">No scores yet.</li>
                )}
                {scores.map((s, idx) => (
                  <li
                    key={idx}
                    className={`grid grid-cols-4 gap-2 px-4 py-2 ${
                      idx % 2 === 0
                        ? theme === 'dark'
                          ? 'bg-[#042B44]/40'
                          : 'bg-white'
                        : ''
                    }`}
                  >
                    <span>{s.name}</span>
                    <span className="text-center">{s.from}</span>
                    <span className="text-right">{s.score}</span>
                    <span className="text-right opacity-60">View only</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
