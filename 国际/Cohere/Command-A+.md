---
厂商: Cohere
系列: Command
模型: Command A+
首个发布时间: 2026-05（API 名 `command-a-plus-05-2026`）
最新版本: Command A+（2026-05）
参数量/架构: Sparse MoE，218B 总参数 / 25B 激活；原生引用；W4A4 无损量化
开源/闭源: **Apache 2.0 完全开放权重**
数据来源: innfactory、benched.ai、Cohere 官方文档
状态: 已完善（当前旗舰）
---

# Command A+

## 一句话

Cohere 首个 MoE，也是它第一次**把旗舰权重直接以 Apache 2.0 完全开放**——把 Command A、Reasoning、Vision、Translate 四条线合并进单一模型。

## 发布时间线

- **2026-05**：Command A+ 发布（`command-a-plus-05-2026`），取代 Command A（2025-03）成为旗舰。
- 2026-04-24（前一个月）：Cohere 宣布合并德国 Aleph Alpha，构成约 200 亿美元的跨大西洋主权 AI 实体。

## 规格

| 项 | 值 |
|---|---|
| 架构 | Sparse MoE |
| 参数 | **218B 总 / 25B 激活** |
| 上下文 | 256K（有来源记 128K，见备注） |
| 许可 | **Apache 2.0（完全开放权重）** |
| 语言 | 48 种，含全部官方欧盟语言 |
| 吞吐 | 比 Command R+（08-2024）高 150% |
| 其他 | 原生引用（native citations）、W4A4 无损量化 |

## 合一的意义

Command A+ 把此前分散的四个专项模型合并为一个：

- Command A（生成）
- Command A Reasoning（推理）
- Command A Vision（视觉）
- Command A Translate（翻译）

这对企业部署是实质简化：不再需要在推理/非推理、视觉/纯文本之间做路由。

## 备注

- **许可跃迁是最值得记的点**：Command A 系列用的是 CC-BY-NC + 商业条款（商用需另签），而 A+ 直接给 Apache 2.0。对欧洲尤其关键——合并 Aleph Alpha 后，48 种语言覆盖全部欧盟官方语言 + 完全开放权重，是在回应"欧洲主权 AI"的诉求。
- **上下文来源冲突**：innfactory 记 Command A 为 256K，benched.ai 记 Command A+ 为 128K，二者未统一。本库并列记录，引用时请注明来源。
- 官方与第三方均提示"刚发布，生态仍在成熟中"，实际工具链与社区适配度待观察。
