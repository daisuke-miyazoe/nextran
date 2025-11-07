"use client"

import React from "react";
import { useRouter } from 'next/navigation';

const lines = ["山手線", "埼京線", "湘南新宿ライン", "東武東上線", "西武池袋線"];

const timetable = [
  {
    id: 1,
    platform: "3番線",
    direction: "渋谷・新宿方面",
    remain: "5分",
    time: "00:59",
    status: "通常通り"
  },
  {
    id: 2,
    platform: "3番線",
    direction: "渋谷・新宿方面",
    remain: "6分",
    time: "01:00",
    status: "通常通り"
  },
  {
    id: 3,
    platform: "4番線",
    direction: "渋谷・新宿方面",
    remain: "3分",
    time: "00:57",
    status: "通常通り"
  }
];

const StationDetailsPage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/favorites')
  }

  return (
    <div>
      {/* メイン */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* 戻るリンク */}
          <button onClick={handleNavigation} className="mb-4 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>駅一覧に戻る</span>
          </button>

          {/* 駅情報カード */}
          <section className="mb-8">
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5">
              <h1 className="text-xl font-semibold text-slate-900 mb-3">池袋駅</h1>

              {/* 路線バッジ */}
              <div className="flex flex-wrap gap-1 mb-3">
                {lines.map((line) => (
                  <span
                    key={line}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-slate-100 text-slate-700"
                  >
                    {line}
                  </span>
                ))}
              </div>

              {/* 住所 */}
              <div className="flex items-center gap-2 text-xs text-slate-600 mb-4">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <span>東京都豊島区南池袋1-28-1</span>
              </div>

              {/* お気に入りボタン */}
              <button
                type="button"
                className="mt-1 w-full py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-black"
              >
                <span className="text-base">＋</span>
                <span>お気に入りに追加</span>
              </button>
            </div>
          </section>

          {/* 地図プレースホルダ */}
          <section className="mb-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-slate-400 text-xs">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <span>地図表示（実装予定）</span>
              </div>
            </div>
          </section>

          {/* 時刻表 */}
          <section className="pb-10">
            <h2 className="text-sm font-semibold text-slate-800 mb-4">時刻表</h2>

            <div className="space-y-3">
              {timetable.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 flex items-start justify-between"
                >
                  {/* 左：便情報 */}
                  <div>
                    <div className="text-xs text-slate-500 mb-1">池袋駅</div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                      <span>{item.platform}</span>
                      <span>→ {item.direction}</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <div className="flex items-center gap-1 text-sm text-slate-700">
                        <svg
                          className="w-4 h-4 text-slate-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        <span className="text-base font-semibold">{item.remain}</span>
                      </div>
                      <span className="text-xs text-slate-500">{item.time}</span>
                    </div>
                  </div>

                  {/* 右：ステータス */}
                  <div className="mt-1">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] bg-slate-100 text-slate-700">
                      {item.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default StationDetailsPage;