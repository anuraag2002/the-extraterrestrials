import React from "react";
import "./model.css";
import pspgif from "./images/psp1.gif"
function Model(){
    return(
        <div className="p-5 container-model">
            <center>
            <h1 className="model-heading p-5">3D Model of the Parker Solar Probe</h1>
           
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2356' width='40%' height='300px' frameborder='0' />
            
            <br/>
                <br/>
            <h1 className="model-heading p-5">Orbit of the Parker Solar Probe</h1>
            
            <img src = {pspgif} width='40%' height='300px' />
            </center>
        </div>
    )
}
export default Model;