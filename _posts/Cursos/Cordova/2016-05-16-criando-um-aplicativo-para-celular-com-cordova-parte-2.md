---
layout: post
title:  "Criando aplicativos para celular - Parte 2"
date:   2016-05-16 23:51:10 -0300
summary: "Adicionando platforms e algumas coisinhas a+"
color: cyan  darken-4
tags: [Youtube,Cordova,Desenvolvimento Mobile]
category: Cursos
image: "/img/post/tumbnails/cordova_default.png"
---

# Introdução

Vamos dar continuade ao nosso "curso" de como criar um aplicativo para celular com o cordova?

Dessa vez veremos como criar o escopo do nosso projeto ( app ) e adicionar suas devidas plataformas e inclusive veremos quais plataformas o cordova suporte exportar de forma "universal", o famoso código Cross-Platform.

## O que será necessário?

Para acompanhar esse post é necessário:

- Que você tenha lido o primero Post dessa série.
- Saber o que é um pacote de projeto.
- Noção de diretórios e comandos básicos do Prompt de comando ou o seu terminal.
- Saber o que é uma plataforma.

## Criando o nosso App

Antes de tudo, escolha um local onde irá salvar todo o seu projeto.

Com a sua pasta de projetos bonitinha criada em algum canto do seu PC, abra o seu prompt/terminal e navegue até a sua pasta usando o comando `cd C:\blablabla\seu_diretorio`, já estando dentro do seu diretório, iremos então criar o seu projeto, vá no prompt/terminal e utilize o seguinte comando e seus devidos parâmetos `cordova create hello com.example.hello HelloWorld` onde:

- hello = Nome da pasta que será criar dentro do seu diretório para armazenar todo o conteúdo do seu App.
- com.example.hello = Nome do pacote que irá agrupar todo o seu projeto.
- HelloWorld = Título de escopo geral do seu projeto, inclusive será esse o nome que irá ficar logo abaixo do ícone do seu App quando o instalarmos em alguma plataforma, como por exemplo Android.


> Nota: No meu caso, para continuar essa série irei mostrar como criei o meu App PackNotes, que pode ser baixado pelo [meu reposítório no GitHub](https://github.com/fabiomilson/packnotes).


Sendo assim, eu irei executar o comando da seguinte maneira `cordova create packnotes info.packnotes Packnotes`

Com isso será gerado a seguinte estrutura de pastas:

- SeuApp
    - hooks ( Faço a menor ideia )
    - plugins ( Nome bastante sugestivo )
    - platforms ( Onde irá ficar as plataformas que iremos inserir )
    - res ( pasta que irá conter imagens, mídias e etc.. de escopo global )
    - www ( pasta que irá conter todos os arquivos necessários para dar vida ao seu App )
    - config.xml ( Arquivo que contém todas as configurações do seu App )

Se você for na pasta `www` e abrir o index.html, verá o HelloWorld do Cordova que nada mais é que a sua logo.

> Nota: Para mais informações, acesse a [documentação oficial do cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command) onde eles falam sobre `Cordova Command-line-interface (CLI) Reference`.

Com o app "criado", vamos navegar para dentro dele usando o comando `cd packnotes` ( Windows ), dentro do nosso diretório iremos então adicionar uma plataforma para ele, no nosso caso iremos compilar para Android e para UWP ( Plataforma Universal Windows ):

- Executamos primeiro `cordova platform add android --save`
- Depois executamos `cordova platform add windows --save`

> Nota: É necessário possuir o Visual Studio instalado na sua máquina junto com o os SDK's , vá para o site oficial da Microsoft e faça o [download do Visual Studio](http://www.visualstudio.com/downloads), como Freatures obrigatórios teremos:

- Microsoft Web Developer Tools
- Universal Windows App Development ( Todos )
- Windows 8.1 and Windows phone 8.0/8.1 Tools ( Todos )
- Eu particularmente baixo absolutamente tudo para evitar problemas futuros, mas se a 
[documentação do cordova](https://cordova.apache.org/docs/en/latest/guide/platforms/win8/) diz que é necessário somente isso, quem sou eu para retrucar, certo?

Com as plataformas inseridas, vamos checar se tudo ocorreu bem e se elas estão em nosso App usando o seguinte comando `cordova platform ls`.

> Nota: Para remover uma platform, basta mudar o add para remove `cordova platform remove android`

> Ao usar CLI do Cordova, você não deve editar nada que esteja dentro do diretório /platforms/, pois eles são diretórios de rotinas e que são substituidos constantemente.

> Leia mais em [Cordova platform command reference documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-platform-command)

## Requisitos necessários para android

Você pode estar se perguntando, wathahell como é que o cordova vai compilar para Android?

Se você se perguntou isso, meus parabéns, pois sabes que é necessário ter uma bagagem ai de ante-mão igual tivemos para Windows, para isso vamos executar o seguinte comando: `cordova requirements`.

No meu caso o retorno foi o seguinte:

`Requirements check results for android:`

`Java JDK: installed .`

`Android SDK: installed`

`Android target: installed android-19,android-21,android-22,android-23,Google`

`Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google`

`APIs:23`

`Gradle: installed`

Ou seja, possuo tudo que é necessário, caso você não, trate de instalar o que estiver faltando.

> Nota: Use a documentação do cordova a seu favor [Android platform requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#requirements-and-support), [Windows platform requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html#requirements-and-support)

E para finalizar o post vamos executar o nosso projeto em um aparelho android, pegue o seu aparelho Android, ative o modo de depuração Usb dele, plugue ele no pc com modo de depuração ativo, va no seu prompt/terminal que deverá estar apontando para o diretório do seu app e em seguida use o seguinte comando `cordova run android`, cordova irá fazer o deploy do seu app no seu aparelho e o app então será aberto.

> Nota: Caso você não possua um aparelho android, veremos no próximo post, como emular um aparelho no seu windows.

## Conclusão

Então pessoal, no post de hoje falei sobre bastante coisa desde a criação até o deploy de um app e tudo isso poderá ser acompanhado pelo [meu canal no youtube](http://youtube.com/packtudo), não se esqueçam :)

Até o próximo post, obrigado :)




