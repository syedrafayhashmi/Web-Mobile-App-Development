// nested loop
var count = 1;
for (i = 0 ; i<5 ; i++){
    
    for( j = 0; j< 5; j++)
    { 
        document.write("Nested For Loop" + count +"<br>")
        count++;
        if (j===4){
            count--;
        }
    }
    count++;

}