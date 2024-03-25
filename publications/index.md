---
title: Publicações
nav:
  order: 3
  tooltip: Trabalhos publicados
---

# {% include icon.html icon="fa-solid fa-book" %}Publicações

Explore todos os trabalhos publicados pelo Laboratório de Energia Alternativa e Nanomateriais (LabEAN) neste espaço dedicado à pesquisa e inovação!

{% comment %}
{% include section.html %}

## Highlighted

{% include citation.html lookup="Solution chemistry" style="rich" %}
{% endcomment %}

{% include section.html %}

{% include search-box.html placeholder="Filtro por ano, pessoas, assuntos e mais!" %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" filters="ignore: ^(?!true$)" style="rich" %}
