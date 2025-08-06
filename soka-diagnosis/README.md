# Soka Diagnosis - 世界市民タイプ診断

創価学園・創価大学向けの世界市民タイプ診断アプリケーションです。

## ファイル構造

```
soka-diagnosis/
├── index.html          # メインアプリケーション
├── netlify.toml        # Netlify設定
├── package.json        # プロジェクト設定
└── functions/          # Netlify Functions
    ├── hello.js        # テスト用関数
    └── generate-mission.js  # AI ミッション生成関数
```

## デプロイ

このプロジェクトはNetlify Functionsを使用しています。

## 環境変数

- `CLAUDE_API_KEY`: Claude APIキー（Netlifyの環境変数で設定）
