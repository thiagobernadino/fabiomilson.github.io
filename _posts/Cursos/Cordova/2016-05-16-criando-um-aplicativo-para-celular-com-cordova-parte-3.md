---
layout: post
title:  "Criando aplicativos para celular - Parte 3"
date:   2016-05-29 23:10:00 -0300
summary: "Personalizando ícones com o cordova"
color: cyan  darken-4
tags: [Youtube,Cordova,Desenvolvimento Mobile]
category: Cursos
image: "/img/post/tumbnails/cordova_default.png"
---

# Como personalizar ícones no Cordova

## Configurando Ícones na CLI

Ao trabalhar no Cordova podemos definir ícone(s) do aplicativo através da Tag `<icon>` sendo usada como
elemento no config.xml. Se você não especificar um ícone, o logotipo Apache Cordova será usado.

``` html
    <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
```

|Atributos|Descrição
|src |Inserir a Localização do arquivo de imagem, em relação ao seu diretório do projeto
|plataform |Opcional - Plataforma de destino
|width |Opcional - largura do Ícone em pixels
|height |Opcional - altura do Ícone em pixels
|density |Opcional - Densidade do ícone especificado

A seguinte configuração pode ser usada para definir um ícone padrão, 
que será usado para todas as plataformas.

``` html
    <icon src="res/icon.png" />
```

Para cada plataforma, você também pode definir um conjunto de ícones de pixel-perfeito para caber em diferentes
 resoluções de tela.
 
## Android

``` html
 <platform name="android">
        <!--
            ldpi    : 36x36 px
            mdpi    : 48x48 px
            hdpi    : 72x72 px
            xhdpi   : 96x96 px
            xxhdpi  : 144x144 px
            xxxhdpi : 192x192 px
        -->
        <icon src="res/android/ldpi.png" density="ldpi" />
        <icon src="res/android/mdpi.png" density="mdpi" />
        <icon src="res/android/hdpi.png" density="hdpi" />
        <icon src="res/android/xhdpi.png" density="xhdpi" />
        <icon src="res/android/xxhdpi.png" density="xxhdpi" />
        <icon src="res/android/xxxhdpi.png" density="xxxhdpi" />
    </platform>
```

## BlackBerry10

``` html
<platform name="blackberry10">
        <icon src="res/bb10/icon-86.png" />
        <icon src="res/bb10/icon-150.png" />
    </platform>
``` 

## Browser

Ícones não se aplicam ​​para a plataforma do navegador.

## iOS

``` html
   <platform name="ios">
        <!-- iOS 8.0+ -->
        <!-- iPhone 6 Plus  -->
        <icon src="res/ios/icon-60@3x.png" width="180" height="180" />
        <!-- iOS 7.0+ -->
        <!-- iPhone / iPod Touch  -->
        <icon src="res/ios/icon-60.png" width="60" height="60" />
        <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
        <!-- iPad -->
        <icon src="res/ios/icon-76.png" width="76" height="76" />
        <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
        <!-- iOS 6.1 -->
        <!-- Spotlight Icon -->
        <icon src="res/ios/icon-40.png" width="40" height="40" />
        <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
        <!-- iPhone / iPod Touch -->
        <icon src="res/ios/icon.png" width="57" height="57" />
        <icon src="res/ios/icon@2x.png" width="114" height="114" />
        <!-- iPad -->
        <icon src="res/ios/icon-72.png" width="72" height="72" />
        <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
        <!-- iPhone Spotlight and Settings Icon -->
        <icon src="res/ios/icon-small.png" width="29" height="29" />
        <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
        <!-- iPad Spotlight and Settings Icon -->
        <icon src="res/ios/icon-50.png" width="50" height="50" />
        <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
    </platform>
```

## Windows

Para o Windows a abordagem recomendada para definir os ícones de aplicativos é usar o atributo `target`.

``` html
    <platform name="windows">
        <icon src="res/windows/storelogo.png" target="StoreLogo" />
        <icon src="res/windows/smalllogo.png" target="Square30x30Logo" />
        <icon src="res/Windows/Square44x44Logo.png" target="Square44x44Logo" />
        <icon src="res/Windows/Square70x70Logo.png" target="Square70x70Logo" />
        <icon src="res/Windows/Square71x71Logo.png" target="Square71x71Logo" />
        <icon src="res/Windows/Square150x150Logo.png" target="Square150x150Logo" />
        <icon src="res/Windows/Square310x310Logo.png" target="Square310x310Logo" />
        <icon src="res/Windows/Wide310x150Logo.png" target="Wide310x150Logo" />
    </platform>
```

Onde o src é o caminho para o ícone que deve ser adicionado.

A plataforma Windows lida com ícones MRT automaticamente, por isso, 
se você especificar `src="res/windows/storelogo.png"` os seguintes arquivos serão copiados para o 
aplicativo `de imagens`, pasta: `res/windows/storelogo.scale-100.png`, `res/windows/storelogo.scale-200.png`, etc.

## Windows Phone 8 (WP8 Platform)

``` html
   <platform name="wp8">
        <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
        <!-- tile image -->
        <icon src="res/wp/Background.png" width="159" height="159" />
    </platform>
```