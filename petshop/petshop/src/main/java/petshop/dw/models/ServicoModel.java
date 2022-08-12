package petshop.dw.models;

import java.time.LocalDateTime;
import java.util.List;
//import java.util.UUID;


import javax.persistence.*;

@Entity
@Table(name = "TB_SERVICO")
public class ServicoModel {
//	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 50)
	private String descricao;
	@Column(nullable = false)
	private double valor;
	@Column(nullable = false)
	private LocalDateTime data;
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	public LocalDateTime getData() {
		return data;
	}
	public void setData(LocalDateTime data) {
		this.data = data;
	}
	public String getResponsavelServico() {
		return responsavelServico;
	}
	public void setResponsavelServico(String responsavelServico) {
		this.responsavelServico = responsavelServico;
	}
//	public static long getSerialversionuid() {
//		return serialVersionUID;
//	}
//	
	
	
	
}
