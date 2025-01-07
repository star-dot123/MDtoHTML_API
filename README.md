# MDtoHTML_API

MDtoHTML_APIは、マークダウン形式のテキストをHTMLに変換するためのシンプルなNode.jsベースのAPIです。`marked`ライブラリを使用してマークダウンをHTMLに変換し、リクエストに対して結果を返します。

## 目次

- [インストール](#インストール)
- [使い方](#使い方)
- [APIエンドポイント](#apiエンドポイント)
- [レスポンス](#レスポンス)
- [エラーハンドリング](#エラーハンドリング)
- [ライセンス](#ライセンス)

## インストール

1. このリポジトリをクローンまたはダウンロードします。

   ```bash
   git clone https://github.com/star-dot123/MDtoHTML_API.git
   ```

2. 必要な依存関係をインストールします。

   ```bash
   node server.js
   ```

3. サーバーを起動します。

   ```bash
   npm start
   ```

   ポート番号に変更を加えていな状態では`http://localhost:3000`でサーバーが起動し、APIが利用できるようになります。

## 使い方

`MDtoHTML_API`は、POSTリクエストでマークダウンテキストを送信し、HTMLに変換された結果を受け取ることができます。

### APIリクエスト例

```bash
curl -X POST http://localhost:3000/convert -H "Content-Type: application/json" -d '{"markdown": "# 見出し\n\nこれは段落1です。\n\nこれは段落2です。"}'
```

### リクエストボディの例

```json
{
    "status": "success",
    "markdown": "# 見出し\n\nこれは段落1です。\n\nこれは段落2です。"
}
```

## APIエンドポイント

### POST `/convert`

このエンドポイントは、マークダウンテキストを受け取り、それをHTMLに変換して返します。

- **リクエスト**: マークダウン形式のテキスト（JSON形式）
- **レスポンス**: HTML形式に変換されたテキスト（JSON形式）

## レスポンス

リクエストが成功すると、次のようなレスポンスが返されます。

```json
{
    "status": "success",
    "html": "<h1>見出し</h1><p>これは段落1です。</p><p>これは段落2です。</p>"
}
```

## エラーハンドリング

- マークダウンデータが提供されていない場合：

```json
{
    "status": "error",
    "message": "No markdown data provided."
}
```

- 無効なマークダウンが送信された場合やその他のエラー：

```json
{
    "status": "error",
    "message": "Invalid markdown data."
}
```

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細については、[LICENSE](LICENSE)ファイルをご覧ください。