let strings = ["aba", "baba", "aba", "xzxb"];
let queries = ["aba", "xzxb", "ab"];


function matchingStrings(strings, queries) {
    let result = [];
    queries.map(query => {
        let count = 0;
        strings.map(string => {
            if (query === string) {
                count++;
            }
        })
        result.push(count);
    })
    return result;

}


console.log(matchingStrings(strings, queries));

//OUTPUT: [ 2, 1, 0 ]