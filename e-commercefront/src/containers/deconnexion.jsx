import React from "react"
import axios from "axios"
import cookie from "js-cookie"
// import LogoutIcon from '@mui/icons-material/Logout';

const DeconnexionApp=()=>{

    const handledeconnect=async()=>{
        const cookieDelete=(key)=>{
            cookie.remove(key,{expires:1})
        }

        await axios({
            method:"get",
            url:'http://localhost:3000/app/shan-ecommerce/deconnexion',
            withCredentials:true
        }).then((res)=>{
            console.log(res);
            cookieDelete("jwt")
        }).then((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="cursor-pointer">
            <span onClick={handledeconnect} className="iphone:text-[9px]"> 
            {/* <LogoutIcon/> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-900 hover:shadow-current">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>  
            </span>

        </div>
    )
}

export default DeconnexionApp