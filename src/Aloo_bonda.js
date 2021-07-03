import React from 'react'
import Singlereceipe from './Singlereceipe'
import { Chats, indian_sweets, indian_main_course } from "./Receipes";
export default function Aloo_Bonda() {
    return (
        <>
            <Singlereceipe item={Chats[0]} link='/receipes/Aloo_bonda'></Singlereceipe>
        </>
    )
}
