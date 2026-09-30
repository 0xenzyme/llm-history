---
厂商: xAI / SpaceXAI
系列: Grok
模型: Grok 4.7（含 Grok 4.7 Fast）
首个发布时间: 2026-09-21（xAI API，官方 Release Notes）
最新版本: Grok 4.7（截至 2026-09 的当前旗舰）
参数量/架构: 未公开；官方称"相比 4.6 使用更大的新基座模型"
上下文/模态: 500K 上下文；文本 + 图像输入，文本输出，无文本输出上限；知识截止 2026-02-01（沿用 4.6）
推理档位: low / medium / high（默认）/ xhigh（4.6 起新增）
定价: $2 / $0.50 缓存 / $6 每百万 tokens（<200K）；≥200K 为 $4 / $1 / $12（整单计费）；Fast 档 2× 速度 2× 价格
开源/闭源: 闭源
---

# Grok 4.7

## 基本信息

Grok 4.7 于 **2026-09-21** 上线 xAI API（slug `grok-4.7`），官方定位 **"SpaceXAI 最强的编码与知识工作模型"**：在困难任务上工作更久、更仔细检查自身结果，并配备其自称校准最好的安全栈。发布首日即在 **Cursor 与 Grok Build** 可用，同时通过 Grok API、第三方编码 harness、模型路由与云平台分发；**2026-09-28** 上线 **Amazon Bedrock**（`us.xai.grok-4.7` / `global.xai.grok-4.7`，500K 上下文）。

## 技术要点

- **更大的新基座模型** + **更长的强化学习训练**，任务分布偏向"需要数小时才能完成"的难题，官方称带来两点收益：更好的自我校验、更有效利用 500K 上下文。
- **原生理解 Grok Bot harness**（2026-08-11 发布的持久智能体产品），官方称因此改善对话类与通用知识工作表现。
- **文档与演示文稿生成**增强，官方点名律师、护士、财务分析师等专业知识工作场景。
- **Grok Build 记忆**（同日上线）：跨会话保留编码约定、历史决策与项目事实，附只读记忆浏览界面与 `/dream` 命令用于回顾/裁剪。

## 关键成绩

官方公布评测覆盖 CursorBench、DeepSWE、Terminal-Bench、AA Briefcase、EEBench、Harvey 法律智能体基准、HealthBench Professional。主要指标：

- **CursorBench 4.0：55%**，官方称在"价格-性能"上处于前沿（对比 Fable 5.1、Opus 5、GPT-5.6 Sol、Sonnet 5）。
- Artificial Analysis 独立评测（xhigh 档，对比 4.6）：

| 指标 | Grok 4.7 | Grok 4.6 |
|---|---|---|
| 智能指数 | 46 | 44 |
| Coding Agent Index | 56 | 47 |
| AA-Briefcase Elo | 1657 | 1546 |
| GDPval-AA Elo | 1695 | 1605 |
| AA-Omniscience | 32 | 30 |
| 幻觉率 | 29% | 34% |

- **代价**：4.7 每个智能指数任务约输出 **81K tokens**，是 4.6（约 38K）的两倍——官方/媒体均提示应显式设置 reasoning effort，别直接继承默认档。

## 安全与双用途

- 全新安全栈，官方称为其测试过的**拒绝与抗越狱最强模型**。
- 生物安全：LatchBio 基准 **62.4%** 居首。
- 网络安全：内部 HackerBench v0.3 上仅 **3.3%** 的高风险双用途请求被放行，同时很少阻断合法安全研究；已向部分网络安全合作伙伴**定向邀请开放红队能力**用于防御研究。

## 定价与可用性

| 档位 | 输入 | 缓存输入 | 输出 | 说明 |
|---|---|---|---|---|
| 标准（<200K prompt） | $2 | $0.50 | $6 | 与 4.6 同价 |
| 长上下文（≥200K） | $4 | $1 | $12 | 整单按高档计费 |
| Grok 4.7 Fast | 2× 价格 | — | 2× 价格 | 2× 输出速度；**仅 Cursor 与 Grok Build，不对公众 API 开放** |

- 支持 Responses API、Chat Completions；Responses API 下总是返回 `reasoning.encrypted_content`；同时服务 US 区域端点。
- Bedrock 侧经跨区域推理配置文件调用（`/openai/v1` 路径），支持 Converse / InvokeModel。

## 备注

- 发布日：官方 docs.x.ai Release Notes 记 **2026-09-21**；个别媒体记 09-20，本页取官方。
- **数据冲突**：另有源记 Grok 4.6 的 AA 智能指数为 **61**（对标 GPT-5.6 Sol），与本文表中 AA 对照值 44 不一致（测量档位/口径不同），**待核**。
- 前代对比：4.6（2026-08-12，500K，$2/$6，新增 xhigh 档，AA 自评 GDPVal-AA v2 1753、CursorBench v3.2 69.9%、DeepSWE v1.1 65.9%）；4.5（2026-07-08，V9 1.5T 基座、Cursor 联合训练）。注意 CursorBench 3.2 与 4.0 版本不同，**分数不可直接比较**。
- 来源：x.ai/news/grok-4-7、docs.x.ai Release Notes（2026-09）、AWS Machine Learning Blog / unite.ai（AA 数据）、llmreference、llm-stats、vegavid。截至 2026-09-29。
