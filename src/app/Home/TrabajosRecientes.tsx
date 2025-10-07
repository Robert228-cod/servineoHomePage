'use client'

import React, { useState } from 'react'
import { JobCard } from '../../componets/JobCard'
import jobs from '@/jsons/jobs.json'

export const TrabajosRecientes = () => {

    //const [ isLogin, setIslogin ] = useState(false)

  return (
    <>
        <div>
        <h1 className='text-[25px] text-center'> Trabajos recientes </h1>

        {/*
        <div className="flex justify-between pr-8">
          { isLogin ? "" : <span>Iniciar sesion para ver detalles completos y contratar fixers</span> }

          <Link href=""> Ver mas... </Link>
        </div>
        */}
        
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4">
          {
            jobs.map( (item, index) => 
              <JobCard
                key={index}
                destacado={item.destacado} 
                imgPath={item.imagen}
                titulo={item.titulo} 
                descripcion={item.descripcion} 
                nombre={item.nombreFixer} 
                apellidio={item.apellidoFixer} 
                ubicacion={item.ubicacion} 
                tiempo={item.tiempoPublicado} 
                calificacion={item.calificacion}
                precio={{
                    min: item.precio.min,
                    max: item.precio.max
                  }} 
              />
            )
          } 
        </div>
      </div>
    </>
  )
}
