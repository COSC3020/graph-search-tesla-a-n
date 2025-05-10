function depthFirstSearch(graph, startNode, targetNode) {
    /*
    If start node not in graph or target node not in graph return empty path
    if start and target node are the same, return list with that ndoe
    track nodes to avoid cycles as geeksforgeeks recomends but use a set
    store path to target if found

    make a DFS helper function like in functional prog
        mark node as visited
        add curent node to path
        if target found, save path and return true
        check neighbors of current node
            visit unvisited neighbors
                if path found from this neighbor, ret true
        dead path, backtrack and pop (lock and drop it)

    start DFS from start with empty path
    return the path
    */
    return [];
}
