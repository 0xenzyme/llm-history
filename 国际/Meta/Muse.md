---
厂商: Meta（Meta Superintelligence Labs, MSL；首席 AI 官 Alexandr Wang）
地区: 国际（美国）
系列: Muse（独立家族，非 Llama 变体）
定位: Meta 2026 年前沿家族：Spark 闭源旗舰 + Glimmer 开放权重端侧 + Muse Code / 个人智能体 App
开源/闭源: 双轨——Spark 线闭源 API-only；Glimmer Apache 2.0 开放权重
首个发布时间: 2026-04-08（Muse Spark）
最新版本: Muse Wonder / Muse Wonder Full（2026-10-12/13）；开源档 Muse Spark Open 816B（2026-10-16）
参数量/架构: Spark / Wonder 线未公开；Glimmer ~29.6B；Muse Spark Open 816B 总 / 42B 激活
数据来源: Meta 官方公告、Artificial Analysis、aiwiki、科技媒体综合、雪球《全球大模型跟踪》(10.15)、The Neuron (10.16)、On The Wire
状态: 已完善（含 2026-10 最新 Muse Wonder / Muse Spark Open）
---


# Muse

## 概览
Muse 是 Meta 在 **2026 年推出的全新前沿家族**，由 **Meta Superintelligence Labs（MSL）** 主导（Scale AI 于 2025 年被多数控股并入 MSL）。它与 Llama 是**并列的两个家族，不是 Llama 5**：

- **Spark 线**：闭源前沿旗舰，API-only，按点版本快速迭代（1.0 → 1.1 → 1.2 → 1.3）。
- **Glimmer 线**：从 Spark 蒸馏出的**开放权重本地智能体**模型，Apache 2.0。
- **Muse Code**：基于 Spark 的终端编码智能体。
- **Muse（App）**：2026-09-08 上线的消费级个人智能体产品。

## 版本演进表
| 模型 / 产品 | 发布日期 | 定位 | 开源 | 备注 |
|---|---|---|---|---|
| **Muse Spark** | 2026-04-08 | 前沿旗舰，闭源 | 否 | MSL 首个模型；接管 Meta AI；无开放权重 |
| Muse Image | 2026-07-07 | 图像生成 | 否 | 同期 Muse Video 仅预览 |
| Muse Spark 1.1 | 2026-07-09 | 工具调用增强 | 否 | 同期 Meta Model API 进入公开开发者预览 |
| **Muse Code + Muse Spark 1.2** | 2026-08-05 | 终端编码智能体（beta） | 否 | Spark 1.2 AA 智能指数 **54**（同类中位数 32） |
| **Muse Glimmer** | 2026-08-10 | 30B 开放权重本地智能体 | **是（Apache 2.0）** | 蒸馏自 Spark 1.2；单张消费级 GPU 可跑 |
| Muse Voice Transcribe | 2026-09-01 | 语音转写 | 否 | Meta 首个语音模型 |
| **Muse Spark 1.3** | 2026-09-02 | 前沿旗舰（当前推荐） | 否 | 1M 上下文；max 推理档 09-04 开放 |
| **Muse（个人智能体 App）** | 2026-09-08 | 消费级 Agent 产品 | 否 | 由 Spark 1.3 驱动；美国首发，09-18 加拿大；09-17 macOS 版 |
| **Muse Wonder / Muse Wonder Full** | **2026-10-12 / 10-13** | MSL 首款**前沿级**模型 | 否 | 「主动记忆 + 主动专注」；AA v4.3 智能指数 **56 / 52**，全球第 2 / 第 4；Meta API $4/M 输入。内部测试与 Fable 5.1、GPT-6 Astra 同水平 |
| **Muse Spark Open** | **2026-10-16** | 816B 开放权重（Meta 最大） | **是（Muse 许可，含商用限制）** | 每请求仅激活 42B；1M 上下文；文本/图像/视频/音频；官方称两张 Apple M5 Ultra Mac Studio 可承载 |

## 近一月动态（2026-09-22 → 2026-10-22）

| 日期 | 事件 |
|---|---|
| 10-06 | Meta 与 Sierra 发布 **Personal Agent Protocol**（v0.1 规范月底出），启动伙伴含 Shopify、Stripe、Walmart——为"别人的 Agent 来访问你的站点"定规矩 |
| 10-12/13 | **Muse Wonder / Muse Wonder Full** 发布。AA v4.3 得 56 / 52（Wonder Full 与 Claude Sonnet 5.5 同分）；AA Coding Agents Index 上 Wonder Full 与 Claude Sonnet 5.5 并列 68 分；幻觉率 23%（较前代 33% 大幅下降）。Meta 股价 10-12–13 一度涨 4.7%、收涨约 3.4% |
| 10-14 | Facebook 上线基于大模型的内容自定义工具「你的算法」 |
| 10-16 | **Muse Spark Open**（816B / 42B 激活，1M 上下文）开放权重，Meta 称其为"迄今最强的美国开放权重模型"。⚠️ 采用 Muse 许可，**含商用限制**（并非 Llama 式自由许可）；第三方统计显示其自身 20 行能力表中 13 行被竞品超过 |
| 10 月 | Muse 直接接入 Asana、Canva、Figma、Notion、Shopify、Slack、Stripe、Zoom 等应用 |
| 10 月 | Zuckerberg 称"AI 不会赢家通吃"，并披露运营 1 吉瓦集群一年约耗 150 亿美元、MSL 研究团队不足 200 人 |
| 10-02 | Meta 美股开盘跳水超 4.4%，单日市值蒸发约 5400 亿元人民币 |

> ⚠️ **开放权重承诺的兑现情况有保留**：Zuckerberg 早前承诺开放 Muse Spark 权重，10-16 放出的 Muse Spark Open 确为 816B 开放权重，但采用 **Muse 许可（含商用限制）**，与此前外界预期的 Llama 式自由许可不同。此处按实际许可条款记录，不按"完全开源"理解。

## 关键里程碑
- 2026-04-08 Muse Spark 首发，Meta 正式转向闭源前沿（与 Llama 开放路线分道）
- 2026-08-05 Muse Code + Spark 1.2，编码智能体商业化
- 2026-08-10 **Muse Glimmer**——Meta 自 Llama 4（2025-04）后**首个开放权重发布**，且许可从"Llama 社区许可"换成 **Apache 2.0**（无 MAU / EU 限制条款）
- 2026-09-02 Spark 1.3，$1.25/$4.25，进入前沿档
- 2026-09-08 消费级 Muse App 上线，Sensor Tower 称其 **09-18 超越 ChatGPT 成为美国 iOS 免费榜第一**，09-21 下载量超 250 万

## 重点 model 文档
- [Muse-Spark](./Muse-Spark.md)
- [Muse-Glimmer](./Muse-Glimmer.md)

## 战略解读
Zuckerberg 同日（2026-08-10）发表约 6500 字长文《The Future Is for Everyone》，主张**个人智能应运行在用户自己的硬件上**，并称限制美国开放权重 AI 等于把阵地让给中国实验室。三阶段产品设计意图明确：**让开发者免费微调 Glimmer，同时为 Spark 档推理付费**——这是"Llama 剧本在 DeepSeek 时代的重写"：送出蒸馏模型、保留教师模型在 API 上。

## 备注（重要）
- **开放权重承诺未兑现**：Zuckerberg 承诺"未来数周内"开放 Muse Spark 权重。08-10 时明确点名 **Spark 1.2**，但 Meta 09-02 的官方措辞已模糊为"the Muse Spark open weights release"，**无版本号、无日期、无许可**，至今未发布。
- **安全问题**：2026-09-22，安全研究员 Patrick Wardle 发现 Muse Mac App 存在零日漏洞（本地提权，可将转录重定向到攻击者服务器），Meta 已发 hotfix；同日 Reuters 披露 Meta 曾测试"人工礼宾"（承包商代打电话），MSL 副总裁承认未充分披露是"失误"，功能已回滚。
- **商业摩擦**：Amazon 以未获告知且疑似抓取存储用户凭证为由封禁 Muse；Shopify（09-21）、PayPal、Expedia、Instacart 先后宣布/预告接入。
- Muse 内部代号为 **Hatch**；每位用户的 Agent 运行在独立的 **Muse Secure VM**，并由 **Sentinel** 子代理审批外发内容；后续将推出 **Muse Confidential VM**（用户自持密钥，Meta 不可读）。
- 来源：aiwiki（meta_superintelligence_labs）、Meta Research Blog（introducing-muse-glimmer）、TechCrunch / Bloomberg / CNBC / Ars Technica（2026-08-10）、awesomeagents.ai、explainx.ai、rtdjournal、mungomash。
