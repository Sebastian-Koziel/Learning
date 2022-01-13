/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 let INITIAL = readline();
 let TARGET = readline();
 let solutions = [];
 let pathes = [];
 let best = 21; 
 
 INITIAL = INITIAL.split(' ');
 TARGET = TARGET.split(' ');
 
 
   let checkIfSolutionValid = (solution) => {
       if(solution[1] === solution[2] && solution[0] !== solution[1]){
           return false;
       }
       if(solution[2] === solution[3] && solution[0] !== solution[2]){
           return false;
       }
       return true;
   }
   
   let returnMirror = (side) => {
       if(side === 'R'){
           return 'L';
       }
       if(side === 'L'){
           return 'R';
       }
   }
  
   let removeLongerSolutions = (solutions) => {
       let sortedSolutions = [];
       for(let i=0;i<solutions.length;i++){
           if(solutions[i].history.length <= best){
             sortedSolutions.push(solutions[i]);
           }
       }
       return sortedSolutions;
   }
   
   let checkIfSolution = (solution) => {
       for(let i=0;i<solution.length;i++){
           if(solution[i] !== TARGET[i]){
               return false
           }
       }
       return true;
   }
  
   let compare = ( a, b ) => {
     if ( a.history < b.history ){
       return -1;
     }
     if ( a.history > b.history ){
       return 1;
     }
     return 0;
   }
   
   let consoleOutSolution = (path) => {
       for(let i=0;i<path.history.length;i++){
           console.log(`${path.history[i][0]} ${path.history[i][1]} ${path.history[i][2]} ${path.history[i][3]}`)
       }
   }
   
   pathes.push({
       lastMove:null,
       step: 0,
       history: [INITIAL]
   })
   
  
   while(pathes.length){
       
       let currentPath = pathes.shift();
       
       currentPath.step++;
       let state = currentPath.history[currentPath.history.length-1];
   
       if(checkIfSolution(state)){
           solutions.push(currentPath);
           if(currentPath.history.length < best){
               best = currentPath.history.length;
           }    
       }
       else{
           if(currentPath.step < 20){
               
               let moves = [
                   [returnMirror(state[0]), state[1], state[2], state[3]],
                   [returnMirror(state[0]), returnMirror(state[1]), state[2], state[3]],
                   [returnMirror(state[0]), state[1], returnMirror(state[2]), state[3]],
                   [returnMirror(state[0]), state[1], state[2], returnMirror(state[3])],
               ]
   
               for(let i=0;i<moves.length;i++){
                   if(checkIfSolutionValid(moves[i]) && currentPath.lastMove !== i){
                       let newPath = JSON.parse(JSON.stringify(currentPath));
                       newPath.history.push(moves[i]);
                       newPath.lastMove = i;
                       
                       pathes.push(newPath);
                   }
   
   
               }    
                   
           }
       }
       
   } 
   
  if(solutions.length){
         
      solutions = removeLongerSolutions(solutions);
      
      solutions = solutions.sort(compare);
      
  consoleOutSolution(solutions[0]);
  }
 
 