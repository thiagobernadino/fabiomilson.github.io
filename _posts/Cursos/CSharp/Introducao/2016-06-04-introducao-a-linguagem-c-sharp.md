---
layout: post
title:  "Introdução ao C#"
date: 2016-06-04 22:56:21 -0300
summary: "A linguagem C# e o seu ambiente"
color: purple darken-3
tags: [C#]
category: Cursos
image: "/img/post/tumbnails/c_sharp_default.png"
---

# Introdução a linguagem C#

A linguagem C# e o framework .NET, são as tecnologias mais importantes para o mundo microsoft, e não ache que isso seja um exagero
pois todo o ambiente Windows gira em torno dessas tecnologias. O Donet(.NET) foi criado para fornecer um grande ambiente de desenvolvimento
lhe fornecendo opções para desenvolver praticamente qualquer coisa e executar o mesmo dentro do universo windows, embora o .NET
seja especifico para a a linguagem C#, a própria linguagem consegue se extender juntamente a ele para fornecer WebPages dinâmicas, criar componentes
para aplicações distribuidas e etc...

## O Porque da plataforma .NET e do C#

Para que possamos entender um e o outro, é necessário um entendimento prévio de que muitas tecnologias da plataforma Windows 
não mundo com frequência, são sempre reaproveitadas, tanto que desde o Windows 3.1 em diante, o Windows matém a mesma `application programming interface` ( API ),
com isso entendido, basicamente a plataforma .NET é o aglomerado dessas funções, melhoras passadas por "gerações" e também contendo em seu núcleo, novas funcionalidades,
e o mesmo acontece com todas as outras tecnologias presentes no Windows, como o COM ( Component object model ), OLE(Object linking and Embedding) e derivados.

> NOTA: Ao aprender a linguagem C#, caso já seja programador em alguma outra linguagem, inclusive linguagens mais antigas como VB e C++,
perceberá logo de cara que programar em C# é mais agradável e intuitivo.

## .NET?

Disse, disse, disse, mas no fundo...o que é esse tal de .NET?

Para responder essa pergunta, devemos levar em consideração que o Windows é uma biblioteca rica em recursos, e todos esses recursos devem ser 
catalogados e enfileirados para seu uso (Funções), e basicamente é isso que o .NET lhe fornece, um conjunto de funções para trabalhar com o Windows.

Vejamos as vantagens da plataforma .NET:

- Grande suporte para páginas WEB - Mesmo que o C# possa trabalhar com a tecnologia ASP, o .NET é extremamente flexível ao ponto de
fornecer um suporte integrado bastente dinâmico para a sua aplicação.

## Ferramentas para os posts

O exemplos foram escritos dentro da IDE própria para o C# (Visual Studio.Net). É recomendável que você instale esta ferramenta 
Microsoft oferece o Visual Studio Express Edition gratuitamente, está disponível em [http://msdn.microsoft.com/vstudio/express/](http://msdn.microsoft.com/vstudio/express/). 

Você precisará baixar e instalar o .NET Framework SDK, que pode ser obtido livremente [clicando aqui](https://www.microsoft.com/pt-br/download/details.aspx?id=42642). 
Isto é necessário para executar os aplicativos .NET e, mais importante para nós, contém o compilador C# que você vai precisar para compilar os programas que você escreve.

Finalmente, para usuários não-Windows, o [Projeto Mono](http://www.monodevelop.com/) fornece um compilador open source C#, .NET Runtime e implementação da biblioteca. Para mais informações.


## A linguagem C#

C# (pronuncia-se C-Sharp) é, sem dúvida, 
a linguagem de escolha para trabalhar no ambiente .Net. 
É uma nova linguagem livre da maldição de compatibilidade com versões anteriores e com um monte de recursos novos, excitantes e promissores. 
É uma linguagem de programação orientada a objetos e tem em seu núcleo, muitas semelhanças com Java, C++ e VB. 
Na verdade, C# combina a potência e eficiência do C ++, o design OO simples e limpa do Java e a simplificação da linguagem do Visual Basic.

Como Java, C# também não permite herança múltipla ou o uso de ponteiros (em um código seguro), 
mas fornece uma "recolha de lixo"(garbage memory collection) de memória em tempo de execução, o tipo e a verificação de acesso à memória. 
No entanto, ao contrário do Java, C# mantém operações práticas únicas do C++ como sobrecarga de um operador, enumerações, diretivas de pré-processador, ponteiros 
(em código não gerenciado / un-safe), ponteiros de função (na forma de delegates) e promete sempre possuir um template de apoio nas próximas versões. 
Como VB, ele também suporta os conceitos de propriedades (context sensitive fields). 
Além disso, C# vem com algumas características novas e emocionantes, como reflections, attributes, marshalling, remoting, threads, streams, data access com ADO.Net e muito mais.

A arquitetura do .NET e o Framework .NET

Na arquitetura .Net e o .Net Framework existem algumas diferentes e termos e conceitos importantes, que iremos discutir um por um: 

### Common Language Runtime (CLR)

O conceito mais importante do .NET Framework é a existência e a funcionalidade do .NET Common Language Runtime (CLR), 
também chamado de Net Runtime. 
É uma camada que reside acima do OS e lida com a execução de todos os aplicativos .Net.
 Nossos programas não se comunicam diretamente com o sistema operacional, mas passam pelo CLR:
 
![Imagem que demonstra a CLR do .NET]({{base.url}}/img/post/cursos/c_sharp/introducao/common_language_runtime.png){: .responsive-img}

### MSIL (Microsoft Intermediate Language) Code

Quando compilarmos nosso Programa .Net usando a linguagem .Net, qualquer uma compatível (como C#, VB.Net ou C ++, .Net) nosso código fonte não é convertido em código binário executável, 
mas sim para um código intermediário conhecido como MSIL que é interpretado pela Common Language Runtime. 
MSIL é o sistema, é um código independente de hardware para funcionar. Após a execução do programa, neste MSIL (código intermediário) é convertido em código executável binário (código nativo).

![Imagem que demonstra a CLR do .NET]({{base.url}}/img/post/cursos/c_sharp/introducao/demo_msil.png){: .responsive-img}


## Just In Time Compilers (JITers)

Quando o nosso código compilado IL precisa ser executado, o CLR chama o compilador JIT, que compila o código IL para um código executável nativo (.exe ou .dll) 
que é projetado para a máquina específica e o seu OS. JITers são diferentes dos compiladores tradicionais, eles compilam o IL para código nativo apenas quando desejado;
 por exemplo, quando a função é chamada, o IL converte em tempo de execução o chamado. Assim, a parte do código que não é usada por que não é necessária naquele momento nunca é convertida em código nativo. 
 Se algum código IL é convertido em código nativo, então da próxima vez que for necessário usar, o CLR reutilizará o mesmo (já compilado) sem que haja uma re-compilação. 
 Assim, se um programa é executado por algum tempo (assumindo que todas ou a maioria das funções são chamadas o tempo inteiro), então não irá ter nenhuma perda de desempenho, just-in-time.

Como JITers estão sempre cientes do processador e sistema operacional específico que estão sendo executados em tempo real, eles podem otimizar o código de forma extremamente eficiente, 
resultando em aplicações muito robustas. Além disso, como um compilador JIT sabe o estado atual exato do código executável, 
eles também podem otimizar o código em pequenas chamadas de função (como a substituição do corpo de uma pequena função que possua um loop, economizando tempo em sua chamada de função). 
Embora a Microsoft afirmou que o C# e .Net não estão competindo com linguagens como C++ na eficiência e rapidez de execução, 
JITers podem tornar seu código mais rápido do que o código escrito em C++ em alguns casos.

## Continua...

Então, o que achou do post? fiquem ligados no [próximo post]({{base.url}}/cursos/introducao-a-linguagem-c-sharp-parte-2/) e deixe o seu comentário abaixo :).
