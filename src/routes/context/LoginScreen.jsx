import React, { useContext } from 'react'
import { useForm } from "./hooks/useForm"
import { UsuarioContext } from "./UsuarioContext"

export const LoginScreen = () => {
    
      const initialForm = {
        nombre: '',
        tecnologia: '',
        email: '',
        redes: ''
      }

      const {formState, nombre, tecnologia, email, redes, onInputChange } = useForm(initialForm)
      const { setusuario } = useContext ( UsuarioContext )
      
      onsubmit = (e) => {
        e.preventDefault()
        setusuario(formState)
      }
      return (
        <>
          <form className="container" onSubmit={onSubmit}>
            <div class="mb-3">
              <label htmlFor="nombre" class="form-label">Nombre</label>
              <input 
              type="text" 
              className="form-control" 
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              />
            </div>
            <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre"/>
            </div>
            <div class="mb-3">
              <label htmlFor="tecnologia" class="form-label">Tecnologia</label>
              <input 
              type="text" 
              className="form-control" 
              name="tecnologia"
              value={tecnologia}
              onChange={onInputChange}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">Email</label>
              <input 
              type="text" 
              className="form-control" 
              name="email"
              value={email}
              onChange={onInputChange}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="redes" class="form-label">Redes</label>
              <input 
              type="text" 
              className="form-control" 
              name="redes"
              value={redes}
              onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Registrar Usuario</button>
          </form>
        </>
    )
}

