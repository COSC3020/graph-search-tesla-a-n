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
- Keys are nodes
- Values are arrays of neighbors
- Use recursion for DFS travel to use call stack

Start at startNode, mark each visited using a set, explore deeper for neighbors 
not visited yet, track with traversal, target aquired; return complete path

If a branch that doesn't have the target is explored, backtrack and remove node 
from path

Possible edge cases:
- if start and end at same node, return [startNode]
- if no path from start to target, ret null arr
- if either node not in graph, ret null arr

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

With V as # of vertices, E as # of edges,

Aiming for:
+ each node visited once, $\Theta(V)$
+ examine each node's edges, $\Theta(E)$
+ visited set ops average to $\Theta(1)$
+ Path made takes $\Theta(V)$

Worst-case complexity: $\Theta(V) + \Theta(V) + \Theta(E) + \Theta(1)$ or $\Theta(V + E)$

## Bonus

Implement and analyze breadth-first search.

Breadth first search has the same complexity as DFS but differ in order of processing

BFS has $\Theta(V + E)$ because it processes each vertex once ($\Theta(V)$) and looks at each edge once ($\Theta(E)$)

## Testing

Descriptions of implemented tests:

- testDFSLinearGraph + testBFSLinearGraph: tests BFS and DFS on a simple linear graph
- testDFSBranchingGraph + testDFSBranchingGraph: tests BFS and DFS on a graph that branches
- testSameStartAndTarget: making sure proper handling of start and target being the same
- testNodesNotInGraph: error handling when nodes don't exist
- testGraphWithCycles: making sure they dont get caught in a loop
- testNoPath: verifying behavior when theres no nodes
- testLargerGraph: scalability
- testNumericNodes: compatibility with different node types

## Sources

[Pre-order Traversal](https://www.geeksforgeeks.org/preorder-traversal-of-binary-tree/)

[DFS on graph](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/) "Time complexity: O(V + E). Note that the time complexity is same here because we visit every vertex at most once and every edge is traversed at most once (in directed) and twice in undirected.
Auxiliary Space: O(V + E), since an extra visited array of size V is required, And stack size for recursive calls to dfsRec function."

Windsurf extention in vscode helped write tests (graphs with cycles, no path, and numeric nodes) for DFS and BFS. I gave it pseudocode and it gave me the tests.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 
