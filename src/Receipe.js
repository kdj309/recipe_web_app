import React from "react";
import { Link } from "react-router-dom";
import "./Receipe.css";
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Receipe() {
    return (
        <>
            <div className="Maincontainer">
                <div className="imgcontainer">
                    <h4>Indian<span> Snacks</span></h4>
                    <img src={Chats[0].img}></img>
                    <h5>{Chats[0].Receipe_title}</h5>
                    <p style={{color:'grey'}}>Preptime
                        <span> {Chats[0].prep_time} </span>
                        | Cook time
                        <span> {Chats[0].Cook_time}</span>
                    </p>
                </div>
                <div className="imgcontainer">
                    <h4>Indian<span> Sweets</span></h4>
                    <img src={indian_sweets[0].img}></img>
                    <h5>{indian_sweets[0].Receipe_title}</h5>
                    <p style={{color:'grey'}}>Prep time
                        <span> {indian_sweets[0].prep_time} </span>
                       | Cook time
                        <span> {indian_sweets[0].Cook_time}</span>
                    </p>
                </div>
                <div className="imgcontainer">
                    <h4>Indian<span> Special</span></h4>
                    <img src={indian_main_course[0].img}></img>
                    <h5>{indian_main_course[0].Receipe_title}</h5>
                    <p style={{color:'grey'}}>Prep time
                        <span> {indian_main_course[0].prep_time} </span>
                        | Cook time
                        <span> {indian_main_course[0].Cook_time}</span>
                    </p>
                </div>
            </div>
            <Link style={{width:"max-content",display:"block",margin:"auto"}} className='btn btn-info' to='/receipes'>All receipes</Link>
        </>
    );
}
