---
layout: post
title:  "AOC - U2S3 - Atividade Diagnóstica - Encontro 4"
date: 2016-05-29 15:31:21 -0300
summary: "Arquitetura e organização de computadores - Pos Aula"
color: orange
tags: [Arquitetura e organização de computadores, Anhanguera, AVA]
category: Faculdade
---

# Atividade Diagnóstica - U2S3 - Encontro 4 - Pos aula

## Para estudo complementar - U2S4 - Atividade de Aprendizagem

**1)** Existem diversos dispositivos de entrada e saída. A cada dia surgem novos equipamentos que fazem a entrada e saída de dados. Os elementos de um computador que garantem a ligação do processador com o mundo externo constituem um sistema de entrada e saída, onde temos além dos dispositivos de entrada e saída:

Escolha uma:

- a. Barramentos e Interface.
- b. Barramento de sistema e Interface.
- c. Barramentos e USB.
- d. PCI Express e USB.
- e. Chipset e PCI.

> **Correto: a. Barramentos e Interface.**{: .orange}

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Anuncio Index Page -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7123972893709158"
     data-ad-slot="2188606626"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

**2)**Em um computador há a necessidade de que a CPU se comunique com a memória principal (RAM) e com os dispositivos de E/S para a transferência de dados. São métodos para gerenciar a entrada e saída de dados:

I - Entrada e saída programada.

II - Entrada e saída controladas por interrupção.

III - Entrada e saída controlada por processamento.

IV - Acesso direto à memória.

Estão corretas as alternativas:

Escolha uma:

- a. I e II.
- b. I, III e IV.
- c. I, II e IV.
- d. II e III.
- e. I e IV.

> Diversas formas de comunicação entre CPU e memória principal foram
propostas, as quais sofreram melhorias ao longo do tempo, buscando sempre
alcançar uma melhor utilização da CPU e um melhor desempenho para o sistema
como um todo. Murdocca (2001) destaca três métodos para gerenciar a entrada
e saída:

> - Entrada e saída programada:
Neste método, a CPU precisa verificar continuamente se cada um dos
dispositivos necessita de atendimento. Este método não é mais utilizado
(MURDOCCA 2001).

> - Entrada e saída controladas por interrupção: Este método possibilita que a CPU não fique presa em espera ocupada
até que um dispositivo esteja pronto para realizar a transferência de dados
propriamente dita. Embora este método tenha sofrido melhorias e não é
mais utilizado (MURDOCCA 2001).

> - Acesso direto à memória (DMA – Direct Memory Access): A função do controlador (ou interface) é controlar seu dispositivo de E/S
e manipular para ele o acesso ao barramento. Quando um programa quer dados do disco, por exemplo, ele envia um comando ao controlador de
disco, e este controlar irá emitir comandos de busca e outras operações 
Componetes básicos de um computador Componetes básicos de um computador U2 55 necessárias para que ocorra a transferência (TANENBAUM, 2007).

> Dessa forma, a CPU solicita a transferência para um dispositivo denominado
controlador de acesso direto à memória principal (DMA Controller), o qual
se responsabiliza totalmente pela transferência. A CPU é avisada apenas no
início e no final da operação de transferência entre dispositivo e memória
principal. Este é o tipo de acesso utilizado atualmente pelas interfaces de E/S
(FÁVERO, 2011).

> **Correto: c. I, II e IV.**{: .orange}

**3)**Em um sistema computacional onde é feita a entrada de dados, o processamento e o retorno de dados processados, o termo “periférico” aplica-se a:

Escolha uma:

- a. Dispositivos conectados ao computador por USB.
- b. Dispositivos de entrada de dados.
- c. Dispositivos de saída de dados.
- d. Dispositivos de entrada e saída de dados.
- e. Dispositivos que contenham placas para instalação.

> Existem diversos dispositivos de entrada e saída que também são chamados de
periféricos. 

> **Correto: d. Dispositivos de entrada e saída de dados.**{: .orange}

**4)**O barramento que interliga a CPU aos componentes e dispositivos de um computador, componentes de entrada e saída, memórias auxiliares e de armazenamento é:

Escolha uma:

- a. Barramento de sistema.
- b. Barramento de endereços.
- c. Barramento de controle.
- d. Barramento de dados.
- e. Barramento local.

> - Barramento de controle: 
Interliga na CPU à Unidade de Controle aos componentes e dispositivos
de um computador, componentes de entrada e saída, memórias auxiliares e
de armazenamento, entre outros. Por trabalhar com componetes externos ao
processador, pode ser chamado também de barramento externo (MONTEIRO, 2007).

> **Correto: c. Barramento de controle.**{: .orange}

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Anuncio Index Page -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7123972893709158"
     data-ad-slot="2188606626"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

**5)**Os periféricos de E/S possuem diferentes velocidades de transmissão e por este motivo eles não se conectam diretamente à CPU do computador. Dessa forma, os dispositivos são conectados à placa-mãe, através de suas interfaces, normalmente, placas que contêm diversos componentes. O componente eletrônico responsável pela sincronização entre a velocidade dos dispositivos de Entrada e Saída e a velocidade dos barramentos e da CPU do computador é:

Escolha uma:

- a. Chipset.
- b. Interface.
- c. EPROM.
- d. Registrador.
- e. Processador.

> Os periféricos de E/S possuem diferentes velocidades de transmissão e por este
motivo não se conectam diretamente à CPU do computador. Dessa forma, os
dispositivos são conectados à placa-mãe através de suas interfaces, normalmente
placas que contêm diversos componentes, incluindo o chipset, responsável pela
sincronização entre a velocidade dos dispositivos e a velocidade dos barramentos
e da CPU do computador. 

> **Correto: a. Chipset.**{: .orange}

**6)**O padrão de barramento de conexão desenvolvido que tem a característica particular de permitir a conexão de muitos periféricos simultaneamente ao barramento e por uma única porta (conector), que se conecta à placa-mãe é:

Escolha uma:

- a. PCI Express.
- b. AGP.
- c. USB.
- d. ISA.
- e. PCI.

> USB (Universal Serial Bus): tem a característica particular de permitir a conexão
de muitos periféricos simultaneamente ao barramento e por uma única porta
(conector), conecta-se à placa-mãe. Grande parte dos dispositivos USB é
desenvolvida com a característica de eles serem conectados ao computador e
utilizados logo em seguida, o que é chamado de plug-and-play (FÁVERO, 2011).

> **Correto: c. USB.**{: .orange}