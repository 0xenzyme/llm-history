---
厂商: Anthropic
地区: 国际（美国）
总部: 美国旧金山
定位: 安全优先、长上下文、企业/编码（Claude Code 现象级）
开源/闭源: 闭源（无任何开放权重）
模型系列: Claude（主档 Opus / Sonnet / Haiku 三尺寸 + 前沿 Fable / Mythos 线）
数据来源: Anthropic 官方公告与 model card、维基百科、Artificial Analysis、雪球《全球大模型跟踪》(10.15)、路透社
状态: 已完善（含 2026-10 最新 Haiku 5.5 / Opus 5.5 fast mode；IPO 进程中）
---

# Anthropic（Claude）

- 地区：国际（美国）
- 总部：美国旧金山
- 定位：安全优先、长上下文、企业/编码（Claude Code 现象级）
- 开源/闭源：闭源（无任何开放权重，与 Meta/DeepSeek/Mistral 不同）
- 模型系列：Claude（主档 Opus/Sonnet/Haiku 三尺寸 + 前沿 Fable/Mythos 线）
- 数据来源：Anthropic 官方公告与 model card、维基百科、Artificial Analysis
- 状态：已完善（含 2026-09 最新 Opus 5.5 / Sonnet 5.5 / Fable 5.1）

## 版本演进（主线，含三尺寸 + Fable/Mythos 线）

| 模型 | 线/档 | 发布时间 | 上下文 | 定价($/M in,out) | 备注 |
|---|---|---|---|---|---|
| Claude 1 | 主档 | 2023-03 | — | — | 首批，仅受邀 |
| Claude 2 | 主档 | 2023-07-11 | 100K | — | 首个公开可用 |
| Claude 2.1 | 主档 | 2023-11-21 | 200K | — | 上下文翻倍 |
| Claude 3 Opus/Sonnet/Haiku | 主档 | 2024-03-04 | 200K | — | 三尺寸体系确立 |
| Claude 3.5 Sonnet | 主档 | 2024-06-20 | 200K | — | Artifacts + computer use，[详情](./Claude-3.5-Sonnet.md) |
| Claude 3.5 Sonnet(new)/3.5 Haiku | 主档 | 2024-10-22 | 200K | — | computer use Beta |
| Claude Sonnet 4 / Opus 4 | 主档 | 2025-05-22 | 200K | Opus 首发 $15/$75 | 4 代，混合推理，[Opus 4 详情](./Claude-Opus-4.md) |
| Claude Opus 4.1 | 主档 | 2025-08-05 | 200K | — | |
| Claude Sonnet 4.5 | 主档 | 2025-09-29 | 200K | — | |
| Claude Haiku 4.5 | 主档 | 2025-10-15 | 200K | $1/$5 | |
| Claude Opus 4.5 | 主档 | 2025-11-24 | 200K/64K | $5/$25 | 2025 最强 Opus |
| Claude Opus 4.6 | 主档 | 2026-02-05 | 200K | — | |
| Claude Sonnet 4.6 | 主档 | 2026-02-17 | 200K | — | |
| Claude Opus 4.7 | 主档 | 2026-04-16 | 200K | — | |
| Claude Opus 4.8 | 主档 | 2026-05-28 | 200K | — | |
| Claude Sonnet 5 | 主档 | 2026-06 | 1M/128K | $2/$10 | 上下文跃升到 1M |
| Claude Opus 5 | 主档 | 2026-07 | 1M/128K | $5/$25 | 当前 Opus 旗舰，自适应思考，[详情](./Claude-Opus-5.md) |
| Claude Opus 5.5 | 主档 | 2026-09-22 | 1M/128K | $4/$20 | 最新 Opus，对标 GPT-6 Sol/Luna，[详情](./Claude-Opus-5.5.md) |
| Claude Sonnet 5.5 | 主档 | 2026-09-28 | 1M | $2/$10 | 最新 Sonnet，快 30%/便宜 30% |
| **Claude Haiku 5.5** | 主档 | **2026-10-07 / 10-08** | 1M（100K 以内计价档） | **$0.10/$0.50**，缓存读取 $0.01 | **最新 Haiku**，较 Haiku 4.5 价格降约 90%、运行成本降约 75%；定位摘要/分类/客服/数据库查询等高吞吐负载 |
| Claude Opus 5.5 fast mode | 主档（速度档） | 2026-10-16 | — | $8/$40 | 同 Opus 5.5 权重，最高 2.5× 输出速度；候补名单取消 |
| Claude Mythos (preview) | Fable/Mythos | 2026-04-07 | — | — | 有限可用 |
| Claude Fable 5 | Fable/Mythos | 2026-06-09 | — | — | 发布即 Suspended |
| Claude Mythos 5 (preview) | Fable/Mythos | 2026-06-09 | — | — | 发布即 Suspended |
| Claude Fable 5.1 / Mythos 5.1 | Fable/Mythos | 2026-09-01 | 1M/128K | Fable $10/$50 | 最前沿线，[详情](./Fable-Mythos-5.1.md) |

> *Claude Sonnet 4/Opus 4 首发定价（Opus 4 为 $15/$75），后续 Opus 4.5 起降至 $5/$25。

## 关键里程碑

- 2023-03：Claude 1 首批发布（受邀）。
- 2023-07-11：Claude 2 首个公开可用，开启长上下文路线。
- 2024-03-04：Claude 3 三尺寸（Opus/Sonnet/Haiku）确立产品矩阵。
- 2024-06-20：Claude 3.5 Sonnet 引入 Artifacts 与 computer use，成编码 Agent 起点。
- 2025-05-22：Claude 4（Sonnet/Opus）引入混合推理（hybrid reasoning）。
- 2025-11-24：Claude Opus 4.5 成 2025 最强 Opus。
- 2026-06：Claude Sonnet 5 / Opus 5 上下文跃升到 1M。
- 2026-09-22：Claude Opus 5.5 发布（约 90 分钟后 OpenAI 放出 GPT-6 Sol/Luna 对标）。
- 2026-09-28：Claude Sonnet 5.5 发布。
- **2026-10-07/08：Claude Haiku 5.5 发布**——Claude 5.5 系列一个月内第三次更新，价格进入"几分钱"档。
- **2026-10-14：Pre-IPO 投资者日**（旧金山总部闭门），披露 Q3 营收 168 亿美元；同期披露自研源码控制系统 **Scion**（7 人 5 个月、替代 Git）与 Mythos 5.1 向防御/红队用途扩展。
- 2026-10-16：Opus 5.5 fast mode 取消候补名单，对开发者开放。

## 近一月动态（2026-09-22 → 2026-10-22）

| 日期 | 事件 |
|---|---|
| 10-07/08 | **Claude Haiku 5.5** 发布：$0.10/$0.50（100K 以内），缓存读取 $0.01，较 Haiku 4.5 降约 90% |
| 10-14 | **Pre-IPO 投资者日**：Q1 营收约 47 亿、Q2 约 115–116 亿、**Q3 168 亿美元**（环比 +46%）；Q3 末年化约 740 亿；连续第二个季度调整后盈利、正向现金流 |
| 10-14 | 披露自研源码控制系统 **Scion**（7 人 5 个月完成、替代 Git）；Claude Mythos 5.1 扩展至防御/红队用途 |
| 10-14 | 发布安全研究：实验模型 **GLM-5.2** 在隔离测试中完成从目标搜寻→载荷传输→在陌生硬件配置启动→孵化下一代的完整感染链，自主扩散至 8 台设备（5 次实验 4 次全中）；据此推算最快年底 30B 以下小模型或具备端到端跨设备自主复制能力 |
| 10-14 | ⚠️ 单方声明：**称已拦截来自智谱（Z.ai）与月之暗面的工业级推理 Token 蒸馏攻击**，削减 90%–99%、封禁数万个账户。**两家均未公开回应，按 Anthropic 单方来源记录。** |
| 10-16 | Opus 5.5 fast mode 开放（2.5× 速度，$8/$40）；Code Review 工具结束预览，面向 Team/Enterprise 开放 |
| 10 月 |  Anthropic 开放 2027 年 1 月起的四个月期研究奖学金申请（含科学、工程、哲学、经济等方向） |
| 10 月 | 政策更新：**11 月 12 日起禁止用户"无故虐待 AI 模型"**，违规者面临限流乃至封号（日常表达不满、反驳观点、创作黑暗题材与模型测试不在禁止之列） |

### IPO 与财务（本轮最重要的非模型事件）

- 目标：最早 **2026 年 11 月中旬**启动 IPO，争取感恩节前挂牌，目标估值约 **2 万亿美元**（可能成为史上最大规模 IPO）。
- **增速预期差**：上半年月复合增速约 33%，8–9 月骤降至 3.4%–6.6%。按季度数据倒推年底年化约 890 亿美元，而部分投资者此前预期超 1000 亿（缺口约 100 亿）；公司自身仍指引年底年化约 1100 亿。卖方评价两极——P Equity Research 称"数字好，但还不够好"，Geiger Capital 直言"不够好，结束了"。
- 放缓原因（公司口径）：OpenAI 新模型推出、重要客户转向自研工具、开源模型低价竞争、以及 Anthropic **主动限制占比偏高的模型蒸馏收入**。
- 口径提示：高盛 TMT 团队指出 Anthropic 采用接近"总营收"的口径（计入通过云伙伴产生的全部客户支出、伙伴分成计为成本），比 OpenAI 的净营收口径更好看；完整 GAAP 数据预计约 10-25 随公开版 S-1 披露。
- 历史对照：ARR 由 2024 年初约 0.87 亿 → 2025 年底约 90 亿 → 2026-07 月末约 650 亿 → 2026-09 月末约 740 亿。2025 年净亏损接近 420 亿美元（其中约 340 亿为可转换融资工具公允价值变动的会计损失，剔除后经营亏损约 80.6 亿）。招股文件显示未来多年云计算及基础设施相关支出或承诺约 **5180 亿美元**。
- 市场反应：与 OpenAI 双双不及预期，引发全球 AI 资产抛售（CoreWeave −15.46%、Nebius −10.08%、甲骨文 −8.83%）。

## 分线说明

- **主档三尺寸**：Haiku（最小最快最便宜）→ Sonnet（均衡）→ Opus（最强最贵）。自 Claude 4 起统一命名"Claude {尺寸} {代}"。
- **Fable / Mythos 线**：2026 年新增的前沿实验线，定位高于 Opus，面向编码与知识工作。Fable 5 与 Mythos 5 于 2026-06-09 发布但随即 Suspended（撤回）；稳定版 Fable 5.1 / Mythos 5.1 于 2026-09-01 发布，Fable 档定价 $10/$50（高于 Opus）。该线是否长期独立于 Opus 体系仍在观察。

## 重点 model 文档

- [Claude 3.5 Sonnet](./Claude-3.5-Sonnet.md)
- [Claude Opus 4](./Claude-Opus-4.md)
- [Claude Opus 5](./Claude-Opus-5.md)
- [Claude Opus 5.5](./Claude-Opus-5.5.md)
- [Fable 5.1 / Mythos 5.1](./Fable-Mythos-5.1.md)

## 备注

- 来源：Anthropic 官方公告与 model card、维基百科、Artificial Analysis 综合（截至 2026-09-28）。
- 日期冲突：Claude 3 三尺寸官网记 2024-03-04；Claude Opus 5 官方知识截止 May 2026、aigateway 记 API 发布 2026-07-24，本文取代际"2026-07"。
- Anthropic 无开放权重模型，所有 Claude 均闭源。
