import React from 'react';
import { useRecoilValue } from 'recoil'

//Helper Function
import createAppHelper from '../helpers/createAppHelper';

//State
import { environmentAtom, routeAtom, componentsAtom } from '../context/GlobalState'

const InfoPane = () => {
    //State Management
    const environment = useRecoilValue(environmentAtom);
    const route = useRecoilValue(routeAtom);
    const components = useRecoilValue(componentsAtom);

    return (
        <div className="InfoPane">
            <p>Choose your prefrences here and get your desired react app within seconds</p>
            <p>This is the usual Structure of the application we will be creating for you.</p>
            <button onClick={() => createAppHelper({ environment, route, components })}> Create App</button>
        </div>
    )
}

export default InfoPane