// import { useState } from "react";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import ServicoDataService from '../services/ServicoDataService';


const AddServico = () => {
    const[descricao,setDescricao]=useState('')
    const[valor,setValor]=useState('')
    const[data,setData]=useState('')
    const[responsavelServico,setResponsavelServico]=useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveServico = (e) => {

        e.preventDefault();
        
        const servico={descricao,valor,data,responsavelServico,id};
        if (id) {
            //update
            ServicoDataService.updateServico(servico)
                .then(response => {
                    console.log('Fez update', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                }) 
        } else {
            //create
            ServicoDataService.createServico(servico)
            .then(response => {
                console.log("Foi adicionado", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            ServicoDataService.getServico(id)
                .then(servico => {
                    setDescricao(servico.data.descricao);
                    setValor(servico.data.valor);
                    setData(servico.data.data);
                    setResponsavelServico(servico.data.responsavelServico);

                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Adicionar Serviço</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descrição"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="Valor"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="data"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Data"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="responsavelServico"
                        value={responsavelServico}
                        onChange={(e) => setResponsavelServico(e.target.value)}
                        placeholder="Nome do responsável serviço"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveServico(e)} className="btn btn-primary">Salvar</button>
                </div>
            </form>
            <hr/>
            <Link to="/servicos">Ir para lista</Link>
        </div>
    )
}

export default AddServico;