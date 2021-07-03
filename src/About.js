import React from 'react'
import './About.css'
import about_img from './about_img.jpg'
import Receipe from './Receipe'
function About() {
    return (
        <>
            <div className="container about_container">
                   <div className="about_innner_div">
                        <h4 style={{fontSize:"3.2rem",fontWeight:"400"}}>Where diverse meets delicious</h4>
                        <p>Being foodie is the way to have immense pleasure of eating and the knowledge of cooking be a foodie guy.The hot and spicy dishes are a speciality of the south region. Mainly vegetarian dishes are served as part of the cuisine of the region. The uniqueness of Disheses cuisine is that it is a blend of both Hindu as well as Muslim styles of cooking.</p>
                   </div>
                   <div className="about_img_div">
                        <img height="300px" width="100%" src={about_img}></img>
                   </div>
            </div>
            <h2 style={{width:"max-content",margin:'auto'}}>Look At This Awesomesouce!</h2>
            <Receipe></Receipe>
        </>
    )
}

export default About
