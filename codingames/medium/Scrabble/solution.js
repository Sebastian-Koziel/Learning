/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 let words =[];
 let topScore = 0;
 let solutions = [];
 
 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     const W = readline();
     words.push(W);
 }
 const LETTERS = readline();
 let lettersInWord = [];
 
 for(let i=0;i<words.length;i++){
     lettersInWord = words[i].split('');
     let tempLetters = [...LETTERS];
     let score = 0;
     
     while(lettersInWord.length){
         let letter = lettersInWord[0];
         
         let index = tempLetters.indexOf(letter);
         if(index !== -1){
             if(letter === 'e' || letter === 'a' || letter === 'i' || letter === 'o' || letter === 'n' || letter === 'r' || letter === 't' || letter === 'l' || letter === 's' || letter === 'u'){
                 score +=1;
             }
             if(letter === 'd' || letter === 'g'){
                  score +=2
             }
             if(letter === 'b' || letter === 'c' || letter === 'm' || letter === 'p'){
                  score +=3
             }
             if(letter === 'f' || letter === 'h' || letter === 'v' || letter === 'w' || letter === 'y'){
                  score +=4
             }
             if(letter === 'k'){
                  score +=5
             }
             if(letter === 'j' || letter === 'x'){
                  score +=8
             }
             if(letter === 'q' || letter === 'z'){
                  score +=10
             }
             tempLetters.splice(index, 1);
             console.error(tempLetters);
             lettersInWord.shift();
         }
         else{
 
             break;
         }
     }
 
     if(!lettersInWord.length){
         if(score > topScore){
             topScore = score;
             solutions = [];
             solutions.push(words[i])
         }
     }
 
 
 }
 
 console.log(solutions[0]);
 