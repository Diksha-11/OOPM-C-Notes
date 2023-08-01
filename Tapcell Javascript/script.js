	let content_array=["First line in p","second line in p","third line inp","fifth line in p"];
	function process(){
		//get the data of h3 tag 
		let ref_data=document.getElementById("h3id").innerHTML
		alert(ref_data)
		//change the data 
	document.getElementById("h3id").innerHTML="This is new data for h3";
	//let get the data of input box
	let val=document.getElementById("input").value
	alert(val);
		alert(ref_data)
document.getElementById("input").value=ref_data;
let ref_p=document.getElementsByTagName("p");
for(let x in content_array)
ref_p[x]=content_array[x];

//------------------------------------
let class_ref=document.getElementsByClassName("abc");
for(let x of class_ref)
x.style.color='green';

//-----------------------------
}
	function query_Process(){
let q_ref=document.querySelectorAll("p");
for(let x of q_ref){
	x.style.backgroundColor="yellow";
}
}
function changeCOlor(ref){
ref.style.color="green";
}
function changeRed(ref){
ref.style.color="black";

}
function increaseH(ref){
ref.height+=10;
}
function increaseW(ref){
	ref.width+=10;
}
function changeHeight(val,ref){
	// alert((val))
ref.height=val;
}
function changeWidth(val,ref){
	// alert((val))
ref.width=val;
}
///-----------------------------------
let image_index=0;
let image_array=["n2.jpeg","n3.jpeg","n4.jpeg"];
function getNext(){
	if(image_index<=1)
		image_index++;
	else
		image_index=0;
	document.getElementById("i").src=image_array[image_index];

}
function getPrevious(){
if(image_index>=1){
	image_index--;
}else image_index=2;
	document.getElementById("i").src=image_array[image_index];

}
function addCSS(){
let property="border:1px solid orange;border-radius:5px;"
document.getElementById("i").style.cssText+=property;
}
let status=true;
function imageToggle(ref){
	status=!status;
	if(status){
		document.getElementById("i").style.cssText+="display:inline-block";
ref.innerHTML="hide"
	}
else{
document.getElementById("i").style.cssText+="display:none";
ref.innerHTML="show"

}
}