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

Convidamos você a conhecer as pesquisas em nanomateriais e energia alternativa realizadas no LabEAN. Descubra as inovações que estão moldando o futuro sustentável.

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
  image="images/home/trabalho.jpg"
  link="research"
  title="Conheça nosso trabalho"
  text=text
%}

{% capture text %}

Explore o conhecimento em primeira mão! Navegue pelos nossos artigos e conheça as descobertas e inovações mais recentes!

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
  image="images/home/capas.jpg"
  link="publications"
  title="Acesse nossas publicações"
  flip=true
  style="bare"
  text=text
  
%}

{% capture text %}

Conheça a equipe do LabEAN, formada por pesquisadores e colaboradores que contribuem para o desenvolvimento de tecnologias sustentáveis e inovadoras.

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
  image="images/home/time.jpeg"
  link="team"
  title="Descubra quem faz parte do time"
  text=text
%}
