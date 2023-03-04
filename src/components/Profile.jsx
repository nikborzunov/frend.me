import React from "react"

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div>
                    <img className="profile-bc-img" src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/videoblocks-network-connection-technology_h4rdfujal_thumbnail-1080_01.png"></img>
                </div>

                <div>
                    <div>
                        Avatar
                        <img />
                    </div>
                    <div>
                        <div>Name</div>
                        <div>
                            <div>DOB</div>
                            <div>CITY</div>
                            <div>Education</div>
                            <div>Web Site:</div>
                            
                            Pesronal Information</div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>My Posts</div>
                        <div>
                            <div>Typing Form</div>
                            <div><button className="btn btn-primary m-3" type="submit" >Send</button></div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>Avatar circle</div>
                            <div>Post1 - Text</div>
                        </div>
                        <div>
                            <div>Avatar circle</div>
                            <div>Post2 - Text</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile