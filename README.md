# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

DFS explores as far as possible along each branch before backtracking

Using an adjacency list where:
    -  Keys are nodes
    -  Values are arrays of neighbors
    -  Use recursion for DFS travel to use call stack

Start at startNode, mark each visited using a set, explore deeper for neighbors 
not visited yet, track with traversal, target aquired; return complete path

If a branch that doesn't have the target is explored, backtrack and remove node 
from path

Possible edge cases:
    -  if start and end at same node, return [startNode]
    -  if no path from start to target, ret null arr
    -  if either node not in graph, ret null arr

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Aiming for:
    +  each node visited once, $\Theta(V)$
    +  examine each node's edges, $\Theta(E)$
    +  visited set ops average to $\Theta(1)$
    +  Path made takes $\Theta(V)$

## Bonus

Implement and analyze breadth-first search.
