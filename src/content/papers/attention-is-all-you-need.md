---
title: 'Attention Is All You Need'
titleZh: 'Attention Is All You Need'
authors:
  - Ashish Vaswani
  - Noam Shazeer
  - Niki Parmar
  - Jakob Uszkoreit
  - Llion Jones
  - Aidan N. Gomez
  - Lukasz Kaiser
  - Illia Polosukhin
year: 2017
venue: 'NeurIPS 2017'
type: 'Paper'
doi: null
arxiv: 'https://arxiv.org/abs/1706.03762'
pdf: 'https://arxiv.org/pdf/1706.03762'
abstract: 'The paper introduces the Transformer, an encoder-decoder architecture built around attention rather than recurrence or convolution, and evaluates it on sequence transduction tasks.'
abstractZh: '论文提出 Transformer 编码器—解码器架构，以注意力机制替代循环与卷积，并在序列转换任务上进行评估。'
keywords:
  - Transformer
  - attention
  - sequence modeling
  - machine translation
bibtex: |
  @inproceedings{vaswani2017attention,
    title     = {Attention Is All You Need},
    author    = {Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob and Jones, Llion and Gomez, Aidan N. and Kaiser, Lukasz and Polosukhin, Illia},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2017},
    url       = {https://arxiv.org/abs/1706.03762}
  }
featured: true
sample: true
---

> **Starter reading record.** This is a public paper included to demonstrate the paper and BibTeX schema. It is not a personal publication.

## Reading focus

The central design choice is to make relationships between sequence positions explicit through attention. When revisiting the paper, useful questions include how positional information enters the model, how multi-head attention changes the representation, and which parts of the architecture depend on the original translation setting.

## Notes to extend

- Research question: `[add a verified reading question]`
- Method: `[add a concise interpretation]`
- Evidence: `[link to a figure, table, or section]`
- Limitation: `[add a limitation grounded in the paper]`
