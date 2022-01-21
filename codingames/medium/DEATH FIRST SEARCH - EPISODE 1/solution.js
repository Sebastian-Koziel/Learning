/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 let graph = [
    
]
let findPathFromExit = (exit, target, nodes)=>{
    nodes = JSON.parse(JSON.stringify(nodes));
    let roads =[];
    let shortest = 200;
    let pathes =[];

    for(let i=0;i<exit.length;i++){
        pathes.push({
            history:[], currentNode: exit[i], graph:nodes
        })
    }

    while(pathes.length){
        let node = pathes.pop();

        node.graph[node.currentNode].visited = true;

        if(node.currentNode === target){
            roads.push(node);
            if(node.history.length < shortest){
                shortest = node.history.length;
            }
        }
        else{
            if(node.graph[node.currentNode].links.length && node.history.length < shortest){
                for(let i=0;i<node.graph[node.currentNode].links.length;i++){
                    let neigh = node.graph[node.currentNode].links[i];
                    if(!node.graph[neigh].visited){
                        let newPath =  JSON.parse(JSON.stringify(node));
                        newPath.history.push(`${node.currentNode} ${neigh}`);
                        newPath.currentNode = neigh;

                        pathes.push(newPath); 
                    }
                }
            }
        }
    }

    return roads;
}

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    if(graph[N1]){
        graph[N1].links.push(N2);
    }
    else{
        graph[N1] = {links:[N2]}
    }

    if(graph[N2]){
        graph[N2].links.push(N1);
    }
    else{
        graph[N2] = {links:[N1]}
    }
}
let exits = [];
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
   exits.push(EI);
}
 //console.error(graph);
// game loop
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    let roadsToVirus = (findPathFromExit(exits, SI, graph));
    roadsToVirus.sort(compare);


    //console.error(roadsToVirus[0]);
    let link = roadsToVirus[0].history[roadsToVirus[0].history.length-1].split(` `);
    removeLinks(parseInt(link[0]), parseInt(link[1]));
    removeLinks(parseInt(link[1]), parseInt(link[0]))

    console.error(roadsToVirus[0].graph)
    console.log(roadsToVirus[0].history[roadsToVirus[0].history.length-1])

    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    //console.log('0 1');
}


function compare( a, b ) {
  if ( a.history.length < b.history.length ){
    return -1;
  }
  if ( a.history.length > b.history.length ){
    return 1;
  }
  return 0;
}

function removeLinks(node, link){
    for(let i=0;i<graph[node].links.length;i++){
        if(graph[node].links[i] === link){
            graph[node].links.splice(i, 1);
        }
    }
}