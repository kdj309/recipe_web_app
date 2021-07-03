import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Mangoshrikhand() {
    return (
        <>
            <Singlereceipe item={indian_sweets[0]}></Singlereceipe>
        </>
    )
}
