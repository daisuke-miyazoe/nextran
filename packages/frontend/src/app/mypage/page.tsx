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
      {/* メイン */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* タイトル */}
          <h1 className="text-2xl font-semibold text-center mb-8">ユーザー情報</h1>

          <div className="max-w-xl mx-auto space-y-6">
            {/* プロフィールカード */}
            <section className="rounded-2xl border border-slate-200 bg-white px-6 py-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M6 20a6 6 0 0 1 12 0" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-medium">a</div>
                  <div className="text-xs text-slate-500">会員ID: 1</div>
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3 flex items-center gap-2 text-xs">
                <svg
                  className="w-4 h-4 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
                <div>
                  <div className="text-[11px] text-slate-500">メールアドレス</div>
                  <div className="text-xs text-slate-700 break-all">a</div>
                </div>
              </div>
            </section>

            {/* アカウント設定 */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <div className="px-6 py-4 border-b border-slate-100 text-sm font-medium text-slate-800">
                アカウント設定
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium text-slate-800">
                      タイムテーブル表示数
                    </div>
                    <div className="text-xs text-slate-500">
                      次の到着時刻の表示件数
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">3件</div>
                </div>
              </div>
            </section>

            {/* 危険な操作 */}
            <section className="rounded-2xl border border-red-200 bg-red-50/60 px-6 py-5">
              <div className="text-xs font-medium text-red-500 mb-3">
                危険な操作
              </div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
                <span>アカウントを削除</span>
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupPage;