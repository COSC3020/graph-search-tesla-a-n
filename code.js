function depthFirstSearch(graph, startNode, targetNode) {
    
    //If start node not in graph or target node not in graph return empty path
    if (!graph[startNode] || !graph[targetNode]) {
        return [];
    }
    
    //if start and target node are the same, return list with that ndoe
    if (startNode === targetNode) {
        return [startNode];
    }
    
    //track nodes to avoid cycles as geeksforgeeks recomends but use a set
    const visited = new Set();
    
    //store path to target if found
    let resultPath = [];

    //make a DFS helper function like in functional prog
    function dfs(currentNode, path) {
        //mark node as visited
        visited.add(currentNode);
        
        //add curent node to path
        path.push(currentNode);
        
        //if target found, save path and return true
        if (currentNode === targetNode) {
            resultPath = [...path];
            return true;
        }
        
        //check neighbors of current node
        for (const neighbor of graph[currentNode]) {
            //visit unvisited neighbors
            if (!visited.has(neighbor)) {
                //if path found from this neighbor, ret true
                if (dfs(neighbor, path)) {
                    return true;
                }
            }
        }
        //dead path, backtrack and pop (lock and drop it)
        path.pop();
        return false;
    }

    //start DFS from start with empty path
    dfs(startNode, []);
    //return the path
    return resultPath;
}

//breadth first search
//initialize queue with startNode, mark as visited
//use map to track previous nodes
//while queue not empty
    //dequeue a node as currentNode
    //for each neighbor of currentNode
        //if neighbor is target then reconstruct the path and return
        //if neighhor not visited
            //mark as visited
            //add to the queue
            //record currentNode as previous node for this neighbor



