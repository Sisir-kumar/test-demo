import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../s1.png"

const TopMenu = (props) => {
    return (
        <div className="pt-0">
            <div className="row">
                <Navbar   expand="lg" className="flex-grow-1  py-3" style={{ backgroundColor: "#eaf1fb" }}>
                    <span
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        className="openToggle ml-3"
                        onClick={props.toggleOpen}
                    >
                        &#9776;
                    </span>
                    <Nav className="menuItems flex-row flex-grow-1 justify-content-between mx-5">
                        <Nav.Item>
                         <span><img src={Logo} width="50" alt="logo" /></span>
                        </Nav.Item>
                        <Nav.Item>
                         <span>User Name</span>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
            {props.children}
        </div>
    )
}

export default TopMenu
