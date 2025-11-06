"use client"

import React from "react";
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/login')
  }

  return (
    <div>
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center items-start">
            <div className="mt-16 w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-sm px-10 py-10">
              {/* アイコン */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                </div>
              </div>

              {/* タイトル */}
              <h1 className="text-center text-xl font-semibold mb-1">会員登録</h1>
              <p className="text-center text-xs text-slate-500 mb-8">
                新しいアカウントを作成してください
              </p>

              {/* フォーム */}
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    ユーザー名
                  </label>
                  <input
                    type="text"
                    placeholder="山田太郎"
                    className="w-full px-3 py-2 rounded-lg bg-slate-100 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    メールアドレス / 電話番号
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-100 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    パスワード
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-lg bg-slate-100 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/60"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-black"
                >
                  登録
                </button>
              </form>

              {/* フッターテキスト */}
              <p className="mt-6 text-center text-xs text-slate-500">
                すでにアカウントをお持ちの方は{" "}
                <button 
                  onClick={handleNavigation} 
                  className="font-medium text-slate-900 underline-offset-2 hover:underline"
                >
                  ログイン
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupPage;