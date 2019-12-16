import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import InputBase from "@material-ui/core/InputBase";
import Nav from "./component/Navbar"

class Profile extends Component{
    render(){
        return(
            <>
            <Container>
                <Nav/>
            </Container>
              <Container maxWidth="md" style={{ marginTop: 100 }}>
        <div style={{display: "flex"}}>
            <div style={{textAlign: "left"}}>
                <h1>Iip Jaelani</h1>
                <p>1 Following</p>
            
            </div>
            <div style={{marginRight: "auto", marginLeft: 20}}>
                    <Button variant="outlined">Edit profile</Button>
            </div>
            <Avatar style={{width: 150, height: 150}} alt="Remy Sharp" src="https://miro.medium.com/fit/c/128/128/0*0mfE3YsYI3LBr_vG" />
        </div>
        <div>
            <p style={{textAlign: "left", marginTop: 50}}>You can change the size of the avatar with the height and width CSS properties.</p>
        </div>
        </Container>
            </>
        )
    }
}

export default Profile;