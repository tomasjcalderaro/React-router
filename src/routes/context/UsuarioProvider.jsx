import { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

export const UsuarioProvider = ({childern}) => {

    const [usuario, setusuario] = useState({})



    return (
        <UsuarioContext.Provider value={( usuario, setusuario )}>
            {childern}
        </UsuarioContext.Provider>
    )
}
