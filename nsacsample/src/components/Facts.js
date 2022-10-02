import React from "react";
import "./facts.css"

function Facts(){
    return(
        <div class = "container-facts">
            <h1 className = "facts-h1">Unknown Facts!</h1>
            <ul>
                <li className="p-facts">
                Solar Probe Parker is the fastest man-made object ever built.
                </li>
                <li  className="p-facts">
                Solar wind can distrupt our satellite & technology.
                </li>
                <li  className="p-facts">
                Solar flares are large eruptions of electromagnetic radiation from the sun lasting from minutes to hours. 
                The sudden outburst of electromagnetic energy travels at the speed of light.
                </li>
                <li  className="p-facts">
                The Solar Probe mission was conceived in 1958, 
                but it took 60 years to develop the technology to make it happen.
                </li>
                <li  className="p-facts">
                The Parker Solar Probe launched aboard a Delta - IV Heavy Rocket,
                 which is the world's second highest-capacity 
                launch vehicle in operation, behind SpaceX's Falcon Heavy.
                </li>    
                <li className="p-facts">
                    If solar wind speeds are high enough then geo-magnetic storms can be triggered.
                </li>
                <li className="p-facts">
                Geomagnetic storms can also wreak havoc with satellites
                and electricity networks and threaten astronauts in space.
                </li>
                <li  className="p-facts">
                As heat rises beneath, these convection cells churn and create 
                funnels of magnetic energy above the surface.
                </li>
                <li  className="p-facts">
                Scientists found that switchbacks form inside these funnels 
                before rising into the corona and beyond.This is only one 
                piece of the switchbacks puzzle though.Exactly how 
                they form is still unknown.
                </li>
                <li  className="p-facts">
                    Corona is 300 times hotter than photosphere.
                </li>

            </ul>
        </div>
    )
}
export default Facts;