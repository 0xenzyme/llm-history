---
厂商: Microsoft
系列: MAI
模型: MAI-Thinking-1
首个发布时间: 2026-06-02（Build 2026）
最新版本: MAI-Thinking-1（Foundry private preview，2026-06-02）
参数量/架构: MoE，35B 激活参数；256K 上下文；33T tokens 从零训练，零蒸馏
开源/闭源: 闭源（Foundry private preview；另经 OpenRouter / Fireworks / Baseten 分发，可微调权重）
数据来源: Microsoft Build 2026 官方博客、MAI keynote 实录、微软新闻中心(2026-06-04)、百度百科
状态: 已完善
---

# MAI-Thinking-1

## 一句话

微软**首个自研推理模型**，也是微软第一次在关键基准上真正站到前沿阵营：SWE-Bench Pro 53% 与 Opus 4.6 持平，AIME 25 达 97%，且全程零蒸馏、从零训练。

## 发布时间线

- **2026-06-02**：Build 2026 大会发布，属"七模型家族"之一（另含 MAI-Code-1-Flash、MAI-Image-2.5、MAI-Voice-2、MAI-Transcribe-1.5 等）。
- 同日于 Microsoft Foundry 开放 private preview；后续经 OpenRouter、Fireworks、Baseten 分发，**首次允许开发者直接微调权重**。
- 2026：与自研 Maia 200 芯片协同设计，较 GB200 再获 1.4× 性能功耗比。

## 规格

| 项 | 值 |
|---|---|
| 架构 | MoE |
| 激活参数 | **35B** |
| 上下文 | 256K（官方 keynote / 新闻中心；百度百科记为 128K，见备注） |
| 训练 | 33T tokens，**从零训练，零蒸馏**；企业级干净、商业可授权数据 |
| 数据血缘 | 未使用任何第三方模型蒸馏数据 |
| 分发 | Foundry / Azure、OpenRouter、Fireworks、Baseten |

## 能力

| 基准 | 成绩 | 对比 |
|---|---|---|
| SWE-Bench Pro | **53%** | 与 Opus 4.6 持平 |
| AIME 25 | **97%** | 通用推理能力主指标 |
| 盲测人工偏好（Surge 独立评审） | 优于 Sonnet 4.6 | 整体质量 |

设计目标：复杂多步指令、长上下文推理、代码生成。官方强调它"完全靠自己爬上来"，没有针对任何基准做定向优化。

## 备注

- **上下文冲突**：微软官方 keynote 与微软新闻中心均写 **256K**，百度百科写 128K。本库以官方英文为准取 256K，引用中文资料时需注意此差异。
- **"零蒸馏"是核心卖点**：企业客户关心数据血缘合规——MAI-Thinking-1 的训练数据"干净且商业可授权"，可直接投入生产。
- 依旧属 **private preview**，需申请测试；微软表示"要让它进生产还需大量工作"。
- 微软 CEO 纳德拉将其归入"Agent 优先"战略；苏莱曼透露为麦肯锡需求优化后表现良好。
- 发布背景：这是微软与 OpenAI **修订合作协议后**的首场 Build 大会，自主模型战略意味明显。
