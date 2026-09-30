---
厂商: Amazon
系列: Nova
模型: Nova 2（第二代）
首个发布时间: 2025-12-02（re:Invent 2025）
最新版本: Nova 2 系列（Lite GA / Pro preview / Sonic GA / Omni preview）
参数量/架构: 未披露；全系 1M 上下文，扩展思考（low/medium/high）
开源/闭源: 闭源（Amazon Bedrock）
数据来源: AWS News Blog(re:Invent 2025)、hidekazu-konishi、systems-analysis、dawnliphardt
状态: 已完善
---

# Nova 2

## 一句话

Nova 的第二代：全系拉到 1M 上下文，引入可调深度的"扩展思考"与内置工具（web grounding、代码解释器），并把多模态统一推进到 Omni。

## 发布时间线

- **2025-12-02 re:Invent 2025**：Nova 2 Lite（GA）、Nova 2 Pro（preview）、Nova 2 Sonic（GA）、Nova 2 Omni（preview）四模型同日发布。
- 同日：**Nova Forge** 发布（从训练 checkpoint 继续训练定制 Nova，年订阅制），Nova Act 转 GA。

## 规格对比

| 模型 | 输入 → 输出 | 上下文 | 扩展思考 | 内置工具 | 状态（2026 中） |
|---|---|---|---|---|---|
| Nova 2 Lite | 文本/图像/视频 → 文本 | 1M | 是 | web grounding、代码解释器 | GA |
| Nova 2 Pro | 文本/图像/视频/音频 → 文本 | 1M | 是 | web grounding、代码解释器 | Preview |
| Nova 2 Sonic | 语音 → 语音/文本 | 至 1M | — | **异步工具调用** | GA |
| Nova 2 Omni | 文本/图像/视频/音频 → 文本+图像 | 1M | 是 | — | Preview |

## 相对第一代的变化

- **上下文 300K → 1M**（Lite / Pro）。
- **新增扩展思考**：`reasoning effort` 可设 low / medium / high。
- **内置原生工具**：web grounding（联网锚定）与代码解释器成为模型内建能力，而非外部编排。
- **Pro 新增音频输入**；**Sonic 新增文本输出**并支持会话内语音↔文本跨模态切换。
- **Omni 是品类首创**：单一模型同时接收文本/图像/视频/音频并生成文本与图像。

## 能力侧记

- Nova 2 Pro 在亚马逊自有的部分基准上超过 Claude Sonnet 4.5，补齐了亚马逊此前缺少的推理档。
- Nova 2 Sonic 支持 7 种语言（英、法、西、德、意、葡、印地），含可在单次对话中切换语言的"多语"声音；异步工具调用允许模型在后台工具运行时继续处理新输入。

## 备注

- **Omni 至今仍是 Nova Forge 客户的早期访问功能**，未全面开放。
- 第一代 Nova Premier 已于 **2026-09 EOL**，Canvas / Reel / Sonic 一代被打上 "Heritage" 标签仅维护——选型时不要再把 Premier 当现行旗舰。
- 亚马逊 reportedly 正在准备代号 "Frontier Model Research" 的下一代前沿模型（Pieter Abbeel 领衔），目标 2026 年底 re:Invent 亮相；截至 2026-09 尚未发布，不作为既成事实记录。
