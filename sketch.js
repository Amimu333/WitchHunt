let Forest = []; let Skip; let Next = []; let Back = []; let Re;
let ButtonSize = 0;
let GameWidth = 0;

let Gradient; let RiverBank; let RiverBank2; let Grass; let Grass2; let Railing;
let HippoHouse; let FoxHouse; let MiHouse; let WitchHouse; let DeadTree; let Skull; let Bridge; let MagicTree; let Tree;
let Hippo; let Wizard; let Explore; let Cheetah; let Diaper; let UnclePenguin; let Seal; let Fossil; let Ghost; let Eggplant; let Green; let Sacrifice; let Trial;

let HippoNumber = 0; let Area = 0; let WizardNumber1 = []; let WizardNumber2 = []; let WizardNumber3 = []; let WizardNumber4 = []; let WizardNumber5 = []; let WizardNumber6 = [];

function preload() 
{
  Gradient     = loadImage('Gradient.jpg');
  RiverBank    = loadImage('RiverBank.png');
  RiverBank2   = loadImage('RiverBank2.png');
  Grass        = loadImage('Grass.png');
  Grass2       = loadImage('Grass2.png');
  Railing      = loadImage('Railing.png');
  HippoHouse   = loadImage('HippoHouse.png');
  FoxHouse     = loadImage('FoxHouse.png');
  MiHouse      = loadImage('MiHouse.png');
  WitchHouse   = loadImage('WitchHouse.png');
  DeadTree     = loadImage('DeadTree.png');
  Skull        = loadImage('Skull.png');
  Bridge       = loadImage('Bridge.png');
  MagicTree    = loadImage('MagicTree.png');
  Tree         = loadImage('Tree.png');
  Hippo        = loadImage('Hippo.png');
  Wizard       = loadImage('Wizard.png');
  Explore      = loadImage('Explore.png');
  Cheetah      = loadImage('Cheetah.png');
  Diaper       = loadImage('Diaper.png');
  UnclePenguin = loadImage('UnclePenguin.png');
  Seal         = loadImage('Seal.png');
  Fossil       = loadImage('Fossil.png');
  Ghost        = loadImage('Ghost.png');
  Eggplant     = loadImage('Eggplant.png');
  Green        = loadImage('Green.png');
  Sacrifice    = loadImage('Sacrifice.png');
  Trial        = loadImage('Trial.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); textStyle(BOLD); textFont('微軟正黑體');
  
  GameWidth = width-10;
  ButtonSize = GameWidth/7;
  
  HippoNumber = round(random(0, 9999));
  
  WizardNumber1[1] = round(random(1, 7));
  
  for(let i = 1; i < 3; i++) { WizardNumber2[i] = round(random( 8, 14)); }
  
  for(let i = 1; i < 4; i++) { WizardNumber3[i] = round(random(15, 21)); }
  
  for(let i = 1; i < 5; i++) { WizardNumber4[i] = round(random(22, 28)); }
  
  for(let i = 1; i < 6; i++) { WizardNumber5[i] = round(random(29, 35)); }
  
  for(let i = 1; i < 7; i++) { WizardNumber6[i] = round(random(36, 42)); }
  
  for(let j = 0; j < 3; j++)
  {
    for(let i = 1; i < 8; i++)
    {
      Forest[j*7+i] = createButton("");
      Forest[j*7+i].position(GameWidth/7*(i-1)+5, height/2+ButtonSize/2+GameWidth/7*(2-j));
      Forest[j*7+i].size(ButtonSize, ButtonSize);
      Forest[j*7+i].style("background-color", "transparent");
      //Forest[j*7+i].style("background-image", "url('MagicTree.png')");
      Forest[j*7+i].style("background-size", "cover");
      Forest[j*7+i].style("border", "none");
      Forest[j*7+i].style("display", "none");
      Forest[j*7+i].mousePressed(() => Burn(j*7+i));
    }
  }
  
  for(let j = 3; j < 6; j++)
  {
    for(let i = 1; i < 8; i++)
    {
      Forest[j*7+i] = createButton("");
      Forest[j*7+i].position(GameWidth/7*(i-1)+5, height/2-ButtonSize*1.7-ButtonSize*(j-3));
      Forest[j*7+i].size(ButtonSize, ButtonSize);
      Forest[j*7+i].style("background-color", "transparent");
      //Forest[j*7+i].style("background-image", "url('MagicTree.png')");
      Forest[j*7+i].style("background-size", "cover");
      Forest[j*7+i].style("border", "none");
      Forest[j*7+i].style("display", "none");
      Forest[j*7+i].mousePressed(() => Burn(j*7+i));
    }
  }
  
  //next1
  Next[1] = createButton("");
  Next[1].position(width/2+ButtonSize/4-10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[1].size(width*0.4-ButtonSize/4, ButtonSize);
  Next[1].style("background-color", "transparent");
  Next[1].style("border", "none");
  Next[1].style("display", "none");
  Next[1].mousePressed(Next2);
  
  Skip = createButton("");
  Skip.position(width*0.1+10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Skip.size(width*0.4-ButtonSize/4, ButtonSize);
  Skip.style("background-color", "transparent");
  Skip.style("border", "none");
  Skip.style("display", "none");
  Skip.mousePressed(Next5);
  
  //next2
  Next[2] = createButton("");
  Next[2].position(width/2+ButtonSize/4-10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[2].size(width*0.4-ButtonSize/4, ButtonSize);
  Next[2].style("background-color", "transparent");
  Next[2].style("border", "none");
  Next[2].style("display", "none");
  Next[2].mousePressed(Next3);
  
  Back[2] = createButton("");
  Back[2].position(width*0.1+10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Back[2].size(width*0.4-ButtonSize/4, ButtonSize);
  Back[2].style("background-color", "transparent");
  Back[2].style("border", "none");
  Back[2].style("display", "none");
  Back[2].mousePressed(Next1);
  
  //next3
  Next[3] = createButton("");
  Next[3].position(width/2+ButtonSize/4-10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[3].size(width*0.4-ButtonSize/4, ButtonSize);
  Next[3].style("background-color", "transparent");
  Next[3].style("border", "none");
  Next[3].style("display", "none");
  Next[3].mousePressed(Next4);
  
  Back[3] = createButton("");
  Back[3].position(width*0.1+10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Back[3].size(width*0.4-ButtonSize/4, ButtonSize);
  Back[3].style("background-color", "transparent");
  Back[3].style("border", "none");
  Back[3].style("display", "none");
  Back[3].mousePressed(Next2);
  
  //next4
  Next[4] = createButton("");
  Next[4].position(width/2+ButtonSize/4-10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[4].size(width*0.4-ButtonSize/4, ButtonSize);
  Next[4].style("background-color", "transparent");
  Next[4].style("border", "none");
  Next[4].style("display", "none");
  Next[4].mousePressed(Next5);
  
  Back[4] = createButton("");
  Back[4].position(width*0.1+10, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Back[4].size(width*0.4-ButtonSize/4, ButtonSize);
  Back[4].style("background-color", "transparent");
  Back[4].style("border", "none");
  Back[4].style("display", "none");
  Back[4].mousePressed(Next3);
  
  //next5
  Next[5] = createButton("");
  Next[5].position(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[5].size(width*0.4, ButtonSize);
  Next[5].style("background-color", "transparent");
  Next[5].style("border", "none");
  Next[5].style("display", "none");
  Next[5].mousePressed(Next6);
  
  //next6
  Next[6] = createButton("");
  Next[6].position(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[6].size(width*0.4, ButtonSize);
  Next[6].style("background-color", "transparent");
  Next[6].style("border", "none");
  Next[6].style("display", "none");
  Next[6].mousePressed(Next7);
  
  //next7
  Next[7] = createButton("");
  Next[7].position(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[7].size(width*0.4, ButtonSize);
  Next[7].style("background-color", "transparent");
  Next[7].style("border", "none");
  Next[7].style("display", "none");
  Next[7].mousePressed(Next8);
  
  //next8
  Next[8] = createButton("");
  Next[8].position(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[8].size(width*0.4, ButtonSize);
  Next[8].style("background-color", "transparent");
  Next[8].style("border", "none");
  Next[8].style("display", "none");
  Next[8].mousePressed(Next9);
  
  //next9
  Next[9] = createButton("");
  Next[9].position(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Next[9].size(width*0.4, ButtonSize);
  Next[9].style("background-color", "transparent");
  Next[9].style("border", "none");
  Next[9].style("display", "none");
  Next[9].mousePressed(Next10);
  
  //Re
  Re = createButton("");
  Re.position(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4);
  Re.size(width*0.4, ButtonSize);
  Re.style("background-color", "transparent");
  Re.style("border", "none");
  Re.style("display", "none");
  Re.mousePressed(ReStart);
  
  Map();
  
  noStroke(); fill(0, 100); rect(0, 0, width, height);
  
  Next1();
}  
  

function Next1()
{
  Back[2].style("display", "none");
  Next[2].style("display", "none");
  
  Skip.style("display", "block");
  Next[1].style("display", "block");
  
  noStroke(); fill(228, 211, 210); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
  image(Hippo,  width/2-ButtonSize-5, height/2-ButtonSize*3, ButtonSize*2, ButtonSize*2);
  fill(90, 80, 85); textSize(width*0.07); text('hippo'+HippoNumber, width/2, height/2-ButtonSize/2); textStyle(NORMAL);
  fill(90, 80, 85); textSize(width*0.04); text('你已經是個成熟的河馬', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('是時候走出旅動物村落', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('自己獵捕女巫來燒了',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
  
  noStroke(); fill(255); rect(width/2+ButtonSize/4-10, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4-ButtonSize/4, ButtonSize, width*0.02);
  fill(90, 80, 85); textStyle(BOLD); textSize(width*0.04); text('下一步', width/2+ButtonSize/4-10+(width*0.4-ButtonSize/4)/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
  
  noStroke(); fill(255); rect(width*0.1+10, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4-ButtonSize/4, ButtonSize, width*0.02);
  fill(90, 80, 85); textStyle(BOLD); textSize(width*0.04); text('跳過說明',   width*0.1+10+(width*0.4-ButtonSize/4)/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
  
  print("說明1");
}



function Next2()
{ 
  Skip.style("display", "none");
  Next[1].style("display", "none");
  
  Back[3].style("display", "none");
  Next[3].style("display", "none");
  
  Next[2].style("display", "block");
  Back[2].style("display", "block");
  
  noStroke(); fill(228, 211, 210); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
  image(MagicTree,  width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); textStyle(NORMAL);
  fill(90, 80, 85); textSize(width*0.04); text('你必須探索六層的森林', width/2, height/2-ButtonSize/2+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('跨越過保護女巫的公河', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('才能獵捕到女巫',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
  
  noStroke(); fill(255); rect(width*0.1+10, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4-ButtonSize/4, ButtonSize, width*0.02);
  fill(90, 80, 85); textStyle(BOLD); textSize(width*0.04); text('上一步',   width*0.1+10+(width*0.4-ButtonSize/4)/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
  
  print("說明2");
  
}

function Next3()
{
  Back[2].style("display", "none");
  Next[2].style("display", "none");
  
  Back[4].style("display", "none");
  Next[4].style("display", "none");
  
  Next[3].style("display", "block");
  Back[3].style("display", "block");
  
  noStroke(); fill(228, 211, 210); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
  image(Wizard,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.6, ButtonSize*1.8, ButtonSize*1.8); textStyle(NORMAL);
  fill(90, 80, 85); textSize(width*0.04); text('但女巫們也不會坐以待斃', width/2, height/2-ButtonSize/2+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('她們抓來 114,514 個男巫', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('當做替死鬼吸引你的注意',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
  
  print("說明3");
}

function Next4()
{
  Back[3].style("display", "none");
  Next[3].style("display", "none");
  
  Next[4].style("display", "block");
  Back[4].style("display", "block");
  
  noStroke(); fill(228, 211, 210); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
  image(Explore,  width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); textStyle(NORMAL);
  fill(90, 80, 85); textSize(width*0.04); text('小心地層層探索森林', width/2, height/2-ButtonSize/2+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('迴避替死鬼男巫的誘惑', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
  fill(90, 80, 85); textSize(width*0.04); text('獵捕到真正的女巫吧！',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
  
  noStroke(); fill(153, 140, 180); rect(width/2+ButtonSize/4-10, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4-ButtonSize/4, ButtonSize, width*0.02);
  fill(255); textStyle(BOLD); textSize(width*0.04); text('開始獵巫', width/2+ButtonSize/4-10+(width*0.4-ButtonSize/4)/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
  
  print("說明4");
}

function Next5()
{
  Area = 1;
  
  Skip.style("display", "none");
  Next[1].style("display", "none");
  
  Back[4].style("display", "none");
  Next[4].style("display", "none");
  
  Map();
  for(let j = 0; j < 6; j++) 
  { 
    for(let i = 1; i < 8; i++) 
    { 
      if(j==0) { Forest[j*7+i].style("background-image", "url('Explore.png')"); }
      else     { Forest[j*7+i].style("background-image", "url('MagicTree.png')"); }
      Forest[j*7+i].style("display", "block"); 
    } 
  }
}

function Next6()
{
  Area = 2;
  Next[5].style("display", "none");
  Map();
  for(let j = 0; j < 6; j++) 
  { 
    for(let i = 1; i < 8; i++) 
    { 
      if(j==0)      { Forest[j*7+i].style("background-image", "url('Tree.png')"); }
      else if(j==1) { Forest[j*7+i].style("background-image", "url('Explore.png')"); }
      else          { Forest[j*7+i].style("background-image", "url('MagicTree.png')"); }
      Forest[j*7+i].style("display", "block"); 
    } 
  }
}

function Next7()
{
  Area = 3;
  Next[6].style("display", "none");
  Map();
  for(let j = 0; j < 6; j++) 
  { 
    for(let i = 1; i < 8; i++) 
    { 
      if(j<=1)      { Forest[j*7+i].style("background-image", "url('Tree.png')"); }
      else if(j==2) { Forest[j*7+i].style("background-image", "url('Explore.png')"); }
      else          { Forest[j*7+i].style("background-image", "url('MagicTree.png')"); }
      Forest[j*7+i].style("display", "block"); 
    } 
  }
}

function Next8()
{
  Area = 4;
  Next[7].style("display", "none");
  Map();
  for(let j = 0; j < 6; j++) 
  { 
    for(let i = 1; i < 8; i++) 
    { 
      if(j<=2)      { Forest[j*7+i].style("background-image", "url('Tree.png')"); }
      else if(j==3) { Forest[j*7+i].style("background-image", "url('Explore.png')"); }
      else          { Forest[j*7+i].style("background-image", "url('MagicTree.png')"); }
      Forest[j*7+i].style("display", "block"); 
    } 
  }
}

function Next9()
{
  Area = 5;
  Next[8].style("display", "none");
  Map();
  for(let j = 0; j < 6; j++) 
  { 
    for(let i = 1; i < 8; i++) 
    { 
      if(j<=3)      { Forest[j*7+i].style("background-image", "url('Tree.png')"); }
      else if(j==4) { Forest[j*7+i].style("background-image", "url('Explore.png')"); }
      else          { Forest[j*7+i].style("background-image", "url('MagicTree.png')"); }
      Forest[j*7+i].style("display", "block"); 
    } 
  }
}

function Next10()
{
  Area = 6;
  Next[9].style("display", "none");
  Map();
  for(let j = 0; j < 6; j++) 
  { 
    for(let i = 1; i < 8; i++) 
    { 
      if(j<=4)      { Forest[j*7+i].style("background-image", "url('Tree.png')"); }
      else if(j==5) { Forest[j*7+i].style("background-image", "url('Explore.png')"); }
      else          { Forest[j*7+i].style("background-image", "url('MagicTree.png')"); }
      Forest[j*7+i].style("display", "block"); 
    } 
  }
}

function ReStart()
{
  window.location.reload();
}


function Map()
{
  background(142, 180, 140);
  image(Gradient,  0, height/2-ButtonSize*3.5, width, ButtonSize*3);
  noStroke(); fill(153, 140, 180); rect(0, 0, width, height/2-ButtonSize*3.5+1);
  noStroke(); fill(206, 242, 255); rect(0, height/2-ButtonSize/2, width, ButtonSize);
  
  for(let i = 0; i < 30; i++)
  {
    image(Grass,   random(0, width), random(height/2+GameWidth/7/2+5+ButtonSize*3, height), ButtonSize/4, ButtonSize/4);   
  }
  
  for(let i = 0; i < 20; i++)
  {
    image(Grass2,  random(0, width), random(0, height/2-ButtonSize*3.5), ButtonSize/4, ButtonSize/4);
  }
  
  for(let i = 0; i < 5; i++)
  {
    image(RiverBank,  width/5*i, height/2-ButtonSize/2-2, width/5+2, width/5*(322/800));
    image(RiverBank2, width/5*i, height/2,                width/5+2, width/5*(322/800));
    
  }
  
  for(let j = 0; j < 3; j++)
  {
    for(let i = 0; i < 7; i++)
    {
      //noStroke(); fill(142, 180, 140); rect(GameWidth/7*i+5,  height/2+GameWidth/7/2+5+ButtonSize*j,  ButtonSize,    ButtonSize);
      noStroke(); fill(162, 200, 159); rect(GameWidth/7*i+10, height/2+GameWidth/7/2+10+ButtonSize*j, ButtonSize-10, ButtonSize-10);
    }
  }
  
  for(let j = 0; j < 3; j++)
  {
    for(let i = 0; i < 7; i++)
    {
      //noStroke(); fill(142, 180, 140); rect(GameWidth/7*i+5,   height/2-ButtonSize*1.5-ButtonSize*j,   ButtonSize,    ButtonSize);
      noStroke(); fill(255, 50); rect(GameWidth/7*i+10,  height/2-ButtonSize*1.5-5-ButtonSize*j,  ButtonSize-10, ButtonSize-10);
    }
  }
  
  image(Railing,    ButtonSize*0.5,  height/2+GameWidth/7/2+5+ButtonSize*3.2, ButtonSize*0.5, ButtonSize*0.5);
  image(Railing,    ButtonSize*4.0,  height/2+GameWidth/7/2+5+ButtonSize*3.0, ButtonSize*0.5, ButtonSize*0.5);
  image(Railing,    ButtonSize*6.0,  height/2+GameWidth/7/2+5+ButtonSize*3.2, ButtonSize*0.5, ButtonSize*0.5);
  image(HippoHouse, ButtonSize*1.0,  height/2+GameWidth/7/2+5+ButtonSize*3.0, ButtonSize*1.5, ButtonSize*1.5);
  image(FoxHouse,   ButtonSize*2.5,  height/2+GameWidth/7/2+5+ButtonSize*2.8, ButtonSize*1.5, ButtonSize*1.5);
  image(MiHouse,    ButtonSize*4.5,  height/2+GameWidth/7/2+5+ButtonSize*3.1, ButtonSize*1.5, ButtonSize*1.5);
  image(WitchHouse, ButtonSize*2.8,  height/2-GameWidth/7/2-5-ButtonSize*4.5, ButtonSize*1.5, ButtonSize*1.5);
  image(DeadTree,   ButtonSize*0.5,  height/2-GameWidth/7/2-5-ButtonSize*4.5, ButtonSize*1.0, ButtonSize*1.0);
  image(DeadTree,   ButtonSize*6.0,  height/2-GameWidth/7/2-5-ButtonSize*4.5, ButtonSize*1.0, ButtonSize*1.0);
  image(DeadTree,   ButtonSize*4.0,  height/2-GameWidth/7/2-5-ButtonSize*5.0, ButtonSize*1.0, ButtonSize*1.0);
  image(Skull,      ButtonSize*5.0,  height/2-GameWidth/7/2-5-ButtonSize*3.7, ButtonSize*0.3, ButtonSize*0.3);
  image(Skull,      ButtonSize*2.0,  height/2-GameWidth/7/2-5-ButtonSize*4.3, ButtonSize*0.3, ButtonSize*0.3);
  image(Bridge,     ButtonSize*2.8,  height/2-GameWidth/7/2-5-ButtonSize*0.3,ButtonSize*1.5, ButtonSize*1.5);
}

function Burn(N)
{
  //print(N);
  
  if(Area == 1 && N <= 7)
  {
    for(let j = 0; j < 6; j++) { for(let i = 1; i < 8; i++) { Forest[j*7+i].style("display", "none"); } }
    noStroke(); fill(0, 100); rect(0, 0, width, height);
    
    if(N !=  WizardNumber1[1])
    {
      noStroke(); fill(210, 228, 212); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.05); text('通過了第一層', width/2, height/2-ButtonSize*0.3); textStyle(NORMAL);
      
      R = round(random(1, 5));
      
      if(R==1)
      {
        image(Tree, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒遇到女巫的陷阱', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('剛踏入的森林一片祥和', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('到處都能聽到蟲咪鳥叫',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        image(Tree, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒遇到女巫的陷阱', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('鄰近村落的森林很和平', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('遠離鵝咪讓你心曠神怡',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        image(Cheetah, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒遇到女巫的陷阱', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('淺層的森林相當地安全', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('你還能看到卡樹在睡覺',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==4)
      {
        image(Diaper, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒遇到女巫的陷阱', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('樹根旁掉了狐寶的布布', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('那臭味警告你別太靠近',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==5)
      {
        image(UnclePenguin, width/2-ButtonSize*0.9, height/2-ButtonSize*2.7, ButtonSize*1.8, ButtonSize*1.8); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒遇到女巫的陷阱', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('鵝叔全裸寫真掉在地上', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('但你毫無興趣直接踩過',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(255); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.04); text('繼續前進',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Next[5].style("display", "block");
    }
    else
    {
      noStroke(); fill(219, 210, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      image(Wizard,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.8, ButtonSize*1.8, ButtonSize*1.8); textStyle(BOLD);
      fill(84, 80, 90); textSize(width*0.05); text('算了，好麻煩', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
      
      R = round(random(1, 3));
      if(R==1)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('年過三十的他仍是處男', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了',   width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱',   width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==2)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('年過四十的他仍是尼特', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了',   width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱',   width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==3)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('母胎單身的他仍是處男', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了',   width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱',   width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(153, 140, 180); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(255); textStyle(BOLD); textSize(width*0.04); text('重新獵巫',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
  }
  if(Area == 2 && N > 7 && N <= 14)
  {
    for(let j = 0; j < 6; j++) { for(let i = 1; i < 8; i++) { Forest[j*7+i].style("display", "none"); } }
    noStroke(); fill(0, 100); rect(0, 0, width, height);
    
    if(N !=  WizardNumber2[1] && N !=  WizardNumber2[2])
    {
      noStroke(); fill(210, 228, 212); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.05); text('通過了第二層', width/2, height/2-ButtonSize*0.3); textStyle(NORMAL);
      
      R = round(random(1, 5));
      
      if(R==1)
      {
        image(Tree,  width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒受到男巫的引誘', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('森林的內部有一點安靜', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('你想念苦瓜咪的叫聲了',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        image(Tree,  width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒受到男巫的引誘', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('森林的內部有點神祕感', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('但沒苦瓜那麼千奇百怪',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        image(Cheetah, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒受到男巫的引誘', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('森林裡有些奇怪的聲音', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('抬頭一看是卡樹在打呼',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==4)
      {
        image(Diaper, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒受到男巫的引誘', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('森林裡有些奇怪的異味', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('低頭一看是狐寶的布布',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==5)
      {
        image(UnclePenguin, width/2-ButtonSize*0.9, height/2-ButtonSize*2.5, ButtonSize*1.8, ButtonSize*1); 
        fill(84, 90, 80); textSize(width*0.04); text('你沒受到男巫的引誘', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('森林裡有個奇怪的生物', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('噁是被苦瓜打扁的矮鵝',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(255); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.04); text('繼續前進',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Next[6].style("display", "block");
    }
    else
    {
      noStroke(); fill(219, 210, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      image(Wizard,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.8, ButtonSize*1.8, ButtonSize*1.8); textStyle(BOLD);
      fill(84, 80, 90); textSize(width*0.05); text('算了，好麻煩', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
      
      R = round(random(1, 3));
      
      if(R==1)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('他二十四歲，是個學生', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==2)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('他常遲到，但從不缺席', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==3)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('單身的他喜愛四處蕉流', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(153, 140, 180); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(255); textStyle(BOLD); textSize(width*0.04); text('重新獵巫',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
  }
  if(Area == 3 && N > 14 && N <= 21)
  {
    for(let j = 0; j < 6; j++) { for(let i = 1; i < 8; i++) { Forest[j*7+i].style("display", "none"); } }
    noStroke(); fill(0, 100); rect(0, 0, width, height);
    
    if(N !=  WizardNumber3[1] && N !=  WizardNumber3[2] && N !=  WizardNumber3[3])
    {
      noStroke(); fill(210, 228, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.05); text('通過了第三層', width/2, height/2-ButtonSize*0.3); textStyle(NORMAL);
      
      R = round(random(1, 5));
      
      if(R==1)
      {
        image(Seal, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你成功來到公河邊', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('凶狠的豹在公河中撲騰', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('還是走吊橋跨過公河吧', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        image(Seal, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2);
        fill(84, 90, 80); textSize(width*0.04); text('你成功來到公河邊', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('飢餓的豹在公河中翻滾', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('你有點後悔沒帶鵝叔來',   width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        image(Diaper, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你成功來到公河邊', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('狐寶的布布在河中飄盪', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('希望下游沒人在水甘甘', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==4)
      {
        image(Cheetah, width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你成功來到公河邊', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('河邊響起熟悉的呼吸聲', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('抬頭一看是卡樹在睡覺', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==5)
      {
        image(Seal, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 90, 80); textSize(width*0.04); text('你成功來到公河邊', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('興奮的豹在公河中搖擺', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 90, 80); textSize(width*0.04); text('你撒了幾個苦瓜屑給牠', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(255); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.04); text('繼續前進', width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Next[7].style("display", "block");
    }
    else
    {
      noStroke(); fill(219, 210, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      image(Wizard,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.8, ButtonSize*1.8, ButtonSize*1.8); textStyle(BOLD);
      fill(84, 80, 90); textSize(width*0.05); text('算了，好麻煩', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
      
      R = round(random(1, 3));
      
      if(R==1)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個優質高富帥(已售完)', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==2)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個精通化妝的花美男', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      if(R==3)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個會傾聽抱怨的樹洞', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(153, 140, 180); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(255); textStyle(BOLD); textSize(width*0.04); text('重新獵巫',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
  }
  if(Area == 4 && N > 21 && N <= 28)
  {
    for(let j = 0; j < 6; j++) { for(let i = 1; i < 8; i++) { Forest[j*7+i].style("display", "none"); } }
    noStroke(); fill(0, 100); rect(0, 0, width, height);
    
    if(N !=  WizardNumber4[1] && N !=  WizardNumber4[2] && N !=  WizardNumber4[3] && N !=  WizardNumber4[4])
    {
      noStroke(); fill(210, 228, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.05); text('通過了第四層', width/2, height/2-ButtonSize*0.3); textStyle(NORMAL);
      
      R = round(random(1, 3));
      
      if(R==1)
      {
        image(Fossil, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 80, 90); textSize(width*0.04); text('你成功來到森林對面', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('地上掉著眼熟的物體...', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個十年前的karmago', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        image(Ghost, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 80, 90); textSize(width*0.04); text('你成功來到森林對面', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('樹後突然竄出不明生物', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('仔細看是盜版狐的幽靈', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        image(Skull, width/2-ButtonSize*0.8, height/2-ButtonSize*2.3, ButtonSize*1.5, ButtonSize*1.5); 
        fill(84, 80, 90); textSize(width*0.04); text('你成功來到森林對面', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('被地上的物體絆到了腳', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是一個噗幣乞丐的遺骨', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(255); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(84, 90, 80); textStyle(BOLD); textSize(width*0.04); text('繼續前進', width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Next[8].style("display", "block");
    }
    else
    {
      noStroke(); fill(219, 210, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      image(Wizard,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.8, ButtonSize*1.8, ButtonSize*1.8); textStyle(BOLD);
      fill(84, 80, 90); textSize(width*0.05); text('算了，好麻煩', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
      
      R = round(random(1, 3));
      
      if(R==1)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個常駐在色河的旅人', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是出沒在交易噗的商人', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是出沒在吵架噗的猴子', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(153, 140, 180); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(255); textStyle(BOLD); textSize(width*0.04); text('重新獵巫',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
  }
  if(Area == 5 && N > 28 && N <= 35)
  {
    for(let j = 0; j < 6; j++) { for(let i = 1; i < 8; i++) { Forest[j*7+i].style("display", "none"); } }
    noStroke(); fill(0, 100); rect(0, 0, width, height);
    
    if(N !=  WizardNumber5[1] && N !=  WizardNumber5[2] && N !=  WizardNumber5[3] && N !=  WizardNumber5[4] && N !=  WizardNumber5[5])
    {
      noStroke(); fill(216, 210, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      fill(84, 80, 90); textStyle(BOLD); textSize(width*0.05); text('通過了第五層', width/2, height/2-ButtonSize*0.3); textStyle(NORMAL);
      
      R = round(random(1, 3));
      
      if(R==1)
      {
        image(Eggplant, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 80, 90); textSize(width*0.04); text('你成功來到森林深處', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('樹上的茄子偷偷告訴你', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('前面女巫放了六個男巫', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        image(MagicTree,  width/2-ButtonSize-5, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2);
        fill(84, 80, 90); textSize(width*0.04); text('你成功來到森林深處', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('樹林傳來可怕的呼嘯聲', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('但沒有苦瓜的歌聲可怕', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        image(Eggplant, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
        fill(84, 80, 90); textSize(width*0.04); text('你成功來到森林深處', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('樹上的茄子偷偷告訴你', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('紫色因為外星人不戴帽子', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(255); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(84, 80, 90); textStyle(BOLD); textSize(width*0.04); text('繼續前進', width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Next[9].style("display", "block");
    }
    else
    {
      noStroke(); fill(219, 210, 228); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      image(Green,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.8, ButtonSize*1.8, ButtonSize*1.8); textStyle(BOLD);
      fill(84, 80, 90); textSize(width*0.05); text('算了，好麻煩', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
      
      R = round(random(1, 4));
      
      if(R==1)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是一個受到加冕的王者', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個天天不回家的丈夫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是個有青澀約定的青梅', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==4)
      {
        fill(84, 80, 90); textSize(width*0.04); text('你遇到了替死鬼男巫', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('是一位強大的綠光戰警', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('今天就決定拿他來燒了', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獵捕女巫失敗 ( 惱', width/2, height/2-ButtonSize*0.8+width*0.07+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(153, 140, 180); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(255); textStyle(BOLD); textSize(width*0.04); text('重新獵巫',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
  }
  if(Area == 6 && N > 35 && N <= 42)
  {
    for(let j = 0; j < 6; j++) { for(let i = 1; i < 8; i++) { Forest[j*7+i].style("display", "none"); } }
    noStroke(); fill(0, 100); rect(0, 0, width, height);
    
    if(N !=  WizardNumber6[1] && N !=  WizardNumber6[2] && N !=  WizardNumber6[3] && N !=  WizardNumber6[4] && N !=  WizardNumber6[5] && N !=  WizardNumber6[6])
    {
      noStroke(); fill(228, 210, 211); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      fill(84, 80, 90); textStyle(BOLD); textSize(width*0.05); text('燒死女巫', width/2, height/2-ButtonSize*0.3); textStyle(NORMAL);
      
      image(Trial, width/2-ButtonSize, height/2-ButtonSize*2.7, ButtonSize*2, ButtonSize*2); 
      fill(84, 80, 90); textSize(width*0.04); text('你成功獵捕了女巫', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
      fill(84, 80, 90); textSize(width*0.04); text('阻止了她們邪惡的計畫', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
      fill(84, 80, 90); textSize(width*0.04); text('保住旅動物村落的安全', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      
      noStroke(); fill(255); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(84, 80, 90); textStyle(BOLD); textSize(width*0.04); text('重來一次',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
    else
    {
      noStroke(); fill(228, 210, 211); rect(width*0.1, height/2-width*0.4-ButtonSize/2, width*0.8, width*0.8, width*0.02);
      image(Sacrifice,  width/2-ButtonSize*0.95, height/2-ButtonSize*2.8, ButtonSize*1.8, ButtonSize*1.8); textStyle(BOLD);
      
      R = round(random(1, 3));
      
      if(R==1)
      {
        fill(84, 80, 90); textSize(width*0.05); text('糟$%，太晚#%@', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
        fill(84, 80, 90); textSize(width*0.04); text('你抵$%^了女巫家(*^', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('但Ph)(%&太晚已@#$來ghaa不及', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('$%#祭男巫Ia ▙ ▗ ▚ 了', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==2)
      {
        fill(84, 80, 90); textSize(width*0.05); text('不$%，*&^急了', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
        fill(84, 80, 90); textSize(width*0.04); text('你Ia$%達了Ia女@<家前', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('但$%<太Ia晚已n-yah經來%{及', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('*&祭男巫Y-hah ▙ ▗ ▚ 了', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      if(R==3)
      {
        fill(84, 80, 90); textSize(width*0.05); text('$蛋%，停*&^了', width/2, height/2-ButtonSize*0.5); textStyle(NORMAL);
        fill(84, 80, 90); textSize(width*0.04); text('你Ia抵%^了女巫Ia家^&', width/2, height/2-ButtonSize/2+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('但是%*&晚Ugh已@#來*&%及', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07);
        fill(84, 80, 90); textSize(width*0.04); text('獻!@#Shub-男巫 ▙ ▗ ▚ 了', width/2, height/2-ButtonSize/2+width*0.07+width*0.07+width*0.07+width*0.07);
      }
      
      noStroke(); fill(210, 103, 95); rect(width/2-width*0.2, height/2-ButtonSize/2+width*0.4+ButtonSize/4, width*0.4, ButtonSize, width*0.02);
      fill(255); textStyle(BOLD); textSize(width*0.04); text('阻止 ▙ 祭',   width/2, height/2-ButtonSize/2+width*0.4+ButtonSize/4+ButtonSize/2);
      Re.style("display", "block");
    }
  }
}