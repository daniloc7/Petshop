package petshop.dw.models;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


import javax.persistence.*;

@Entity
@Table(name = "TB_SERVICO")
public class ServicoModel {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable = false, length = 50)
	private String descricao;
	@Column(nullable = false)
	private double valor;
	@Column(nullable = false)
	private LocalDateTime dataServico;
	@Column(nullable = false, length = 30)
	private String responsavelServico;
	
	@ManyToMany
    @JoinTable(
        name="Pets_Servicos", 
        uniqueConstraints = @UniqueConstraint(columnNames = { "id_pet", "id_servico" }),
        joinColumns        = @JoinColumn(name = "id_servico" ),
        inverseJoinColumns = @JoinColumn(name = "id_pet")
    )
    private List<PetModel> pets;
	
	
	
	public List<PetModel> getPets() {
		return pets;
	}
	public void setPets(List<PetModel> pets) {
		this.pets = pets;
	}
	public UUID getId() {
		return id;
	}
	public void setId(UUID id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	public LocalDateTime getDataServico() {
		return dataServico;
	}
	public void setDataServico(LocalDateTime dataServico) {
		this.dataServico = dataServico;
	}
	public String getResponsavelServico() {
		return responsavelServico;
	}
	public void setResponsavelServico(String responsavelServico) {
		this.responsavelServico = responsavelServico;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}
