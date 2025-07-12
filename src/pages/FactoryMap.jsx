import { NavLink } from "react-router-dom";
import React from "react";
import factoryLayout from "../assets/factory.jpg"
import machines from "../data/machines";
import MachineButton from "../components/MachineButton"

function FactoryMap() {
    return ( 
        <div style={{ position: "relative", width: "1000px", height: "600px" }}>
            <img
                src={factoryLayout}
                alt="Factory Layout"
                style={{ width: "100%", height: "100%" }}
            />
            {machines.map((machine) => (
                <MachineButton key={machine.id} machine={machine} />
            ))}
        </div>
     );
}

export default FactoryMap;