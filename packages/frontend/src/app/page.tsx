// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-2xl w-full space-y-8 text-center">
//         <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
//           Welcome to Nextran
//         </h1>
//         <p className="text-2xl text-gray-700 dark:text-gray-300">
//           Next.js + Express.js Monorepo
//         </p>
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             フロントエンドが正常に動作しています！!!!!!!!!
//           </p>
//           <div className="flex gap-4 justify-center">
//             <div className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">
//               TypeScript
//             </div>
//             <div className="px-4 py-2 bg-green-500 text-white rounded-md font-semibold">
//               Tailwind CSS
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import React from "react";

const IndexPage = () => {
  return (
    <div className="flex-1">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="text-3xl font-semibold mb-6">ようこそ</div>
        
        <section className="mb-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-slate-700">
              <svg
                className="w-5 h-5 text-slate-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5V5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v14" />
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M8 7h8" />
                <path d="M8 11h5" />
              </svg>
              <span className="font-medium">使い方</span>
            </div>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc pl-5 space-y-1">
              <li>よく使う駅やバス停をお気に入りに追加できます</li>
              <li>次の電車・バスの到着時刻をリアルタイムで確認</li>
              <li>遅延情報も一目でチェック</li>
              <li>ログインして、どのデバイスからでもアクセス</li>
            </ul>
          </div>
        </section>

        <section className="mb-8 max-w-2xl">
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              disabled
              placeholder="駅名・バス停を検索"
              className="flex-1 rounded-full px-4 py-2 text-sm bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
            />
            <button
              type="button"
              disabled
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-400 text-white cursor-not-allowed"
            >
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
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            検索するにはログインが必要です
          </p>
        </section>

        <section className="mb-8 max-w-2xl">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">
            お気に入り駅・バス停
          </h2>

          <div className="border-2 border-dashed border-slate-200 rounded-2xl py-10 px-6 flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-500">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              お気に入りを保存するにはログインが必要です
            </p>
            <button
              type="button"
              className="px-10 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-black"
            >
              ログインする
            </button>
          </div>
        </section>

        <section className="max-w-2xl">
          <button
            type="button"
            disabled
            className="w-full py-3 rounded-full bg-slate-500 text-white text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed"
          >
            <span className="text-base">＋</span>
            <span>駅・バス停を追加</span>
          </button>
          <p className="mt-2 text-xs text-slate-500 text-center">
            追加するにはログインが必要です
          </p>
        </section>
      </div>
    </div>
  )
}

export default IndexPage;