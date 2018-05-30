/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/

//20180530
function duplicateEncode(word){
    word = word.toLowerCase();
    let arr = word.split();
    let pass = [];
    for( var i = 0; i < word.length; i++){   
        if(pass[i] !== 1){
            let flag = 0;
            for(var j = i + 1; j < word.length ; j++){
                if(word.charAt(j) === word.charAt(i) && pass[j] !== 1){
                    flag = 1;
                    pass[i] = 2;
                    pass[j] = 2;
                }
            }
            if(flag === 1){
                pass.forEach(function(value, index){
                    if(value === 2){
                        arr[index] = '\)';
                        pass[index] = 1;
                    }
                });
            }else{
                arr[i] = '\(';
                pass[i] = 1;
            }
        }
    }
    return arr.join('');
}

//failed
/*function duplicateEncode(word){
    let arr = word.split();
    let re;
    let pass = [];
    for( var i = 0; i < word.length; i++){
        if(pass[i] !== 1){
            re = new RegExp('\\' + word.charAt(i), 'gi')
            let flag = 0;
            while ((re.exec(word)) !== null){
                console.log('1');
                if(re.index > i && pass[re.index] !== 1){
                    flag = 1;
                    arr.splice(re.index, 1, '\)');
                    arr.splice(i, 1, '\)');
                    pass[re.index] = 1;
                    pass[i] = 1;
                }          
            }
            if(flag === 0){
                arr.splice(i, 1, '\(');
                pass[i] = 1;
            }
        }
    }
    return arr.join('');
}
*/

