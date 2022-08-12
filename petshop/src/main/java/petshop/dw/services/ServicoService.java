package petshop.dw.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import petshop.dw.models.PetModel;
import petshop.dw.models.ServicoModel;
import petshop.dw.repositories.ServicoRepository;

//Precisa ver oq faz no dia

public class ServicoService {
	
	@Autowired
	ServicoRepository servico;
	
	@Transactional
    public ServicoModel save(ServicoModel servicoModel) {
		return servico.save(servicoModel);
    }
	
	public Optional<ServicoModel> findById(UUID id) {
		return servico.findById(id);
	}
	
	public ServicoModel getServicoById(UUID id) {
		return servico.findById(id).get();
	}
	
	public List<ServicoModel> getAllServicos(){
		return servico.findAll();
	}
	
	public List<ServicoModel> findByDescricaoContaining(String descricao){
		 return servico.findByNomeContaining(descricao);
	 }
	
	@Transactional
	public void delete(ServicoModel servicoModel) {
		servico.delete(servicoModel);
	}
	
	

}
