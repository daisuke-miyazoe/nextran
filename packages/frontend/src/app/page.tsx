export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to Nextran
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300">
          Next.js + Express.js Monorepo
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            フロントエンドが正常に動作しています！!!!!!!!!
          </p>
          <div className="flex gap-4 justify-center">
            <div className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">
              TypeScript
            </div>
            <div className="px-4 py-2 bg-green-500 text-white rounded-md font-semibold">
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
