import React from 'react'
import {NavLink} from "react-router-dom";


const TopBar = () =>{

    return (
        <nav className=''>
            <div className=''>
                <NavLink to='/' className='' exact>
                    Userslist
                </NavLink>
                {/*<ul className=''>*/}
                {/*    <li className=''  >*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </nav>
    )
}

export default TopBar
