---
layout: post
title:  "Instalando o Game Maker Studio"
date: 2016-05-23 10:53:21 -0300
summary: "O mundo mágico da criação de jogos em 2D"
color: green
tags: [Youtube,Game Maker, Desenvolvimento de Jogos]
category: Cursos
image: "/img/post/tumbnails/game_maker_default.png"
---

# Como instalar o Game Maker Studio

Vamos aos Requisitos de instalação e sistema, instalando GameMaker: Estúdio para uso pessoal.

Se a sua versão do GameMaker: Studio não é a versão comprada através da Steam, 
você vai precisar executar o programa GMStudio-Installer.exe que pode ser baixado facilmente
pelo [site oficial da yoyo games](http://www.yoyogames.com/){: .external-link}{:target="_blank"} e siga as instruções na tela para instalar, é recomendável que você deixe as sugestões padrão de instalação. Quando a instalação estiver concluída, no menu Iniciar você vai encontrar um novo grupo de programas onde você pode executar o GameMaker: Studio.

> NOTA: Se você comprou GameMaker: Studio através do Steam, o programa deve instalar automaticamente, dando-lhe a opção de criar um ícone de menu iniciar e um ícone no desktop. Qualquer um destes pode ser usado para executar o programa no seu computador.

## Requisitos básicos

Qualquer computador que está a menos de cinco anos de idade deve ser capaz de executar o GameMaker: Studio sem qualquer problema, mas aqui estão as especificações mínimas para o seu PC para usar o programa, em seguida, as especificações necessárias para cada um dos módulos adicionais que você pode ter.

> IMPORTANTE: O SDK necessário e O.S dado para cada plataforma pode ser diferente no momento do uso, devido a alterações feitas entre as atualizações para GameMaker. Você sempre pode encontrar os mais recentes requisitos do game maker no HelpDesk da YoYo Games [clicando aqui](http://help.yoyogames.com/entries/91625158).

### Windows

GameMaker: Studio requer um PC razoavelmente moderno com o Windows XP, Vista, 7 ou superior. Um DirectX 9 (ou posterior) placa gráfica compatível com, pelo menos, 32 MB de memória. Ele exige uma resolução de tela de pelo menos 1024x768 e 65.536 cores (16 bits) (mas de preferência de 32 bits com true color). Também um DirectX 9, Placa de som compatível, ou chip de som integrado, é necessário. É sempre recomendável que você verifique se você tem os drivers mais recentes instalados para o seu sistema.

GameMaker: Studio requer DirectX versão 9.0 ou superior para ser instalado no seu computador. (Você pode baixar esta versão do DirectX a partir do site da Microsoft em: [http://www.microsoft.com](http://www.microsoft.com){:target="_blank"}) Na compilação e teste de jogos, os requisitos de memória pode ser bastante elevado (pelo menos 128 MB e de preferência mais, mas isso depende no sistema operacional). Quando apenas testar jogos, os requisitos de memória são menos graves e dependem muito do tipo de jogo, bem como os recursos que estão sendo utilizados.

> NOTA: Embora a maioria dos PC's modernos já contam com DirectX 10 e superior, isso não significa que o DirectX 9 está presente em sua máquina, e você ainda deve instalá-lo a partir do link dado acima!

> Por favor, note que os usuários do Steam também têm uma meta adicional para a compilação de jogos que é o Steam Workshop. Ao criar e testar o seu jogo, este módulo de destino irá funcionar exatamente do mesmo modo que o módulo padrão do Windows, no entanto, quando efetuar a criação do seu executável final lhe será mostrado opções adicionais para enviar o jogo diretamente para o Steam. Mais informações podem [ser encontradas aqui](http://docs.yoyogames.com/source/dadiospice/000_using%20gamemaker/steam%20workshop.html).

### Windows 8

A versão Professional do GameMaker: Studio vem com as plataformas de destino do Windows 8 nativos e JavaScript como alvos adicionais para de forma livre. Estes objetivos requerem um sistema operacional Windows 8 para executar (e para testes), e isso pode ser o principal sistema operacional ou um sub-sistema operacional ao qual você pode fazer um dual boot com o Windows 7 (ou qualquer outro sistema operacional que você escolher), no entanto não é possível criar uma aplicação final para Windows 8 fora desse sistema operacional.

Você também vai precisar se certificar de que tem o Microsoft .Net Framework 3.5 instalado (.Net 4 é instalado como padrão com o Windows 8, mas pode ser necessário instalar a versão anterior também) que está disponível [aqui](http://www.microsoft.com/en-us/download/details.aspx?id=21){: .external-link}, embora quando você instalar o GameMaker: studio no Windows 8 O.S esta parte deverá acontecer automaticamente.

Outra coisa que é necessária é uma cópia do Microsoft Visual Studio que pode ser [encontrado aqui](http://www.visualstudio.com/downloads/download-visual-studio-vs){: .external-link}. Você só deve usar o VS 2012 (as versões Express funcionam muito bem), por isso mesmo se você tiver uma versão anterior do Visual Studio, não vai funcionar com este módulo. Uma versão deste produto que suporta a criação de aplicativos Windows Store JavaScript é essencial como você vai precisar dele para criar o arquivo * .pfx que é sua chave de desenvolvedor e precisava submeter seus aplicativos e jogos para Windows Store.

O GameMaker: Studio Windows 8 com módulo de exportação irá criar um aplicativo especifico para o Windows 8, e será compatível com muitas das características únicas que este sistema operacional oferece ao usuário. No entanto, se você deseja publicar este jogo através da Microsoft Store para Windows, você deverá ter uma Licença Microsoft Developers que está disponível ao se inscrever para uma [conta aqui](http://msdn.microsoft.com/en-us/windows/apps/br229512.aspx){: .external-link}. Há um pequeno custo envolvido em registrar para esta conta e você precisa ter uma conta bancária e de cartão de crédito válidos para ser capaz de rentabilizar todos os apps que você enviar para a loja.

Outras informações sobre a configuração dos módulos do Windows 8 pode ser encontrado no [Helpdesk YoYo Games](http://help.yoyogames.com/entries/22182733){: .external-link}.

## Módulos adicionais
Os módulos acima são incluídos como padrão para todas as versões do GameMaker: Studio, mas os seguintes módulos estão disponíveis apenas para aqueles que têm atualizado para a versão Professional (mais informações sobre as diferentes versões do GameMaker: Studio pode ser encontrada [aqui](http://docs.yoyogames.com/source/dadiospice/000_using%20gamemaker/versions.html){: .external-link}).

### Mac OS X

Para usar o módulo de destino Mac OS X, você precisará ter um computador Mac com um chipset Intel e funcionando no minimo Mavericks (OSX 10.9) OS ou superior. Você também vai precisar baixar e instalar o Xcode para a sua versão do OS (Xcode versão mínima 6). É geralmente recomendado que você use o mais recente OS X e as últimas atualizações do Xcode.

Outras informações sobre a configuração do módulo de Mac OS X pode ser encontrado na [Helpdesk YoYo Games](http://help.yoyogames.com/entries/42365238){: .external-link}).

### Ubuntu (Linux)

O módulo Linux é projetado para ser compatível com o sistema operacional Ubuntu, e, embora ele deve funcionar com outros sistemas Linux, só é garantido para trabalhar com as últimas versões deste sistema operacional popular.

Outras informações sobre a configuração do módulo Ubuntu pode ser encontrado na [Helpdesk YoYo Games](http://help.yoyogames.com/entries/23167703){: .external-link}.

### iOS

O GameMaker: Studio módulo iOS requer que você tenha um computador Mac (ou pelo menos o acesso a um) e que cumpra os requisitos mínimos para o módulo de destino MacOSX (visto acima) e você deve ser um desenvolvedor da Apple registrado e ter todos os certificados e licenças até à presente data. Para mais informações sobre como se tornar um Apple Developer registrado e como obter os certificados necessários, por favor [visite o site Apple Developer aqui](https://developer.apple.com/){: .external-link}.

Quase todos os dispositivos iOS são compatíveis com GameMaker: Studio, incluindo:

- iPhone 4, 4S, 5, 5C, 5S, 6, e 6plus
- iPad 1 e acima
- iPod Touch 3ª Geração e superior
- Também não importa se você está testando em um iPhone ou um iPad, todos os projeto iOS criado por GameMaker: Studio são, como padrão, aplicativos universais. Isso significa que eles serão executados em ambos os dispositivos iPhone e iPad sem problemas.

Outras informações sobre a configuração do módulo de iOS pode ser encontrado no [Helpdesk YoYo Games](http://help.yoyogames.com/entries/66308323){: .external-link}.

### Android e Amazon Fire

Antes de realmente começar a trabalhar com GameMaker: Studio e Android ou Amazon Fire, vale a pena notar que os dispositivos que vai receber o seu jogo variam imensamente em capacidade de processamento. O GameMaker: Studio  só funciona com Android 2.3 (Gingerbread) e superior (Nível da API 9 e superior no SDK do Android), que abrange a maioria dos dispositivos ao redor do mundo, mas não todos eles, portanto, verifique e certifique-se qual versão do Android o dispositivo seu jogo será compilado. Recomenda-se também que o dispositivo tenha uma GPU dedicado com OpenGL versão 1.1 ou superior. Dispositivos sem uma GPU ainda irão executar o seu GameMaker: Project, mas irão sofrer severas queda no desempenho. O alvo Amazon Fire suporta todos os aparelhos de TV Fire, a Fire Stick, e todos os Fire Tablets.

Você também vai precisar fazer o download do SDK do Android, como GameMaker: Studio requer alguns dos componentes das diferentes versões do Android e as ferramentas da plataforma. Você pode obter uma [cópia do SDK aqui](http://developer.android.com/tools/sdk/ndk/index.html){: .external-link}. se você também estiver usando o YoYo Compiler (YYC), então você também precisará instalar uma cópia do NDK Android que pode ser [encontrado aqui](http://developer.android.com/tools/sdk/ndk/index.html){: .external-link}.

Outras informações sobre a configuração do módulo Android pode ser encontrado no [Helpdesk YoYo Games](http://help.yoyogames.com/entries/23363366){: .external-link}.


### HTML5

O módulo de exportação HTML5 requer apenas um navegador compatível com HTML5. Nota-se que embora a maioria dos navegadores modernos são capazes de executar jogos HTML5, nem todos eles suportam o padrão WebGL atualmente, por isso recomendo o Chrome para testar.

Outras informações sobre a configuração do módulo de HTML5 pode ser encontrado no [Helpdesk YoYo Games](http://help.yoyogames.com/entries/22899003){: .external-link}.

### Windows Phone

Criação de jogos para o módulo Windows Phone requer que você tenha instalado o Windows Phone SDK 8.0 ([download aqui](http://dev.windowsphone.com/en-us/downloadsdk){: .external-link}). Você também vai precisar de um PC Windows 8 com as seguintes especificações:

- Windows 8, 64 bits. Um sistema de 32 bits não é suportado.
- Mínimo de 4 GB de RAM
- 6.5GB de espaço em disco
- se você não tiver um dispositivo Windows Phone, você pode fazer uso do emulador de Windows Phone, no entanto estará ciente de que estes requisitos adicionais também se aplicam neste caso:
- Windows 8 Professional ou Enterprise Edition
- Virtualização de hardware
- Segundo Nível Address Translation (SLAT)
- DHCP, assim a máquina virtual poderá obter um endereço IP na rede local

> NOTA: O SDK do Windows Phone também irá instalar o Microsoft Visual Basic Express para Windows Phone, bem como, não há necessidade de instalá-lo separadamente.

Outras informações sobre a configuração do módulo de Windows Phone pode ser encontrado na [Helpdesk YoYo Games](http://help.yoyogames.com/entries/22446671){: .external-link}.


### Tizen

O módulo de destino Tizen é obrigatório que você tenha certeza de cumprir os pré-requisitos antes de ser usado, o mais importante deles é que você deve ter instalado o Tizen SDK ([disponível SDK aqui](https://developer.tizen.org/downloads/tizen-sdk){: .external-link}).

> AVISO: O atual Tizen SDK não funciona no Windows 8, de modo que você precisa ter um sistema operacional anterior instalado na máquina de desenvolvimento (você pode ter um dual boot para o Windows XP, Vista ou 7). Observe também que o SDK de 64 bits pode não funcionar, mesmo se seu sistema operacional é de 64 bits, portanto, em caso de dúvida, você deve escolher a versão de 32 bits.

Você também vai precisar dos seguintes requisitos:
- CPU dual-core de 2 GHz
- Pelo menos 2 GB de memória RAM
- Pelo menos 3 GB de espaço livre em disco
- Oracle Java JDK (v6 ou superior) instalado (não use OpenJDK)
- Se você não tem acesso a um dispositivo Tizen, você pode ser capaz de usar o Tizen Emulator, no entanto você também deve atender aos seguintes requisitos para que ele funcione corretamente:
 - A CPU que suporta Intel VTX
 - Resolução de tela de pelo menos 1280 x 1024
 - Os mais atualizado drivers gráficos para aceleração OpenGL ES

Outras informações sobre a configuração do módulo de Tizen pode ser encontrado no [Helpdesk YoYo Games](http://help.yoyogames.com/entries/25022406){: .external-link}.

### O YoYo Compiler (YYC)

O YYC leva o GameMaker normal: para uma saída de Studio e, em seguida, compila isso em código nativo para a plataforma de destino, "suprime" as funções desnecessárias e executa uma série de outras técnicas de otimização para criar um executável de melhor desempenho. Isso pode aumentar o desempenho de jogos por pelo menos duas ou três vezes, especialmente em jogos de lógica-pesado, e dá um impulso absurdo e incrível para o desempenho, ideal para aqueles jogos intensivos que precisam de mais CPU.

O YYC é realmente uma série de módulos separados, um para cada destino disponível, e será disponibilizado para você quando você receber qualquer módulo de destino suportado. Então, se você tem, por exemplo, os módulos Android iOS e, em seguida, você verá dois novos módulos adicionados à sua lista de alvos além dos standard - iOS (YYC) e Android (YYC). Se você receber outros módulos em uma data superior, o YYC irá atualizar e também mostrar um módulo adicional (YYC) para essa plataforma de destino.

> NOTA: O YYC não está disponível para o alvo HTML5, nem qualquer módulo que são baseados JavaScript (JS).


## O GameMaker: Player

Não importa qual a versão do GameMaker: Studio você tem, você vai descobrir que ele vem com uma aplicação stand-alone chamado GameMaker: Player. Esta aplicação é uma plataforma para a distribuição de seus jogos e para jogar aqueles feitos por outros. Depois de ter instalado GameMaker: Studio e o Gamemaker: Player, você pode, em seguida, executá-los de forma independente e também enviar seus próprios jogos para o jogador e para os outros.

## Fim

Então é isso pessoal, mais um post da serie que acompanha meus vídeos no [youtube](http://youtube.com/packtudo), Segue lá!