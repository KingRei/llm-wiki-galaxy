/* ============================ i18n ============================ */
const I18N = {
  zh: {
    'doc.title':'Compounding Wiki — Obsidian AI 第二大腦',
    'brand.subtitle':'知識記憶 × Agent 執行 OS',
    'tip.command':'指令面板',
    'btn.connect':'連接 Obsidian Vault',
    'panel.layers':'知識層',
    'status.demo':'示範資料',
    'layer.all':'知識星系',
    'layer.wiki':'Wiki 頁面',
    'layer.source':'原始來源',
    'layer.question':'開放問題',
    'layer.contradiction':'矛盾待裁決',
    'panel.views':'檢視模式',
    'view.knowledge':'知識',
    'view.execution':'執行',
    'view.timeline':'時間軸',
    'view.health':'健康度',
    'panel.activity':'近期動態',
    'btn.newpage':'＋ 建立 Wiki 頁面',
    'search.placeholder':'搜尋概念、人物、專案或來源…',
    'tip.focus':'聚焦所選節點',
    'tip.reset':'重設視角',
    'tip.lint':'執行 Wiki Lint',
    'galaxy.label':'知識記憶 · ADAN 知道什麼',
    'legend.wiki':'Wiki',
    'legend.source':'來源',
    'legend.question':'問題',
    'legend.contradiction':'矛盾',
    'galaxy.hint':'拖曳移動 · 滾輪縮放 · 點擊節點閱讀',
    'exec.eyebrow':'執行層 · ADAN 會做什麼',
    'exec.headline':'一個總指揮，七個專責工作區。',
    'exec.lede':'Chief of Staff 先判斷意圖，再把任務交給最適合的 Agent；所有重要結果寫回 Obsidian Wiki。',
    'exec.active':'執行中',
    'exec.queue':'排隊中',
    'exec.review':'待確認',
    'agent.chief':'Chief of Staff',
    'agent.chief.desc':'理解目標 · 拆解任務 · 協調 Agent',
    'board.now':'正在執行',
    'board.next':'等待排程',
    'board.review':'等待你確認',
    'timeline.eyebrow':'隨時間複利',
    'timeline.headline':'知識不是被搜尋，而是被持續編譯。',
    'metric.pages':'Wiki 頁面',
    'metric.pages.sub':'可持續維護的知識頁',
    'metric.links':'連結數',
    'metric.links.sub':'已建立的雙向關聯',
    'metric.orphans':'孤立頁面',
    'metric.orphans.sub':'缺少連結的孤立頁面',
    'metric.contradictions':'矛盾',
    'metric.contradictions.sub':'需要人工判讀的衝突',
    'health.eyebrow':'WIKI 檢查器',
    'health.headline':'讓知識庫愈用愈好，而不是愈用愈亂。',
    'inspector.empty.title':'選擇一個節點',
    'inspector.empty.desc':'閱讀頁面、查看來源、追蹤反向連結，或讓 Agent 把新洞見寫回 Obsidian。',
    'inspector.connections':'關聯連結',
    'inspector.actions':'Agent 動作',
    'inspector.nolinks':'尚無連結',
    'action.synthesize':'綜合成新頁面',
    'action.expand':'找缺口與下一步',
    'action.cite':'產生有來源的摘要',
    'btn.obsidian':'在 Obsidian 開啟',
    'ask.title':'Adan Chief of Staff',
    'ask.route':'自動路由',
    'ask.placeholder':'交代任務：研究、工程、投資、專案或知識整理…',
    'ask.save':'存回 Wiki',
    'ask.send':'送出 ↑',
    'command.placeholder':'輸入指令…',
    'command.connect':'連接 Obsidian Vault',
    'command.new':'建立 Wiki 頁面',
    'command.agents':'開啟 Agent Execution OS',
    'command.lint':'執行 Wiki Lint',
    'command.reset':'重設 Galaxy 視角',
    'dialog.newpage':'建立 Wiki 頁面',
    'dialog.title':'標題',
    'dialog.title.ph':'例如：Persistent LLM Wiki',
    'dialog.type':'類型',
    'dialog.type.wiki':'Wiki 頁面',
    'dialog.type.source':'原始來源',
    'dialog.type.question':'開放問題',
    'dialog.body':'內容',
    'dialog.body.ph':'支援 [[雙向連結]] 與 Markdown',
    'dialog.cancel':'取消',
    'dialog.create':'建立並寫入',
    'type.wiki':'wiki 頁面',
    'type.source':'原始來源',
    'type.question':'開放問題',
    'type.contradiction':'矛盾',
    'zone.research':'論文、文件、網頁、YouTube、GitHub',
    'zone.engineering':'程式碼、Benchmark、Bug、環境設定',
    'zone.intelligence':'公司、人物、產品、競爭與市場情報',
    'zone.investment':'財報、估值、催化劑、風險與 Thesis',
    'zone.projects':'專案狀態、任務、依賴與下一步',
    'zone.learning':'課程、YC、閱讀、技能樹與複習',
    'zone.wiki':'Ingest、Cross-link、Lint、Index、Log',
    'task.rocm.title':'整理 ROCm 研究脈絡',
    'task.rocm.desc':'彙整 benchmark、環境問題與核心結論',
    'task.rocm.meta':'更新 6 個 Wiki 頁面',
    'task.map.title':'建立 AI Infra 競爭地圖',
    'task.map.desc':'連結 AMD、NVIDIA、OpenAI 與產品節點',
    'task.map.meta':'讀取 12 個來源',
    'task.health.title':'Wiki 健康檢查',
    'task.health.desc':'找孤兒頁、矛盾與缺少來源的聲明',
    'task.health.meta':'發現 3 個待處理項目',
    'task.yc.title':'YC 系統化學習路徑',
    'task.yc.desc':'把影片與筆記編成可追蹤課綱',
    'task.yc.meta':'等待排程',
    'task.thesis.title':'投資 Thesis 更新',
    'task.thesis.desc':'檢查新財報是否推翻既有假設',
    'task.thesis.meta':'等待新來源',
    'task.dep.title':'專案依賴圖',
    'task.dep.desc':'整理目前工作項目的 blocker 與 owner',
    'task.dep.meta':'等待確認範圍',
    'task.ingest.title':'新增來源 Ingest',
    'task.ingest.desc':'讀取最新加入 raw/ 的 Markdown',
    'task.ingest.meta':'偵測到 2 個新檔案',
    'task.merge.title':'合併 FlashAttention 綜合頁',
    'task.merge.desc':'Agent 建議更新 5 個頁面並新增 11 個連結',
    'task.merge.meta':'需要人工確認 diff',
    'task.mi300x.title':'調整 MI300X 性能結論',
    'task.mi300x.desc':'新數據與舊摘要存在一處衝突',
    'task.mi300x.meta':'需要裁決來源優先級',
    'lint.orphans':'孤立頁面',
    'lint.broken':'缺少目標頁面的連結',
    'lint.contradictions':'待裁決矛盾',
    'lint.nosource':'缺少來源標記',
    'lint.none':'無',
    'lint.nosource.value':'{n} 個 Wiki 頁面尚未綁定 source',
    'toast.lang':'已切換為繁體中文',
    'toast.nofs':'此瀏覽器不支援資料夾讀寫；建議用桌面版 Chrome / Edge',
    'toast.nomd':'Vault 中沒有找到 Markdown 檔',
    'toast.connected':'已連接 {name}，載入 {n} 個頁面',
    'toast.connectfail':'連接失敗：',
    'toast.written':'已寫入 Obsidian Vault',
    'toast.writefail':'寫入 Vault 失敗，已先加入目前工作階段',
    'toast.lintdone':'Lint 完成：已檢查孤兒頁、斷鏈、矛盾與引用缺口',
    'toast.routed':'Chief of Staff 已路由給 {agent} Agent',
    'toast.localdemo':'已完成本地端示範推理（正式版需接 LLM API）',
    'toast.zone':'已選擇 {agent} Agent',
    'prompt.zone':'請交給 {agent} Agent：',
    'prompt.synthesize':'綜合 [[{title}]] 與所有相鄰頁面，形成一份可長期維護的 synthesis。',
    'prompt.expand':'檢查 [[{title}]] 的證據缺口、孤立概念與下一個研究問題。',
    'prompt.cite':'根據 [[{title}]] 的 raw sources 產生逐項可追溯摘要。',
    'answer.body':'執行 Agent：{agent}\n\n問題：{q}\n\n目前原型會先從 Wiki 索引與連結圖找候選頁面，再將回答寫成可回存的 Markdown artifact。建議優先閱讀 {names}，並在正式版串接你的 LLM Agent / MCP 來做引用、差異更新與多檔案寫入。',
    'answer.title':'探索 — {q}'
  },
  en: {
    'doc.title':'Compounding Wiki — Obsidian AI Second Brain',
    'brand.subtitle':'Knowledge Memory × Agent Execution OS',
    'tip.command':'Command palette',
    'btn.connect':'Connect Obsidian Vault',
    'panel.layers':'Knowledge layers',
    'status.demo':'Demo',
    'layer.all':'Galaxy',
    'layer.wiki':'Wiki',
    'layer.source':'Raw sources',
    'layer.question':'Questions',
    'layer.contradiction':'Contradictions',
    'panel.views':'Views',
    'view.knowledge':'Knowledge',
    'view.execution':'Execution',
    'view.timeline':'Timeline',
    'view.health':'Health',
    'panel.activity':'Recent activity',
    'btn.newpage':'＋ New wiki page',
    'search.placeholder':'Search concepts, people, projects or sources…',
    'tip.focus':'Focus selected',
    'tip.reset':'Reset view',
    'tip.lint':'Lint wiki',
    'galaxy.label':'KNOWLEDGE MEMORY · WHAT ADAN KNOWS',
    'legend.wiki':'Wiki',
    'legend.source':'Source',
    'legend.question':'Question',
    'legend.contradiction':'Contradiction',
    'galaxy.hint':'Drag to pan · scroll to zoom · click a node to read',
    'exec.eyebrow':'EXECUTION LAYER · WHAT ADAN DOES',
    'exec.headline':'One chief of staff, seven dedicated workspaces.',
    'exec.lede':'The Chief of Staff reads your intent first, then hands the task to the right agent — and every meaningful result is written back into the Obsidian wiki.',
    'exec.active':'Active',
    'exec.queue':'Queue',
    'exec.review':'Review',
    'agent.chief':'Chief of Staff',
    'agent.chief.desc':'Understand goals · split tasks · coordinate agents',
    'board.now':'In progress',
    'board.next':'Queued',
    'board.review':'Awaiting your review',
    'timeline.eyebrow':'COMPOUNDING OVER TIME',
    'timeline.headline':'Knowledge is not searched. It is continuously compiled.',
    'metric.pages':'Wiki pages',
    'metric.pages.sub':'Durably maintained knowledge pages',
    'metric.links':'Connections',
    'metric.links.sub':'Bidirectional links established',
    'metric.orphans':'Orphans',
    'metric.orphans.sub':'Isolated pages with no links',
    'metric.contradictions':'Contradictions',
    'metric.contradictions.sub':'Conflicts needing human judgment',
    'health.eyebrow':'WIKI LINTER',
    'health.headline':'A knowledge base that gets better with use, not messier.',
    'inspector.empty.title':'Select a node',
    'inspector.empty.desc':'Read the page, inspect sources, follow backlinks, or let an agent write new insight back into Obsidian.',
    'inspector.connections':'Connections',
    'inspector.actions':'Agent actions',
    'inspector.nolinks':'No links',
    'action.synthesize':'Synthesize a new page',
    'action.expand':'Find gaps and next steps',
    'action.cite':'Generate a cited summary',
    'btn.obsidian':'Open in Obsidian',
    'ask.title':'Adan Chief of Staff',
    'ask.route':'Auto route',
    'ask.placeholder':'Give a task: research, engineering, investment, projects or knowledge upkeep…',
    'ask.save':'Save to wiki',
    'ask.send':'Send ↑',
    'command.placeholder':'Type a command…',
    'command.connect':'Connect Obsidian Vault',
    'command.new':'New wiki page',
    'command.agents':'Open Agent Execution OS',
    'command.lint':'Run wiki lint',
    'command.reset':'Reset galaxy view',
    'dialog.newpage':'New wiki page',
    'dialog.title':'Title',
    'dialog.title.ph':'e.g. Persistent LLM Wiki',
    'dialog.type':'Type',
    'dialog.type.wiki':'Wiki',
    'dialog.type.source':'Raw source',
    'dialog.type.question':'Question',
    'dialog.body':'Content',
    'dialog.body.ph':'Supports [[wikilinks]] and Markdown',
    'dialog.cancel':'Cancel',
    'dialog.create':'Create and write',
    'type.wiki':'wiki',
    'type.source':'source',
    'type.question':'question',
    'type.contradiction':'contradiction',
    'zone.research':'Papers, docs, web pages, YouTube, GitHub',
    'zone.engineering':'Code, benchmarks, bugs, environment setup',
    'zone.intelligence':'Companies, people, products, competitive intel',
    'zone.investment':'Filings, valuation, catalysts, risk and thesis',
    'zone.projects':'Project status, tasks, dependencies, next steps',
    'zone.learning':'Courses, YC, reading, skill tree and review',
    'zone.wiki':'Ingest, cross-link, lint, index, log',
    'task.rocm.title':'Consolidate ROCm research thread',
    'task.rocm.desc':'Merge benchmarks, environment issues and core conclusions',
    'task.rocm.meta':'Updating 6 wiki pages',
    'task.map.title':'Build the AI infra competitive map',
    'task.map.desc':'Link AMD, NVIDIA, OpenAI and product nodes',
    'task.map.meta':'Reading 12 sources',
    'task.health.title':'Wiki health check',
    'task.health.desc':'Find orphans, contradictions and unsourced claims',
    'task.health.meta':'3 items found to resolve',
    'task.yc.title':'Systematic YC learning path',
    'task.yc.desc':'Turn videos and notes into a trackable syllabus',
    'task.yc.meta':'Waiting to be scheduled',
    'task.thesis.title':'Investment thesis refresh',
    'task.thesis.desc':'Check whether new filings overturn existing assumptions',
    'task.thesis.meta':'Waiting for new sources',
    'task.dep.title':'Project dependency graph',
    'task.dep.desc':'Map blockers and owners across current work items',
    'task.dep.meta':'Waiting on scope confirmation',
    'task.ingest.title':'Ingest new sources',
    'task.ingest.desc':'Read the newest Markdown added to raw/',
    'task.ingest.meta':'2 new files detected',
    'task.merge.title':'Merge the FlashAttention synthesis page',
    'task.merge.desc':'Agent proposes updating 5 pages and adding 11 links',
    'task.merge.meta':'Needs human diff review',
    'task.mi300x.title':'Revise MI300X performance conclusion',
    'task.mi300x.desc':'New data conflicts with the old summary in one place',
    'task.mi300x.meta':'Needs a source-priority ruling',
    'lint.orphans':'Orphan pages',
    'lint.broken':'Links with no target page',
    'lint.contradictions':'Contradictions to adjudicate',
    'lint.nosource':'Missing source binding',
    'lint.none':'None',
    'lint.nosource.value':'{n} wiki pages are not yet bound to a source',
    'toast.lang':'Switched to English',
    'toast.nofs':'This browser cannot read/write folders — use desktop Chrome or Edge',
    'toast.nomd':'No Markdown files found in the vault',
    'toast.connected':'Connected {name} — loaded {n} pages',
    'toast.connectfail':'Connection failed: ',
    'toast.written':'Written to your Obsidian vault',
    'toast.writefail':'Vault write failed — added to this session only',
    'toast.lintdone':'Lint complete: orphans, broken links, contradictions and citation gaps checked',
    'toast.routed':'Chief of Staff routed this to the {agent} agent',
    'toast.localdemo':'Local demo reasoning done (production needs an LLM API)',
    'toast.zone':'{agent} agent selected',
    'prompt.zone':'Hand this to the {agent} agent: ',
    'prompt.synthesize':'Synthesize [[{title}]] with all adjacent pages into a durable, maintainable synthesis.',
    'prompt.expand':'Check [[{title}]] for evidence gaps, isolated concepts and the next research question.',
    'prompt.cite':'Generate an item-by-item traceable summary from the raw sources behind [[{title}]].',
    'answer.body':'Agent: {agent}\n\nQuestion: {q}\n\nThis prototype first looks for candidate pages in the wiki index and link graph, then writes the answer as a Markdown artifact you can file back. Start with {names}. In production, wire in your own LLM agent / MCP for citations, incremental updates and multi-file writes.',
    'answer.title':'Exploration — {q}'
  }
};

const PAGE_BODY_EN = {
  'persistent-llm-wiki':'The LLM does not merely retrieve sources — it continuously maintains a readable, traceable, compounding Markdown wiki.\n\nThe core difference: knowledge is compiled once and then kept current, instead of being re-assembled from scratch on every question.',
  'raw-sources':'The immutable source-of-truth layer: papers, articles, meeting transcripts, images, data files. Agents may read them, but must never overwrite them.',
  'wiki-schema':'AGENTS.md defines page format, frontmatter, citation style, filename rules, and the operating contract for ingest / query / lint.',
  'incremental-ingest':'Every new source makes the agent update summaries, people, concepts, comparisons, the index and the log. A single source can touch 10–15 pages.',
  'index-log':'index.md is the content map; log.md is an append-only timeline. Together they let humans and agents grasp the wiki’s current state fast.',
  'obsidian-ide':'Obsidian is the knowledge IDE: humans browse, correct and explore; the LLM agent writes, refactors and maintains.',
  'hybrid-search':'At small scale, read index.md first. As it grows, add BM25, vector search and reranking. Search infrastructure is an optional module, not the starting point.',
  'graph-view':'The graph is not the goal — it is how you spot hubs, orphan pages, topic clusters and cross-domain links.',
  'contradiction-detection':'When a new source conflicts with an old conclusion, do not overwrite it. Keep both claims with their sources and dates, and file it for adjudication.',
  'wiki-lint':'Periodically check for contradictions, orphan pages, stale claims, important concepts without a page, citation gaps, and research questions worth adding.',
  'query-artifact':'High-value Q&A should not stay buried in chat logs. The agent should turn comparisons, analyses, charts or decisions into new wiki pages so exploration compounds.',
  'citation-provenance':'Every meaningful claim can be traced back to its raw source, excerpt location, capture date and agent change history.',
  'qmd':'An optional local Markdown search layer offering BM25, vector search and LLM reranking, usable via CLI or MCP.',
  'git':'The wiki is essentially a Markdown codebase, so Git gives you version history, branches, review and collaboration.',
  'agent-question':'After each ingest the agent should answer: which existing conclusions were reinforced, weakened or overturned? What evidence is still missing?'
};

const LANG_KEY='adan.lang';
function detectLang(){
  try{const saved=localStorage.getItem(LANG_KEY);if(saved==='zh'||saved==='en')return saved}catch(e){}
  const list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en']);
  return list.some(l=>/^zh/i.test(l||''))?'zh':'en';
}
let LANG=detectLang();
function t(key,vars){
  let s=(I18N[LANG]&&I18N[LANG][key]);
  if(s==null)s=I18N.zh[key];
  if(s==null)return key;
  if(vars)Object.keys(vars).forEach(k=>{s=s.split('{'+k+'}').join(vars[k])});
  return s;
}
function pageBody(p){return (LANG==='en'&&PAGE_BODY_EN[p.id])?PAGE_BODY_EN[p.id]:p.body}
function applyI18n(){
  document.documentElement.lang = LANG==='zh' ? 'zh-Hant' : 'en';
  document.title=t('doc.title');
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=I18N[LANG][el.dataset.i18n];if(v!=null)el.textContent=v});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const v=I18N[LANG][el.dataset.i18nPlaceholder];if(v!=null)el.placeholder=v});
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{const v=I18N[LANG][el.dataset.i18nTitle];if(v!=null)el.title=v});
  document.querySelectorAll('#langSwitch button').forEach(b=>b.classList.toggle('active',b.dataset.lang===LANG));
}
function setLang(l){
  if(l===LANG||!I18N[l])return;
  LANG=l;
  try{localStorage.setItem(LANG_KEY,l)}catch(e){}
  applyI18n();renderAgentOS();updateUI();
  if(state.selected)selectPage(state.selected);
  toast(t('toast.lang'));
}
/* ========================== end i18n ========================== */

const demoPages = [
  {id:'persistent-llm-wiki',title:'Persistent LLM Wiki',type:'wiki',date:'2026-07-28',tags:['architecture','llm'],body:'LLM 不只檢索來源，而是持續維護一套可閱讀、可追溯、可累積的 Markdown Wiki。\n\n核心差異：知識只需被編譯一次，之後持續更新，而不是每次提問都重新拼接。',links:['Raw Sources','Wiki Schema','Incremental Ingest','Index and Log','Obsidian as IDE']},
  {id:'raw-sources',title:'Raw Sources',type:'source',date:'2026-07-27',tags:['source-of-truth'],body:'不可變的原始資料層：論文、文章、會議逐字稿、圖片、資料檔。Agent 可以讀取，但不應覆寫。',links:['Persistent LLM Wiki','Incremental Ingest','Citation Provenance']},
  {id:'wiki-schema',title:'Wiki Schema',type:'wiki',date:'2026-07-27',tags:['agents','governance'],body:'AGENTS.md 定義頁面格式、frontmatter、引用方式、檔名規則，以及 ingest / query / lint 的操作守則。',links:['Persistent LLM Wiki','Incremental Ingest','Wiki Lint','Obsidian as IDE']},
  {id:'incremental-ingest',title:'Incremental Ingest',type:'wiki',date:'2026-07-26',tags:['workflow'],body:'每加入一個來源，Agent 會更新摘要、人物、概念、比較、索引與 log。一份來源可能觸及 10–15 個頁面。',links:['Raw Sources','Wiki Schema','Index and Log','Contradiction Detection']},
  {id:'index-log',title:'Index and Log',type:'wiki',date:'2026-07-25',tags:['navigation'],body:'index.md 是內容地圖；log.md 是 append-only 的時間線。兩者讓人與 Agent 都能快速理解 Wiki 的現況。',links:['Persistent LLM Wiki','Incremental Ingest','Hybrid Search']},
  {id:'obsidian-ide',title:'Obsidian as IDE',type:'wiki',date:'2026-07-25',tags:['obsidian'],body:'Obsidian 是知識 IDE：人負責瀏覽、校正與探索；LLM Agent 負責寫入、重構與維護。',links:['Persistent LLM Wiki','Wiki Schema','Graph View','Git Versioning']},
  {id:'hybrid-search',title:'Hybrid Search',type:'wiki',date:'2026-07-24',tags:['search'],body:'小規模先讀 index.md；規模放大後再加入 BM25、vector search 與 reranking。搜尋基礎設施是可選模組，不是起點。',links:['Index and Log','qmd Local Search','Query to Artifact']},
  {id:'graph-view',title:'Graph View',type:'wiki',date:'2026-07-24',tags:['visualization'],body:'圖譜不是目的，而是用來看 hub、孤兒頁面、主題群聚與跨領域連結。',links:['Obsidian as IDE','Wiki Lint','Persistent LLM Wiki']},
  {id:'contradiction-detection',title:'Contradiction Detection',type:'contradiction',date:'2026-07-23',tags:['quality'],body:'新來源與舊結論不一致時，不直接覆蓋。保留兩個主張、來源與時間，建立待裁決項目。',links:['Incremental Ingest','Wiki Lint','Citation Provenance']},
  {id:'wiki-lint',title:'Wiki Lint',type:'wiki',date:'2026-07-23',tags:['quality'],body:'定期檢查矛盾、孤兒頁、過時聲明、缺少頁面的重要概念、引用缺口與可新增的研究問題。',links:['Graph View','Contradiction Detection','Wiki Schema']},
  {id:'query-artifact',title:'Query to Artifact',type:'question',date:'2026-07-22',tags:['compounding'],body:'高價值問答不應留在聊天紀錄。Agent 應能將比較、分析、圖表或決策整理成新 Wiki 頁面，讓探索成果持續累積。',links:['Hybrid Search','Persistent LLM Wiki','Citation Provenance']},
  {id:'citation-provenance',title:'Citation Provenance',type:'wiki',date:'2026-07-21',tags:['trust'],body:'每個重要聲明都能回到原始來源、摘錄位置、擷取日期與 Agent 變更紀錄。',links:['Raw Sources','Contradiction Detection','Query to Artifact']},
  {id:'qmd',title:'qmd Local Search',type:'source',date:'2026-07-20',tags:['tooling'],body:'可選的本地 Markdown 搜尋層，提供 BM25、向量搜尋與 LLM reranking，並可透過 CLI 或 MCP 使用。',links:['Hybrid Search']},
  {id:'git',title:'Git Versioning',type:'wiki',date:'2026-07-19',tags:['versioning'],body:'Wiki 本質上是 Markdown codebase，因此可以用 Git 取得版本歷史、分支、review 與協作。',links:['Obsidian as IDE','Wiki Schema']},
  {id:'agent-question',title:'What changed my thesis?',type:'question',date:'2026-07-18',tags:['reflection'],body:'每次 ingest 後，Agent 應回答：哪些既有結論被強化、削弱或推翻？還缺少什麼證據？',links:['Contradiction Detection','Incremental Ingest','Query to Artifact']}
];


const agentZones = [
  {id:'research',name:'Research',icon:'⌕',color:'#43ddff',desc:'論文、文件、網頁、YouTube、GitHub'},
  {id:'engineering',name:'Engineering',icon:'⌘',color:'#637dff',desc:'程式碼、Benchmark、Bug、環境設定'},
  {id:'intelligence',name:'Intelligence',icon:'◉',color:'#5af2b6',desc:'公司、人物、產品、競爭與市場情報'},
  {id:'investment',name:'Investment',icon:'$',color:'#ffca6a',desc:'財報、估值、催化劑、風險與 Thesis'},
  {id:'projects',name:'Projects',icon:'↗',color:'#ff9f68',desc:'專案狀態、任務、依賴與下一步'},
  {id:'learning',name:'Learning',icon:'△',color:'#a872ff',desc:'課程、YC、閱讀、技能樹與複習'},
  {id:'wiki',name:'Wiki Maintainer',icon:'✦',color:'#ff6f91',desc:'Ingest、Cross-link、Lint、Index、Log'}
];
const executionTasks = {
  active:[
    {title:'整理 ROCm 研究脈絡',agent:'Engineering',desc:'彙整 benchmark、環境問題與核心結論',progress:72,color:'#637dff',meta:'更新 6 個 Wiki 頁面',k:'task.rocm'},
    {title:'建立 AI Infra 競爭地圖',agent:'Intelligence',desc:'連結 AMD、NVIDIA、OpenAI 與產品節點',progress:48,color:'#5af2b6',meta:'讀取 12 個來源',k:'task.map'},
    {title:'Wiki 健康檢查',agent:'Wiki Maintainer',desc:'找孤兒頁、矛盾與缺少來源的聲明',progress:84,color:'#ff6f91',meta:'發現 3 個待處理項目',k:'task.health'}
  ],
  queued:[
    {title:'YC 系統化學習路徑',agent:'Learning',desc:'把影片與筆記編成可追蹤課綱',progress:0,color:'#a872ff',meta:'等待排程',k:'task.yc'},
    {title:'投資 Thesis 更新',agent:'Investment',desc:'檢查新財報是否推翻既有假設',progress:0,color:'#ffca6a',meta:'等待新來源',k:'task.thesis'},
    {title:'專案依賴圖',agent:'Projects',desc:'整理目前工作項目的 blocker 與 owner',progress:0,color:'#ff9f68',meta:'等待確認範圍',k:'task.dep'},
    {title:'新增來源 Ingest',agent:'Research',desc:'讀取最新加入 raw/ 的 Markdown',progress:0,color:'#43ddff',meta:'偵測到 2 個新檔案',k:'task.ingest'}
  ],
  review:[
    {title:'合併 FlashAttention 綜合頁',agent:'Wiki Maintainer',desc:'Agent 建議更新 5 個頁面並新增 11 個連結',progress:100,color:'#ff6f91',meta:'需要人工確認 diff',k:'task.merge'},
    {title:'調整 MI300X 性能結論',agent:'Engineering',desc:'新數據與舊摘要存在一處衝突',progress:100,color:'#637dff',meta:'需要裁決來源優先級',k:'task.mi300x'}
  ]
};

const state={pages:[],filtered:[],selected:null,layer:'all',view:'galaxy',vaultHandle:null,handles:new Map(),camera:{x:0,y:0,scale:1},drag:null,hover:null};
const typeColors={wiki:'#43ddff',source:'#a872ff',question:'#ffca6a',contradiction:'#ff6f91'};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];

function slugify(s){return s.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'')||`page-${Date.now()}`}
function escapeHtml(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),2200)}
function wikiLinks(text){return [...text.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map(m=>m[1].trim())}
function stripFrontmatter(text){return text.replace(/^---\n[\s\S]*?\n---\n?/,'').trim()}
function parseFrontmatter(text){const m=text.match(/^---\n([\s\S]*?)\n---/); const out={}; if(!m)return out; m[1].split('\n').forEach(line=>{const i=line.indexOf(':');if(i>0){let v=line.slice(i+1).trim();if(v.startsWith('['))v=v.slice(1,-1).split(',').map(x=>x.trim().replace(/^['"]|['"]$/g,''));out[line.slice(0,i).trim()]=v}});return out}

function initialize(){applyI18n();renderAgentOS();state.pages=demoPages.map((p,i)=>({...p,x:0,y:0,vx:0,vy:0,r:p.type==='wiki'?4.4:3.7})); buildGraph(); bind(); updateUI(); requestAnimationFrame(draw)}
function buildGraph(){
  const cx=0,cy=0;state.pages.forEach((p,i)=>{const a=i*2.39996;const rad=38+Math.sqrt(i)*38;p.x=cx+Math.cos(a)*rad+(Math.random()-.5)*18;p.y=cy+Math.sin(a)*rad+(Math.random()-.5)*18;p.vx=p.vy=0});
  const map=new Map(state.pages.map(p=>[p.title.toLowerCase(),p]));
  state.edges=[];state.pages.forEach(p=>(p.links||[]).forEach(t=>{const target=map.get(t.toLowerCase());if(target&&p.id<target.id)state.edges.push({a:p,b:target})}));
  simulate(120);
}
function simulate(iter=40){
  for(let k=0;k<iter;k++){
    for(let i=0;i<state.pages.length;i++)for(let j=i+1;j<state.pages.length;j++){const a=state.pages[i],b=state.pages[j];let dx=b.x-a.x,dy=b.y-a.y,d2=dx*dx+dy*dy+.1,d=Math.sqrt(d2),f=650/d2;dx/=d;dy/=d;a.vx-=dx*f;a.vy-=dy*f;b.vx+=dx*f;b.vy+=dy*f}
    state.edges.forEach(e=>{let dx=e.b.x-e.a.x,dy=e.b.y-e.a.y,d=Math.sqrt(dx*dx+dy*dy)||1,f=(d-74)*.012;e.a.vx+=dx/d*f;e.a.vy+=dy/d*f;e.b.vx-=dx/d*f;e.b.vy-=dy/d*f});
    state.pages.forEach(p=>{p.vx+=-p.x*.0008;p.vy+=-p.y*.0008;p.vx*=.78;p.vy*=.78;p.x+=p.vx;p.y+=p.vy});
  }
}
function updateUI(){
  const q=$('#searchInput').value.trim().toLowerCase();state.filtered=state.pages.filter(p=>(state.layer==='all'||p.type===state.layer)&&(!q||[p.title,p.body,...(p.tags||[])].join(' ').toLowerCase().includes(q)));
  const visible=new Set(state.filtered);state.pages.forEach(p=>p.hidden=!visible.has(p));
  ['all','wiki','source','question','contradiction'].forEach(t=>$('#count'+t[0].toUpperCase()+t.slice(1)).textContent=t==='all'?state.pages.length:state.pages.filter(p=>p.type===t).length);
  $('#metricPages').textContent=state.pages.filter(p=>p.type==='wiki').length;$('#metricLinks').textContent=state.edges.length;
  const degrees=new Map(state.pages.map(p=>[p.id,0]));state.edges.forEach(e=>{degrees.set(e.a.id,degrees.get(e.a.id)+1);degrees.set(e.b.id,degrees.get(e.b.id)+1)});
  $('#metricOrphans').textContent=[...degrees.values()].filter(v=>v===0).length;$('#metricContradictions').textContent=state.pages.filter(p=>p.type==='contradiction').length;
  renderActivity();renderTimeline();renderLint(degrees);
}
function renderActivity(){const list=[...state.pages].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,7);$('#activityList').innerHTML=list.map(p=>`<div class="activity-item"><i style="color:${typeColors[p.type]};background:${typeColors[p.type]}"></i><div><strong>${escapeHtml(p.title)}</strong><small>${p.date} · ${escapeHtml(t('type.'+p.type))}</small></div></div>`).join('')}
function renderTimeline(){const list=[...state.pages].sort((a,b)=>b.date.localeCompare(a.date));$('#timelineList').innerHTML=list.map(p=>{const b=pageBody(p);return `<div class="timeline-item"><time>${p.date}</time><div class="timeline-line"></div><div><strong>${escapeHtml(p.title)}</strong><p>${escapeHtml(b.slice(0,90))}${b.length>90?'…':''}</p></div></div>`}).join('')}
function renderLint(degrees){const orphan=[...degrees].filter(([,v])=>v===0).map(([id])=>state.pages.find(p=>p.id===id)?.title).filter(Boolean);const missing=[];const titles=new Set(state.pages.map(p=>p.title.toLowerCase()));state.pages.forEach(p=>(p.links||[]).forEach(l=>{if(!titles.has(l.toLowerCase()))missing.push(l)}));const sep=LANG==='zh'?'、':', ';const none=t('lint.none');const rows=[[t('lint.orphans'),orphan.length?orphan.join(sep):none],[t('lint.broken'),[...new Set(missing)].slice(0,6).join(sep)||none],[t('lint.contradictions'),state.pages.filter(p=>p.type==='contradiction').map(p=>p.title).join(sep)||none],[t('lint.nosource'),t('lint.nosource.value',{n:state.pages.filter(p=>p.type==='wiki'&&!p.source).length})]];$('#lintResults').innerHTML=rows.map(r=>`<div class="lint-row"><span>${r[0]}</span><b>${escapeHtml(r[1])}</b></div>`).join('')}

const canvas=$('#galaxyCanvas'),ctx=canvas.getContext('2d');let dpr=1;
function resize(){dpr=Math.min(devicePixelRatio||1,2);const r=canvas.getBoundingClientRect();canvas.width=r.width*dpr;canvas.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
function worldToScreen(p){const r=canvas.getBoundingClientRect();return{x:r.width/2+(p.x+state.camera.x)*state.camera.scale,y:r.height/2+(p.y+state.camera.y)*state.camera.scale}}
function screenToWorld(x,y){const r=canvas.getBoundingClientRect();return{x:(x-r.width/2)/state.camera.scale-state.camera.x,y:(y-r.height/2)/state.camera.scale-state.camera.y}}
function drawStars(w,h){ctx.save();for(let i=0;i<180;i++){const x=(i*83.17)%w,y=(i*47.33)%h,a=.08+((i*19)%30)/100;ctx.fillStyle=`rgba(125,205,255,${a})`;ctx.fillRect(x,y,i%13===0?1.4:.7,i%13===0?1.4:.7)}ctx.restore()}
function draw(){resize();const r=canvas.getBoundingClientRect();ctx.clearRect(0,0,r.width,r.height);drawStars(r.width,r.height);
  ctx.save();ctx.globalCompositeOperation='lighter';state.edges.forEach(e=>{if(e.a.hidden||e.b.hidden)return;const a=worldToScreen(e.a),b=worldToScreen(e.b);const active=state.selected&&(e.a===state.selected||e.b===state.selected);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=active?'rgba(82,229,255,.58)':'rgba(47,143,191,.13)';ctx.lineWidth=active?1.15:.55;ctx.stroke()});
  state.pages.forEach(p=>{if(p.hidden)return;const s=worldToScreen(p),selected=p===state.selected,hover=p===state.hover;const rr=(p.r+(selected?3:hover?1.5:0))*Math.min(state.camera.scale,1.7);const grd=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,rr*5);grd.addColorStop(0,typeColors[p.type]+'cc');grd.addColorStop(.18,typeColors[p.type]+'66');grd.addColorStop(1,typeColors[p.type]+'00');ctx.fillStyle=grd;ctx.beginPath();ctx.arc(s.x,s.y,rr*5,0,Math.PI*2);ctx.fill();ctx.fillStyle=typeColors[p.type];ctx.beginPath();ctx.arc(s.x,s.y,Math.max(1.7,rr),0,Math.PI*2);ctx.fill();if(selected||hover||state.camera.scale>1.6){ctx.globalCompositeOperation='source-over';ctx.fillStyle=selected?'#f3fdff':'#9ec8d8';ctx.font=`${selected?12:10}px system-ui`;ctx.fillText(p.title,s.x+rr+5,s.y+3);ctx.globalCompositeOperation='lighter'}});ctx.restore();requestAnimationFrame(draw)}
function hitTest(x,y){let best=null,bd=14;state.filtered.forEach(p=>{const s=worldToScreen(p),d=Math.hypot(s.x-x,s.y-y);if(d<bd){best=p;bd=d}});return best}

function selectPage(p){state.selected=p;$('#inspectorEmpty').classList.add('hidden');$('#inspector').classList.remove('hidden');$('.right-sidebar').classList.add('open');$('#nodeType').textContent=t('type.'+p.type);$('#nodeTitle').textContent=p.title;$('#nodeMeta').textContent=`${p.date||'—'} · ${(p.tags||[]).map(t=>'#'+t).join(' ')}`;$('#nodeBody').textContent=pageBody(p);$('#nodeLinks').innerHTML=(p.links||[]).map(l=>`<button class="chip" data-title="${escapeHtml(l)}">[[${escapeHtml(l)}]]</button>`).join('')||`<span class="chip">${escapeHtml(t('inspector.nolinks'))}</span>`;$$('#nodeLinks .chip[data-title]').forEach(b=>b.onclick=()=>{const target=state.pages.find(p=>p.title===b.dataset.title);if(target)selectPage(target)});}

async function connectVault(){
  if(!window.showDirectoryPicker){toast(t('toast.nofs'));return}
  try{const handle=await window.showDirectoryPicker({mode:'readwrite'});state.vaultHandle=handle;state.handles.clear();const pages=[];await walk(handle,'',pages);if(!pages.length){toast(t('toast.nomd'));return}state.pages=pages;$('#vaultStatus').removeAttribute('data-i18n');$('#vaultStatus').textContent=handle.name;$('#vaultStatus').style.color='var(--cyan)';buildGraph();updateUI();toast(t('toast.connected',{name:handle.name,n:pages.length}))}catch(e){if(e.name!=='AbortError'){console.error(e);toast(t('toast.connectfail')+e.message)}}
}
async function walk(dir,path,out){for await(const [name,h] of dir.entries()){if(name.startsWith('.')||name==='.obsidian')continue;const p=path?`${path}/${name}`:name;if(h.kind==='directory')await walk(h,p,out);else if(name.toLowerCase().endsWith('.md')){const file=await h.getFile(),text=await file.text(),fm=parseFrontmatter(text),title=(fm.title||name.replace(/\.md$/i,''));const type=['wiki','source','question','contradiction'].includes(fm.type)?fm.type:(p.startsWith('raw/')?'source':'wiki');const page={id:slugify(p),title,type,date:fm.updated||fm.date||new Date(file.lastModified).toISOString().slice(0,10),tags:Array.isArray(fm.tags)?fm.tags:[],body:stripFrontmatter(text).slice(0,5000),links:wikiLinks(text),path:p,handle:h,x:0,y:0,vx:0,vy:0,r:type==='wiki'?4.4:3.7};out.push(page);state.handles.set(page.id,h)}}}
async function createPage(){const title=$('#pageTitleInput').value.trim(),type=$('#pageTypeInput').value,body=$('#pageBodyInput').value.trim();if(!title)return;const page={id:slugify(title+'-'+Date.now()),title,type,date:new Date().toISOString().slice(0,10),tags:[],body,links:wikiLinks(body),x:(Math.random()-.5)*160,y:(Math.random()-.5)*160,vx:0,vy:0,r:type==='wiki'?4.4:3.7};if(state.vaultHandle){try{let wikiDir;try{wikiDir=await state.vaultHandle.getDirectoryHandle(type==='source'?'raw':'wiki',{create:true})}catch{wikiDir=state.vaultHandle}const h=await wikiDir.getFileHandle(`${title.replace(/[\\/:*?"<>|]/g,'-')}.md`,{create:true});const w=await h.createWritable();const md=`---\ntitle: "${title.replace(/"/g,'\\"')}"\ntype: ${type}\ndate: ${page.date}\ntags: []\n---\n\n# ${title}\n\n${body}\n`;await w.write(md);await w.close();page.handle=h;page.path=`${type==='source'?'raw':'wiki'}/${title}.md`;toast(t('toast.written'))}catch(e){console.error(e);toast(t('toast.writefail'))}}state.pages.push(page);buildGraph();updateUI();selectPage(page);$('#pageDialog').close();$('#pageForm').reset()}
function openObsidian(){if(!state.selected)return;const vault=state.vaultHandle?.name||'';const file=(state.selected.path||state.selected.title).replace(/\.md$/,'');const uri=`obsidian://open?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(file)}`;location.href=uri}
function runLint(){switchView('health');toast(t('toast.lintdone'))}
function switchView(v){state.view=v;$$('.view-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===v));$$('.view-container').forEach(el=>el.classList.remove('active'));$('#'+v+'View').classList.add('active')}
function askAgent(){const q=$('#agentPrompt').value.trim();if(!q)return;const routed=routeAgent(q);setRouteBadge(routed.name);const save=$('#saveAnswerToggle').classList.contains('active');const relevant=state.pages.filter(p=>[p.title,p.body].join(' ').toLowerCase().includes(q.toLowerCase().split(/\s+/)[0])).slice(0,3);const names=(relevant.length?relevant:state.pages.slice(0,3)).map(p=>`[[${p.title}]]`).join(LANG==='zh'?'、':', ');const answer=t('answer.body',{agent:routed.name,q:q,names:names});toast(t('toast.routed',{agent:routed.name}));if(save){$('#pageTitleInput').value=t('answer.title',{q:q.slice(0,28)});$('#pageTypeInput').value='question';$('#pageBodyInput').value=answer;$('#pageDialog').showModal()}else toast(t('toast.localdemo'))}

function renderAgentOS(){
  const zoneWrap=$('#agentZones');
  if(zoneWrap) zoneWrap.innerHTML=agentZones.map(z=>`<button class="agent-zone" data-zone="${z.id}" style="--zone-color:${z.color}"><span class="zone-icon">${z.icon}</span><strong>${z.name}</strong><small>${escapeHtml(t('zone.'+z.id))}</small></button>`).join('');
  const renderTasks=(id,tasks)=>{const el=$(id);if(!el)return;el.innerHTML=tasks.map(item=>`<article class="task-card" style="--task-color:${item.color}"><div class="task-top"><strong>${escapeHtml(t(item.k+'.title'))}</strong><em>${item.agent}</em></div><p>${escapeHtml(t(item.k+'.desc'))}</p><div class="task-meta">${escapeHtml(t(item.k+'.meta'))}</div>${item.progress?`<div class="progress"><i style="width:${item.progress}%"></i></div>`:''}</article>`).join('')};
  renderTasks('#activeTasks',executionTasks.active);renderTasks('#queuedTasks',executionTasks.queued);renderTasks('#reviewTasks',executionTasks.review);
  $$('.agent-zone').forEach(b=>b.onclick=()=>{const z=agentZones.find(x=>x.id===b.dataset.zone);$$('.agent-zone').forEach(x=>x.classList.toggle('active',x===b));$('#agentPrompt').value=t('prompt.zone',{agent:z.name});$('#agentPrompt').focus();setRouteBadge(z.name);toast(t('toast.zone',{agent:z.name}))});
}
function setRouteBadge(name){const el=$('#agentRouteBadge');if(!el)return;el.removeAttribute('data-i18n');el.textContent=name}
function routeAgent(prompt=''){
  const q=prompt.toLowerCase();
  const rules=[
    ['engineering',['rocm','gpu','code','程式','bug','benchmark','效能','triton','pytorch']],
    ['investment',['股票','投資','估值','財報','股價','thesis']],
    ['intelligence',['公司','競爭','市場','人物','情報','產業']],
    ['projects',['專案','任務','進度','依賴','blocker','下一步']],
    ['learning',['學習','課程','影片','閱讀','yc','複習']],
    ['wiki',['wiki','obsidian','整理','lint','連結','ingest','摘要']],
    ['research',['研究','論文','來源','搜尋','paper','github']]
  ];
  const id=(rules.find(([,keys])=>keys.some(k=>q.includes(k)))||['chief'])[0];
  return agentZones.find(z=>z.id===id)||{id:'chief',name:'Chief of Staff'};
}
function bind(){
  $$('#langSwitch button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
  addEventListener('resize',resize);$('#connectVault').onclick=connectVault;$('#newPage').onclick=()=>$('#pageDialog').showModal();$('#createPageSubmit').onclick=e=>{e.preventDefault();createPage()};$('#searchInput').oninput=updateUI;$('#searchInput').onkeydown=e=>{if(e.key==='Escape'){e.target.value='';updateUI()}};
  $$('.layer').forEach(b=>b.onclick=()=>{state.layer=b.dataset.layer;$$('.layer').forEach(x=>x.classList.toggle('active',x===b));updateUI()});$$('.view-btn').forEach(b=>b.onclick=()=>switchView(b.dataset.view));$('#runLint').onclick=runLint;$('#closeInspector').onclick=()=>{$('#inspector').classList.add('hidden');$('#inspectorEmpty').classList.remove('hidden');$('.right-sidebar').classList.remove('open');state.selected=null};$('#openInObsidian').onclick=openObsidian;
  $('#resetView').onclick=()=>state.camera={x:0,y:0,scale:1};$('#focusMode').onclick=()=>{if(state.selected){state.camera.x=-state.selected.x;state.camera.y=-state.selected.y;state.camera.scale=2.2}};
  canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);state.drag={x:e.clientX,y:e.clientY,cx:state.camera.x,cy:state.camera.y,moved:false}});canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();state.hover=hitTest(e.clientX-r.left,e.clientY-r.top);canvas.style.cursor=state.hover?'pointer':state.drag?'grabbing':'grab';if(state.drag){const dx=e.clientX-state.drag.x,dy=e.clientY-state.drag.y;if(Math.abs(dx)+Math.abs(dy)>3)state.drag.moved=true;state.camera.x=state.drag.cx+dx/state.camera.scale;state.camera.y=state.drag.cy+dy/state.camera.scale}});canvas.addEventListener('pointerup',e=>{if(state.drag&&!state.drag.moved){const r=canvas.getBoundingClientRect(),p=hitTest(e.clientX-r.left,e.clientY-r.top);if(p)selectPage(p)}state.drag=null});canvas.addEventListener('wheel',e=>{e.preventDefault();state.camera.scale=Math.max(.35,Math.min(4,state.camera.scale*Math.exp(-e.deltaY*.001)))},{passive:false});
  $('#openCommand').onclick=()=>{$('#commandDialog').showModal();setTimeout(()=>$('#commandInput').focus(),20)};addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#commandDialog').showModal()}if(e.key==='/'&&document.activeElement.tagName!=='INPUT'&&document.activeElement.tagName!=='TEXTAREA'){e.preventDefault();$('#searchInput').focus()}});$$('[data-command]').forEach(b=>b.onclick=()=>{const c=b.dataset.command;$('#commandDialog').close();if(c==='connect')connectVault();if(c==='new')$('#pageDialog').showModal();if(c==='agents')switchView('agents');if(c==='lint')runLint();if(c==='reset')state.camera={x:0,y:0,scale:1}});
  $('#saveAnswerToggle').onclick=e=>e.currentTarget.classList.toggle('active');$('#askAgent').onclick=askAgent;$$('[data-agent]').forEach(b=>b.onclick=()=>{if(!state.selected)return;$('#agentPrompt').value=t('prompt.'+b.dataset.agent,{title:state.selected.title});askAgent()});
}
initialize();
