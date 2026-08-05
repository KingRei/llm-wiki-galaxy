# Compounding Wiki

一個可直接開啟的 Obsidian × Persistent LLM Wiki 網頁原型。

## 立刻使用

1. 解壓縮。
2. 建議在資料夾內啟動本機伺服器：
   ```bash
   python3 -m http.server 8080
   ```
3. 用桌面版 Chrome 或 Edge 開啟 `http://localhost:8080`。
4. 點「連接 Obsidian Vault」，選擇你的 Vault 根目錄。

> 直接雙擊 `index.html` 也能看 Demo，但瀏覽器的資料夾讀寫權限通常要求 localhost 或 HTTPS。

## 已完成

- 互動式 Galaxy graph：拖曳、縮放、節點選取、關聯高亮。
- 讀取 Obsidian Vault 內所有 Markdown，略過 `.obsidian`。
- 解析 `[[wikilinks]]`、基礎 YAML frontmatter、tags、type、date。
- 搜尋與類型過濾。
- Timeline、Wiki Health、孤兒頁與斷鏈檢查。
- 建立新 Wiki 頁面並寫回 Vault。
- `obsidian://open` 深連結。
- Command palette、Agent action UI、問答回存流程原型。
- 純 HTML/CSS/JS，沒有 npm 依賴，方便持續擴增。

## 建議 Vault 結構

```text
vault/
├─ AGENTS.md
├─ index.md
├─ log.md
├─ raw/
│  ├─ articles/
│  ├─ papers/
│  ├─ meetings/
│  └─ assets/
├─ wiki/
│  ├─ entities/
│  ├─ concepts/
│  ├─ projects/
│  ├─ comparisons/
│  ├─ syntheses/
│  └─ questions/
└─ templates/
```

## 真正接上 LLM Agent 的下一層

此原型把「本地 Markdown + graph + write-back」做好。正式 AI 層建議放在本機 sidecar，而不是把 API key 放進網頁：

```text
Browser UI
   ↕ localhost API / WebSocket
Agent sidecar (Python or Node)
   ├─ Obsidian Vault file tools
   ├─ LLM API / local model
   ├─ qmd or custom hybrid search
   ├─ ingest / query / lint workflows
   └─ git diff + approval gate
```

推薦端點：

- `POST /api/ingest`：讀取 raw source，回傳跨頁面修改計畫與 diff。
- `POST /api/query`：以 index + graph + search 回答，附 citations。
- `POST /api/lint`：回傳 contradiction / orphan / stale claim / missing source。
- `POST /api/apply`：人工確認後執行多檔案寫入。
- `GET /api/events`：以 SSE 推送 ingest 與 Agent 執行進度。

## 瀏覽器限制

- File System Access API 主要支援桌面版 Chromium。
- Safari / iOS 無法提供同等的 Vault 資料夾讀寫體驗。
- 跨裝置正式版可改用 Obsidian Local REST API plugin、桌面 companion app，或自架同步服務。

## Execution Layer（Noah Agent OS）

新版加入 Knowledge / Execution 雙層模式：

- **Knowledge Memory**：Obsidian Wiki、raw sources、questions、contradictions 與 Galaxy。
- **Execution OS**：Chief of Staff 自動判斷意圖，路由到專責 Agent，並呈現 Now / Next / Review 工作佇列。

預設分區：Research、Engineering、Intelligence、Investment、Projects、Learning、Wiki Maintainer。這些分區可直接在 `app.js` 的 `agentZones` 陣列增刪，不需改動核心圖譜邏輯。

重要輸出仍遵循「先產生 diff、人工確認、再寫回 Obsidian」原則。
