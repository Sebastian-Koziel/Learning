/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 let array = [];
 let shares = [];
 let totalPool = 0;
 const N = parseInt(readline());
 const C = parseInt(readline());
 for (let i = 0; i < N; i++) {
  
     const B = parseInt(readline());
        array.push(parseInt(B));
        totalPool += B;
 }
 
 array.sort(function(a, b){return a - b});
 
 let cost = C;
 for(let i=0;i<array.length;i++){
     let share = Math.ceil(cost/((N-i)));
     if(share > totalPool){
         share = Math.ceil(totalPool/((N-i)));
     }
     
     if(array[i] >= share){
         shares.push(share);
         cost -= share;
         
         
     }
     else{
         shares.push(array[i]);
         cost -= array[i];
          
     }
      totalPool -= array[i];
 }
 shares.sort(function(a, b){return a - b});
 if(cost > 0){
     console.log('IMPOSSIBLE');
 }
 else{
 shares.forEach(function(n){console.log(n)})
 }
 