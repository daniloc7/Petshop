import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicoDataService from '../services/ServicoDataService';

const ListarServico = () => {

  const [servicos, setServicos] = useState([]);

  const handleSearch = event => {
    const descricao = event.target.value;

    if (descricao) {
      ServicoDataService.getDescricaoByNome(descricao)
        .then(response => {
          // console.log('pet update', response.data);
          setServicos(response.data);
        })
        .catch(error => {
          console.log('Algo deu errado', error);
        })
    }
    else {
      ServicoDataService.getServicos()
        .then(response => {
          console.log('Servicos', response.data);
          setServicos(response.data);
        })
    }
  };

  useEffect(() => {
    ServicoDataService.getServicos()
      .then(response => {
        console.log('Servicos', response.data);
        setServicos(response.data);
      })
      .catch(error => {
        console.log('Erro', error);
      })
  }, []);

  const handleDelete = (id) => {
    console.log('Id', id);
    ServicoDataService.deleteServico(id)
      .then(response => {
        console.log('servico deletado', response.data);
        ServicoDataService.getServicos()
          .then(response => {
            console.log('Servicos', response.data);
            setServicos(response.data);
          })
          .catch(error => {
            console.log('Erro', error);
          })
      })
      .catch(error => {
        console.log('Algo deu errado', error);
      })
  }

  return (
    <div className="container">

      <div className="container">

        <h1>Procurar Serviço</h1>
        <input type="text" onChange={handleSearch} />

        <br/>
        <br/>
        <br/>
        <h3>Lista dos servicos</h3>
        <hr />
        <div>
          <Link to="/addservico" className="btn btn-primary mb-2">Adicionar serviço</Link>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Descrição</th>
                <th>Valor </th>
                <th>Data</th>
                <th>Nome do responsável pelo serviço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                servicos.map(servico => (
                  <tr key={servico.id}>
                    <td>{servico.descricao}</td>
                    <td>{servico.valor}</td>
                    <td>{servico.data}</td>
                    <td>{servico.responsavelServico}</td>
                    <td>
                      <Link className="btn btn-info" to={`/servicos/edit/${servico.id}`}>Update</Link>

                      <button className="btn btn-danger ml-2" onClick={() => {
                        handleDelete(servico.id);
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ListarServico;