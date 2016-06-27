# imgur 簡易上傳圖片 function

## 如何使用
```
// 使用 imgur_uploader 模組
const imgur_uploader = require('./imgur_uploader');
// 參數依序為要上傳之圖片路徑及你的 imgur client ID
imgur_uploader('a.png','imgur client ID').then((url)=>console.log(url), (err)=>console.log('error'));
```

