---
layout: post
title:  "Trabalhando com GUI"
date: 2016-05-28 16:44:21 -0300
summary: "Trabalhando com interface gráfica do usuário"
color: green
tags: [Youtube,Game Maker, Desenvolvimento de Jogos]
category: Cursos
image: "/img/post/tumbnails/game_maker_default.png"
---

# Game Maker - Interface Gráfica do Usuário (GUI)

Então pessoal ao iniciar Game Maker: Studio será mostrado a seguinte tela:
![Imagem que demonstra abertura inicial do game maker]({{base.url}}/img/post/game_maker/loadupscreen.png){: .responsive-img}

Na parte superior da tela de start-up geral, você pode ver que há nove guias: Welcome(Bem vindo), Abrir ( Open), Novo(New), Importação(Import), Notas da Versão(Release Notes), Demonstrações(Demos), Tutoriais(Tutorials), Novidades(News) e Licenças(Licenses).

Logo abaixo encontrará um breve resumo da função de cada uma dessas guias:

**Welcome(Bem-vindo)**: Esta é a tela de inicialização que você vê quando abre GameMaker: Studio. Logo Abaixo você tem uma lista de arquivos abertos anteriormente(Projetos).

**Open(Abrir)**: Aqui você pode procurar no computador para abrir arquivos(Projetos).

**New(Novo)**: Esta opção vai pedir para você selecionar o diretório que você deseja usar para um novo projeto e solicitará que você digite um nome para este projeto, que é então guardado e aberto no GameMaker: Studio.

**Import(Importação)**: Com essa opção você pode carregar os arquivos * projeto .gmz comprimido e também importar arquivos de jogos criados com outras versões do GameMaker, incluindo GameMaker 6 (* .gm6), GameMaker 7 e 8 (* .gmk e * .gm81), bem como GameMaker 8,1 (* .gm81) e arquivos muito mais velhos (* .gmd). Nota-se, que os arquivos mais velho é menos provável que eles vá funcionar com toda sua funcionalidade devido às mudanças feitas no GameMaker ao longo dos anos. Além disso, você pode carregar arquivos de backup GameMaker (* .gb1, * .gb2 etc) a partir desta guia também.

**Release Notes(Notas de Lançamento)**: Se você clicar neste botão, você pode ver as notas da versão para cada versão lançada do GameMaker: Studio. Estas notas detalha todas as correções de bugs e mudanças que foram incorporadas ao programa e dizer-lhe qual a versão que você está usando atualmente.

**Demos(Demonstrações)**: Isto irá permitir que você visualize arquivos de demonstração que vêm com GameMaker: Studio. Demos são diferentes dos tutoriais, os tutoriais se concentram em explicar apenas uma função ou conceito ao invés de dar uma visão geral, e como tal é recomendável que você tenha um conhecimento de como o GameMaker: Studio e GML trabalham antes de abrir esta guia.

**Tutorials(Tutoriais)**: Esta guia mostra uma seleção de tutoriais que vêm com GameMaker: Studio. Estes são concebidos como uma introdução ao uso GameMaker: Studio e recomenda-se que os novos usuários procurem- o antes de iniciar qualquer novo projeto. Tal como acontece com as Demos.

**News(Novidades)**: Isto irá mostrar as mais recentes notícias da empresa responsável pelo game maker, YoYo Games.

**Licenses(Licenças)**: Esta guia irá exibir o GameMaker: License Studio, bem como todas as várias licenças de terceiros de produtos que são utilizados.
Abaixo das abas, há uma seção com dicas, sugestões e serviços relacionados com GameMaker: Studio, que pode percorrer usando os ícones de seta de cada lado, e mais abaixo você vai ver listado os projetos que você já os abriu para que você pode rapidamente voltar para o trabalho de onde parou anteriormente.

## A Interface

A Gui:
Uma vez que você carregar ou criar seu projeto e no
 GameMaker: Studio a GUI principal será mostrada e é 
 algo como isto:
 ![Imagem que demonstra abertura inicial da Gui do game maker]({{base.url}}/img/post/game_maker/gui_image.png){: .responsive-img}
 
 Esta é a principal interface do Game Maker: Studio e é aqui que você controla todos os aspectos do seu projeto atual. À esquerda, você pode ver os diferentes recursos mencionados em outras seções do manual: Sprites, sons, Fundos, caminhos, scripts, fontes, linhas de tempo, Objetos, a Global Game Settings e, finalmente, Extensions.
 
Na parte superior da janela, existe o menu e uma barra de ferramentas à mão para acessar alguns dos comandos mais utilizados ao criar um jogo.
Vamos discutir brevemente os vários itens do menu, botões, etc ... 

## Árvore de recursos

À esquerda a principal você encontrará a árvore de recursos. Nela você vai ver uma "árvore" com todos os recursos em seu jogo. Ela funciona da mesma forma como o Windows Explorer, e você ja deve ser familiarizado com a forma de como ele funciona.
Se um item tem um sinal de + na frente dele você pode clicar no sinal e ver os recursos dentro dele (expandi-lo). Ao clicar sobre o - estes desaparecem novamente (recolhê-la).

Você pode mudar o nome de um recurso (exceto os de nível superior que mostram o tipo de recurso contidos), selecionando-o uma vez com um único clique, em seguida, dando uma outra único clique sobre o nome mais de uma vez. Clicando duas vezes em um recurso abrirá automaticamente suas propriedades onde você poderá editar e mudar as coisas relacionadas a ele. Use o botão direito do mouse para abrir uma janela de contexto específico que contém os mesmos comandos como se encontra no menu Editar.

Você pode alterar a ordem dos recursos clicando em um recurso específico e, em seguida, arrastando-o para o local apropriado dentro de seu grupo de recursos. Você também pode filtrar a árvore de recursos para mostrar apenas as coisas que são de seu interesse para utilizar a busca/filtro seleciona as opções na parte inferior:

![Imagem que demonstra a arvore de recursos do game maker]({{base.url}}/img/post/game_maker/gui_search.png){: .responsive-img}

## Barra de Ferramentas

A barra de ferramentas no Game Maker: Studio contém botões para criar cada um dos recursos que você vê presente em seu , bem como uma seleção de botões adicionais para criar um novo projeto, abra um projeto existente, salvar um projeto, criar um arquivo executável (exportar um projeto final) , abri um configurações globais de jogo e extensão de pacotes, bem como a abertura do arquivo de Ajuda. Todos estes comandos também podem ser acessadas através dos menus drop-down ou usando certos "hot key" (combinações).
Há dois botões de nota aqui, porém, uma vez que não estão presentes em nenhum outro lugar no Game Maker: GUI Studio:

![Imagem que demonstra o botão de parar compilação de recursos do game maker]({{base.url}}/img/post/game_maker/nginxstop.png){: .responsive-img}
Este botão pode ser usado para cancelar a compilação dos seus jogos para o módulo de destino, ou (em certas metas só) para parar o jogo, enquanto ele estiver sendo executado depois de ter sido compilado.

![Imagem que demonstra o Limpar Projeto Ativos (Compilar Cache) do game maker]({{base.url}}/img/post/game_maker/clear_cache.png){: .responsive-img}
Pressionar esse botão irá limpar o cache do compilador ativo circulante. GameMaker: Studio armazena imagens, sons, os scripts etc ... entre o uso de um cache para poupar tempo quando for testar o seu jogo, pois ele só vai voltar a compilar as coisas que foram alteradas antes do teste. No entanto, esse cache pode ficar corrompido ao longo do tempo, ou você pode querer fazer um teste completo com nenhum cache feito anteriormente.


## Meu canal no youtube

Em [meu canal do youtube](http://youtube.com/packtudo) leciono gratuitamente aulas de game maker, assiste la :)

Por fim é isso, crítica e sugestões, deixe nos comentários ^^