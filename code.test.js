const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array (pair nat nat)", function(edges) {
      
        return JSON.stringify(list) == JSON.stringify(convertToAdjList(mat));
    });

jsc.assert(test, { tests: 100 });
