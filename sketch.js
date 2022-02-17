var tela = 0, largura=210, altura=60, contador=0
var xMenu = 28, yMenu1=260, yMenu2=320, yMenu3=380
var img, snd
var Xa = 190, Ya=120, X1a=250, Y1a=55, Ca=60
var tempo=2410, tempoS=0, vidas=5
var passaro=[], voar = 0, tempoP=0, xP=390, yP=358

//Este jogo tem como objetivo introduzir ao aluno, a respeito do ínicio das sociedades e comparar como elas são hoje. Entender que a forma de organização existente, derivou-se de práticas antigas que apesar de sofrer mudanças teve forte impacto para nosso mundo contemporâneo. Ele é baseado em perguntas e respostas organizadas em ordem cronológica com os fatos reais, ou seja, quando se passa as perguntas é como se os anos passassem juntos, isso foi feito para o aluno se adaptar com a ordem dos fatos históricos. São quatro respostas para cada pergunta mas apenas uma delas é a correta. Para ficar mais difícil e atraente, esse jogo possui, imagens imersivas ao fundo, tempo e vidas, se um deles chegar a zero o jogo acaba. Além disso possui efeitos sonoros e um pássaro que vai fazer parte dessa jornada, podendo ser utilizado para brincadeiras sem se preocupar com a passagem do tempo, pois ele só é contado nas telas das perguntas. O jogo basicamente funciona com mouse para escolher as alternativas, a cada resposta correta, inicialmente terá um ensinamento do Aristóteles, mas quando chegar em Roma será o Imperador Otávio Augusto.//

function setup() {
  createCanvas(600, 600)
  snd.loop()
}

function draw(){
  background(0)
  //tela de menu
if(tela==0){
    //menu com 3 opções
    //Iniciar
    
    background(img1)
   
    strokeWeight(6);
    stroke(0);
    textSize(60);
    textAlign(CENTER)
    textStyle(ITALIC)
    fill('orange');
    text("Historylândia",290,100)
    
    textSize(30);
    textAlign(RIGHT);
    textStyle(BOLD);
    
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura){
    stroke('red')
    strokeWeight(4);
    fill(0);
    ellipse(130,290,largura,altura);
    if(mouseIsPressed){
      tela = 1
    }
}   fill(250);
    stroke(0)
    text("Iniciar",165,300);
    
    
    //Informações do jogo
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura){
    stroke('rgba(100%,0%,100%,0.5)');
    strokeWeight(4);
    fill(0)
    ellipse(130,350,largura,altura)
    if(mouseIsPressed){
      tela = 2
    } 
}
    fill(250);
    stroke(0)
    text("Informações",215,360);
    
    //Créditos
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3+altura){
    stroke('rgb(0,255,0)');
    strokeWeight(4);
    fill(0);
    ellipse(130,410,largura,altura);
    if(mouseIsPressed){
      tela = 3
    }    
}
    fill(250)
    stroke(0)
    text("Créditos",182,420);
  
}
if(tela==1){
    //Instruções de jogo
    background(img1)
      
    if(mouseX>480 && mouseX<580 && mouseY>528 && mouseY<568){
      rect(480,528,100,40)
    if(mouseIsPressed){
      tela = 4
    }
    }
    stroke(0);
    strokeWeight(5);
    textStyle(NORMAL)
    textAlign(CENTER)
    textSize(40)
    text("COMO JOGAR", 310,80)
    image(img, 200,110,320,260)
    textSize(25)
    text("Mouse realizará todas as ações do jogo", 300,410)
    text("JOGAR",480,540,100,40)
    image(img2,30,505,80,40)
    image(img3,30,550,80,40)
    
  }
if(tela==2){
    //Informações
    background(img1)
    stroke(0);
    strokeWeight(4);
    textStyle(NORMAL)
    textAlign(LEFT)
    textSize(20)
    text("Este jogo tem como objetivo:",180,60)
    text("Trabalhar as seguintes habilidades da BNCC", 105,100)
    
    textSize(17)
    text("- (EF06HI10) Explicar a formação da Grécia Antiga, com ênfase na for-\n mação da pólis e nas transformações políticas, sociais e culturais", 40,140)
    text("- (EF06HI11) Caracterizar o processo de formação da Roma Antiga e\n suas configurações sociais e políticas nos períodos monárquico e\n republicano", 40,210)
    text("- (EF06HI12) Associar o conceito de cidadania a dinâmicas de inclusão\n e exclusão na Grécia e Roma antigas", 40,280)
    
    textSize(19)
    text("Destinado para alunos que estão realizando o 6° ano do EF",40,340)
    textSize(17)
    text("Você viajará pelo mundo antigo da História onde viverá e entenderá a\n importância dos Gregos e Romanos para a construção do que nós somos\n hoje. Eles foram a base de todas as sociedades e por isso são tão estu-\ndados. Vamos conhecer Aristóteles e Ótávio Augusto, nessa jornada pela nossa\n história. VAMOS NESSA!!!", 40,370)
    image(img2,30,505,80,40)
    image(img3,30,550,80,40)
  }
if(tela==3){
    //Atribuições
    background(img1)
    textAlign(RIGHT)
    stroke(0);
    strokeWeight(4);
    textSize(35)
    text("Programador:", 260,140)
    text("Educadora:", 220,330)
    textSize(20)
    textStyle(ITALIC)
    text("Arthur Silva Xavier", 215, 180)
    text("Graduando em Engenharia Mecânica", 380,210)
    text("pela UFRN",150,240)
    text("Nívia Marli Ferraz Leal", 250, 370)
    text("Ex-professora",170,395)
    image(img4,410,70,160,170)
    image(img5,410,299,160,170)
    
    image(img2,30,505,80,40)
    image(img3,30,550,80,40)
  }
if(tela==4){
  //Início do jogo
  background(img7)
  frameRate(60)  
  fill('red')
  rect(10,235,480,180,150)
  stroke(1)
  image(img6,370,380,300,190)
  fill('white')
  textSize(18)
  text("Olá jogador, aqui começa a história das civilizações.\n Eu sou Aristóteles e vou te acompanhar no início\nda antiguidade. Este game possui um tempo máximo de\n4 min,então responda rápido para não perder. Este é o\nJosé, ele vai nos acompanhar nessa jornada pelo tempo.",250,280) 
  próximo()
  movimentaçãoP()
}    
if(tela==5){
  //1° pergunta
  background(img7)
  frameRate(10)
  alternativaB()
  vidatempo()
  gameover()
  rect(-10,420,480,130, 200)
  stroke(2)
  image(img6,370,410,300,190)
  text("A respeito do começo da Grécia antiga, onde os gregos\nviviam antes de se organizarem em sociedade??",225,470)
  
  //Alternativas 1° pergunta
  fill('green')
  rect(Xa, Ya, X1a, Y1a, Ca)
  rect(Xa, Ya+60, X1a, Y1a, Ca)
  rect(Xa, Ya+120, X1a, Y1a, Ca)
  rect(Xa-5, Ya+180, X1a+5, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Próximos aos rios", 310,155)
  text("No ambiente rural", 310, 215)
  text("Eram nômades", 310, 275)
  text("Em propriedades particulares", 310, 335)
}
if(tela==6){
  //Ensinamento da 1° pergunta
  background(img12)
  frameRate(60)
  fill('white')
  stroke(1)
  image(img6,370,380,300,190)    
  textSize(18)
  text("Exatamente, as pessoas antes de se organizarem em sociedade\nviviam cada um no seu canto fazendo o seu próprio sustento.\nNão existia o compartilhamento de alimento ou divisão de trabalho\ne as vezes quem não tinha condições, morava de favor em outra casa\noferecendo sua força de trabalho em troca de alimento e local pra dormir",300,40) 
  próximo()
  movimentaçãoP()
}
if(tela==7){
  //2° pergunta
  background(img12)
  frameRate(10)
  alternativaC()
  gameover()
  vidatempo()
  rect(5,420,430,150, 200)
  stroke(2)
  image(img6,370,410,300,190)
  text("Por favor me ajude com esse problema. Nos pri-\nmórdios das sociedades estava tudo bagunçado\n então onde as primeiras sociedades se\n organizavam?",215,470)
  
  //Alternativas 2° pergunta
  fill('blue')
  rect(Xa, Ya, X1a, Y1a, Ca)
  rect(Xa, Ya+60, X1a, Y1a, Ca)
  rect(Xa, Ya+120, X1a, Y1a, Ca)
  rect(Xa, Ya+180, X1a, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Cidadelas", 310,155)
  text("Aldeias", 310, 215)
  text("Pólis", 310, 275)
  text("Vilas", 310, 335)
}
if(tela==8){
  //Ensinamento da 2° pergunta
  background(img8)
  frameRate(60)
  fill('white')
  stroke(1)
  image(img6,370,380,300,190)    
  textSize(18)
  text("Meus parabéns, era na pólis que ocorriam todas as coisas na Grécia\n desde alimentação e moradia até a seleção de governantes para\n comandar a pólis. (Mas aqui não existe esse termo... ainda).\n O termo “polis” em grego significa “cidade”. As polis gregas\n representam a base do desenvolvimento do conceito de cidade\n como conhecemos hoje. O legal é que essa organização\n surgiu na busca natural por sobrevivência",300,40) 
  próximo()
  movimentaçãoP()
}
if(tela==9){
  //3° pergunta
  background(img8)
  frameRate(10)
  alternativaA()
  gameover()
  vidatempo()
  rect(-10,420,480,150, 200)
  stroke(2)
  image(img6,370,410,300,190)
  text("Como havia dito, a pólis era uma espécie de cidade.\nE em uma cidade é necessário pessoas no comando.\n Como essas pessoas eram escolhidas entre todas?",220,470)
  
  //Alternativas 3° pergunta
  fill('pink')
  rect(Xa, Ya, X1a, Y1a, Ca)
  rect(Xa, Ya+60, X1a, Y1a, Ca)
  rect(Xa, Ya+120, X1a, Y1a, Ca)
  rect(Xa, Ya+180, X1a, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Por meio da Democracia", 310,155)
  text("Por meio da Aristocracia", 310, 215)
  text("Por meio da Meritocracia", 310, 275)
  text("Por meio da Oligarquia", 310, 335)
}
if(tela==10){
  //Ensinamento da 3° pergunta
  background(img9)
  frameRate(60)
  fill('white')
  stroke(1)
  image(img6,370,380,300,190)
  textSize(18)
  text("Congratulações meu caro, a democracia era a forma de eleição nas pólis.\n as decisões relativas à coisa pública eram tomadas pelo grupo de\n cidadãos que pertencia à pólis. Essas decisões eram debatidas em\n espaços como esse chamados de ágora. Os cidadãos tinham poder\nde decidir e deliberar sobre os assuntos públicos. Por isso é\n caracterizada como uma democracia direta. Já no atual modelo de\nvocês as democracias são representativas, e elegem-se\nrepresentantes que façam valer as posições dos cidadãos.",300,40)
  próximo()
  movimentaçãoP()
}
if(tela==11){
  //4° pergunta
  background(img9)
  frameRate(10)
  alternativaD()
  gameover()
  vidatempo()
  rect(10,420,430,130, 200)
  stroke(2)
  image(img6,370,410,300,190)
  text("Como entramos na questão de cidadania, quais\n eram os critérios para uma pessoa ser\nconsiderada cidadã?",220,470)
  
  //Alternativas da 4° pergunta
  fill('orange')
  rect(Xa-120, Ya, X1a+230, Y1a, Ca)
  rect(Xa-120, Ya+60, X1a+230, Y1a, Ca)
  rect(Xa-120, Ya+120, X1a+230, Y1a, Ca)
  rect(Xa-120, Ya+180, X1a+230, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Ser homem ou mulher ateniense com mais de 30 anos", 310,155)
  text("Ser homem com mais de 18 anos filho de pai ateniense", 310, 215)
  text("Ser homem ou mulher ateniense com mais de 18 anos", 310, 275)
  text("Ser homem com mais de 18 anos filho de pais atenienses", 310, 335)
}
if(tela==12){
  //Ensinamentos da 4° pergunta
  background(img9)
  frameRate(60)
  fill('white')
  stroke(1)
  image(img6,370,380,300,190)
  textSize(18)
  text("Parabéns filho, no mundo grego antigamente era natural que nos períodos\nde escolha dos novos governantes possuísse direito ao voto apenas\nhomens maiores de idade.Dá pra ver o quanto essa civilização era\nexclusivista infelizmente. A prática da cidadania era muito limitada \nporque apesar de possuir uma democracia, a decisão era tomada\npor poucos. Ainda bem que com o passar do tempo isso acabou.",300,35)
  próximo()
  movimentaçãoP()
}
if(tela==13){
  //Transição temporal entre Grécia e Roma
  background(img7)
  textStyle(ITALIC)
  textAlign(CENTER)
  textSize(30)
  fill('red')
  text("Com o passar do tempo\n as sociedades chegaram a outro nível\n de evolução",300,200)
  fill('green')
  text(" e passou a existir em Roma\n um exemplo de sociedade na época",300,310)
if(mouseX>470 && mouseX<570 && mouseY>520 && mouseY<560){
  if(mouseIsPressed){
      tela++
  }
  }
stroke(3)
fill('white')
rect(470,535,110,40,50)

textSize(18)
text("Próximo", 525, 560)
movimentaçãoP()
}
if(tela==14){
  //Introdução ao acompanhante em Roma(Otávio)
  background(img14)
  frameRate(60)  
  fill('red')
  rect(5,235,485,180,150)
  stroke(1)
  image(img13,395,390,220,215)
  fill('white')
  textSize(18)
  text("Olá caro viajante do tempo, eu sou Otávio tu vieste até\n o imperador(euzinho) para conhecer mais sobre Roma né.\n Bom sem querer me gabar mas eu sou o melhor imperador\n que esse lugar já teve então vc vai ter ótimos ensinamentos.\nVamos começar pela nossa formação.",250,290) 
  próximo()
  movimentaçãoP()
}
if(tela==15){
  //5° pergunta
  background(img14)
  frameRate(10)
  alternativaD()
  vidatempo()
  gameover()
  rect(-10,420,480,130, 200)
  stroke(2)
  image(img13,400,410,220,190)
  text("Roma possui poucos dados sobre o processo de\nsua formação mas se sabe que foi a junção de 3 povos.\nQuais são eles?",225,470)
  
  //Alternativas 5° pergunta
  fill('purple')
  rect(Xa-5, Ya, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+60, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+120, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+180, X1a+5, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Georgóis, Patrícios e Hebreus", 310,155)
  text("Etruscos, Georgóis e Latinos", 310, 215)
  text("Patrícios, Hebreus e Sabinos", 310, 275)
  text("Etruscos, Sabinos e Latinos", 310, 335)
}
if(tela==16){
  //Ensinamento 5° pergunta
  background(img15)
  frameRate(60)  
  stroke(1)
  image(img13,390,390,230,210)
  fill('white')
  textSize(18)
  text("Exatamente, a fundação de Roma ocorreu a partir da construção de uma\n fortificação criada pelos latinos e sabinos. Esses dois povos tomaram\n tal iniciativa, pois resistiam às incursões militares feitas pelos etruscos.\n No entanto, os mesmos etruscos vieram a dominar a região no século VII\n a.C. A partir da fixação desses povos, compreende-se o início da\n civilização romana. Não foi uma mistura amigável mas\n colheu muitos frutos centenas de anos depois.",300,40) 
  próximo()
  movimentaçãoP()
}
if(tela==17){
  //6° pergunta
  background(img15)
  frameRate(10)
  alternativaC()
  vidatempo()
  gameover()
  rect(-10,420,480,130, 200)
  stroke(2)
  image(img13,400,410,220,190)
  text("A partir dali, Roma iniciou sua caminhada\n como uma Monarquia. Então, além do rei, quais eram\n as classes sociais que existiam?",225,470)
  
  //Alternativas 6° pergunta
  fill('black')
  rect(Xa-5, Ya, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+60, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+120, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+180, X1a+5, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Nobreza, Plebeus e Burguesia", 310,155)
  text("Nobreza, Clero e Servos", 310, 215)
  text("Patrícios, Plebeus e Clientes", 310, 275)
  text("Clero, Patrícios e Clientes", 310, 335)
}
if(tela==18){
  //Ensinamentos da 6° pergunta
  background(img16)
  frameRate(60)  
  stroke(1)
  image(img13,390,390,230,210)
  fill('white')
  textSize(18)
  text("No topo da hierarquia social romana estavam os patrícios. Estes\n eram os grandes chefes familiares que se apropriaram das terras\n férteis e eram os únicos que possuíam direitos políticos. Logo abaixo,\nestavam os clientes que, devido a laços afetivos ou de parentesco,\n se agregavam em torno das atividades nas terras dos patrícios. Mais\n abaixo estavam os plebeus, estes não tinham nenhum tipo de vínculo\n com os patrícios e por isso, desenvolviam atividades como o artesa-\nnato, o comércio e o cultivo em pequenas propriedades. Os plebeus,\nassim como os escravos eram marginalizados não tendo nenhum\n tipo de representatividade política dentro de Roma.",300,40) 
  próximo()
  movimentaçãoP()
}
if(tela==19){
  //7° pergunta
  background(img16)
  frameRate(10)
  alternativaA()
  vidatempo()
  gameover()
  rect(-10,420,480,130, 200)
  stroke(2)
  image(img13,400,410,220,190)
  text("Durante a monarquia o Rei governava mas tinha\n suporte do Senado. Quais eram os\n participantes do Senado?",225,470)
  
  //Alternativas 7° pergunta
  fill('gray')
  rect(Xa-5, Ya, X1a+5, Y1a, Ca)
  rect(Xa-5, Ya+60, X1a+5, Y1a, Ca)
  rect(Xa-45, Ya+120, X1a+80, Y1a, Ca)
  rect(Xa-25, Ya+180, X1a+40, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Chefes de famílias patrícia", 310,155)
  text("Nobres de origem patrícia", 310, 215)
  text("Patrícios e Clientes escolhidos pelo rei", 310, 275)
  text("Qualquer um que o rei escolhesse", 310, 335)
}
if(tela==20){
  //Ensinamentos 7° pergunta
  background(img17)
  frameRate(60)  
  stroke(1)
  image(img13,390,390,230,210)
  fill('white')
  textSize(18)
  text("Parabéns, o poder era centralizado nas mãos do Rei, que tinha os\n poderes de chefe supremo, sacerdotais e judiciários. Existia um con-\nselho que o ajudava em suas decisões. Este conselho era composto pe-\nlos chefes das principais famílias patrícias e era chamado de Senado.\nDurante o reinado etrusco, houve uma intensa tentativa de diminuir os\n poderes dos Patrícios e do Senado, com o alinhamento do Rei com\n setores mais populares, como os plebeus, que passam a exercer um\n papel político. Isso levou ao descontentamento do Senado e dos\n Patrícios, o que levou à uma revolta no reinado de Tarquínio,\n o Soberbo, visando acabar com o reinado etrusco e estabelecer um\n monopólio político, que se consolidou na formação da\n República Romana em 509 a.C.",300,40)
  próximo()
  movimentaçãoP()
}
if(tela==21){
  //8° pergunta
  background(img17)
  frameRate(10)
  alternativaB()
  vidatempo()
  gameover()
  rect(-10,420,480,130, 200)
  stroke(2)
  image(img13,400,410,220,190)
  text("Com isso se iniciou a república, os poderes e as deci-\nsões pertenciam aos patrícios por meio do Senado e\n por isso criou-se um documento parecido com a sua\n constituição, qual era?",225,460)
  
  //Alternativas 8° pergunta
  fill('brown')
  rect(Xa-18, Ya, X1a+27, Y1a, Ca)
  rect(Xa, Ya+60, X1a, Y1a, Ca)
  rect(Xa, Ya+120, X1a, Y1a, Ca)
  rect(Xa, Ya+180, X1a, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Declaração dos direitos romanos", 310,155)
  text("Lei das doze tábuas", 310, 215)
  text("Constituição romana", 310, 275)
  text("Doze leis de Roma", 310, 335)
}
if(tela==22){
  //Ensinamento 8° pergunta
  background(img18)
  frameRate(60)  
  stroke(1)
  image(img13,390,390,230,210)
  fill('white')
  textSize(18)
  text("A Lei das Doze Tábuas constitui a origem do direito romano e\n tem esse nome porque as leis foram publicadas em doze tabletes de\n madeira, que foram afixados no Fórum Romano para que todos pudes-\nsem ler. As leis eram aplicadas na República pelos patrícios que as guar-\ndavam em segredo e eram aplicadas contra os plebeus. Por esse motivo\n em 462a.C. um plebeu de nome Terentílio propôs que houvesse uma\n publicação de um código legal oficial. A iniciativa queria permitir que os\n plebeus também conhecessem as leis e impedir o abuso delas pelos\npatrícios. Essa ideia foi recusada pelos patrícios durante muito tempo,\n pois tentaram manter o controle jurídico sobre a população romana já\n que assim os patrícios teriam poderes de manipulação e repressão aos\n plebeus.Somente em 451a.C. que um grupo formado por dez homens foi\n reunido para preparar o projeto final e oficial.",300,40)
  próximo()
  movimentaçãoP()
}
if(tela==23){
  //9° pergunta
  background(img18)
  frameRate(10)
  alternativaD()
  vidatempo()
  gameover()
  rect(-10,420,480,130, 200)
  stroke(2)
  image(img13,400,410,220,190)
  text("A república permaneceu por um bom tempo,\n mas um personagem colocou um fim nela.\n Quem foi?",225,465)
  
  //Alternativas 9° pergunta
  fill('lightgreen')
  rect(Xa, Ya, X1a, Y1a, Ca)
  rect(Xa, Ya+60, X1a, Y1a, Ca)
  rect(Xa, Ya+120, X1a, Y1a, Ca)
  rect(Xa, Ya+180, X1a, Y1a, Ca)
  fill('white')
  textSize(18)
  strokeWeight(3)
  text("Alexandre, O Grande", 310,155)
  text("Otávio Augusto", 310, 215)
  text("Constantino", 310, 275)
  text("Júlio César", 310, 335)
}
if(tela==24){
  //Ensinamentos 9° pergunta
  background(img18)
  frameRate(60)  
  stroke(1)
  image(img13,390,390,230,210)
  fill('white')
  textSize(18)
  text("Em 49 a.C Caio Júlio César, um General vindo da aristocracia romana,\n que tinha ganhado muito prestígio por ter conquistado a Gália, é\n impedido pelo senado de comandar suas tropas. Não satisfeito com\n a decisão tomada pelo senado, Júlio César se impõe e toma a cidade\n de Roma no mesmo ano e pretendia governar Roma até o fim da sua\n existência mas acabou sendo assassinado em 44 a.C., a mando dos\n senadores romanos, que acreditavam que poderiam manter a República.\nEsse fato comprometeu diretamente os destinos da República romana\n gerando crises internas, dando início ao período de transição para o\n Império. Em 31 a.C eu Otávio, sobrinho e herdeiro de César, assumo\n o controle e sou nomeado o único general, inclusive este ato foi apro-\nvado pelo senado, e eu fiquei reconhecido como Príncipe. No ano de\n 27 a.C recebo o título de Augusto (do latim “o venerável”), dando início\n ao período do Império Romano, aquele governado por generais.",300,40)
  próximo()
  movimentaçãoP()
}
if(tela==25){
  //Fim do jogo
  background(img19)
  fill('white')
  text("Parabéns meu caro jogador, você tem ótimos conhecimentos\n a respeito da Grécia e Roma. Agora você aprendeu a nossa\n história, mas cada um tem a sua, então continue estudando e se\n esforçando que assim você fará a sua história. E quem sabe não possa\n ser um personagem importante assim como nós, e ser lembrado pelos\n seus feitos centenas de anos depois. Vá, estude, corra atrás dos seus\n sonhos e viva uma vida para ser lembrada sempre na história. Até\n uma próxima oportunidade, nós te desejamos BOA SORTE!!!.",300,40)
  fill('white')
  rect(225,554,150,35)
  fill('red')
  text("FIM ",255,580)
  
  fill('blue')
  text("DE",290,580)
  
  fill('green')
  text("JOGO",340,580)
  
  image(img6,20,350,250,250)
  image(img13,320,345,200,260)
  tempoP++
  if(tempoP>5){
    voar++
    tempoP=0
  }
image(passaro[voar%9], 250,240,110,130)
}
if(tela==30){
  //Tela de game over
  snd.stop()
  background(img20)
  textSize(18)
  fill('blue')
  rect(145,450,330,60,40)
  fill('white')
  text("Reinicie a página para jogar novamente",310,485)
  
  }
}
//Função para pular telas de ensinamentos e introduções
function próximo (){
  if(mouseX>10 && mouseX<110 && mouseY>530 && mouseY<575){
  if(mouseIsPressed){
      tela++
      snd3.play()
  }
  }
stroke(2)
rect(10,535,100,40,50)
text("Próximo", 60, 560)  
}

//Funções para alternativas corretas
function alternativaA(){
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya && mouseY<Ya+Y1a){
    if(mouseIsPressed){
      tela++
      snd1.play()
    }
  }if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+60 && mouseY<(Ya+60)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
  }if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+120 && mouseY<(Ya+120)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
    }if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+180 && mouseY<(Ya+180)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
    }
}
function alternativaB(){
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya && mouseY<Ya+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
  }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+60 && mouseY<(Ya+60)+Y1a){
    if(mouseIsPressed){
      tela++
      snd1.play()
    }
  }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+120 && mouseY<(Ya+120)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
    }if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+180 && mouseY<(Ya+180)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
    }
}
function alternativaC(){
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya && mouseY<Ya+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
  }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+60 && mouseY<(Ya+60)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
  }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+120 && mouseY<(Ya+120)+Y1a){
    if(mouseIsPressed){
      tela++
      snd1.play()
    }
    }if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+180 && mouseY<(Ya+180)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
    }
}
function alternativaD(){
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya && mouseY<Ya+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
  }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+60 && mouseY<(Ya+60)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
  }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+120 && mouseY<(Ya+120)+Y1a){
    if(mouseIsPressed){
      vidas--
      snd2.play()
    }
    }
  if(mouseX>Xa && mouseX<Xa+X1a && mouseY>Ya+180 && mouseY<(Ya+180)+Y1a){
    if(mouseIsPressed){
      tela++
      snd1.play()
    }
    }
}

//Função para direcionar para tela de game over
function gameover(){
  if(vidas==0){
    tela=30
    snd4.play()
  }if(tempoS==0){
    tela=30
    snd4.play()
  }
}

//Função utilizada para a contagem de vidas e tempo nas telas de perguntas
function vidatempo(){
  tempo--
  tempoS=parseInt(tempo/10)
  text("Vidas: "+vidas,40,40)
  text("Tempo: "+tempoS,520,40)
  image(img11, 75,15, 40,40)  
  image(img10, 563,12,40,40)
}

//Função para exercer a movimentação do pássaro
function movimentaçãoP(){
  tempoP++
  if(tempoP>5){
    voar++
    tempoP=0
  }
if(keyIsDown(LEFT_ARROW))
  xP=xP-5
if(keyIsDown(RIGHT_ARROW))
  xP=xP+5
if(keyIsDown(UP_ARROW))
  yP=yP-5
if(keyIsDown(DOWN_ARROW))
  yP=yP+5
image(passaro[voar%9], xP,yP,110,130)
  
  if(xP>width){
    xP=-80
  }if(xP<-80){
    xP=width
  }if(yP>height){
    yP=-80
  }if(yP<-80){
    yP=600
  }
}

//Função para retornar a tela de menu
function keyPressed(){
  if(key=="Escape"){
    tela=0
  }
}

//Função para carregar todas as imagens e sons
function preload(){
  for(c=0;c<9;c++){
    passaro[c]=loadImage('passaro'+(c+1)+'.png')
  }
  snd =  loadSound('Sinos.mp3')
  snd1 = loadSound('Certo.mp3')
  snd2 = loadSound('Errado.mp3')
  snd3 = loadSound('Plim.mp3')
  snd4 = loadSound('Gameover.mp3')
  img = loadImage('Mouse.png')
  img1 = loadImage('Grécia.jpg')
  img2 = loadImage('istockphoto-1289618968-612x612.jpg')
  img3 = loadImage('Seta.jpg')
  img4 = loadImage('Eu.jpeg')
  img5 = loadImage('Prof.jpeg')
  img6 = loadImage('Platão.png')
  img7 = loadImage('Céu.jpg')
  img8 = loadImage('Pólis.jpg')
  img9 = loadImage('Ágora.jpg')
  img10 = loadImage('Tempo.png')
  img11= loadImage('Vida.png')
  img12 = loadImage('Rural.jpg')
  img13 = loadImage('Otávio.png')
  img14 = loadImage('palácio.jpg')
  img15 = loadImage('Itália.jpg')
  img16 = loadImage('Povo.jpeg')
  img17 = loadImage('Senado.jpg')
  img18 = loadImage('Lei.jpg')
  img19 = loadImage('Fim.jpg')
  img20 = loadImage('Gameover.jpg')
}