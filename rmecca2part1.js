var bodyArt=["elbow","arm","face","nose","hair"];
var bodyparts

var adjectiveIn=["gross","crooked","scaley","rubber","smelly"];
var animalIn=["crocodile","snake","platypus","walrus","cow"];
var adjectiveComp=["pretty","soft","smart","warm","artistic"];
var animalComp=["cat","dog","dolphin","parrot","flamingo"];



function box (){ //text box
	localStorage.setItem("person");
	document.getElementById("aperson").innerHTML=localStorage.getItem("person");
}

function aperson(){ //name to output from box
	
	
}
function fillInInsultOrComp (){
		var bodyparts=bodyArt[Math.floor(Math.random()*bodyArt.length)];
		bodyArt=document.getElementById("bodyPart");
	
	if ("doit" == "insult"){ //insult generator
		var adjectIn
		var animIn
		var adjectIn=adjectiveIn=[Math.floor(Math.random()*adjectiveIn.length)];
		adjectiveIn=document.getElementById("adjective");
	
		var animIn=animalIn[Math.floor(Math.random()*animalIn.length)];
		animalIn=document.getElementById("animal");
		alert("is this working?");
		// button onload?
	} 
	else("doit" == "compliment") { //compliment generator
		var adjectCo
		var aniCo
	
		var adjectCo=adjectiveComp[Math.floor(Math.random()*adjectiveComp.length)];
		adjectiveComp=document.getElementById("adjective");
	
		var aniCo=animalComp=[Math.floor(Math.random()*animalComp.length)];
		animalComp=document.getElementById("animal");
		//button onload?
}

}