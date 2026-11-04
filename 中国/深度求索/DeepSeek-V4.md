---
厂商: 深度求索
系列: DeepSeek
模型: DeepSeek-V4（含 V4 Preview、V4-Flash、V4-Pro、V4.1-Flash、V4.1-Flash-1017）
首个发布时间: 2026-04-24（Preview）
最新版本: DeepSeek-V4.1-Flash-1017（2026-10-17）
参数量/架构: Pro 1.6T/49B、Flash 284B/13B；V4.1-Flash 为 552B MoE + 因果编码器-解码器（输入激活 8B / 输出激活 16B）；Token-wise 压缩 + DSA（DeepSeek Sparse Attention）；1M 上下文
开源/闭源: 开源权重（MIT）
定价: V4.1-Flash 输入 $0.30 / 输出 $1.20 每百万 token（10-17 更新后价格未上调）
数据来源: DeepSeek 官方新闻、中国日报、Wikipedia、aireleasetracker、deepseek.ai、中国证券报、澎湃新闻、大河财立方（截至 2026-10-22）
---

# DeepSeek-V4

## 基本信息
- 厂商：深度求索
- 类型：大语言模型（MoE），Agent / 长上下文 / 推理
- 开源/闭源：开源权重（MIT）

## 发布时间线（preview 先行 → 正式版跟进）
- 2026-04-24：DeepSeek-V4 Preview 发布并开源（Pro + Flash 双版本，1M 上下文默认，华为云首发适配）
- 2026-07-31：DeepSeek-V4-Flash 正式版（V4-Flash-0731）
- 2026-08-13：DeepSeek-V4-Pro 正式版（V4-Pro-0813，强化 Agent 能力、支持 Responses API 与 Codex 集成）
- 2026-09-10：DeepSeek-V4.1-Flash 发布（552B MoE，输入激活 8B / 输出激活 16B；KV cache 降至前代 1/4 显存、1/8 SSD，相对初版压缩到 1/437）
- **2026-09-14 12:00 起：`deepseek-v4-pro` 请求重定向至 V4.1-Flash 并按其费率计费**（V4 Pro 进入淘汰流程，V4.1 Pro 正式版发布前）；V4Flash 与 V4Flash Vision Exp 已停服，旧 ID 暂时重定向
- **2026-10-17：DeepSeek-V4.1-Flash-1017 发布（当前最新）** —— 官方网页端 / App / API 三端同步切换。基于自反馈强化学习（RL）提升"从零构建完整项目"的能力（官方称「许愿式编程」），展示案例含故宫 3D 建模、网页版赛车游戏、Godot 引擎《传送门 2》复刻、Valley of Ages 3D 场景。
  - 基准提升（官方口径）：Agents' Last Exam 31.8→35.4、Apex Bench v1.1 64.6→72.1、Automation-Bench v1.0.6 54.8→60.5、Terminal-Bench 4.0 31.2→42.3、DeepSWE v1.1 74.2→77.0、ProgramBench 20.3→29.1、NL2Repo-Bench 65.4→68.2、BabyVision（含工具）92.5、ZeroBench-main 51.0。
  - **API 价格未上调**，同时缩短任务运行时间与输出长度，官方定性为性能与成本的「帕累托改进」。
  - 同日 DeepSeek Harness 0.2.1 适配；开放自研 **Search 与 Fetch API**（均 5 元/千次）。
  - 调用量：OpenRouter 10-05–10-11 周榜 **V4.1 Flash 以 41 万亿 Token 位列全球第一**（环比 +60%），超过第二到第五名之和。

## 关键参数
- V4-Pro：总参 1.6T，激活 49B（text-only）
- V4-Flash：总参 284B，激活 13B（text-only）
- 上下文：1M tokens 默认（输出最高 384K）
- 架构创新：Token-wise 压缩 + DSA（DeepSeek Sparse Attention），极致长上下文效率
- 硬件：针对华为昇腾 950PR、寒武纪 MLU 优化（受 Nvidia 出口限制影响）

## 备注
- V4 延续"preview 先行、正式版跟进"策略（与腾讯 Hy4 类似）。
- 性价比极致：V4-Flash API 输入约 $0.15 / 输出约 $0.60 每百万 tokens（2026-09 验证），远低于同期 GPT / Claude 闭源旗舰。
- 2026-07-24 起，legacy 模型 ID（deepseek-chat / deepseek-reasoner）退役，全面切换至 V4 系列。
