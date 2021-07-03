import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Meduvada() {
    return (
        <>
            <Singlereceipe item={Chats[3]}></Singlereceipe>
        </>
    )
}
