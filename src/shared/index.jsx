import React, { useState, createContext } from 'react'

export const Context = createContext()

export default function Store(props) {
  const [usuario, setUsuario] = useState({})
  const [repositorios, setRepositorios] = useState([])
  const [favoritos, setFavoritos] = useState([])

  return (
    <Context.Provider
      value={{
        usuario,
        setUsuario,
        repositorios,
        setRepositorios,
        favoritos,
        setFavoritos,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
