import React from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home'
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
const Menu = () => {
    let currentPath = window.location.pathname;
    return (
        <div  style={{ backgroundColor: "#eaf1fb" }}>
            <nav id="sidebar pt-5"  >
               <ul className="list-unstyled ">
                   <li style={
							currentPath === "/"
								? { backgroundColor: '#093e87' }
								: null
                        }
                        className="px-4 py-3 border-bottom border-gray "
                        >
                        <Link className="text-decoration-none" to="/">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }><HomeIcon /></span>
                        </Link>
                    </li>
                    <li 
                    className="px-4 py-3  border-bottom border-gray "
                    style={
							currentPath === "/newwallet"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="/newwallet">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/newwallet"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }><EcoOutlinedIcon /> </span>
                        </Link>
                    </li> <li
                    className="px-4 py-3  border-bottom border-gray"
                    style={
							currentPath === "/check_balance"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="check_balance">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/check_balance"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }><VisibilityOutlinedIcon/></span>
                        </Link>
                    </li> <li
                    className="px-4 py-3  border-bottom border-gray"
                     style={
							currentPath === "/addfund"
								? { backgroundColor: "#093e87" }
								: null
						}>
                        <Link className="text-decoration-none" to="addfund">
                        <span className="smallText align-slef-center"
                            style={ currentPath === "/addfund"
                                    ? { color: "#fff" }
                                    : { color: "#0c0f12" }
                            }><PermContactCalendarOutlinedIcon /></span>
                        </Link>
                    </li>
               </ul>
            </nav>
        </div>
    )
}

export default Menu
