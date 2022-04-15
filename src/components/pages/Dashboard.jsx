import React, { useState, useContext, memo } from 'react'
import axios from 'axios'

import { Context } from '../../shared'
import Repos from '../Repos'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Starred from '../Starred'

const Dashboard = memo(() => {
  const ctx = useContext(Context)

  const [usuario, setUsuario] = useState('')
  const [loading, setLoading] = useState(false)

  async function buscarUsuario() {
    try {
      setLoading(true)
      const url = 'https://api.github.com/users'

      const response = await axios.get(`${url}/${usuario}`)
      const responseRepositorios = await axios.get(`${url}/${usuario}/repos`)
      const responseFavoritos = await axios.get(`${url}/${usuario}/starred`)

      ctx.setUsuario(response.data)
      ctx.setRepositorios(responseRepositorios.data)
      ctx.setFavoritos(responseFavoritos.data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={5}>
          <Form.Group controlId="formUsuario">
            <Form.Control
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value)
              }}
            />
          </Form.Group>
        </Col>
        <Col className="text-center mt-3 mt-md-0" xs={12} md={2}>
          <Button
            type="button"
            className="btn btn-primary px-3"
            onClick={buscarUsuario}
            disabled={loading}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </Col>
      </Row>

      <Container className="mt-5">
        {ctx?.usuario?.name ? (
          <Row>
            <Col className="text-sm-center text-md-start" xs={12} md={4}>
              <Image width={150} height={150} src={ctx.usuario?.avatar_url} />
              <h4 className="mt-3">{ctx.usuario?.name}</h4>
              <h5 className="text-muted">{ctx.usuario?.login}</h5>
            </Col>
            <Col xs={12} md={8}>
              <Tabs id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="repos" title="Repos">
                  {ctx.repositorios.length > 0 ? (
                    <Repos repositorios={ctx.repositorios} />
                  ) : (
                    <Container className="text-center">
                      Nenhum repositório encontrado
                    </Container>
                  )}
                </Tab>
                <Tab eventKey="starred" title="Starred">
                  {ctx.favoritos.length > 0 ? (
                    <Starred favoritos={ctx.favoritos} />
                  ) : (
                    <Container className="text-center">
                      Nenhum repositório favoritado encontrado
                    </Container>
                  )}
                </Tab>
              </Tabs>
            </Col>
          </Row>
        ) : (
          <Container className="text-center">
            Nenhum usuário selecionado
          </Container>
        )}
      </Container>
    </Container>
  )
})

export default Dashboard
