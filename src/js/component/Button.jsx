import React from "react"

const Button =({start, changeLigth ,createLigth})=>{
return(
    <>
<div className=" d-flex justify-content-center m-3">
		<button type="button" className="btn btn-success " onClick={start}>Start ligth</button>
		<button type="button" className="btn btn-secondary mx-2"onClick={changeLigth}>Click to change</button>
		<button type="button" className="btn btn-dark " onClick={createLigth} >Add light</button>
	
		</div>


</>
)
}
export default Button;