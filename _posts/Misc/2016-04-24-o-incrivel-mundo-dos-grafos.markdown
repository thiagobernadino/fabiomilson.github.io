---
title: O Incrível mundo dos grafos
layout: post
date: 2016-04-24 23:32:01 -0300
summary: "O mundo dos grafos de forma resumida por quem cursa S.I"
color: orange
tags: [Faculdade,Ciência da Computação, Sistemas de Informação]
category: Misc
image: "/img/post/tumbnails/incrivel_mundo_grafos.png"
---
# Grafos

Então o que diabos são grafos?  
Seguinte, antes de falarmos sobre grafos, vou deixar claro o intuito desta postagem, repare também a cor desse post, que em sua maioria é laranjado, certo? Pois é, esta é a cor que leva a faculdade a qual eu estudo 
[Anhanguera \- Facnet](http://anhanguera.com){: .external-link}{: target="_blank"} , e o intuito desta postagem é compartilhar o conhecimento ganho em sala de aula.

## Então vamos la!

  - Conceitos
  - Aplicações
  - Representação

Está pequena lista são as principais chaves dentro do mundo dos grafos, e é de suma importância ter em mente ao menos essas três representações para se sair bem com grafos, pois é atráves desse entendimento que você será capaz de entender de forma coerente o por que de se aplicar grafos ( uma aplicação de matemática discreta ) aos sistemas de informação(**S.I**), compreender e relacionar esses conceitos lhe trará grandes vantagens aos demais em cima das linguagens de programação.

### Problematizando a aula

Vamos ao que interessa, vamos a um desáfio lógico que nós levará ao mundo dos grafos:

>A rede de  Fábricas Thing  produzem couros de vários tipos e para isso é necessário a distribuição da matéria prima entre a rede de fábricas. 
O administrador da empresa está buscando um programa que reduza os gastos com o combustível utilizado no transporte da matéria prima entre as fábricas. Então solicitou ao departamento de informática da empresa, que indicasse qual seria o melhor trecho, em que o caminhão iria a todos os seus destinos, sem passar duas vezes pelo mesmo caminho (vias urbanas), sendo que teria que cumprir o itinerário, descrito na figura abaixo, ou seja passar por todas as vias urbanas descritas na figura.

>**Dica**: Passe o lápis, como se fosse o caminhão da fábrica por todos os trechos marcados na figura, sem levantar o lápis do papel e sem passar duas vezes pelo mesmo caminho(vias urbanas).
Descreva a estratégia  que o levaram a conseguir resolver o desafio.

![Alt Imagem representativa do problema com grafos, onde se tem cinco fábricas com duas possibilidades possíveis de se resolver]({{ base.url }}/img/image_grafos_exercicio_1.png)

---
Então conseguiu resolver o problema?
Acompanhe logo abaixo uma das soluções possíveis

- A mais fácil é começando pelo número 2, a outra forma é começando pelo número 1, fora essas duas formas, não há outra maneira conhecida de se resolver (começando por 3, 4, 5 ).
![Alt Imagem representativa do problema com grafos, onde se tem cinco fábricas com duas possibilidades possíveis de se resolver]({{ base.url }}/img/solucao_grafo.gif)

## Mundo dos grafos

Os grafos possuem Arestas (**laços / arcos**), que no exemplo acima são as vias, e os vértices (**nós**), que no exemplo acima são os locais das fábricas. Com isso podemos perceber que existe certa semelhança com a matemática em si, e isso é uma verdade, grafo é um ramo da matemática que estuda as relações de um determinado conjunto, onde podemos representar da seguinte forma:

- G=>{V, A}
- Onde **V** = _Nós_
- Onde **A** = _Arcos_

Usando o exemplo acima, obtemos os seguintes conjuntos:

- V = {1,2,3,4,5} -> Seus respectivos Nós / Vértices
- A = {a1,a2,a3,a4,a5,a6,a7,a8} -> Seus respectivos Arcos / Arestas

Com isso temos um grafo que se relaciona com os seus Vértices e Arestas:

- G = {a1(1-2);a2(2-3)...a8}
- Repare que a aresta **a1** se liga com os nós **1** e **2** e cada aresta seguinte possui o seu ponto de ligação, seu(s) nó(s).

Visto isso é bom fresar que existem outros tipos de vértices:

- Vértice isolado = _Trivial_
![Alt Imagem que representa um vértice sozinho com um grafo]({{ base.url }}/img/grafo_vertice_sozinho.png){: .responsive-img}

- Possuímos o laço que ocorre quando o vértice está ligado a ele mesmo:

![Alt Imagem que representa um vértice ligado a ele mesmo com um grafo]({{ base.url }}/img/grafo_vertice_ligado_ele_mesmo.png)

### Regras básicas

Para se determinar um grafo, entre simples e completo, devemos ficar atento a algumas regras:

- Grafos simples 
    - Não pode possuir laço.
    - Possuir arcos paralelos.
    - Possuir número par de arestas.
- Granfo completo
    - Deve ser simples.
    - Todos os vértices tem que ter o mesmo grau.

#### Graus e Vértices adjacentes

| Vértice        | - Vértice adjacente  -| Grau |
| -------------- |:------------------:| ------:|
| 1  | 2,3,4 |  3 |
| 2  | 1,3,4 | 3|
| 3  | 1,2,4,5 | 4|
| 4  | 1,2,3,5 | 4|
| 5  | 3,4 |2|

Voltando ao exemplo dado no início do post, ao pegarmos o vértice **1** podemos descobrir quem é adjacente (_**posto ao lado de; junto, pegado**_) a ele através das arestas que ligam esse vértice (_caminho que percorrem_), observem então que o Vértice **1** ele se liga com os vértices **2,3,4** tornando os adjacente ao vértice **1** e o grau é justamente a quantidade de vértices que o vértice em analise se liga, nesse caso vértice **1** possui ligação com outros **3** vértices, tornando-o grau **3**.

#### Exercícios para praticar

- 1) Pode haver um grafo simples com 15 vértices, cada um com grau 5?

- 2) Observe o Grafo e responda:

![Alt Imagem que representa o exercicio a ser resolvindo contem um vértice isolado com a númeração 5 e outros 4 vértices começando pelo número 2 onde estão todos interligados 2 com 4 e 6, 4 com 2 e 6, 6 com 2,4,3]({{ base.url }}/img/grafo_exercicio_1.png)

	

- 3) Desenhe a representação geométrica do seguinte grafo:
    - V={1,2,3,4,5,6}
E={(1,2) (1,3) (3,2) (3,6) (5,3) (5,1) (5,6) (4,6) (4,5) (6,1) (6,2) (3,4)}


Então pessoal por hoje é só, até a próxima :)
