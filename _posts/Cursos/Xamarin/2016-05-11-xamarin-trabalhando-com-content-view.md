---
layout: post
title:  "Xamarin - Desvendando a classe ContentView"
date:   2016-05-11 20:26:42 -0300
summary: "Agrupando filhos dentro de um container"
color: blue
tags: [Youtube,Xamarin,Desenvolvimento Mobile]
category: Cursos
image: "/img/post/tumbnails/xamarin_default.png"
---

# A classe ContentView

Opa! Fala ae pessoal, vamos para mais um post referente ao [curso de xamarin](https://www.youtube.com/playlist?list=PLO6I-dflfW8Ow9Tap8fj4HMM4CBzYrL0L){:  .external-link} oferecido por mim pelo youtube?

Neste post falaremos sobre a classe ContentView e veremos alguns truques bem legais para agrupar seus **componentes** no Xamarin, então vamos la?

## Xamarin.Forms.ContentView

Quem diabos é essa classe?
basicamente a classe ContentView nos fornece um container de um único elemento que contém também um único elemento como filho, louco não?

Sua syntax é bem bonitinha veja:

`[Xamarin.Forms.ContentProperty("Content")]`
`public class ContentView : TemplatedView`

### Algumas observações

O XAML para Xamarin.Forms suporta as seguintes propriedades para o ContentView:

Property| Valor
-------- | ---
Content | A view do objeto que irá representar o conteúdo visual da ContentView

## Exemplos

Vejamos como construir uma ContentView utilizando uma ContentPage e uma Label:

``` csharp
MainPage = new ContentPage () {
    // Colocar uma "margin" do topo entre a content e a área do dispositivo.
    Padding = new Thickness(10, Device.OnPlatform(20, 0, 0), 10, 5),
        Content = new ContentView {
            Content = new Label { Text = "I'm Content!" },
    }
};
```
![Imagem que representa o código de exemplo acima compilado para todas as três plataformas, android, ios e windows phone]({{ base.url }}/img/exemplo_contentView_1.png){: .responsive-img}

Lembre-se! - Sempre importe o namespace necessário para trabalhar com ContentView acompanhe os detalhes técnicos:

- Namespace: Xamarin.Forms
- Assembly: XamarinForms.Core (dentro de Xamarin.Forms.Core.dlll)
- Assembly Versions: 1.0.0.0, 1.1.0.0,1.2.0.0, 1.3.0.0, 1.4.0.0, 1.5.0.0, 2.0.0.0

## Vamos aos seus membros

Possuímos seu construtor público:

``` csharp
ContentView(); Inicializa uma nova instância da classe ContentView
```

Campos públicos:

``` csharp
static readonly 
ContentProperty - BindableProperty e ContentView.Content
```

Métodos protegidos


``` csharp
override LayoutChildren(Double,Double,Double)
Posições e dimensiona o conteúdo de uma ContentView.
```


``` csharp
override OnBindingContextChanged();
Método que é chamado quando o contexto de ligação muda.
```


``` csharp
override OnSizeRequest(Double,Double):SizeRequest;
Este método é chamado durante a passagem de medida de um ciclo de layout para obter o tamanho desejado de uma ContentView.
```
Então pessoal esse post é justamente para complementar o curso de Xamarin que publico em [meu canal do youtube](http://youtube.com/packtudo){:  .external-link}, todas essas referências e exemplos foram retirados da própria documentação do Xamarin que pode ser encontrada em sua versão em inglês no [site oficial do xamarin clicando aqui](https://developer.xamarin.com/api/type/Xamarin.Forms.ContentView/){:  .external-link}

Então, por hoje é só pessoal, até a próxima :)
