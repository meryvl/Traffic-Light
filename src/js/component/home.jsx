import React, { useEffect, useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
const color=['red','yellow','green']
let i= 0;
let interval;
const [selectedColor , setSelectedColor] = useState("")
let purple = selectedColor === "purple" ? "light purple glow" : "light purple ";
const start= () => {
	if(mostrar === true){
		color.push('purple') 
		
	} //si se añade antes de darle al boton se enciende la luz morada tambien 
	//mi intencion era parar setInterval cuando se le dé al botton de add light o a cualquier boton pero no se me para
interval= setInterval(()=>{
	setSelectedColor(color[i++])
	if(i> color.length -1){i = 0}
}
	,3000);
	}

const [mostrar, setMostrar] = useState(false);
if (!mostrar) {
    purple += " d-none";
  }
  if(mostrar === true){
	color.push('purple')
}

  const createLigth = () => {
	clearInterval(interval)		
    setMostrar(!mostrar);
	
  };


const changeLigth = () => {
	clearInterval(interval)			
    setSelectedColor("red");
    if (selectedColor === "red") {
      setSelectedColor("yellow");
    } else if (selectedColor === "yellow") {
      setSelectedColor("green");
    } else if(selectedColor === 'green'){
      setSelectedColor("purple");
    }else{setSelectedColor('red')}
  };
  const clickLight= (e) => {
    setSelectedColor(e.target.id);
  };

	return (
		<>
		<div className="container bg-dark semaforo">	
			<div className={"light red"+(selectedColor === "red" ? " glow " : " " )} id="red" onClick={clickLight}></div>
			<div className={"light yellow"+(selectedColor === "yellow" ? " glow " : " " )} id="yellow" onClick={clickLight}></div>
			<div className={"light green"+(selectedColor === "green" ? " glow " : " " )} id="green" onClick={clickLight}></div>
			<div className={purple} id="purple" onClick={clickLight}></div>
		</div>
		
		
		
		
		<div className=" d-flex justify-content-center m-3">
		<button type="button" class="btn btn-success " onClick={start}>Start ligth</button>
		<button type="button" class="btn btn-secondary mx-2"onClick={changeLigth}>Click to change</button>
		<button type="button" class="btn btn-dark " onClick={createLigth} >Add light</button>
	
		</div>
		</>
	);
};

export default Home;
