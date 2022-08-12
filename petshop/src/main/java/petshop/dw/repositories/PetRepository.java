package petshop.dw.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import petshop.dw.models.PetModel;

@Repository
public interface PetRepository extends JpaRepository<PetModel, UUID>{

	boolean existsByDocumentoDono(String documentoDono);
	
	boolean existsByNome(String nome);
	
	List<PetModel> findByNomeContaining(String nome);

	PetModel save(PetModel pet); 
}
