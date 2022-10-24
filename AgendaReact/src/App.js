import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import ListaContatos from './componentes/listaContatos';

export default function App() {

  let [contato, setContato] = useState({ nome: '', telefone: '', cidade: '' })
  let [listaContatos, setListaContatos] = useState([])

  function definirNome(evento) {
    setContato({ ...contato, nome: evento.target.value })
  }

  function definirTelefone(evento) {
    setContato({ ...contato, telefone: evento.target.value })
  }

  function definirCidade(evento) {
    setContato({ ...contato, cidade: evento.target.value })
  }


  function adicionarContato() {
    if (contato.nome === '' || contato.telefone === '' || contato.cidade === '') return
    
    setListaContatos([...listaContatos, contato])
  }


  return (
    <>
      <div className='container mt-5 d-flex justify-content-center'>
        <h1 className='mb-4'>Agenda Telefônica</h1>
      </div>
      <div className='container justfy-content-center'>
        <div className="form-floating row g-3 mb-4">
          <div className="col">
            <input type="text" className="form-control" placeholder="Nome" onChange={definirNome} value={contato.nome} />
          </div>
        </div>
        <div className="form-floating row g-3 mb-4">
          <div className="col">
            <input type="number" className="form-control" placeholder="Telefone" onChange={definirTelefone} value={contato.telefone} />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Cidade" onChange={definirCidade} value={contato.cidade} />
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button onClick={adicionarContato} className="btn btn-primary" type="button">Adicionar Contato</button>
      </div>
      <hr/>

      <ListaContatos listaContatos={listaContatos}/>
    </>
  );
}
