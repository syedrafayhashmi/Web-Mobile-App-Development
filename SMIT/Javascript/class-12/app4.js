var word = "madam";
var temp= "";
for (var j = word.length - 1; j>=0; j--){
  temp += word[j];
    } 

if( word === temp){
    document.write(temp + " is a palindrome"+"<br>")
}
