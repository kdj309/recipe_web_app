import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Matarpaneer() {
    return (
        <>
            <Singlereceipe item={indian_main_course[3]}></Singlereceipe>
        </>
    )
}
