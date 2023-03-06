import React from "react"
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost'
import Post from './MyPost/Post/Post'

class Profile extends React.Component {
    render() {
        return (
            <div className={s.profile}>
                <div className={s.profile__content_img_wrap}>
                    <div>
                        <img className={s.profile__content_imgItem} src="https://phonoteka.org/uploads/posts/2022-09/1663010769_18-phonoteka-org-p-tekstura-vektor-vkontakte-21.png" alt="profile__content_img"></img>
                    </div>
                </div>

                <div>
                    <div>
                        Avatar
                    </div>
                    <div>
                        <div>Name</div>
                        <div>
                            <div>DOB</div>
                            <div>CITY</div>
                            <div>Education</div>
                            <div>Web Site:</div>
                            <div> Pesronal Information</div>
                        </div>
                    </div>
                </div>

                <MyPost />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )
    }

}

export default Profile