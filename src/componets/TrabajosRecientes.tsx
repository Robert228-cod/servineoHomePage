'use client'

import React, { useState } from 'react'
import jobs from '../jsons/jobs.json'
import { JobCard } from './JobCard'
import { JobListEmpty } from './JobListEmpty'

export const TrabajosRecientes = () => {

    const [visible, setVisible] = useState(10)
    const [initial, setInitial] = useState(0)
    const [handleOption, setHandleOption] = useState("todo")
    
    const categorias = ["todo", ...new Set(jobs.map(item => item.categoria))]

    const updateList = () => {
      setInitial( initial + 10 )
      setVisible( visible + 10 )
    }

    const updateListPrevius = () => {
      setInitial(initial - 10)
      setVisible(visible - 10)
    }
    const handleSelect = (e:any) => {
      setHandleOption(e.target.value)
    }

  return (
    <>
      <h1 className='text-3xl md:text-4xl text-center font-bold text-gray-900 mb-8'> Trabajos recientes </h1>
      
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-start mb-8 px-4'>
        <span className='text-lg font-semibold text-gray-900 mb-4 md:mb-0 md:mr-4'> Buscar por categoria: </span>
        <select 
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-600 block h-[40px] w-[150px] p-2.5' 
          value={handleOption} 
          onChange={handleSelect} 
          id="categorias"
        >
          {
            categorias.map( (item, index) => 
              <option value={item} key={index}>{item}</option>
            )
          }
        </select>
      </div>
      
      {
        jobs.length === 0 && 
          <JobListEmpty /> 
      }

      {
        jobs.length > 0 && 
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4">
            {
              jobs
                .slice()
                .reverse()
                .filter(item => handleOption === "todo" || item.categoria === handleOption)
                .slice(initial, visible)
                .map((item, index) => (
                  item.activo === true &&
                    <JobCard
                      key={index}
                      idJob={jobs.indexOf(item)}
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
                        }
                      } 
                    /> 
                ))
            } 
          </div>
      }
      
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 px-4'>
        {
          // el boton de ver siguiente solo se muestra si el usuario ya avanzo una pagina
          initial >= 10 &&
            <button
              className='bg-orange-500 hover:bg-orange-600 duration-150 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              onClick={updateListPrevius}
            >
              Ver anteriores
            </button>
        }
        {
          // el boton de ver mas solo se muestra cuando hay 10 o mas jobs en pantalla
          jobs
            .slice()
            .reverse()
            .filter(item => handleOption === "todo" || item.categoria === handleOption)
            .filter(item => item.activo === true)
            .slice(initial, visible)
            .length >= 10 &&
          visible < jobs.length &&
            <button 
              className='bg-blue-600 hover:bg-blue-700 duration-150 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
              onClick={updateList}
            > 
              Ver más 
            </button> 
        }
      </div>
    </>
  )
}
