import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Upma() {
    return (
        <>
            <Singlereceipe item={Chats[1]}></Singlereceipe>
        </>
    )
}
