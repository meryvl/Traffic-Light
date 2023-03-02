import React, { useEffect, useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
const color=['red','yellow','green']
let i= 0;
const [selectedColor , setSelectedColor] = useState("color[i]")
useEffect(() => {
const interval= setInterval(()=>{
	setSelectedColor(color[i++])
if(i>2){i = 0}
},3000);
},[])

	return (
		<>
		
		<div className="bg-dark container semaforo">	
		<div className={"light red"+(selectedColor === "red" ? " glow " : " " )}></div>
		<div className={"light yellow"+(selectedColor === "yellow" ? " glow " : " " )}></div>
		<div className={"light green"+(selectedColor === "green" ? " glow " : " " )}></div>
		</div>
		</>
	);
};

export default Home;
