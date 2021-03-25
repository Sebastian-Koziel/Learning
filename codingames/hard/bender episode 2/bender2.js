/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

//Bender - Episode 2 solution

 let rooms = {};
 let bests = {};
 let exits = [];
 
 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     let room = readline();
     room = room.split(' ');
 let roomNo = room[0];
 let money = parseInt(room[1]); 


if(room[2] !== 'E'){exit1 = parseInt(room[2])}else{exit1 = 'E'};
if(room[3] !== 'E'){exit1 = parseInt(room[3])}else{exit2 = 'E'};


rooms[roomNo] = {money: money, exits: [room[2], room[3]], bestSum: 0}; 

}

function calculate(startingNode){
    let queue = [];
    let bestSum = 0;

    startingNode.bestSum = startingNode.money;
    if(startingNode.bestSum > bestSum){bestSum = startingNode.bestSum}
    
    queue.push(startingNode);
    

    while(queue.length){
        node = queue.pop();
        if(node.exits.length){
            for(let i=0;i<node.exits.length;i++){
                if(node.exits[i] !== 'E'){
                    let child = rooms[node.exits[i]];
                    let totalSumSoFar = node.bestSum + child.money;
                    if(totalSumSoFar > child.bestSum){child.bestSum = totalSumSoFar; queue.push(child);}
                    if(totalSumSoFar > bestSum){bestSum = totalSumSoFar; }             
                }
            }
        }
    }
    return bestSum;
}

console.log(calculate(rooms[0]));