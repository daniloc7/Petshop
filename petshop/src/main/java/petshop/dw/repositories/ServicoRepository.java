package petshop.dw.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import petshop.dw.models.ServicoModel;

@Repository
public interface ServicoRepository extends JpaRepository<ServicoModel, UUID> {

	public List<ServicoModel> FindByDataServico(LocalDateTime data);
	
	public List<ServicoModel> FindByResponsavelServico(String responsavelServico);

	public List<ServicoModel> findByNomeContaining(String descricao);
	
	
}
