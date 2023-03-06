import React from "react"
import s from './Header.module.css'


class Header extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <div>
                    <img src="https://www.svgrepo.com/show/508286/comment.svg" className={s.header__logo} alt="header__logo" />
                </div>
            </div>
        )
    }
}


export default Header