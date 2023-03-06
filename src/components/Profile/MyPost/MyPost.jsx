import React from "react"
import s from '/Programming/repa/frend.me/src/components/Profile/MyPost/MyPost.module.css'

class MyPost extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>My Posts</div>
                    <div className={s.mypost__inputArea}>
                        <textarea className={s.mypost__inputArea_item}></textarea>
                        <button className="btn btn-primary m-3" type="submit" >Add Post</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyPost