---
layout: post
title:  "Xamarin - Trabalhando com botões"
date:   2016-05-19 11:40:02 -0300
summary: "Criando botões usando Xamarin.Forms"
color: blue
tags: [Youtube,Xamarin,Desenvolvimento Mobile]
category: Cursos
image: "/img/post/tumbnails/xamarin_default.png"
---

# Introdução

Veremos neste post, como complemento do meu curso de Xamarin gratuito que ofereço em [meu canal no youtube](http://youtube.com/packtudo),
como criar botões do Xamarin.Forms retangulares e clicáveis.

## Visão de botão

Os botões do Xamarin.Forms são retangulares por padrão e também são clicáveis, veja o exemplo:

![Imagem que demonstra os botões no xamarin forms para cada plataforma]({{base.url}}/img/post/xamarin_trabalhando_buttons/example_buttons.png){: .responsive-img}
Imagem retirada da documentação [Oficial do Xamarin.](https://developer.xamarin.com/api/type/Xamarin.Forms.Button/)

## Criando um botão no Xamarin.Forms

Vejamos como adicionar um botão em uma visão usando o Xamarin.Forms:

``` csharp
    Button button = new Button{
       FontSize = Device.GetNamedSize(NamedSize.Large, typeof(Button)), // Adicionamos um tamanho para o botão
       HorizontalOptions = LayoutOptions.Center, // Centralizamos o botão
       VerticalOptions = LayoutOptions.Fill, // Mandamos não se expander
       Text = "Click me" // Por fim, inserimos um texto
    }
```

Com o botão criando, vamos adicionar ele dentro de nosso Layout:

``` csharp
    StackLayout layout = new StackLayout{
        Children = {
            button
        }
    }
```

Com isso podemos perceber que o botão pode ser adicionado como um filho dentro do Layout como qualquer outro
objeto que herda de View.

Podemos atribuir um manipulador de evento:

``` csharp
    // Podemos adicionar tanto em Inline
    button.Clicked += (sender, arguments) =>{
        button.Text = "You clicked on me";
    }
    
    //ou com a atribuição de um método
    void OnButtonClicked(object sender, EventArgs e){
        button.Text = "You clicked on me";
    }
```

E quando clicarmos no botão o seu texto irá mudar.

> Nota: Se atribuirmos um manipulador de evento fora do construtor da página, devemos nos certificar
de definir também seu botão fora do construtor.

## Lembretes

Os botões podem ser facilmente personalizados com as propriedades TextColor e BorderColor, que podem ser
facilmente encontradas na [documentação oficial do Xamarin.Forms](https://developer.xamarin.com/api/type/Xamarin.Forms.Button/).

Botões possuem as seguintes propriedades:

``` csharp
BorderColor // Get/Set um objeto da Classe Color; 
BorderRadius // Get/Set um Inteiro 32;
BorderWidth // Get/Set um Double;
Command // Get/Set um ICommand;
CommandParameter // Get/Set de um Object;
Font // Get/Set da classe Font;
FontAttributes // Get/Set da classe FontAttributes;
FontFamily // Get/Set de uma string com nome da Font a ser usada;
FontSize // Get/Set de um Double para modificar o tamanho;
Image // Get/Set de um FileImageSource;
Text // Get/Set de uma string;
TextColor // Get/Set da classe Color;
```

Mais informações na [documentação oficial do Xamarin.Forms](https://developer.xamarin.com/api/type/Xamarin.Forms.Button/).