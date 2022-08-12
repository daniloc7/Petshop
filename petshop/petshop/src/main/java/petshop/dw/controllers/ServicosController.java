package petshop.dw.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
//import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import petshop.dw.models.PetModel;
import petshop.dw.models.ServicoModel;
import petshop.dw.services.ServicoService;

//Precisa ver oq faz no dia
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/servicos")
public class ServicosController {

	
	
	@Autowired
	private ServicoService servicoService;
	
	//Descricao
	@GetMapping
	public ResponseEntity<List<ServicoModel>> getServicos(@RequestParam(required = false)String descricao) {
		try { 
			
			List<ServicoModel> listServicos = new ArrayList<ServicoModel>();
			
			if(descricao == null) {
				servicoService.getAllServicos().forEach(listServicos::add);
			}
			else {
				servicoService.findByDescricaoContaining(descricao).forEach(listServicos::add);
			}
			
			if(listServicos.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
			
			return new ResponseEntity<>(listServicos, HttpStatus.OK);
		}catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
	}
	
//	@GetMapping
//	Collection<ServicoModel> getServicos(){
//		return servicoService.getAllServicos();
//	}
	
	//Buscar servico pelo id
	@GetMapping("/{id}")
    ResponseEntity<?> getServico(@PathVariable Long id) {
        Optional<ServicoModel> servicoModel = servicoService.findById(id);
        return servicoModel.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
	
	//Adicionar servico
		@PostMapping("/addservico")
		public ResponseEntity<ServicoModel> createServico(@Valid @RequestBody ServicoModel servico) throws URISyntaxException {
			servico.setData(LocalDateTime.now(ZoneId.of("UTC")));
			ServicoModel servicoModel = servicoService.save(servico);
			return ResponseEntity.created(new URI("/servicos/addservico/" + servicoModel.getId()))
	                .body(servicoModel);
		}
		
		//Alterar pet
		@PutMapping("/alterar/{id}")
	    ResponseEntity<ServicoModel> updateServico(@Valid @RequestBody ServicoModel servico) {
			ServicoModel servicoModel = servicoService.save(servico);
	        return ResponseEntity.ok().body(servicoModel);
	    }
		
		//Deletar pet
		@DeleteMapping("/deletar/{id}")
		public ResponseEntity<Object> deleteServico(@PathVariable(value="id") Long id){
			Optional<ServicoModel> servicoOptional = servicoService.findById(id);
			if(!servicoOptional.isPresent()) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("serviço não encontrado!");
			}
			servicoService.delete(servicoOptional.get());
			return ResponseEntity.status(HttpStatus.OK).body("serviço excluído!");
		}
	
	
}
