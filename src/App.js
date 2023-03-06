import React from "react"
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"

class App extends React.Component {
    render() {
        return (
            <div className="app-wraper">
                <Header />
                <Navbar />
                <Profile />
            </div>
        );
        

    }


}

export default App