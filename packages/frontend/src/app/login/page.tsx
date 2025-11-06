"use client"

import React from "react";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/signup')
  }

  return (
    <div>
      {/* メイン */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center items-start">
            {/* ログインカード */}
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
                    <path d="M5 12h11" />
                    <path d="M13 8l4 4-4 4" />
                    <path d="M5 5h4a3 3 0 0 1 3 3v0" />
                  </svg>
                </div>
              </div>

              {/* タイトル */}
              <h1 className="text-center text-xl font-semibold mb-1">ログイン</h1>
              <p className="text-center text-xs text-slate-500 mb-8">
                アカウントにログインしてください
              </p>

              {/* フォーム */}
              <form className="space-y-4">
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
                  ログイン
                </button>
              </form>

              {/* フッター */}
              <p className="mt-6 text-center text-xs text-slate-500">
                アカウントをお持ちでない方は{" "}
                <button 
                  onClick={handleNavigation} 
                  className="font-medium text-slate-900 underline-offset-2 hover:underline"
                >
                  会員登録
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage;