'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    destacado: boolean,
    imgPath: string,
    titulo: string,
    descripcion: string,
    nombre: string,
    apellidio: string,
    ubicacion: string,
    tiempo: string,
    calificacion: number,
    precio: {
        min: number,
        max: number
    }
}

export const JobCard = ({destacado, imgPath, titulo, descripcion,nombre,apellidio, ubicacion, tiempo, calificacion, precio}:Props) => {
    
    const [expandido, setExpandido] = useState(false)

    const {min, max} = precio

  return (
    <div>
        <div className='flex flex-col justify-around border border-solid border-[black] mr-[5px] mb-[5px] p-3 min-h-[350] max-h-[350] max-w-[260] min-w-[260]'>
            { <span className={destacado ? `opacity-[100%]` : `opacity-[0%]`}> Destacado </span> } 

            <Image src={imgPath} width={300} height={200} alt='imagen del trabajo' priority={true}/>

            <div className='flex justify-between'>
                <h2> {titulo} </h2>
                <div>
                    <span>{tiempo}</span>
                </div>
            </div>
            
            <hr />

            <strong  
                onClick={() => setExpandido(!expandido)}
                className={`cursor-pointer transition-all duration-300 ${expandido ? "whitespace-normal overflow-visible" : "truncate whitespace-nowrap overflow-hidden" }`}
                title="Haz clic para expandir o colapsar"
            
            > 
                {descripcion} 
            </strong>

            <div className='flex flex-row justify-between'>
                <button className='border border-solid border-[black] rounded-[6%] p-1.5'> WhatsApp </button>
                <span>⭐{calificacion}</span>
            </div>
        </div>
    </div>
  )
}
