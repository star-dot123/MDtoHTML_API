const express = require('express');
const { marked } = require('marked');
const app = express();
const currentDate = new Date();

// JSONリクエストの受け入れを設定
app.use(express.json());

// マークダウンをHTMLに変換するエンドポイント
app.post('/convert', (req, res) => {
    const markdown = req.body.markdown;

    if (!markdown) {
        return res.status(400).json({
            status: 'error',
            message: 'No markdown data provided.'
        });
    }

    // マークダウンをHTMLに変換
    const html = marked(markdown);
    console.log(currentDate+'...converted');
    res.json({
        status: 'success',
        html: html
    });
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
