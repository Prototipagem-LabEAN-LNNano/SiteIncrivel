---
---

{% include section.html size="full" %}{% include bgvideo.html %}{% include section.html %}

# Últimas Notícias 

{% include latest-news.html %}

{%
  include button.html
  link="news"
  text="Veja mais"
  icon="fa-solid fa-arrow-right"
  newTab=false
%}

{% include section.html %}

## Explore o LabEAN

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="research"
  text="Nossa Pesquisa"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
  newTab=false
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="publications"
  title="Conheça nosso trabalho"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="publications"
  text="Artigos"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
  newTab=false
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Acesse nossas publicações"
  flip=true
  style="bare"
  text=text
  
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="team"
  text="Nossos membros"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
  newTab=false
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Descubra quem faz parte do time"
  text=text
%}
