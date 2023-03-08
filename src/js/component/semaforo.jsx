import React from "react";

const Semaforo =({selectedColor , purple , clickLight})=>{
return(
<>
		<div className="palo container"></div>
		<div className="container bg-dark semaforo">
			<div className={"light red"+(selectedColor === "red" ? " glow " : " " )} id="red" onClick={clickLight}></div>
			<div className={"light yellow"+(selectedColor === "yellow" ? " glow " : " " )} id="yellow" onClick={clickLight}></div>
			<div className={"light green"+(selectedColor === "green" ? " glow " : " " )} id="green" onClick={clickLight}></div>
			<div className={purple} id="purple" onClick={clickLight}></div>
		</div>
	</>



)


}
export default Semaforo;