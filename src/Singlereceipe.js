import React,{useState} from 'react'
import './Singlereceipe.css'
import { MdSchedule,MdUpdate,MdTrendingFlat, } from "react-icons/md";
import {BsStar } from "react-icons/bs";
export default function Singlereceipe({ item }) {
    const [rating, setrating] = useState(0)
    const [ratingmsg, setratingmsg] = useState('')
    function Mouseenterhandler_one(e) {
        e.target.style.color="red"
        setrating(1)
    }
    function Mouseenterhandler_two(e) {
        e.target.style.color="red"
        setrating(2)
    }
    function Mouseenterhandler_three(e) {
        e.target.style.color="red"
        setrating(3)
    }
    function Mouseenterhandler_four(e) {
        e.target.style.color="red"
        setrating(4)
    }
    function Mouseenterhandler_five(e) {
        e.target.style.color="red"
        setrating(5)
    }
    function Mouseleavehandler_one() {
        setratingmsg(`Thanks for your rating:  ${rating}`)
    } 
return (
    <>
        <div className="container">
            <div className="receipe">
                    <div className="receipe_div1">
                        <div className="receipe_img_div">
                            <img src={item.img}></img>
                        </div>
                        <div className="receipe_details">
                            <h4 style={{fontSize:"3.2rem",fontWeight:"400"}}>{item.Receipe_title}</h4>
                            <p>{item.Description}</p>
                            <div>
                                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                                    <span style={{fontSize:"20px"}}><MdSchedule></MdSchedule></span>
                                    <p style={{color:"grey"}}>{item.prep_time}</p>
                                    <p>Prep Time</p>
                                </div>
                                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                                    <span style={{fontSize:"20px"}}><MdUpdate></MdUpdate></span>
                                    <p style={{color:"grey"}}>{item.Cook_time}</p>
                                    <p>Cook time</p>
                                </div>  
                            </div>
                            <h6>Tags: {
                                item.tags.map((element)=>{
                                    return <button style={{backgroundColor:"rgba(218, 58, 58, 0.89)",color:"white",fontSize:"14px",marginLeft:"0.3rem",border:"none",display:"inline-block",padding:"0.1em 0.3em",borderRadius:"4px"}}>{element}</button>
                                })
                            }</h6>
                        </div>
                    </div>
                    <div className="receipe_div2">
                        <div className="receipe_steps">
                            <h3>Instructions</h3>
                            <div>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                        <p><span style={{fontSize:"1.3rem",color:"#f50f32"}}>STEP 1:</span> {item.instructions.step1}</p>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                        <p><span style={{fontSize:"1.3rem",color:"#f50f32"}}>STEP 2:</span> {item.instructions.step2}</p>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                        <p><span style={{fontSize:"1.3rem",color:"#f50f32"}}>STEP 3:</span> {item.instructions.step3}</p>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                        <p><span style={{fontSize:"1.3rem",color:"#f50f32"}}>STEP 4:</span> {item.instructions.step4}</p>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                        <p><span style={{fontSize:"1.3rem",color:"#f50f32"}}>STEP 5:</span> {item.instructions.step5}</p>
                                    </div>
                            </div>
                        </div>
                        <div className="receipe_link_div">
                            <h4>Ingredients</h4>
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"left"}}>
                                <p>{item.Main_ingredients.ingredient1}</p>
                                <p>{item.Main_ingredients.ingredient2}</p>
                                <p>{item.Main_ingredients.ingredient3}</p>
                                <p>{item.Main_ingredients.ingredient4}</p>
                                <p>{item.Main_ingredients.ingredient5}</p>
                                <p>{item.Main_ingredients.ingredient6}</p>
                            </div>
                            <a style={{backgroundColor:"#e94964",color:"white",width:"max-content"}} className="btn btn-info" href={item.video_link}>Video Link<span>  <MdTrendingFlat></MdTrendingFlat>  </span></a>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",maxWidth:"70%"}}>
                                <BsStar onMouseEnter={Mouseenterhandler_one} onMouseLeave={Mouseleavehandler_one}></BsStar>
                                <BsStar onMouseEnter={Mouseenterhandler_two} onMouseLeave={Mouseleavehandler_one}></BsStar>
                                <BsStar onMouseEnter={Mouseenterhandler_three} onMouseLeave={Mouseleavehandler_one}></BsStar>
                                <BsStar onMouseEnter={Mouseenterhandler_four} onMouseLeave={Mouseleavehandler_one}></BsStar>
                                <BsStar onMouseEnter={Mouseenterhandler_five} onMouseLeave={Mouseleavehandler_one}></BsStar>
                            </div>
                            <p>{ratingmsg}</p>
                        </div>
                    </div>          
            </div>
        </div>
    </>
    )
}

