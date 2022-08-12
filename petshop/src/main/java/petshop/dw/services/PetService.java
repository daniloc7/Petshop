package petshop.dw.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import petshop.dw.models.PetModel;
import petshop.dw.repositories.PetRepository;

public class PetService {
	
	@Autowired
	PetRepository pet;
	
	 @Transactional
	 public PetModel save(PetModel petModel) {
	        return pet.save(petModel);
     }
	 
	 public boolean existsByDocumentoDono(String documentoDono) {
	        return pet.existsByDocumentoDono(documentoDono);
     }
	 
	 public boolean existsByNome(String nome) {
	        return pet.existsByNome(nome);
     }

	 public List<PetModel> getAllPets(){
		 return pet.findAll();
	 }
	 
	 public List<PetModel> findByNomeContaining(String nome){
		 return pet.findByNomeContaining(nome);
	 }

	public Optional<PetModel> findById(UUID id) {
		return pet.findById(id);
	}
	
	public PetModel getPetById(UUID id) {
        return pet.findById(id).get();
    }

	@Transactional
	public void delete(PetModel petModel) {
		pet.delete(petModel);
	}
	
}
