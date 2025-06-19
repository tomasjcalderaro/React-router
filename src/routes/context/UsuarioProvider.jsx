import { UsuarioContext } from './UsuarioContext'

const usuario = {
    nombre: 'Tomas Calderaro',
    tecnologia: 'React',
    mail: 'tomasjcalderaro@gmail.com',
    redes: '@tomascalderaro'

}

export const UsuarioProvider = ({childern}) => {
    return (
        <UsuarioContext.Provider value={( usuario )}>
            {childern}
        </UsuarioContext.Provider>
    )
}
