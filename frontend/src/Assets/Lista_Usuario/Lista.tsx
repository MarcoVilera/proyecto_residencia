import React from 'react'
import './ListaStyle.css'

const inputClass = 'w-full p-2 pl-8 border rounded-lg'
const borderClass = 'border rounded-lg'
const flexClass = 'flex'
const gridClass = 'grid grid-cols-3 gap-4'
const buttonClass = 'bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600'

const MyComponent = () => {
  return (
    <div className={`${flexClass} space-x-4 p-4`}>
      <div className="w-1/4 p-4 border rounded-lg">
        <div className="relative mb-4">
          <input type="text" placeholder="Ci y nombre" className={inputClass} />
        </div>
        <p>Ci y nombre</p>
      </div>

      <div className="w-3/4 p-4 border rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p>Nombre Apellido Ci Telefono Correo Rol</p>
            <p>Propietario Numero de apto</p>
          </div>
        </div>
        <div className={gridClass}>
          <div className={`${borderClass} p-4`}>
            <p>Morosidad</p>
            <p>Mes y monto y estado</p>
            <p>Si no esta moroso</p>
            <p>Poner un mensaje de que no existe deuda</p>
          </div>
          <div className={`${borderClass} p-4`}>
            <p>Reservas</p>
            <p>Fecha</p>
          </div>
          <div className={`${borderClass} p-4`}>
            <p>Solicitudes</p>
            <p>Descripcion y fecha</p>
          </div>
        </div>
        <button className={buttonClass}>Editar info</button>
      </div>
    </div>
  )
}

export default MyComponent