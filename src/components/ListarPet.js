import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PetDataService from '../services/PetDataService';

const ListarPet = () => {

  const [pets, setPets] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm] = searchParams.get("nome") || "";

  const handleSearch = event => {
    const nome = event.target.value;

    if (nome) {
      PetDataService.getPetsByNome(nome)
        .then(response => {
          console.log('pet update', response.data);
          setPets(response.data);
        })
        .catch(error => {
          console.log('Algo deu errado', error);
        })
    }
    else {
      PetDataService.getPets()
        .then(response => {
          console.log('Pets', response.data);
          setPets(response.data);
        })
    }
  };
  // const init = () => {
  //   // search();

  // }

  useEffect(() => {
    PetDataService.getPets()
      .then(response => {
        console.log('Pets', response.data);
        setPets(response.data);
      })
      .catch(error => {
        console.log('Erro', error);
      })
  }, []);
  // useEffect(() => {
  //   init();
  // }, []);

  const handleDelete = (id) => {
    console.log('Id', id);
    PetDataService.deletePet(id)
      .then(response => {
        console.log('pet deletado', response.data);
        PetDataService.getPets()
          .then(response => {
            console.log('Pets', response.data);
            setPets(response.data);
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
    <div>

      <div className="container">

        <h1>Procurar Pet</h1>
        <input type="text" onChange={handleSearch} />

        <br />
        <br />
        <br />

        <div className="container">
          <h3>Lista dos pets</h3>
          <hr />
          <div>
            <Link to="/addpet" className="btn btn-primary mb-2">Adicionar pet</Link>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Documento do dono</th>
                  <th>Nome do dono </th>
                  <th>Nome do pet</th>
                  <th>Espécie</th>
                  <th>Idade</th>
                  <th>Alergia</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {
                  pets.map(pet => (
                    <tr key={pet.id}>
                      <td>{pet.documentoDono}</td>
                      <td>{pet.nomeDono}</td>
                      <td>{pet.nome}</td>
                      <td>{pet.especie}</td>
                      <td>{pet.idade}</td>
                      <td>{pet.alergia}</td>
                      <td>
                        <Link className="btn btn-info" to={`/pets/edit/${pet.id}`}>Update</Link>

                        <button className="btn btn-danger ml-2" onClick={() => {
                          handleDelete(pet.id);
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
    // </div>

  );
}

// function search(){

//   const [searchParams, setSearchParams]= useSearchParams();
//   const [nome] = searchParams.get("nome");
//   return(
//     <div className="search">
//       <input
//         type="text"
//         placeholder='Procurar'
//         onChange={(event)=>{
//           setSearchParams(event.target.value);
//         }}
//         />
//         {JSONDATA.filter((val)=>{
//           if(searchParams == ""){
//             return val
//           }
//         elseif(val.nome.toLowerCase().includes(searchParams.toLowerCase())); {
//           return val
//         }
//         }).map((val,key)=>{
//           return(
//             <div className="pet" key={id}>
//               <p>{val.nome}</p>
//             </div>
//           );
//         })}
//     </div>
//   )

// }

export default ListarPet;