'use client';

import { getAllTravels } from "@/api";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useEffect } from "react";


export const FindBuddy = () =>{
    const match = async()=>{
        const travels = await getAllTravels();
        // console.log(travels);
        let outputData = []

    for (const element of travels){
        if (element["gender"] === "Male"){
            outputData.push(element)
        }    
    }
    console.log(outputData)
    }
}
