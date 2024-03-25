---
title: Time
nav:
  order: 4
  tooltip: Conheça o time
---

# {% include icon.html icon="fa-solid fa-users" %}Time

Nosso laboratório é composto por uma equipe altamente engajada e colaborativa de pesquisadores. Reconhecemos que equipes diversas realizam pesquisas melhores. A equipe inclui pós-doutorandos, estudantes em todos os níveis, funcionários e colabores externos.

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: prof, ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: postdoc,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: phd,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: specialist,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: analist,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: labtec,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: devtec,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: intern,ex-member: false" %}
{% include list.html data="members" component="portrait" filters="role: ic,ex-member: false" %}

{% include section.html %}

### Ex-membros

Descubra os talentos que fizeram parte da nossa jornada! Aqui, trazemos nossos ex-membros que tiveram valiosa contribuição aos nossos projetos.

{% include list.html data="members" component="portrait" filters="ex-member:true" style="small" %}

{% include section.html %}

### Apoio

As bases que sustentam nossas iniciativas! Nesta seção, destacamos as fundações de apoio que são essenciais para o sucesso de nossos projetos.

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
