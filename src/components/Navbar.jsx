import React from "react"

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div><a href="#s">Profile</a></div>
                <div><a href="#s">Messages</a></div>
                <div><a href="#s">News</a></div>
                <div><a href="#s">Music</a></div>
                <div><a href="#s">Settings</a></div>
            </div>
        )
    }
}

export default Navbar