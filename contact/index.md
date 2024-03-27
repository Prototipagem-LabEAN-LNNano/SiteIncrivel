---
title: Contato
nav:
  order: 5
  tooltip: Nos encontre
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contato

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}


{% include cols.html col1=col1 col2=col2%}
