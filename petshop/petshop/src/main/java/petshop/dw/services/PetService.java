package petshop.dw.services;

import java.util.List;
import java.util.Optional;
//import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import petshop.dw.models.PetModel;
import petshop.dw.repositories.PetRepository;

@Service
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

	public Optional<PetModel> findById(Long id) {
		return pet.findById(id);
	}
	
	public PetModel getPetById(Long id) {
        return pet.findById(id).get();
    }
	
	public void deleteById(Long id) {
		pet.deleteById(id);
	}

	@Transactional
	public void delete(PetModel petModel) {
		pet.delete(petModel);
	}
	
}
