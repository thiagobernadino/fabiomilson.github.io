---
title: Xamarin - Manipulando cores
layout: post
date: 2016-04-30 15:29:10 -0300
summary: "Trabalhando com cores no Xamarin;"
color: blue
image: "/img/post/tumbnails/xamarin_default.png"
tags: [Youtube,Xamarin,Desenvolvimento Mobile]
category: Cursos
---

# Introdução 

## Xamarin.Forms

A cor de plano de fundo no Xamarin.Forms(background) de uma página e a cor de fonte de um controle(visão) podem ser facilmente alterados com uso de uma propriedade chamada `BackgroundColor` de `ContentPage` e da propriedade `TextColor` encontrada em `Views` baseadas em texto(Labels por exemplo).

## Atenção

Se você estiver trabalhando em um mac com a intenção de compilar para IOs e quiser que os exemplos que irei mostrar logo abaixo apareçam com fundo preto, pois background default do IOs é da cor Branca, adicione a seguite linha em seu projeto dentro da classe que herda ContentPage: 

``` csharp
this.BackgroundColor = Color.Black;
```

Caso queira manter ou até mesmo mudar a cor em tempo de execução basta `Color.Black` para `Color.White`.

A cor de um texto será sempre configurada automaticamente para um tom mais claro com a intenção de realçar o texto de acordo com o fundo, mas podemos alterar a cor da fonte através da propriedade `TextColor = Color.COR_QUE_VOCÊ_DESEJA;`

## Cores default da classe Color

|Color	|ShortName	|RGB Value|
|-------|:-----------:|--------------:|
|Color.Transparent|	Transparente|0, 0, 0|
|Color.Aqua	|Aqua	|0, 255, 255
|Color.Black	|Preto	|0, 0, 0
|Color.Blue	|Azul	|0, 0, 255
|Color.Fuchsia	|Fúcsia	|255, 0, 255
|Color.Gray	|Cinzento	|128, 128, 128
|Color.Green	|Verde	|0, 128, 0
|Color.Lime	|Limão	|0, 255, 0
|Color.Maroon	|Marrom	|128, 0, 0
|Color.Navy	|Marinha	|0, 0, 128
|Color.Olive	|Oliva	|128, 128, 0
|Color.Purple	|Roxo	|128, 0, 128
|Color.Pink	|Rosa	|255, 102, 255
|Color.Red	|Vermelho	|255, 0, 0
|Color.Silver	|Prata	|192, 192, 192
|Color.Teal	|Cerceta	|0, 128, 128
|Color.White	|Branco	|255, 255, 255
|Color.Yellow	|Amarelo	|255, 255, 0

Você pode passar uma cor peronsalizada dentro do construtor da classe Color `TextColor = new Color(10,120,150)`, onde os três valores representam respectivamente as escalas em RGB.

Para ver mais recursos da classe Color, acesse a [documentação oficial do Xamarin](https://developer.xamarin.com/api/type/Xamarin.Forms.Color/){: target="_blank"}{: .external-link}.


