---
layout: post
title:  "Xamarin - Trabalhando com fontes no Xamarin.Forms"
date:   2016-05-19 11:40:02 -0300
summary: "Uusando propriedades das fontes."
color: blue
tags: [Youtube,Xamarin,Desenvolvimento Mobile]
category: Cursos
image: "/img/post/tumbnails/xamarin_default.png"
---

# Modificando Fontes no Xamarin Forms

Olá pessoal, nessa continuação da serie aqui do Blog "Curso de Xamarin completo gratuito" que também é publicado em forma de vídeo em [meu canal do youtube](http://youtube.com/packtudo), falarei como usar fontes no Xamarin.Forms e como mudar suas propriedades de texto e derivados, então? Vamos la?

# Usando Fontes

No Xamarin.Forms podemos formatar os textos dos nossos controles / Views usando as seguintes propriedades:

- _FontAttributes_ - Compõe estilos de fonte como ***negrito*** e _itálico_ e ela pode ser acessada da seguinte maneira: `labelQualquer.FontAttributes = FontAttributes.Bold;` por exemplo.
  - Algumas opções de FontAttributes: `None, Bold e Italic`.
  - Podemos passar múltiplos atributos, bastando utilizar um PIPE `label.FontAttributes = FontAttributes.Bold | FontAttributes.Italic;`

- FontFamily - Define o nome da fonte que desejamos usar em nossa label, bastando passar uma `String` para isso, vejamos um exemplo: `label.FontFamily = "Comic Sans";`

- FontSize - Através dessa propriedade podemos editar a espessura da fonte e o seu tamanho, basta passar um `Double` ou um através de uma enumeração NamedSize, vejamos os exemplos: `label.FontSize = 35;` ou `label.FontSize = Device.GetNamedSize(NamedSize.Large, typeof(Button));` onde a enumeração busca e define um valor relativo de NamedSize para cada dispositivo.
  - Tamanhos de NamedSize:
    - Micro
    - Small
    - Medium
    - Large

> Nota: Alguns controles dão suporte a diferentes FontAttributes em partes distintas de uma string, basta usar a classe `FormattedString`, mais detalhes abaixo.

### FormattedString
Alguns controles Xamarin.Forms suportam atributos de fonte diferente dentro de uma string usando o FormattedString. Um FormattedString consiste em um ou mais spans, cada um pode ter os seus próprios atributos.

A classe Span tem os seguintes atributos:

- Text  - O valor para exibir
- FontFamily  - O nome da fonte
- FontSize - O tamanho da fonte
- FontAttributes - As informações de estilo como itálico e negrito
- ForegroundColor - Cor do texto
- BackgroundColor - Cor da fundo

Vejamos um exemplo extraído da [documentação oficial](https://developer.xamarin.com/guides/xamarin-forms/user-interface/text/fonts/) do Xamarin.Forms:

```csharp
var labelFormatted = new Label ();
var fs = new FormattedString ();
fs.Spans.Add (new Span { Text="Red, ", ForegroundColor = Color.Red, FontSize = 20, FontAttributes = FontAttributes.Italic });
fs.Spans.Add (new Span { Text=" blue, ", ForegroundColor = Color.Blue, FontSize = 32 });
fs.Spans.Add (new Span { Text=" and green!", ForegroundColor = Color.Green, FontSize = 12 });
labelFormatted.FormattedText = fs;
```

## Fontes específicas

O incrível do Xamarin.Forms é justamente a mágia de podermos compartilhar um único código com diversas plataformas, e graças a isso, podemos trabalhar com fontes específicas para cada plataforma dentro do Xamarin, basta usar o `Device.OnPlatform`, lembre-se de verficiar se a fonte funciona em todas as plataformas, vamos ao exemplo:

``` csharp
    label.FontFamily = Device.OnPlatform{
        iOS: "Courier",
        Android: "Doid Sans Mono",
        WinPhone: "Courier New"
    }
```

> Nota: O uso de Device.OnPlatform é um grande truque multiplataforma, use e abuse dele.

## Então...
É isso pesoal, até o próximo post, qualquer duvida ou sugestão, critica ou elogios, deixe nos comentários abaxio ^^
