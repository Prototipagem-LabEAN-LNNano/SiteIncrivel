---
title: Contato
nav:
  order: 5
  tooltip: Nos encontre
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contato

Nosso laboratório faz parte do Laboratório Nacional de Nanotecnologia [(LNNano)](https://lnnano.cnpem.br/) localizado no Centro Nacional de Pesquisa em Energia e Nanomateriais [(CNPEM)](https://cnpem.br/) do Brasil.

{%
  include button.html
  type="email"
  text="labean.sci@gmail.com"
  link="labean.sci@gmail.com"
%}
{%
  include button.html
  type="phone"
  text="+55 (19) 3517-5085"
  link="551935175085"
%}
{%
  include button.html
  type="address"
  tooltip="Nossa localização no Google Maps"
  link="https://goo.gl/maps/LMWx46NcYGCaMsW68"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
%}

{% endcapture %}


{% include cols.html col1=col1 col2=col2%}
