let red = false;
let starter = false;

window.onload=function(){
	let x = document.getElementById("boundary1");
	let y = document.querySelectorAll(".boundary");

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

	

	function changeColor(){
		y.forEach(function(item,index){
			item.classList.add("youlose");
		});
		red = true;
	}

	changeBoundary1();
	ifLeaveArea();
	


}
