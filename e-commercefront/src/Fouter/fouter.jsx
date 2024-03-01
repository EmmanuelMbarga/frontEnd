import React from 'react'
import Logowhatsapp from "../images/RETOUCHESLOGO/Fichier 2.png"
import LogoIn from "../images/RETOUCHESLOGO/Fichier 9.png"
import Logospotify from "../images/RETOUCHESLOGO/Fichier 11.png"
import Logotelegram from "../images/RETOUCHESLOGO/Fichier 22.png"

const FouterApp=()=>{

   
    return(
    <>

        
    <div className='bg-neutral-700 text-white border-t-2 border-yellow-700 iphone:text-neutral-50'>
       <h1 className='text-center p-2 text-2xl border-b-2 border-red-400 py-7 iphone:text-lg iphone:text-neutral-50'> Vous avez déjà trouvé ? Alors, achetez votre produit directement sur la boutique .</h1>
       <div>
            <p className='my-2 mx-20 text-sm  border-b-2 w-[70rem] py-3 iphone:mx-2 iphone:mt-2 iphone:w-[22rem]'>Pays/Région :  Cameroun</p>
        </div>
    <div className='flex px-20 items-center justify-items-center my-10 iphone:my-2 iphone:block iphone:px-2'>  
        <div className='text-sm mr-16 iphone:mr-0 iphone:text-xs iphone:w-60'>  
            <p className='my-2'>Qui sommes-nous</p>
            <p className='my-2'>Relations avec les investisseurs</p>
            <p className='my-2'>Acheter en ligne</p>
        </div>
        <div className='text-sm mr-[20rem] iphone:w-60 iphone:mr-0'>
            <p className='my-2'>Enregistrer votre produit</p>
            <p className='my-2'>Restez connecté</p>

        </div>

        <div className='justify-between'>
            <div className='w-28'>
                <h2>Nos reseaux</h2>
            </div>
            <div className='flex w-12 pt-3 iphone:w-8'>
            <img src={Logowhatsapp} alt='reseau'/>
            <img src={LogoIn} alt='reseau' className='mx-2'/>
            <img src={Logospotify} alt='reseau'/>
            <img src={Logotelegram} alt='reseau'className='mx-2'/>
            </div>
            
        </div>
        
    </div>
    <section className=' iphone:text-justify'>
        <div>
        <p className='w-[70rem] mx-20 border-red-500 border-t-2  text-sm py-4 iphone:mx-2 iphone:w-[20rem]'>{"Rappels| Accessibilité| Index Egalité Professionnelle| Confidentialité| Publicité & cookies| Droits relatifs à vos données personnelles| Conditions d'utilisation| Garantie consommateur légale| Déclaration de garantie limitée. , L.P. Les informations contenues dans le présent document peuvent être modifiées à tout moment et sans préaviss"}</p>
            <p className='text-center py-10 iphone:mx-2 iphone:w-[22rem] '>{"©2023 by EmmanuelMbarga "}</p>
        </div>
            
    </section>

    </div>
    </>
    )
    
} 

export default FouterApp