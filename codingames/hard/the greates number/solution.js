/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N = parseInt(readline());
 const input = readline();
 
 // Write an action using console.log()
 // To debug: console.error('Debug messages...');
 let inputs = input.split(" ");
 
 let numbers = [];
 let answer = [];
 inputs.filter((i) => {
     if (i !== '.' && i !== '-'){
         
         numbers.push(i);
     }
 });
 numbers.sort();
 
 if(inputs.includes('-')){
      answer.push('-');
     for(let i=0;i<numbers.length;i++){
         
         answer.push(numbers[i])
     }
 
     if(inputs.includes('.')){
      answer.splice(2, 0, ".");
     }
 
 }
 else{
     numbers = numbers.reverse();
     for(let i=0;i<numbers.length;i++){
         
         answer.push(numbers[i])
     }
 
     if(inputs.includes('.')){
      answer.splice(answer.length-1, 0, ".");
     }
 
     
 }
 
 while(answer[answer.length-1] === '0'){
         answer.pop();
     }
 if(answer[answer.length-1] === '.'){
     answer.pop();
 }
 if(answer.length == 2 && answer[0] == '-'){
     answer.shift();
 }
 
 answer = answer.join('');
 
 console.error(answer);
 
 console.log(answer);