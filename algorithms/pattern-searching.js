

// Naive Algorithm



/**
 * 
 * @param {String} inputString MyName is Sukhdeep Singh
 * @param {String} pattern Sukhdeep
 */
function searchPattern(inputString, pattern) {

    const indexFoundAt = [];
    for (let i = 0; i < inputString.length; i++) {
        
        if (inputString.charAt(i) === pattern.charAt(0)) {
            
            let matchedInputString = true;
            for (let j = 0; j < pattern.length; j++) {
                if (inputString.charAt(i + j) !== pattern.charAt(j)) {
                    matchedInputString = false;
                    break;
                }
            }
            if (matchedInputString) {
              
                indexFoundAt.push(i);
            }
        }
    }


    return indexFoundAt;

}

console.log(searchPattern('MyName is Sukhdeep Singh another Sukhdeep another five skuh', 'Sukhdeep'));