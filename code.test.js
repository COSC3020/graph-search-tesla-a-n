const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testDFSLinearGraph =
    jsc.forall("bool", function() {
        const graph = {
            'A': ['B'],
            'B': ['C'],
            'C': []
        };
        const path = depthFirstSearch(graph, 'A', 'C');
        return JSON.stringify(path) === JSON.stringify(['A', 'B', 'C']);
    });

const testBFSLinearGraph =
    jsc.forall("bool", function() {
        const graph = {
            'A': ['B'],
            'B': ['C'],
            'C': []
        };
        const path = breadthFirstSearch(graph, 'A', 'C');
        return JSON.stringify(path) === JSON.stringify(['A', 'B', 'C']);
    });

const testDFSBranchingGraph = jsc.forall("bool", function() {
    const graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['G'],
        'F': [],
        'G': []
    };
    const path = depthFirstSearch(graph, 'A', 'G');
    return JSON.stringify(path) === JSON.stringify(['A', 'B', 'E', 'G']);
});

const testBFSBranchingGraph = jsc.forall("bool", function() {
    const graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['G'],
        'F': [],
        'G': []
    };
    const path = breadthFirstSearch(graph, 'A', 'G');
    return JSON.stringify(path) === JSON.stringify(['A', 'B', 'E', 'G']);
});

const testSameStartAndTarget = jsc.forall("bool", function() {
    const graph = {
        'A': ['B'],
        'B': ['C'],
        'C': []
    };
    const dfspath = depthFirstSearch(graph, 'B', 'B');
    const bfspath = breadthFirstSearch(graph, 'B', 'B');
    return JSON.stringify(dfspath) === JSON.stringify(['B']) && 
           JSON.stringify(bfspath) === JSON.stringify(['B']);
});

const testNodesNotInGraph = jsc.forall("bool", function() {
    const graph = {
        'A': ['B'],
        'B': ['C'],
        'C': []
    };
    const dfspath1 = depthFirstSearch(graph, 'X', 'C');
    const dfspath2 = depthFirstSearch(graph, 'A', 'X');
    const bfspath1 = breadthFirstSearch(graph, 'X', 'C');
    const bfspath2 = breadthFirstSearch(graph, 'A', 'X');
    return JSON.stringify(dfspath1) === JSON.stringify([]) && 
           JSON.stringify(dfspath2) === JSON.stringify([]) &&
           JSON.stringify(bfspath1) === JSON.stringify([]) &&
           JSON.stringify(bfspath2) === JSON.stringify([]);
});

const testGraphWithCycles = jsc.forall("bool", function() {
    const graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F', 'A'],  // Creates a cycle A->C->A
        'D': ['B'],       // Creates a cycle B->D->B
        'E': ['G'],
        'F': [],
        'G': []
    };
    const dfspath = depthFirstSearch(graph, 'A', 'G');
    const bfspath = breadthFirstSearch(graph, 'A', 'G');
    // Both should find a path despite the cycles
    return dfspath.length > 0 && bfspath.length > 0 &&
           dfspath[0] === 'A' && dfspath[dfspath.length-1] === 'G' &&
           bfspath[0] === 'A' && bfspath[bfspath.length-1] === 'G';
});

const testNoPath = jsc.forall("bool", function() {
    const graph = {
        'A': ['B'],
        'B': ['C'],
        'C': [],
        'D': ['E'],
        'E': []
    };
    const dfspath = depthFirstSearch(graph, 'A', 'E');
    const bfspath = breadthFirstSearch(graph, 'A', 'E');
    return JSON.stringify(dfspath) === JSON.stringify([]) && 
           JSON.stringify(bfspath) === JSON.stringify([]);
});

const testLargerGraph = jsc.forall("bool", function() {
    const graph = {
        'A': ['B', 'C', 'D'],
        'B': ['E', 'F'],
        'C': ['G', 'H'],
        'D': ['I', 'J'],
        'E': ['K'],
        'F': ['L'],
        'G': ['M'],
        'H': ['N'],
        'I': ['O'],
        'J': ['P'],
        'K': ['Q'],
        'L': [],
        'M': [],
        'N': [],
        'O': [],
        'P': [],
        'Q': []
    };
    
    const dfspath = depthFirstSearch(graph, 'A', 'Q');
    const bfspath = breadthFirstSearch(graph, 'A', 'Q');
    
    // Expected paths
    const expectedDFS = ['A', 'B', 'E', 'K', 'Q'];
    const expectedBFS = ['A', 'B', 'E', 'K', 'Q'];
    
    return JSON.stringify(dfspath) === JSON.stringify(expectedDFS) && 
           JSON.stringify(bfspath) === JSON.stringify(expectedBFS);
});

const testNumericNodes = jsc.forall("bool", function() {
    const graph = {
        1: [2, 3],
        2: [4],
        3: [5],
        4: [6],
        5: [],
        6: []
    };
    
    const dfspath = depthFirstSearch(graph, 1, 6);
    const bfspath = breadthFirstSearch(graph, 1, 6);
    
    return JSON.stringify(dfspath) === JSON.stringify([1, 2, 4, 6]) && 
           JSON.stringify(bfspath) === JSON.stringify([1, 2, 4, 6]);
});



jsc.assert(testDFSLinearGraph);
jsc.assert(testBFSLinearGraph);
jsc.assert(testBFSBranchingGraph);
jsc.assert(testDFSBranchingGraph);
jsc.assert(testSameStartAndTarget);
jsc.assert(testNodesNotInGraph);
jsc.assert(testGraphWithCycles);
jsc.assert(testNoPath);
jsc.assert(testLargerGraph);
jsc.assert(testNumericNodes);


