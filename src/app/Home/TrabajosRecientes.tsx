'use client'

import React, { useState } from 'react'
import jobs from '@/jsons/jobs.json'
import { JobCard } from '../../componets/JobCard'
import { JobListEmpty } from '@/componets/JobListEmpty'
import { init } from 'next/dist/compiled/webpack/webpack'

export const TrabajosRecientes = () => {

    //const [ isLogin, setIslogin ] = useState(false)
    const [visible, setVisible] = useState(10)
    const [initial, setInitial] = useState(0)

    const updateList = () => {
      setInitial( initial + 10 )
      setVisible( visible + 10 )
    }

    const updateListPrevius = () => {
      setInitial(initial - 10)
      setVisible(visible - 10)
    }

  return (
    <>
        <div>
        <h1 className='text-[25px] text-center text-2xl font-bold text-gray-900 mb-[20px]'> Trabajos recientes </h1>

        {/*
        <div className="flex justify-between pr-8">
          { isLogin ? "" : <span>Iniciar sesion para ver detalles completos y contratar fixers</span> }

          <Link href=""> Ver mas... </Link>
        </div>
        */}
        
        {
          jobs.length === 0 && 
            <JobListEmpty /> 
        }

        {
          jobs.length > 0 && 
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4">
              {
                jobs.slice(initial, visible).map( (item, index) => 
                (
                  item.activo === true &&
                    <JobCard
                      key={index}
                      destacado={item.destacado} 
                      imgPath={item.imagen}
                      titulo={item.titulo} 
                      descripcion={item.descripcion} 
                      categoria={item.categoria}
                      nombre={item.nombreFixer} 
                      apellido={item.apellidoFixer} 
                      ubicacion={item.ubicacion} 
                      tiempo={item.tiempoPublicado} 
                      calificacion={item.calificacion}
                      telefono={item.telefono}
                      precio={{
                          min: item.precio.min,
                          max: item.precio.max
                        }} 
                    />
                )
                )
              } 
            </div>
        }

        <div className='flex flex-row justify-center gap-[5px]'>
          <button
            className='bg-[#d39625] hover:bg-[#1834c2] duration-150 text-white h-9 w-40 rounded-[8px]'
            onClick={updateListPrevius}
          >
            Ver anteriores
          </button>
          <button 
            className='bg-[#2585d3] hover:bg-[#1834c2] duration-150 text-white h-9 w-40 rounded-[8px]'
            onClick={updateList}
          > 
            Ver mas 
          </button> 

        </div>
        
      </div>
    </>
  )
}
