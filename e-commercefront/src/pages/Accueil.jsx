import React from "react"
import SliderPub from "../components/icons/SliderComponents/Slider"
import TransitionApp from "../components/Transitionaccueil"
import ArticlesPresentation from "../containers/iconAffiche"
import FouterApp from "../Fouter/fouter"

const Accueil=()=>{
    return(
        <>
            <div className="mt-14 w-[100%] iphone:mt-12">
                    <SliderPub/>
                    <TransitionApp/>
                    <ArticlesPresentation/>
                    <div>
                        <FouterApp/>
                    </div>
                    
            </div>
        </>
    )
} 

export default Accueil