import React from 'react'

import Table from 'react-bootstrap/Table'

const Repos = (props) => {
  const { repositorios } = props

  return (
    <Table className="mt-5" striped bordered responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Linguagem</th>
          <th>Última atualização</th>
        </tr>
      </thead>
      <tbody>
        {repositorios.map((repo, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{repo.name}</td>
            <td>{repo.language}</td>
            <td>{new Date(repo.updated_at).toLocaleDateString('pt-BR')}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Repos
