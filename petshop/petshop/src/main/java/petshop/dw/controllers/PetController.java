package petshop.dw.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
//import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import petshop.dw.services.PetService;
import petshop.dw.models.PetModel;
import petshop.dw.models.ServicoModel;
import petshop.dw.services.ServicoService;

//É necessario atrelar pet com serviços
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/petshop")
public class PetController {

	@Autowired
	private PetService petService;
	
	@Autowired
	private ServicoService servicoService;
	
	//Listar todos os pets
	@GetMapping("/pets")
	public ResponseEntity<List<PetModel>> getPets(@RequestParam(required = false)String nome) {
		try { 
			
			List<PetModel> listPets = new ArrayList<PetModel>();
			
			if(nome == null) {
				petService.getAllPets().forEach(listPets::add);
			}
			else {
				petService.findByNomeContaining(nome).forEach(listPets::add);
			}
			
			if(listPets.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
			
			return new ResponseEntity<>(listPets, HttpStatus.OK);
		}catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
	}
	
	//Buscar pet pelo id
	@GetMapping("/pets/{id}")
    ResponseEntity<?> getPet(@PathVariable Long id) {
        Optional<PetModel> petModel = petService.findById(id);
        return petModel.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
	
	//Adicionar pet
//	@RequestMapping(method = { RequestMethod.GET, RequestMethod.POST }, value="/addpet")
	@PostMapping("/addpet")
	public ResponseEntity<PetModel> createPet(@Valid @RequestBody PetModel pet) throws URISyntaxException {
		pet.setDataEntrada(LocalDateTime.now(ZoneId.of("UTC")));
		PetModel petModel = petService.save(pet);
		return ResponseEntity.created(new URI("/petshop/addpet/" + petModel.getId()))
                .body(petModel);
//		return ResponseEntity.status(HttpStatus.CREATED).body(petService.save(pet));
	}
	
	//Alterar pet
	@PutMapping("/pets/{id}")
    ResponseEntity<PetModel> updatePet(@Valid @RequestBody PetModel pet) {
		PetModel petModel = petService.save(pet);
        return ResponseEntity.ok().body(petModel);
    }
	
	//Deletar pet
	@DeleteMapping("/pets/{id}")
	public ResponseEntity<Object> deletePet(@PathVariable(value="id") Long id){
		Optional<PetModel> petOptional = petService.findById(id);
		if(!petOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("pet não encontrado!");
		}
		petService.delete(petOptional.get());
//		petService.deleteById(id);
		return ResponseEntity.status(HttpStatus.OK).body("pet excluído!");
	}
	
	//Cadastrar um pet no servico...... BODY VAI ID SERVICO, P
	@PostMapping("/petservico")
	public ResponseEntity<Object> associarPet(@ModelAttribute ServicoModel servico, @RequestParam Long id) throws URISyntaxException{
		
		
		PetModel petModel = petService.getPetById(id);
		servico = servicoService.getServicoById(servico.getId());
		
		petModel.getServicos().add(servico);
		petService.save(petModel);
		
		return ResponseEntity.created(new URI("/petshop/petservico/" + petModel.getId()))
                .body(petModel);
	}
	
	
	
	
	
}
