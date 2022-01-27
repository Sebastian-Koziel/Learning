/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const W = parseInt(inputs[0]); // width of the building.
 const H = parseInt(inputs[1]); // height of the building.
 const N = parseInt(readline()); // maximum number of turns before game over.
 var inputs = readline().split(' ');
 let X0 = parseInt(inputs[0]);
 let Y0 = parseInt(inputs[1]);
 
 // game loop
 
 let minX = 0, 
     maxX = W-1,
     minY = 0,
     maxY = H-1;
 let dirX, dirY;
  let d = 4;
 
 while (true) {
     const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
     
     switch(bombDir){
         case 'U':
            minX = X0;
            maxX = X0;
 
            maxY = Y0-1;
            Y0--;
 
             dirX = 1;
             dirY =-1;
            
         break;
         case 'UR':
             minX = X0+1;
             X0++;
             maxY = Y0-1;
             Y0--;
             
            dirX = 1;
             dirY =-1;
 
         break;
         case 'R':
             minY = Y0;
             maxY = Y0;
 
             minX = X0+1;
             X0++;
             
             dirX = 1;
             dirY =-1;
 
         break;
         case 'DR':
             minX = X0+1;
             X0++;
             minY = Y0+1;
             Y0++;
         
            
             dirX = 1;
             dirY = 1;
         break;
         case 'D':
             minX = X0;
             maxX = X0;
 
             minY = Y0+1;
             Y0++
        
             dirX = 1;
             dirY = 1;
         break;
         case 'DL':
             minY = Y0+1;
             Y0++;
             maxX = X0-1;
             X0--;
 
            
             dirX = -1;
             dirY = 1;
         break;
         case 'L':
             maxX = X0-1;
             X0--;
 
             minY = Y0;
             maxY = Y0;
            
             dirX = -1;
             dirY =-1;
         break;
         case 'UL':
             maxY = Y0-1;
             Y0--;
             maxX = X0-1;
             X0--;
 
             dirX = -1;
             dirY = -1;
         break;
     }
 console.error(bombDir)
 console.error(minY, maxY)
 console.error(minX, maxX)
     
     X0 += Math.floor(Math.abs(maxX - minX)/2)*dirX;
     Y0 += Math.floor(Math.abs(maxY - minY)/2)*dirY;
 
     console.log(`${X0} ${Y0}`);
 }
 