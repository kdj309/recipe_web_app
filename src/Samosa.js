import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Samosa() {
    return (
        <>
            <Singlereceipe item={Chats[2]} ></Singlereceipe>
        </>
    )
}
