import React, { useEffect, useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
const color=['red','yellow','green']
let purple = selectedColor === "purple" ? "light purple clicked" : "light purple";
const [mostrar, setMostrar] = useState(false);

if (!mostrar) {
    purple += " d-none";
  }
  const createLigth = () => {
    setMostrar(!mostrar);
  };


let i= 0;
let interval;
const [selectedColor , setSelectedColor] = useState("")
const start= () => {
interval = setInterval(()=>{
	setSelectedColor(color[i++])
if(i>color.length-1){i = 0}
},3000);
}
const changeLigth = () => {
    setSelectedColor("red");
    if (selectedColor === "red") {
      setSelectedColor("yellow");
    } else if (selectedColor === "yellow") {
      setSelectedColor("green");
    } else if(selectedColor === 'green'){
      setSelect("purple");
    }else{setSelectedColor('red')}
  };


	return (
		<>
		
		<div>	
		<div className="container bg-dark semaforo">
		<div className={"light red"+(selectedColor === "red" ? " glow " : " " )}></div>
		<div className={"light yellow"+(selectedColor === "yellow" ? " glow " : " " )}></div>
		<div className={"light green"+(selectedColor === "green" ? " glow " : " " )}></div>
		<div className={purple}></div>
		</div>
		<div className=" d-flex justify-content-center m-3">
		<button type="button" class="btn btn-success " onClick={start}>Start ligth</button>
		<button type="button" class="btn btn-secondary mx-2"onClick={changeLigth}>Click to change</button>
		<button type="button" class="btn btn-dark " onClick={createLigth} >Add light</button>
	
		</div>
		</div>
		</>
	);
};

export default Home;
