
import React, { useState , useEffect} from "react";
import Semaforo from "./semaforo.jsx";
import Button from "./Button.jsx";
import { initialColors } from "../function/const.js";

const Home =() => {

const colors =['red','yellow','green','purple'];
let i= 0;
const [selectedColor , setSelectedColor] = useState("")
let purple = selectedColor === "purple" ? "light purple glow" : "light purple ";
const [mostrar, setMostrar] = useState(false);

const start= () => {
 setInterval(()=>{
	setSelectedColor(colors[i++])
	if(i> colors.length){i = 0}
 }
,3000)
}

  if (!mostrar) {
    purple += " d-none";
  }

   


const createLigth = () => {
    setMostrar(!mostrar);
  };


const changeLigth = () => {		
    setSelectedColor("red");
    if (selectedColor === "red") {
      setSelectedColor("yellow");
    } else if (selectedColor === "yellow") {
      setSelectedColor("green");
    } else if(selectedColor === 'green'){
		if(mostrar === true){
      setSelectedColor("purple");}
    }else{setSelectedColor('red')}
  };
  const clickLight= (e) => {
    setSelectedColor(e.target.id);
  };
  
    return (
		
		<>
		<Semaforo selectedColor={selectedColor}  purple={purple}  clickLight={clickLight}/>
		
		<Button start={start} changeLigth={changeLigth} createLigth={createLigth}/>
		</>
	);
}
export default Home; 