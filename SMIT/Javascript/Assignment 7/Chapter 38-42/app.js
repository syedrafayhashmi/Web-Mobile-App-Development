// Task 1
function power(a,b){
    return a**b;
}

// Task 2
function leapyear(year){
    if(year%4==0){
        alert("This is a Leap Year");
    }
}

// Task 3
function semiperimeter(a,b,c){
    return (a+b+c)/2
}
function area(a,b,c){
    var s = semiperimeter(a,b,c);
    return s*(s-a)*(s-b)*(s-c);
}

// Task 4
function average(s1,s2,s3){
    return (s1+s2+s3)/3;
}
function percentage(s1,s2,s3,total){
    return ((s1+s2+s3)/total)*100;
}
function mainFunction(s1,s2,s3,total){
    var avg = average(s1,s2,s3);
    var percent = percentage(s1,s2,s3,total);
    alert("Your average Marks are "+avg.toFixed(2)+"and your percentage is "+percent.toFixed(2));
}

// Task 5
function CustomIndexOf(string,word){
    var string = string.toLowerCase();
    var word = word.toLowerCase();
    var index  = -1;
    for(var i=0;i<string.length;i++){
        if(string[i]===word[0]){
            for(var j=1;j<word.length;j++){
                if(string[i+j]===word[j]){
                    var index = i;
                    continue;
                }
                else{
                    index = -1;
                    break;
                }
            }
        }
    }
    return index;
}

// Task 6
 function vowel_remover(sentence){
        return sentence.replace(/[aeiou]/g,"",);
}

// Task 7
function count_vowel()