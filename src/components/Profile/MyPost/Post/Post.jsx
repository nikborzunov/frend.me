import React from "react"
import s from '/Programming/repa/frend.me/src/components/Profile/MyPost/Post/Post.module.css'

class Post extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img className={s.post__userIcon} src="https://www.reshot.com/preview-assets/icons/FXHAMSULE9/user-FXHAMSULE9.svg" alt="post__userIcon"/>
                    Well, That's my post "Hello!"
                    <div>Like</div>
                </div>
            </div >
        )
    }

}

export default Post