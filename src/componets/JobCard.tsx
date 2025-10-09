'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
    destacado: boolean,
    imgPath: string,
    titulo: string,
    descripcion: string,
    categoria: string,
    nombre: string,
    apellido: string,
    ubicacion: string,
    tiempo: any,
    calificacion: number,
    telefono: number,
    precio: {
        min: number,
        max: number
    }
}


export const JobCard = ({destacado, imgPath, titulo, descripcion, categoria, nombre,apellido, ubicacion, tiempo, calificacion, telefono, precio}:Props) => {
    
    const [expandido, setExpandido] = useState(false)

    const {min, max} = precio

    const handleClick = () => {
        const phoneNumber = `${591}${telefono}`
        const message = "Hola, quisiera mas informacion acerca del servicio"
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        window.open(url, "_blank")
    }
    console.log(tiempo)

  return (
    <>
        <div className={`flex flex-col rounded-[10px] justify-around border border-solid border-black/15 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/30 mr-[5px] mb-[5px] p-3 min-h-[370] max-h-[auto] max-w-[auto] min-w-[auto]`}>
            <div className='flex flex-row justify-between mb-[5px]'>
                { 
                    <span className={destacado ? `opacity-[100%] border border-solid pr-[5px] pl-[5px] text-[gold] rounded-[8px]` : `opacity-[0%]`}
                    > 
                        Destacado 
                    </span> 
                } 
                {
                    tiempo === "5 horas" && <span className='border border-solid border-#004280 text-[#004280] rounded-[10px] p-[1px] pr-[5px] pl-[5px] text-[13px] font-semibold'> Nuevo </span>
                }
                <span className={`border border-solid border-white/0 bg-[#a7f3a7] text-green-900 rounded-[10px] p-[1px] pr-[5px] pl-[5px] text-[13px] font-semibold `} 
                > 
                    {categoria} 
                </span>
            </div>

            <Image className='object-cover rounded-lg' src={imgPath} width={300} height={200} alt='imagen del trabajo' priority={true}/>

            <div className='flex flex-row justify-between items-center'>
                <strong className='text-[95%]'> {titulo} </strong>
                <span className='text-[11px]'>hace {tiempo}</span>
            </div>
            
            <hr className='opacity-20'/>

            <strong  
                onClick={() => setExpandido(!expandido)}
                className={`opacity-80 cursor-pointer transition-all duration-300 ${expandido ? "whitespace-normal overflow-visible" : "truncate whitespace-nowrap overflow-hidden"}`}
                title="Haz clic para expandir o colapsar"
            > 
                {descripcion} 
            </strong>

            <div className='flex flex-row gap-[5px]'>
                <strong className='opacity-70'> Fixer: </strong>
                <span className='opacity-70'>{nombre}</span>
                <span className='opacity-70'>{apellido}</span>
            </div>

            <div className='flex flex-row justify-between items-center gap-[5px] opacity-70'>
                <div className='flex flex-row items-center'>
                    <FiPhone />
                    <span> +591 {telefono} </span>
                </div>
                <div>
                    <span> Bs.{min}-{max} </span>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center'>
                <button 
                    className='flex flex-row items-center justify-center gap-[3px] bg-[#25D366] hover:bg-[#128C7E] duration-150 text-white h-9 w-40 rounded-[8px]'
                    onClick={handleClick}
                >
                    <FaWhatsapp />
                    WhatsApp 
                </button>
                <span>⭐{calificacion}</span>
            </div>
        </div>
    </>
  )
}
