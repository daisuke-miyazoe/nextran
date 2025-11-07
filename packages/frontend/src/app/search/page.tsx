import React from "react";

const stations = [
  {
    name: "渋谷駅",
    lines: ["山手線", "埼京線", "湘南新宿ライン", "東急東横線", "東急田園都市線"],
    address: "東京都渋谷区道玄坂1-1"
  },
  {
    name: "新宿駅",
    lines: ["山手線", "中央線", "総武線", "埼京線", "湘南新宿ライン"],
    address: "東京都新宿区新宿3-38-1"
  },
  {
    name: "東京駅",
    lines: ["山手線", "中央線", "東海道線", "京葉線", "東海道新幹線"],
    address: "東京都千代田区丸の内1-9-1"
  },
  {
    name: "品川駅",
    lines: ["山手線", "京浜東北線", "東海道線", "横須賀線", "東海道新幹線"],
    address: "東京都港区高輪3-26-27"
  },
  {
    name: "池袋駅",
    lines: ["山手線", "埼京線", "湘南新宿ライン", "東武東上線", "西武池袋線"],
    address: "東京都豊島区南池袋1-28-1"
  }
];

const SearchPage = () => {
  return (
    <div>
        {/* メイン */}
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-6 py-10">
          {/* タイトル */}
          <h1 className="text-2xl font-semibold mb-6">駅一覧</h1>

          {/* 検索バー */}
          <div className="mb-8 max-w-2xl">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="6" />
                  <line x1="16" y1="16" x2="20" y2="20" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="駅名・路線名で検索"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/60"
              />
            </div>
          </div>

          {/* 駅カード一覧 */}
          <div className="space-y-4 max-w-3xl">
            {stations.map((station) => (
              <article
                key={station.name}
                className="flex gap-4 items-start px-5 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm/0 hover:shadow-sm"
              >
                {/* 左：アイコン */}
                <div className="mt-1 flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-600">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="13" rx="1.5" />
                    <path d="M3 14h18" />
                    <path d="M8 21l1.5-3" />
                    <path d="M16 21l-1.5-3" />
                    <circle cx="8.5" cy="15.5" r="1" />
                    <circle cx="15.5" cy="15.5" r="1" />
                  </svg>
                </div>

                {/* 右：駅情報 */}
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-slate-900">
                    {station.name}
                  </h2>
                  {/* 路線バッジ */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {station.lines.map((line) => (
                      <span
                        key={line}
                        className="px-2.5 py-1 text-[11px] rounded-full bg-slate-100 text-slate-700"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                  {/* 住所 */}
                  <p className="mt-2 text-xs text-slate-500">{station.address}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default SearchPage;