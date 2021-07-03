import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Rasmalaicake() {
    return (
        <>
            <Singlereceipe item={indian_sweets[2]}></Singlereceipe>
        </>
    )
}
