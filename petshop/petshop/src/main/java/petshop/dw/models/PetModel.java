package petshop.dw.models;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name = "TB_PETMODEL")
public class PetModel {
//	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false, unique = true, length = 20)
    private String documentoDono;
	@Column(nullable = false, length = 15)
	private String nome;
	@Column(nullable = false, length = 30)
	private String nomeDono;
	@Column(nullable = false,length = 15)
	private String especie;
	@Column(nullable = false, length = 30)
	private String idade;
	@Column(nullable = false, length = 30)
	private String raca;
	@Column(nullable = false, length = 30)
	private String alergia;
	@Column(nullable = false)
	private boolean castrado;
	@Column(nullable = true)
    private LocalDateTime dataEntrada;
	@Column(name="dataSaida", nullable = true)
    private LocalDateTime dataSaida;
	
	@ManyToMany
    @JoinTable(
        name="Pets_Servicos", 
        uniqueConstraints = @UniqueConstraint(columnNames = { "id_pet", "id_servico" }),
        joinColumns        = @JoinColumn(name = "id_pet" ),
        inverseJoinColumns = @JoinColumn(name = "id_servico")
    )
    private List<ServicoModel> servicos;
	
	
	
	public List<ServicoModel> getServicos() {
		return servicos;
	}
	public void setServicos(List<ServicoModel> servicos) {
		this.servicos = servicos;
	}
	public String getDocumentoDono() {
		return documentoDono;
	}
	public void setDocumentoDono(String documentoDono) {
		this.documentoDono = documentoDono;
	}
	public LocalDateTime getDataEntrada() {
		return dataEntrada;
	}
	public void setDataEntrada(LocalDateTime dataEntrada) {
		this.dataEntrada = dataEntrada;
	}
	public LocalDateTime getDataSaida() {
		return dataSaida;
	}
	public void setDataSaida(LocalDateTime dataSaida) {
		this.dataSaida = dataSaida;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getNomeDono() {
		return nomeDono;
	}
	public void setNomeDono(String nomeDono) {
		this.nomeDono = nomeDono;
	}
	public String getEspecie() {
		return especie;
	}
	public void setEspecie(String especie) {
		this.especie = especie;
	}
	public String getIdade() {
		return idade;
	}
	public void setIdade(String idade) {
		this.idade = idade;
	}
	public String getRaca() {
		return raca;
	}
	public void setRaca(String raca) {
		this.raca = raca;
	}
	public String getAlergia() {
		return alergia;
	}
	public void setAlergia(String alergia) {
		this.alergia = alergia;
	}
	public boolean isCastrado() {
		return castrado;
	}
	public void setCastrado(boolean castrado) {
		this.castrado = castrado;
	}
	
//	public static long getSerialversionuid() {
//		return serialVersionUID;
//	}
	
	
	

}
