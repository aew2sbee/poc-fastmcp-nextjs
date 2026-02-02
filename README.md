# poc-fastmcp-nextjs
Next.jsとFastMCPについての検証する

## サーバーの起動
```bash
# サーバーディレクトリへ移動
cd apps/mcp-server

# 依存関係のインストール (uvを使用)
uv sync

# 単体動作確認 (エラーが出なければOK / Ctrl+Cで終了)
uv run main.py
```

## フロントエンド (Next.js)
```bash
# Webディレクトリへ移動
cd ../web

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```
