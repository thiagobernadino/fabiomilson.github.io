---
layout: post
title:  "Criando aplicativos para celular - Parte 1"
date:   2016-05-16 22:51:32 -0300
summary: "Começando a criar um app com Cordova"
color: cyan  darken-4
tags: [Youtube,Cordova,Desenvolvimento Mobile]
category: Cursos
image: "/img/post/tumbnails/cordova_default.png"
---

# Introdução

Então pessoal vamos criar um aplicativo completo para celular utilizando somente HTML, CSS e Javascript como base?

Se a sua resposta foi sim, prossigamos, caso contrário fico triste em não poder lhe ajudar :/

Então chega de enrolação e mão na massa !

## O que será necessário?

Seguinte, irei assumir durante todo o "curso" que você já saiba HTML, CSS e Javascript, ao menos o básico, e que saiba se virar,
com isso fique claro que iremos usar o CORDOVA / PHONEGAP para dar a luz ao nosso aplicativo ( Que irei chamar carinhosamente de
App), ficando transparente isso para você, vamos para a instalação do Cordova na nossa máquina, lembrando que todo o desenvolvimento
será na plataforma Windows.

## Instalação do cordova no windows

Então, como instalar o cordova no windows?

O cordova é instalado através de linhas de comandos pelo nosso querido CMD, mas para iniciar a instalação, de ante-mão devemos ter 
instalado em nossa máquina o [Node.js](https://nodejs.org/en/download/){: .external-link} que pode ser adquirido facilmente 
[pelo seu site oficial](https://nodejs.org/en/download/){: .external-link}, baixe a versão LTS - Recommend For Most Users que vai
ficar tudo bem, e claro em seguida instale-o.

> Nota: Ao instalar o Node.js, certifique-se de que na parte onde diz "Custom Setup" de marcar todas as opções para a instalação
inclusive a `Add to Path` e a `npm package manager`.

Com o Node.js instalado, agora basta abrir o CMD ( Prompt de comando do windows ), como Administrador ou normal mesmo, eu prefiro como Administrador so para garantir a execução 
das tarefas, e em seguida usar o comando `npm install -g cordova` 
isso irá demorar um pouco, mas logo logo a instalação será concluida, caso de algum erro como "NPM não foi reconhecido como um comando válido" reinicie o computador e 
faça o teste novamente.

> Nota
- No OSX ou Linux basta usar o `sudo` antes do comando npm para fazer a instalação.
- A `flag -g` depois do `npm install` indica para o npm que o cordova deve ser instalado de forma global, caso contrário o cordova seria instalado na pasta `node_modules` do Node.js
 em questão.
- Para se certificar de que o `cordova` foi instalado, vá no seu terminal / prompt e execute o comando `cordova` e veja se o resultado será o `help text`, caso contrário
 comece a rezar o pai nosso e duas avemarias e em seguida deixe um comentário no post.

## Conclusão

Com isso pessoal, finalizamos a primeira parte, que nada mais é que a forma de se instalar o Cordova em suas máquinas, então até a prôxima e não deixe de acompanhar 
o [meu canal no Youtube](http://youtube.com/packtudo).


