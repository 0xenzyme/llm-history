---
厂商: MiniMax（稀宇科技）
地区: 中国
总部: 中国上海
成立: 2021 年
定位: 多模态创意（海螺 AI）+ 长上下文推理，M 系列主线
开源/闭源: 开放权重（MiniMax-01 起，modified MIT / Apache 2.0）
模型系列: MiniMax（单系列；含 Hailuo 视频、Speech、Music 分支）
首个发布时间: 2024-04（abab 6.5）
最新版本: MiniMax-M3（2026-06-01）
数据来源: MiniMax 官方、aiwiki、benched.ai、IBM、ima
状态: 已完善（含 2026-06 最新 M3）
---


# MiniMax（稀宇科技）

## 公司信息
- 厂商：MiniMax（稀宇科技），上海
- 创始人：闫俊杰
- 成立：2021 年；AI 陪伴应用 Glow（2022-10）→ Talkie（海外）/ 星野（国内）
- 定位：大规模模型 + 超长上下文，开源权重路线

## 语言模型主线（MiniMax）
| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| abab 6.5 / 6.5s | 2024-04 | ~1T，MoE，200K | 否 | 早期闭源旗舰 |
| MiniMax-01 (Text-01, VL-01) | 2025-01 | 456B / 45.9B，Lightning Attention | 是 | 4M 上下文，开源路线起点 |
| MiniMax-M1 | 2025-06 | 456B，1M 上下文，CISPO | 是（Apache 2.0） | 首个开源混合注意力推理模型 |
| MiniMax-M2 | 2025-10 | 230B / 10B active | 是 | 编程+工具调用+深度搜索；OpenRouter 首个日 token 超 500 亿中国模型 |
| MiniMax-M2.1 | 2025-12 | 复杂多步骤优化 | 是 | SWE-Bench Multilingual 72.5% |
| MiniMax-M2-her | 2025-12 | 对话角色扮演 | 是 | 100 轮长程对话全球第一 |
| MiniMax-M2.5 / M2.5-Lightning | 2026-02 | SWE-Bench Verified 80.2% | 是 | 每秒 100 token，1 美元/小时；Lightning 速度 2× |
| MiniMax-M2.7 | 2026-03-18 | 自进化 Agent | 是 | 100+ 自主 RL 迭代；56.22% SWE-Pro |
| MiniMax-M3 | 2026-06-01 | MSA 架构，1M 上下文 | 是 | 20× 更低每 token 计算；59.0% SWE-Bench Pro；原生多模态 |

## 多模态线（视频 / 语音 / 音乐）
- 视频：video-01（2024-09）→ Hailuo 02（2025-06，1080p 10s）→ Hailuo 2.3（2025-10）→ Hailuo / H3（2026-07，权重后开源）
- 语音：Speech-02（2025-04，30+ 语言，TTS 第一）→ Speech 2.6（2025-10）
- 音乐：Music-01（2024-09）→ Music 2.0 / 2.5

## 关键里程碑
- 2024-04：abab 6.5（约 1T）闭源旗舰
- 2025-01：MiniMax-01 开源，Lightning Attention 商用规模首次落地（4M 上下文）
- 2025-06：MiniMax-M1，首个开源混合注意力推理模型（1M 上下文）
- 2025-10：M2，OpenRouter 首个日 token 超 500 亿中国模型
- 2026-02：M2.5，SWE-Bench Verified 80.2% 刷新纪录
- 2026-03-18：M2.7，自进化 Agent（100+ 自主 RL 迭代）
- 2026-06-01：M3，MSA 架构，原生多模态

## 重点 model 文档
- [MiniMax-M3](./MiniMax-M3.md)
- [MiniMax-M1](./MiniMax-M1.md)
- [MiniMax-01](./MiniMax-01.md)
