---
title: Time
nav:
  order: 4
  tooltip: Conheça o time
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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

### Alumni

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include list.html data="members" component="portrait" style="small" filters="ex-member:true" %}

{% include section.html %}

### Apoio

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
