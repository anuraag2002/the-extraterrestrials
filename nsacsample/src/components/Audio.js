import React from "react";
import './Audio.css';
import Whistler from "../components/audioFiles/whistler.ogg";
import shock from "../components/audioFiles/dispersive.ogg";
function Audio() {
    return(
        <div className="container-fluid-audio" >
            <h1 class = "audio-h1">You can listen to the solar winds,
                <br/> Thanks to the PARKER SOLAR PROBE</h1>
                <br/>
                <br/>
                <p class = "p-audio">
                The Parker Solar Probe doesn’t have a microphone on board, but its instruments can measure the 
                frequencies and amplitudes of these waves in the solar wind. Scientists then turned those wave measurements into sound waves,
                 creating clips of what the waves might sound like to the human ear.
</p>
<br/>
<p class = "p-audio">
The plasma waves that Parker Solar Probe is capturing are the result
 of particles interacting with magnetic and electric fields. 
 When electrons spin around a magnetic field, they can generate pressure waves, which
  the spacecraft picks up on. This type of wave, called a Whistler wave, also forms in Earth's
 magnetosphere, the region around our planet that's dominated by Earth's magnetic fields.</p>
            <p className="p-audio">Hear the whistler waves (use headphones for better experience)</p>
            <audio controls> 
               <source src =  {Whistler} type = "audio/ogg"/>
            </audio>
            <br/>
            <br/>
            <br/>
 <p class = "p-audio">
 Compressional waves in the solar wind propagating over large distances are 
 likely to steepen into shock waves where the increase in the amplitude
  is balanced by dissipation. Dispersive effects caused by, e.g. Hall currents perpendicular to the ambient
  magnetic field can influence the generation and propagation of shock waves.
  </p>

  <p className="p-audio">Hear the dispersive shock waves (use headphones for better experience)</p>
            <audio controls> 
               <source src =  {shock} type = "audio/ogg"/>
            </audio>
        </div>
    )
}
export default Audio