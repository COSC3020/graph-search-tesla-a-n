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

const testDFSBranchingGraph = jsc.forall("bool". function() {
    const graph = {
        'A': ['B'. 'C'],
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

const testBFSBranchingGraph = jsc.forall("bool". function() {
    const graph = {
        'A': ['B'. 'C'],
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

jsc.assert(testDFSReturnBug);
jsc.assert(testBFSReturnBug);
jsc.assert(testBFSBranchingGraph);
jsc.assert(testDFSBranchingGraph);



