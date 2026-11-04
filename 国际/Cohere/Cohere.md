---
厂商: Cohere
地区: 国际
总部: 加拿大 多伦多
成立: 2019
定位: 企业级 AI，专注 RAG / 检索 / 多语言；2026 年合并 Aleph Alpha 后成为"跨大西洋主权 AI"平台
开源/闭源: 混合——Command 主线开放权重（CC-BY-NC + 商业许可），Command A+ 起改 Apache 2.0；Aya 线 CC-BY-NC（研究为主）
模型系列: Command（生成/Agentic）、Embed（嵌入）、Rerank（重排）、Aya（开放权重多语言）、Transcribe（语音）
数据来源: Cohere 官方文档(docs.cohere.com model ids)、benched.ai、innfactory、IBM Think LLM 列表、presenc.ai、TechCrunch(合并报道)、雪球《全球大模型跟踪》(10.15)
状态: 已完善（含 2026-05 Command A+ 与 2026-04 合并 Aleph Alpha）；**2026-09-22 → 10-22 无新增模型发布**
---

# Cohere

Cohere 走的是与前沿实验室不同的路：不追逐通用聊天榜首，而是把**检索增强（RAG）、重排、多语言**做成可投产的企业基础设施。2026 年合并德国 Aleph Alpha 后，它同时成为"主权 AI"叙事的主角之一。

> **近一月（2026-09-22 → 10-22）：无新增模型发布。** 本库检索到的公开信息中，Cohere 在此期间没有发布新代际 Command / Aya / Embed / Rerank 模型。Command A+（2026-05，218B/25B MoE，Apache 2.0，覆盖 48 语言含全部欧盟官方语言）仍是当前旗舰。
> 需要留意的是：Cohere 的"主权 AI"叙事本轮被 Mistral 抢走了风头——Mistral 10 月完成约 30 亿欧元 D 轮（估值约 210 亿欧元，三星领投）并发布万亿级 Mistral Large 4，欧洲资本与注意力集中流向 Mistral。

## 四条产品线

| 线 | 定位 | 代表模型 |
|---|---|---|
| **Command** | 生成 / 工具调用 / Agentic | Command A+（2026-05）、Command A（2025-03） |
| **Embed** | 文本+多模态嵌入 | Embed v4.0 |
| **Rerank** | RAG 检索重排（Cohere 的差异化优势） | Rerank v4.0 Pro / Fast |
| **Aya**（Cohere Labs） | 开放权重多语言，23→70+ 语言 | Aya Expanse 32B、Tiny Aya 系列 |

## 版本演进表

### Command 主线

| 模型 | 发布 | 规格 | 状态 |
|---|---|---|---|
| Command | 早期 | 初代 | 2025-09-15 退役 |
| Command Light | 早期 | 低成本 | 2025-09-15 退役 |
| Command R | 2024-03 | 35B，128K，RAG 优化 | `command-r-03-2024` 于 2025-09-15 退役 |
| Command R+ | 2024-04 | 104B | `command-r-plus-04-2024` 于 2025-09-15 退役 |
| Command R（08-2024） | 2024-08 | 128K | 仍可用，已被取代 |
| Command R+（08-2024） | 2024-08 | 104B，128K，吞吐 +50%、延迟 -25% | 仍可用，已被取代 |
| Command R7B | 2024-12 | 7B，128K，边缘/自托管 | Current |
| **Command A** | 2025-03 | 111B，256K，开放权重 | Current（被 A+ 取代），[详情](./Command-A.md) |
| Command A Vision | 2025-07 | 图像/OCR/图表，128K | Current |
| Command A Reasoning | 2025-08 | 111B，256K，首个混合推理 | Current |
| Command A Translate | 2025-08 | 23 语言翻译专项，8K | Current（另有来源记 2026） |
| **Command A+** | **2026-05** | **MoE 218B 总 / 25B 激活，Apache 2.0** | **当前旗舰**，[详情](./Command-A+.md) |

### Aya 线（Cohere Labs 开放权重）

| 模型 | 发布 | 规格 | 状态 |
|---|---|---|---|
| Aya 101 | 2024-02 | 13B，101 语言（研究基座） | Apache 2.0 |
| Aya 23 | 2024-05 | 8B / 35B | CC-BY-NC + 商业 |
| Aya Expanse 8B / 32B | 2024 | 23 语言，128K | CC-BY-NC + 商业（8B 于 2026-04-04 退役） |
| Aya Vision 8B / 32B | 2025-03 | 多语言视觉语言 | 8B 于 2026-04-04 退役 |
| **Tiny Aya** 系列 | 2026-02 | 3.35B；Global(70+ 语言)、Earth(非洲/西亚)、Fire(南亚)、Water(亚太/欧洲) | 端侧/离线 |

### Embed / Rerank / 其他

| 模型 | 发布 | 说明 |
|---|---|---|
| Embed v4.0 | 2025 | 多模态（文本+图像/PDF），128K，256–1536 维 |
| Embed English / Multilingual v3.0 | 2024 | 1024 维 |
| Rerank v4.0 Pro / Fast | 2025-12 | 32K，多语言，Pro 带自学习能力 |
| Rerank v3.5 | 2026 初 | 英文与半结构化数据 |
| Cohere Transcribe | 2026-03 | 多语言语音转文字 |

## 关键里程碑

- 2024-03/04：Command R / R+ 发布，确立"RAG 优先 + 可靠引用"的差异化定位。
- 2025-03：**Command A**（111B）发布，吞吐量较 Command R+ 08-2024 提升 150%，开放权重。
- 2025-08：Command A Reasoning / Translate 发布，Command 进入推理与专项翻译。
- **2026-04-24：宣布与德国 Aleph Alpha 合并**，合并后实体估值约 200 亿美元，Cohere 股东约占 90%，Schwarz Group 领投 6 亿美元 E 轮。
- **2026-05：Command A+ 发布**——Cohere 首个 MoE，且许可一举改为 **Apache 2.0 完全开放权重**。

## 重点 model 文档

- [Command A](./Command-A.md)
- [Command A+](./Command-A+.md)

## 备注

- **许可策略转变是关键信号**：Command A 等开放权重用的是 CC-BY-NC + 商业许可（研究可访问，商用需另签协议），而 **Command A+ 直接给 Apache 2.0**——比 IBM Granite 之外的多数"开放权重"厂商更激进。
- **退役模型不要误引**：`command-r-03-2024`、`command-r-plus-04-2024`、`command-light`、`command` 均已于 2025-09-15 退役；Embed v2 与 Aya 8B 系列于 2026-04-04 退役。
- **Command A+ 上下文存在来源冲突**：innfactory 记 Command A 为 256K，benched.ai 记 Command A+ 为 128K。引用时需注明。
- **主权争议未解决**：德国多个联邦机构与三个州的合同含"必须由欧洲控制"的主权条款，而合并后实体由 Cohere（加拿大）股东控股约 90%——是否满足条款尚未有定论。
