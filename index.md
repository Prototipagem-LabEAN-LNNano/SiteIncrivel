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
  image="images/photo.jpg"
  link="research"
  title="Conheça nosso trabalho"
  text=text
%}

{% capture text %}

Explore o conhecimento em primeira mão! Navegue pelos nossos artigos sobre nanomateriais e energia alternativa e conheça as descobertas e inovações mais recentes!

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
  link="publications"
  title="Acesse nossas publicações"
  flip=true
  style="bare"
  text=text
  
%}

{% capture text %}

Convidamos você a conhecer nossa equipe de pesquisadores e colaboradores dedicados, cujo trabalho é fundamental para o avanço das tecnologias sustentáveis. Conheça quem está impulsionando a inovação no LabEAN!
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
