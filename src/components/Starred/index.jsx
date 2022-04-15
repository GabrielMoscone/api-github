import React from 'react'

import Table from 'react-bootstrap/Table'

const Starred = (props) => {
  const { favoritos } = props

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
        {favoritos.map((repo, idx) => (
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

export default Starred
