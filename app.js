console.log("welcome to app.js");
let grid=document.getElementById("grid");
let text=document.getElementById("text");

let start=0;
let selbox=null;
let selbox2=null;
let player1=null;
let count=0;
let pos=1;
let pos2=1;


for(let i=0;i<10;i++){
    
    if (i%2==0){
         for (let j=i*10;j<10*i+10;j++)
         {
       let ele=document.createElement("div");
        ele.className="box";
         ele.id=`${100-j}`;
         ele.innerText=`${100-j}`;
         grid.appendChild(ele);
         
        }
        
       }
     else if (i % 2 != 0)
     {
     for (let k =i*10+9;k>=i*10;k--)
     {
        let ele1=document.createElement("div");
        ele1.className="box";
        ele1.id=`${100-k}`;
        ele1.innerText=`${100-k}`;
        grid.appendChild(ele1);
     }
     
    }

}

let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach((ele)=>{
    if (ele.innerHTML % 2==0)
    {
        ele.classList.add("colored-box");
    }

})

selbox=document.getElementById(pos);
player1=document.createElement("div");
player1.className="player1";
selbox.appendChild(player1);

selbox2=document.getElementById(pos2);
player2=document.createElement("div");
player2.className="player2";
selbox2.appendChild(player2);


let dicevalue =document.getElementById("dice");


function numgen(){
    let num=Math.floor(Math.random()*6);
    dicevalue.innerText=num;
    if (count % 2 == 0){
        location1(num);
        count++;
    }
    else{
        location2(num);
        count++;
    }
    
}

let pos1=0;
function location1(num){
    text.innerHTML="player red";
    pos1=pos;
    boxes=document.querySelectorAll(".player1");
    Array.from(boxes).forEach((ele)=>{
        ele.classList.remove("player1");
    });

    
    if (pos==21)
    {
        num=0;
        pos=38;
        console.log("ladder");   
        
    }
    else if ( pos == 35)
    {
        num=0;
        pos=5;
        console.log("snake");
    
    }
    else if (pos==92)
    {
        num=0;
        pos=74;
        console.log("snake");  
    }

    else if (pos == 50)
    {
        num=0;
        pos=68;
        console.log("ladder");
       
    }
    else if (pos == 64)
    {
        num=0;
        pos=96;
        console.log("ladder");     
    }
    // else if (pos>100){
    //     pos=pos1+num-100;
        
    // }
    else if (pos ==100){
        dicevalue.innerText="Game Over!!!"
    }
    
    if ( num > 0 && num <= 6)

    {   
        pos=pos+num;
        selbox=document.getElementById(pos);
        player1=document.createElement("div");
        player1.className="player1";
        selbox.appendChild(player1);
    }
  
    else if ( num == 0){
    pos=pos+num;
    selbox=document.getElementById(pos);
    player1=document.createElement("div");
    player1.className="player1";
    selbox.appendChild(player1);
            
    }
    console.log("prev dice:"+num);
    console.log("current pos: "+pos);
    console.log("-----------------");
    markarea(pos1,pos);
}

let pos3=0;
let boxes2=null;

function location2(num){
    text.innerHTML="player green";
    pos3=pos2;
    boxes2=document.querySelectorAll(".player2");
    Array.from(boxes2).forEach((ele5)=>{
        ele5.classList.remove("player2");
    });

    if (pos2==21)
    {
        num=0;
        pos2=38;  
    }
    else if ( pos2 == 35)
    {
        num=0;
        pos2=5;
       
    }
    else if (pos2==92)
    {
        num=0;
        pos2=74;
    }
    else if (pos2 == 50)
    {
        num=0;
        pos2=68;
    }
    else if (pos2 == 64)
    {
        num=0;
        pos2=96; 
    }
    // else if (pos>100){
    //     pos=pos1+num-100;
        
    // }
    else if (pos2 ==100){
        dicevalue.innerText="Game Over!!!";
    }
    if ( num > 0 && num <= 6)
    {   
        pos2=pos2+num;
        selbox2=document.getElementById(pos2);
        player2=document.createElement("div");
        player2.className="player2";
        selbox2.appendChild(player2);
    }
    else if ( num == 0){
    pos2=pos2+num;
    selbox2=document.getElementById(pos2);
    player2=document.createElement("div");
    player2.className="player2";
    selbox2.appendChild(player2);
            
    }
    console.log("prev dice:"+num);
    console.log("current pos: "+pos2);
    console.log("-----------------");
   
    markarea(pos3,pos2);
}



function ladpos(){
    let ladderpos1 =document.getElementById(20);
    let ladder1=document.createElement("img");
    ladder1.src="ladder.jpg";
    ladder1.className="ladder";
    ladderpos1.appendChild(ladder1);
    
    let ladderpos2 =document.getElementById(49);
    let ladder2=document.createElement("img");
    ladder2.src="ladder.jpg";
    ladder2.className="ladder1";
    ladderpos2.appendChild(ladder2);
    
    let ladderpos3 =document.getElementById(64);
    let ladder3=document.createElement("img");
    ladder3.src="ladder.jpg";
    ladder3.className="ladder2";
    ladderpos3.appendChild(ladder3);

}

ladpos();

function snakepos(){

    let snakepos1 =document.getElementById(34);
    let snake1=document.createElement("img");
    snake1.src="snake.png";
    snake1.className="snake";
    snakepos1.appendChild(snake1);
    
    let snakepos3 =document.getElementById(79);
    let snake3=document.createElement("img");
    snake3.src="snake3.png";
    snake3.className="snake2";
    snakepos3.appendChild(snake3);

}

snakepos();

function markarea(start,end){

   let shaded = document.querySelectorAll(".shaded-box");
   Array.from(shaded).forEach((ele)=>{
    ele.classList.remove("shaded-box");
   })
    for ( let p=start;p<=end;p++)
    {
        let current=document.getElementById(p);
        current.classList.add("shaded-box"); 
    }
    return;
}



