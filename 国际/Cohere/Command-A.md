---
厂商: Cohere
系列: Command
模型: Command A
首个发布时间: 2025-03（API 名 `command-a-03-2025`）
最新版本: Command A+（2026-05，见同目录文档）
参数量/架构: 111B，256K 上下文
开源/闭源: 开放权重（CC-BY-NC + 商业许可；商用需另签 Cohere 协议）
数据来源: Cohere 官方文档、benched.ai、innfactory、IBM Think、presenc.ai
状态: 已完善（已被 Command A+ 取代，仍在服役）
---

# Command A

## 一句话

Cohere 第二代企业模型：111B 参数在 2× A100/H100 上即可私有部署，吞吐量比 Command R+（08-2024）高 150%，是"企业可自托管的强模型"这一空缺的答案。

## 发布时间线

- **2025-03**：Command A 发布（`command-a-03-2025`），定位商业、STEM 与编码任务。
- 2025-07：Command A Vision（`command-a-vision-07-2025`）发布，图像理解、文档 OCR、图表问答。
- 2025-08：Command A Reasoning（`command-a-reasoning-08-2025`）发布，Cohere 首个混合推理模型。
- 2025-08：Command A Translate（`command-a-translate-08-2025`）发布，23 语言翻译专项（另有来源记为 2026）。
- 2026-05：被 **Command A+** 取代。

## 规格

| 项 | 值 |
|---|---|
| 参数 | 111B |
| 上下文 | 256K |
| 许可 | CC-BY-NC + 商业（开放权重） |
| 定价 | $2.50 / $10.00 每百万 tokens（输入/输出） |
| 私有部署 | 仅需 2× A100 或 H100 GPU |
| 语言 | 23 语言；英/德/法/西最佳 |

## 能力定位

- **工具调用与 Agentic**：Command A Reasoning 是 Command 家族中工具使用最强的一档。
- **原生 RAG**：Chat API 支持 `documents` 参数，模型被指示基于所提供内容作答并**引用来源**——这是 Cohere 从 Command R 时代就押注的差异化设计。
- 官方 RAG-Bench 约 82、BFCL 工具调用约 89（对比 Command R+ 的约 78 / 84，Llama 3.1 70B 的约 72 / 76）。

## 备注

- **许可要留意**：Command A 的开放权重是 CC-BY-NC + 商业条款，即研究可自由访问，但**商业部署需另与 Cohere 签协议**。这与同年 Command A+ 的 Apache 2.0 是不同的两回事。
- Command A Vision 上下文 128K、Translate 仅 8K——家族内部上下文并不统一。
- 2× GPU 即可私有部署是企业选型时的核心卖点，对受监管行业（金融、医疗）意义大于绝对跑分。
