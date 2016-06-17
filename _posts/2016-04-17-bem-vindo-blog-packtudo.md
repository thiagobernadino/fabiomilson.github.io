---
layout: post
title:  "Bem vindo ao blog packtudo :3"
image: "/img/blog-image.png"
date:   2016-04-17 23:09:55 -0300
tags: [Notícias,Novidades]
category: Misc
summary: "Um grande passo para um pequeno homem, aventureiro de plantão &#92;o&#47;"
color: purple
---
# Seja muito bem vindo \o/
Quem diria que um dia eu conseguiria completar esse blog, _muhahahhaha_, blog feito com um monte de gambiarras que obtive através de um gênio chamado [William Justen](http://willianjusten.com.br/){: .external-link}{: target="_blank"} .


Dai você pode se perguntar...gambiarras? WTF?   
É isso mesmo, ao menos é como eu penso, eu jamais iria imaginar que seria possível usar um bloco de condição (if-else) dentro de uma página HTML O.O observe o bloco abaixo que usei em algumas seções do blog.
<br />

``` html
{ % if page.categoria == "misc" % }
 <div class="post-content color-purple" itemprop="articleBody">
  { % elsif page.categoria == "anotacoes" % }
  <div class="post-content color-green" itemprop="articleBody">
  { % elsif page.categoria == "tutorial" % }
  <div class="post-content color-blue" itemprop="articleBody">
  { % elsif page.categoria == "faculdade" % }
  <div class="post-content color-orange" itemprop="articleBody">
  { %else% }
  <div class="post-content color-blue-aqua" itemprop="articleBody">
{ %endif% }
```

No código acima podemos deduzir que se a página atual conter uma categoria e essa categoria for igual a alguma das opções dentro do bloco de condição, o `<html>` correspondente será impresso, louco não?

Ainda não ficou claro?
Veja essa página, ela possui a cor <span class="color-purple text-to-uppercase">purple</span> na maioria dos seus elementos, simplesmente porque ela obedece a condição de ser da categoria <span class="color-purple text-to-uppercase">misc</span> e o jekyll através dos seus milhares de recursos imbutidos nós ajuda com essa magia te ter um gostinho de _programação compilada_ no mundo do _front end_.

Então é isso, Welcome to the new world.