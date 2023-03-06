import React from "react"
import  s from './Navbar.module.css'


class Navbar extends React.Component {
    render() {
        return (
            <div className={s.navbar}>
                <div className={s.navbar__box}>
                    <div><a href="#s">Profile</a></div>
                    <div><a href="#s">Messages</a></div>
                    <div><a href="#s">News</a></div>
                    <div><a href="#s">Music</a></div>
                    <div><a href="#s">Settings</a></div>
                </div>
            </div>
        )
    }
}

export default Navbar