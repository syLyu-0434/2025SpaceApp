# 數位繪本最小範例（GitHub Pages）

這是一個不需安裝任何套件、可直接部署到 GitHub Pages 的 **靜態數位繪本**。  
功能包含：左右翻頁、鍵盤操作、手機滑動、頁碼與進度條、說明文字。

## 使用方式
1. 將此專案整包上傳到你的 GitHub 倉庫，例如 `my-picture-book`。
2. 進到 GitHub 倉庫 → Settings → Pages → 設定 **Deploy from a branch**，選擇 `main` 與根目錄（/）。
3. 等待 GitHub Pages 發佈完成後，打開顯示的網址即可閱讀。

## 客製化
- 將 `assets/page*.png` 換成你的插圖（支援 JPG/PNG/WebP）。
- 在 `script.js` 的 `PAGES` 陣列中，修改每頁 `text` 與 `img` 路徑。
- 標題可在 `index.html` 的 `<title>` 與 `.title` 文字修改。
- 想加入雙語？可以把 `PAGES` 改成包含 `text_zh` / `text_en`，再加一個切換按鈕即可。

## 檔案結構
```
.
├── index.html
├── style.css
├── script.js
└── assets/
    ├── page1.png
    ├── page2.png
    ├── page3.png
    ├── page4.png
    └── page5.png
```

## 授權
你可以自由使用與修改此範例。
