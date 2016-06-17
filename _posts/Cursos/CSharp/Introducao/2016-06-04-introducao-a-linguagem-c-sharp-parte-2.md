---
layout: post
title:  "Introdução ao C# - Parte 2"
date: 2016-06-05 12:14:15 -0300
summary: "A linguagem C# e o seu ambiente parte 2"
color: purple darken-3
tags: [C#]
category: Cursos
image: "/img/post/tumbnails/c_sharp_default.png"
---

# The Framework Class Library (FCL)

O .NET Framework fornece um enorme Framework (ou base) com a Class Library (FCL) para efetuar tarefas comuns e usuais. 
FCL contém milhares de classes para fornecer o acesso a funções do Windows API e common, como Manipulação de Strings, 
estruturas de dados common, I.O, Streams, Threads, segurança, programação de rede, Programação Windows, Programação Web, 
Acesso a dados, etc. É simplesmente o maior padrão de biblioteca já criado para qualquer outro ambiente de desenvolvimento ou 
linguagem de programação. A melhor parte desta biblioteca é que eles seguem projeto O.O(Orientação a objetos) de forma extremamente eficiente 
(padrões de projeto), tornando seu acesso e uso muito simples e previsível. 
Você pode usar as classes no FCL em seu programa, assim como você usaria qualquer outra classe. 
Você pode até mesmo aplicar a herança e polimorfismo a essas classes.

## The Common Language Specification (CLS)

Anteriormente, foi utilizado o termo "linguagem .NET Compliant" e afirmei que todas as línguas compatíveis .Net podem fazer uso 
do CLR e FCL. Mas o que torna uma linguagem  ".Net compliant"? 

A resposta é a Common Language Specification (CLS). A Microsoft lançou um pequeno conjunto de especificações que cada língua 
deve cumprir para se qualificar como uma .Net Compliant Language. 

Como IL é uma linguagem muito rica, não é necessário para uma linguagem implementar toda a funcionalidade IL; 
em vez disso, apenas precisa possuir um pequeno subconjunto de CLS para se qualificar como uma linguagem compatível com o .NET. 
Esta é a razão pela qual tantas línguas (processuais e O.O) estão agora rodando sob o guarda-chuva .Net. 
CLS basicamente aborda questões de design de linguagem e estabelece certas normas. 
Por exemplo, não deve haver quaisquer declarações globais de função, sem ponteiros, sem herança múltipla e coisas assim. 
O ponto importante a notar aqui é que se você manter seu código dentro do limite do CLS, seu código é garantido para ser 
utilizável em qualquer outra linguagem .NET.

## The Common Type System (CTS)

.Net também define um Common Type System (CTS). 
Como CLS, CTS é também um conjunto de normas. CTS define os tipos de dados básicos que IL entende. 
Cada linguagem compatível com .NET deve mapear seus tipos de dados para estes tipos de dados serem padrão. 
Isto faz com que seja possível que duas línguas 2 possam comunicar entre si umas com as outras através da passagem / recebimento de
 parâmetros de um para a outra. Por exemplo, CTS define um tipo, Int32, 
 um tipo de 32 bits (4 bytes) que é mapeado pelo C# através de int e pelo VB.Net por meio de seu tipo de dados inteiro que é o Integer.
 
## Garbage Collection (GC)

CLR também contém o coletor de lixo (GC), 
que é executado em um segmento de baixa prioridade e verifica se há, espaço de memória alocada 
dinamicamente un-referenced(Sem referência). Se ele encontrar alguns dados que não são mais referenciados por qualquer variável / 
referência, ele avisa ao S.O que deve ser limpado aquela região. A vantagem do GC é que o programador não precisa se preocupar com a 
codifcação do mesmo para limpar a memória do S.O que o seu software estiver usando. 
Pergunte a qualquer programador C++ como isso é um grande alívio!

## The .Net Framework

O .NET Framework é a combinação de camadas de CLR, FCL, Dados e classes XML e o Windows, aplicações Web e Web Services. 
Um diagrama do .Net Framework é apresentado a seguir para melhor compreensão:

![Imagem que demonstra o diagrama do .Net]({{base.url}}/img/post/cursos/c_sharp/introducao/diagrama-do-net.png){: .responsive-img}

## C# em comparação com C++

Em termos de desempenho e eficiência no uso de memória e outros recursos, C++ faz outclass no C#. 
Mas o desempenho e a única medida quando se trata de escolher um ambiente de desenvolvimento? Não! 

C++ é sem dúvida uma linguagem muito complexa, abstrata e de baixo nível para se programar. 
Carrega o programador com muitas responsabilidades e muito menos apoio. 
Outro problema com o C++ é que ele é muito vasto comparado com outras linguagens em sua essência; 
por exemplo, para lidar com os dados na memória você pode usar variável, ponteiro ou referência.
 
 C# em seu núcleo é uma linguagem moderna e poderosa muito simples, mantendo em mente a experiência de desenvolvedores 
 ao longo dos anos e suas necessidades atuais. 
 Uma das maiores preocupações no mercado de corporações é fazer com que programas sejam reutilizáveis, de fácil manutenção, 
 escalável, portátil e fácil de depurar. C# trata direito com estas questões. 
 Cada desenvolvedor C++ sabe o quão difícil é gerir um programa de C++ e depurá-lo. 
 Ele pode ser um pesadelo para encontrar a razão pela qual um programa trava aleatoriamente. 
 A única razão para isso, para mim, é a maldição de compatibilidade com versões anteriores. 
 Eles fizeram C++ na estrutura C, uma linguagem de programação estruturada, por isso nunca se 
 tornou uma verdadeira linguagem de programação orientada a objetos, 
 e se o compilador me permite ir na forma estruturada, quem é você para me fazer ter uma abordagem orientada? 
 Também Bjarne Stroustrup, o fundador do C++ disse, "C++ é uma linguagem multi-paradigma não é só O.O". As principais vantagens do uso de C # incluir suporte para o Common Language Runtime, biblioteca de classe Framework, e uma limpeza orientada a objetos de design novo, livre da maldição-compatibilidade com versões anteriores.

![Imagem que demonstra a CLR do .NET]({{base.url}}/img/post/cursos/c_sharp/introducao/demo_msil.png){: .responsive-img}


## Continua...

Então, o que achou do post? fiquem ligados no [próximo post](next) e deixe o seu comentário abaixo :). 
