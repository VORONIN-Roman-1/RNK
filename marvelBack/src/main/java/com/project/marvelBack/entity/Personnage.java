package com.project.marvelBack.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "personnage")
public class Personnage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "image")
	private String image;
	@Column(name = "truename")
	private String alias;
	
	

	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="film_personnage",
			joinColumns=@JoinColumn(name="personnage_id"),
			inverseJoinColumns=@JoinColumn(name="film_id")
			)
	private List <Film> films;
	
	public List<Film> getFilms() {
		return films;
	}

	public void setFilms(List<Film> films) {
		this.films = films;
	}
	
//	@JsonIgnore
//	@Nullable
//	@Column(name = "description")
//	private String description= null;

	// définir les constructeurs
	public Personnage(Long id, String name, String image, String alias) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.alias = alias;
		
	}

	public Personnage(String name, String image, String alias) {
		this.name = name;
		this.image = image;
		this.alias = alias;
		
	}
	
	public Personnage() {
	}

	// définir les getters() & les setters()

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getAlias() {
		return alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}

	// définir toString()

	@Override
	public String toString() {

		return "Film [id=" + id.longValue() + ", name=" + name + ", image=" + image + ", alias=" + alias
				+ ", description= ";
	}

}
