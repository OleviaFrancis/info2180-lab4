let red = false;
let starter = false;

window.onload=function(){
	let x = document.getElementById("boundary1");
	let y = document.querySelectorAll(".boundary");
	let status = document.getElementById("status");
	let maze = document.getElementById("maze");
	let end= document.getElementById("end");

	function changeBoundary1(){
		y.forEach(function(item,index){
			y[index].addEventListener("mouseover",function(){
			
			y.forEach((item,index)=>{
				item.classList.add("youlose");
				red = true;
			});
			status.innerHTML = "You Lose";
			});
		});
	}

	function start(){
		let start = document.getElementById("start");
		start.addEventListener("click",function(){
			status.innerHTML = "Move your mouse over the \"S\" to begin.";
			let x = document.getElementById("boundary1");
			starter = true;
			if  (red === true){
				
				let x = document.getElementById("boundary1");
				let y = document.querySelectorAll(".boundary") ;
				y.forEach(function(item,index){
					item.classList.remove("youlose");
					red = false;
				});	
			}
		});
	}

	function ender(){
		end.addEventListener("mouseover",()=>{
			if (red === false){
				status.innerHTML = "You Win";
			}
		});
	}

	function changeColor(){
		y.forEach(function(item,index){
			item.classList.add("youlose");
		});
		red = true;
	}

	changeBoundary1();
	start();
	ender();

}
