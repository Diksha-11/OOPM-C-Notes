
/*let a;
let name ;

document.writeln("print <br>");
document.writeln("2+5\n");
document.writeln("printyy <br>");
 
//window.alert("Hello <br>")
//document.write("<br>",Date());
//console.log(typeof(name));
//console.log(typeof(a));

//1.                      ARGUMENT OBECTS

//AO is not array but still it has a property of Length
//callee property of AO gives the info about function

function first(a, b){

    //we can cange the user argument internally also
    arguments[0]="Diksha";
    document.write("hello <br>")
    document.write(arguments[0],"<br>" ,arguments[1],"<br>")//This is object Argument.it contain an array of object wher functions arguments gets save. but arguments object isn't an array
    arguments[2]="Dikshaaa";//yha value change nhi hogi cccz uor likhna hota 
    document.write(arguments.length,"<br>");
    document.write(arguments.callee,"<br>");
}

first(4, 9);

//Too many arguments, agr hum arguments jyada de dete hai function mai & we need to access those extra elsements then we do the following:

function arg(a,b){
    document.write("A: "+ a +" B: "+ " C: "+arguments[2] +"<br>");
}
arg(33,5,89);


//2.              DEFAULT PARAMETERS

//we can also assign default values to the function but if we pass value to setted default argument then, assigned value by user will have higher prioriy

function aeg2 (a,b ,c=[10,20,30]){
    document.write("A: "+ a +" B: "+ b+ " C: "+ c+"<br>");
}
aeg2(1, 2);//agr hume c ki bhi value deni h toh array size should be same otherwise it will show undefine

//but if we set default value for the middle value only then 3rd value undefine ayega cz hum aesa nahi kr sakte (Same jese c++ mai hota hai)

//js allows array and null as default values i.e. fun(a,b,c=null)

//3.               REST PARAMETERS

//rest parameter allows to represent an indefinate no. of arguments as an array
//syntax function fun_name(a,...arg)  'a' is simple argument & '...' is rest operator(it must be last operator to a function) and spread operator(spread is slightly different google it)

function rets(aa, ...a){
    document.write("A: "+ aa + " B: "+a +"<br>");
}
rets(33,5,89,"Diksha Sharma", true,33,[10,20,30]);

//*since ards is an array thus, if we required to acces any particular value of args then :-   document.write(a[0]), just write index no.
//* ards must be last argument

//4.                 REST PARAMETER VS AO

/*There are bacsically following differences: 
1. Rest parameters are the only ones that haven't been given  a separate name, while the AO contains all arguments passed to the function.
2. the AO isnt a real array but RP are!..RP can use array properties like sort, map, forEach, map, pop directly
3. AO has additional feature callee that's of calling itself  */

/*function restShow(a, ...args){
    console.log("A: "+ a);
    console.log(args);
}
restShow(10,20,30,40,50);
function argShows(a){
    console.log("A: "+ a);
    console.log(arguments);
}
argShows(1,2,3,4,5);*/

//                       RETURN STATEMENT

function add(a,b)
{
    console.log(b+ a);
    return("sum is: ",a+b);
    console.log(a);
}
console.log(add(1,2));

// dom functions and manipulation

//css dom and css dom manipulation

//whenever you want to control or change functioning the that is js dom manipulation

function pro(){

    let ref = document.getElementById("h8").innerHTML;
    alert(ref);
    document.getElementById("h8").innerHTML="hii";
    let refs = document.getElementById("input").value;
    alert(refs);
    alert(ref);
    document.getElementById("input").value=ref;
    
}
