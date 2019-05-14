/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let round = 0;
let player1 = [];
let player2 = [];
let battle = false;
let battleRound = 0;


const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    let cardp1 = readline(); // the n cards of player 1
    cardp1 = cardp1.split("");
    let card = cardp1[0];
    if(card ==='J'){player1.push(11);}
    else if(card ==='Q'){player1.push(12);}
    else if(card ==='K'){player1.push(13);}
    else if(card ==='A'){player1.push(14);}
    else if(card ==='1'){player1.push(10);}
    else{
    player1.push(parseInt(card));
    }
    
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    let cardp2 = readline(); // the m cards of player 2
    cardp2 = cardp2.split("");
    let card = cardp2[0];
    if(card ==='J'){player2.push(11);}
    else if(card ==='Q'){player2.push(12);}
    else if(card ==='K'){player2.push(13);}
    else if(card ==='A'){player2.push(14);}
    else if(card ==='1'){player2.push(10);}
    else{
    player2.push(parseInt(card));
    }
}

function checkHands(){
    round++;
    if(player1[0] > player2[0]){
    
    player1.push(player1[0]);
    player1.push(player2[0]);
    player1.shift();
    player2.shift();
    checkWin();
    }
    else if(player1[0] < player2[0]){
    
    player2.push(player1[0]);
    player2.push(player2[0]);
    player2.shift();
    player1.shift();
    checkWin();
    }
    else if(player1[0] === player2[0]){
    playBattle();
    }
    
    
}
function playBattle(){
    battle = true;
    battleRound ++;
    if(checkIfEnoughCards()){
       
       let deck1 = player1.slice(0,battleRound*4+1);
       let deck2 = player2.slice(0,battleRound*4+1);
       
       if(player1[battleRound*4] > player2[battleRound*4]){
    
            for(let i=0;i<deck1.length;i++){
            player1.push(deck1[i]);
            }
             for(let i=0;i<deck2.length;i++){
            player1.push(deck2[i]);
             }
            player1.splice(0,battleRound*4+1);
            player2.splice(0,battleRound*4+1);
            
            battle = false;
            battleRound = 0;
            
            checkWin();
        }
        
        else if(player1[battleRound*4] < player2[battleRound*4]){
        
            for(let i=0;i<deck1.length;i++){
            player2.push(deck1[i]);
            }
             for(let i=0;i<deck2.length;i++){
            player2.push(deck2[i]);
             }
            player1.splice(0,battleRound*4+1);
            player2.splice(0,battleRound*4+1);
            
            battle = false;
            battleRound = 0;
            
            checkWin();    
            }
         else if(player1[battleRound*4] === player2[battleRound*4]){
             playBattle();
         }
    }     
    else{
    console.log('PAT');    
    }
}
function checkIfEnoughCards(){
    if(player1.length >= 5 && player2.length >= 5){
     return true;   
    }
    else{
    return false;
    }
}
function checkWin(){
    if(player1.length > 0 && player2.length > 0){
     checkHands();   
    }
    else{
         if(player1.length <= 0){
         console.log(2, round);
         }
         else{
         console.log(1, round);    
         }
    }    
}
checkHands()
