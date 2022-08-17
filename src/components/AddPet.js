// import { useState } from "react";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
import PetDataService from "../services/PetDataService";


const AddPet = () => {
    const[documentoDono,setDocumentoDono]=useState('')
    const[nome,setNome]=useState('')
    const[nomeDono,setNomeDono]=useState('')
    const[especie,setEspecie]=useState('')
    const[idade,setIdade]=useState('')
    const[raca,setRaca]=useState('')
    const[alergia,setAlergia]=useState('')
    const[castrado,setCastrado]=useState('')
    const[dataEntrada,setDataEntrada]=useState('')
    const[dataSaida,setDataSaida]=useState('')
    const navigate = useNavigate();
    const {id} = useParams();
    // const[pets,setPets]=useState('')

    const savePet = (e) => {
        e.preventDefault();
        
        const pet={documentoDono,nome,nomeDono,especie,idade,raca,alergia,castrado,dataEntrada,dataSaida,id};
        if (id) {
            //update
            PetDataService.updatePet(pet)
                .then(response => {
                    console.log('pet update', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                }) 
        } else {
            //create
            PetDataService.createPet(pet)
            .then(response => {
                console.log("pet adicionado", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            PetDataService.getPet(id)
                .then(pet => {
                    setDocumentoDono(pet.data.documentoDono);
                    setNome(pet.data.nome);
                    setNomeDono(pet.data.nomeDono);
                    setEspecie(pet.data.especie);
                    setIdade(pet.data.idade);
                    setRaca(pet.data.raca);
                    setAlergia(pet.data.alergia);
                    setCastrado(pet.data.castrado);
                    setAlergia(pet.data.alergia);
                    setDataEntrada(pet.data.dataEntrada);
                    setDataSaida(pet.data.dataSaida);

                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Adicionar Pet</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="documentoDono"
                        value={documentoDono}
                        onChange={(e) => setDocumentoDono(e.target.value)}
                        placeholder="Documento do dono"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome do pet"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="nomeDono"
                        value={nomeDono}
                        onChange={(e) => setNomeDono(e.target.value)}
                        placeholder="Nome do dono"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="especie"
                        value={especie}
                        onChange={(e) => setEspecie(e.target.value)}
                        placeholder="Espécie"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        placeholder="Idade"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="raca"
                        value={raca}
                        onChange={(e) => setRaca(e.target.value)}
                        placeholder="Raça"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="alergia"
                        value={alergia}
                        onChange={(e) => setAlergia(e.target.value)}
                        placeholder="Alergia"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="castrado"
                        value={castrado}
                        onChange={(e) => setCastrado(e.target.value)}
                        placeholder="Castrado"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="dataEntrada"
                        value={dataEntrada}
                        onChange={(e) => setDataEntrada(e.target.value)}
                        placeholder="Data de entrada"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="dataSaida"
                        value={dataSaida}
                        onChange={(e) => setDataSaida(e.target.value)}
                        placeholder="Data saída"
                    />
                </div>
                <div >
                    <button onClick={(e) => savePet(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/pets">Ir para lista</Link>
        </div>
    )
}

export default AddPet;