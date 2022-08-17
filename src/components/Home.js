import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PetDataService from '../services/PetDataService';



export default function Pets() {

    const [pets, setPets] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm] = searchParams.get("nome") || "";

    const handleSearch = event => {
        const nome = event.target.value;

        if (nome) {
            setSearchParams({ nome });
        } else {
            setSearchParams({});
        }
    };

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

    return (
        <div className="container">
            <h1>Pets</h1>
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <ul>
                {
                    pets
                        .filter(pet => pet.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((pet, id) => (
                            <li key={id}>{pet}</li>
                        ))
                }
            </ul>

            <div>        <table className="table table-bordered table-striped">
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
                        Array(pets).map(pet => (
                            <tr key={pet.id}>
                                <td>{pet.documentoDono}</td>
                                <td>{pet.nomeDono}</td>
                                <td>{pet.nome}</td>
                                <td>{pet.especie}</td>
                                <td>{pet.idade}</td>
                                <td>{pet.alergia}</td>
                                <td>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            </div>
        </div>
    )
}