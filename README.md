# Nextran

Next.js + Express.js のモノレポプロジェクト

## プロジェクト構成

```
nextran/
├── packages/
│   ├── frontend/          # Next.js アプリケーション
│   └── backend/           # Express.js サーバー
├── pnpm-workspace.yaml
└── package.json
```

## セットアップ

1. 依存関係のインストール:

```bash
pnpm install
```

2. 開発サーバーの起動:

```bash
# フロントエンドとバックエンドを同時に起動
pnpm dev

# 個別に起動する場合
pnpm dev:frontend  # Next.js (http://localhost:3000)
pnpm dev:backend   # Express.js (http://localhost:3001)
```

## スクリプト

- `pnpm dev` - 全てのパッケージの開発サーバーを並列起動
- `pnpm dev:frontend` - フロントエンドのみ起動
- `pnpm dev:backend` - バックエンドのみ起動
- `pnpm build` - 全てのパッケージをビルド
- `pnpm start` - ビルド済みアプリケーションを起動

## 技術スタック

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### Backend
- Express.js
- TypeScript
- CORS対応

## API エンドポイント

バックエンドのAPIは以下の2つの方法でアクセスできます：

### 直接バックエンドにアクセス
- `http://localhost:3001/` - ルートエンドポイント
- `http://localhost:3001/api/health` - ヘルスチェック
- `http://localhost:3001/api/hello` - サンプルエンドポイント

### フロントエンド経由でアクセス（推奨）
Next.jsのリライト機能により、フロントエンドからも同じAPIにアクセスできます：
- `http://localhost:3000/api/health` - ヘルスチェック
- `http://localhost:3000/api/hello` - サンプルエンドポイント

フロントエンドから `/api/*` にアクセスすると、自動的にバックエンド (`http://localhost:3001/api/*`) にプロキシされます。これにより、CORS問題を回避し、シームレスなAPI統合が可能になります。
