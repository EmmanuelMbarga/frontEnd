import React, { useContext }  from "react"
import logo from "../images/imgconnexion/paiement-par-technologie-simple-sans-fil.jpg"
import { UtilisateurContext } from "../context/utilisateur"
import CommerceApp from "./pageArticle"
import Authentification from "../containers/authentification"
import FouterApp from "../Fouter/fouter"




const Profilpage=()=>{
    const userId=useContext(UtilisateurContext)

    
    return (
      <div className="iphone:bg-gray-200">
        { userId ? (
        <>
          <CommerceApp />

        </>
        ) : (
          <div className="flex my-[3.1rem] h-[700px]">
                    <div>
                        <img src={logo} className="w-[500px] mr-56 iphone:hidden iphonexr:hidden " />
                    </div>
                    <div className="">
                        <Authentification/>
                    </div>
            </div>
         )
        }


        <FouterApp/>
      </div>
    );
} 

export default Profilpage