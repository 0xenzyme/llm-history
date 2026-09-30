---
厂商: Anthropic
系列: Claude
模型: Claude Opus 5
首个发布时间: 2026-07
最新版本: Claude Opus 5（当前 Opus 旗舰；Opus 5.5 于 2026-09-22 补强）
参数量/架构: 闭源未公开；自适应思考（adaptive thinking）
开源/闭源: 闭源
---

# Claude Opus 5

Claude Opus 5 是 Anthropic 截至 2026-07 的 Opus 旗舰，把上下文推到 1M 并引入自适应思考（adaptive thinking）。

## 发布时间线

- 2026-06：Claude Sonnet 5 发布（1M 上下文）。
- 2026-07：Claude Opus 5 发布（知识截止 2026-05）。
- 2026-09-22：Claude Opus 5.5 发布，性能达 Fable 5.1 级别、运行成本低 40%。

## 关键参数

- 上下文：1,000,000 token 输入，最大输出 128,000 token；知识截止 2026-05。
- 模态：文本 + 图像输入、文本输出；支持工具调用、流式、JSON、提示缓存、Batch。
- 思考：自适应（adaptive），默认 high 档，按任务自动校准。
- 定价：$5 输入 / $25 输出（每百万 token）；提示缓存最高省 90%、Batch 省 50%。无数据保留要求（区别于 Fable 5）。
- API 模型 ID：`claude-opus-5`。

## 关键事实

- **1M 上下文 + 自适应思考**：标准价即享百万上下文；自适应思考取代固定 extended thinking。
- **"近 Fable 5 智能、半价"**：官方定位 Opus 5 提供接近顶级 Fable 5 的能力，价格仅其一半。
- **企业/编码主力**：面向长程 Agent、企业工作流、生产级编码。

## 备注

- 来源：Anthropic 官方 Opus 页面、aigateway 对比、维基百科。
- 日期：官方知识截止 May 2026；aigateway 记 API 发布 2026-07-24，本文取代际"2026-07"。
