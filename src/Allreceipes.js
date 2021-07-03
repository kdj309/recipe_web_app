import React,{useState} from 'react'
import indian_receipes from './Receipes'
import './Allreceipe.css'
import { Link } from 'react-router-dom'
export default function Allreceipes() {
    const [receipes, setreceipes] = useState(indian_receipes)
    const [searchquery, setsearchquery] = useState('')
    const [optionvalue, setoptionvalue] = useState('')
    function clickhandler() {
        let newarry=indian_receipes.filter((item)=>{
            if (item.Receipe_title.includes(searchquery)) {
                return true
            } else {
                return false
            }
        })
        setreceipes(newarry)
    }
    function clickhandler_two() {
        let filteredarry=indian_receipes.filter((item)=>{
            if (item.tags.includes(optionvalue)) {
                return true
            } else {
                return false
            }
        })
        setreceipes(filteredarry)
    }
    return (
        <>
            <h4 style={{marginLeft:"0.5rem",color:"#f50f32"}}>All receipes</h4>
            <div className="search_and_sorting">
                <div style={{display:"flex",gap:"0.2rem"}}>
                    <input type="text" value={searchquery} onChange={(e)=>{setsearchquery(e.target.value)}} placeholder="search by dish" ></input>
                    <button style={{marginLeft:"1rem",backgroundColor:"#e94964",color:"white"}} className="btn btn-sm btn-info" onClick={clickhandler}>search</button>
                </div>
                <div style={{display:"flex",gap:"0.4rem"}}>
                    <select id="inputState" value={optionvalue} onChange={(e)=>{setoptionvalue(e.target.value)}}>
                        <option>south indian</option>
                        <option>Main course</option>
                        <option>sweet</option>
                        <option>street food</option>
                        <option>snack</option>
                    </select>
                    <button style={{marginLeft:"1rem",backgroundColor:"#e94964",color:"white"}} className="btn btn-sm btn-info" onClick={clickhandler_two}>filter</button>
                </div>   
            </div>
            <div className='receipecontainer'>
                {
                    receipes.map((element,index) => {
                        return (
                            <>
                                <div key={index} className="imgcontainer">
                                    <img src={element.img}></img>
                                    <h5>{element.Receipe_title}</h5>
                                    <p style={{color:"grey"}}>Prep time
                                        <span> {element.prep_time} </span>
                                        | Cook time
                                        <span> {element.Cook_time}</span>
                                    </p>
                                    <Link style={{backgroundColor:"#f50f32",color:"white"}} className='btn' to={element.Receipe_title}>Go to receipe</Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
