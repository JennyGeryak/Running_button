function runButton (){
	var task=document.getElementById("task");
	var button=document.createElement("button");
	task.appendChild(button);
	button.appendChild(document.createTextNode('catch me!'));
	console.dir(button);
	button.onmouseover = function () {
		 console.log(Math.random()*100);
		 button.style.marginLeft = (Math.random()*500)+'px';
		 button.style.marginTop = (Math.random()*500)+'px';
 	}
}

runButton ('');