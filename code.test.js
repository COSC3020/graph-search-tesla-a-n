const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testReturnBug =
    jsc.forall("bool", function() {
        const graph = {
            'A': ['B'],
            'B': ['C'],
            'C': []
        };
        const path depthFirstSearch(graph, 'A', 'C');
        return JSON.stringify(path) === JSON.stringify(['A', 'B', 'C']);
    });

jsc.assert(testReturnBug);
