import React from 'react';
import './registroStyle.css'

const INPUT_CLASS = 'w-full px-3 py-2 border rounded-lg bg-input text-foreground'
const LABEL_CLASS = 'block text-muted-foreground mb-2'

const Widget = () => {
  return (
    <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-bold mb-4 text-foreground">Crear nuevo usuario</h2>
      <form>
        <div className="mb-4">
          <label className={LABEL_CLASS} htmlFor="name">
            Nombres y Apellidos
          </label>
          <input className={INPUT_CLASS} type="text" id="name" placeholder="Ingresa tu nombre" />
        </div>
        <div className="mb-4">
          <label className={LABEL_CLASS} htmlFor="id">
            Cédula de Identidad
          </label>
          <input className={INPUT_CLASS} type="text" id="id" placeholder="12345678" />
        </div>
        <div className="mb-4">
          <label className={LABEL_CLASS} htmlFor="email">
            Correo Electronico
          </label>
          <input className={INPUT_CLASS} type="email" id="email" placeholder="micorreo@midominio.com" />
        </div>
        <div className="mb-4">
          <label className={LABEL_CLASS} htmlFor="password">
            Contraseña
          </label>
          <input className={INPUT_CLASS} type="password" id="password" placeholder="*********" />
        </div>
        <div className="mb-4">
          <label className={LABEL_CLASS} htmlFor="role">
            Rol del usuario
          </label>
          <select className={INPUT_CLASS} id="role">
            <option>Rol</option>
          </select>
        </div>
        <div className="mb-4">
          <label className={LABEL_CLASS}>Información de apartamento</label>
          <div className="flex space-x-2">
            <select className="w-1/2 px-3 py-2 border rounded-lg bg-input text-foreground">
              <option>Apartamento</option>
            </select>
            <select className="w-1/2 px-3 py-2 border rounded-lg bg-input text-foreground">
              <option>Propietario</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80">Crear</button>
      </form>
    </div>
  )
}

export default Widget