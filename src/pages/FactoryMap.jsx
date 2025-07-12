import { NavLink } from "react-router-dom";

function FactoryMap() {
    return ( 
        <div className="test-3xl">
            <div className="flex">
                <NavLink to='/detail'>MachineDetail</NavLink>
            </div>
            <div>Main Page</div>
        </div>
     );
}

export default FactoryMap;