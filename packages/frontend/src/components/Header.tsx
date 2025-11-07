"use client"

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索処理をここに実装
    console.log('検索:', searchQuery);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Nextran</span>
            </Link>
          </div>

          {/* ナビゲーションリンク */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/users"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              ユーザー
            </Link>
            <Link
              href="/favorites"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              お気に入り
            </Link>
          </nav>

          {/* 検索バー + ユーザーメニュー */}
          <div className="flex items-center space-x-4">
            {/* 検索バー */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 text-sm bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>

            {/* ユーザーメニュー */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <svg
                  className={`w-4 h-4 text-slate-600 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* ドロップダウンメニュー */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1">
                  <Link
                    href="/mypage"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    マイページ
                  </Link>
                  {/* <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    設定
                  </Link> */}
                  <hr className="my-1 border-slate-200" />
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    ログイン
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-100 transition-colors"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      // ログアウト処理
                      console.log('ログアウト');
                    }}
                  >
                    ログアウト
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
