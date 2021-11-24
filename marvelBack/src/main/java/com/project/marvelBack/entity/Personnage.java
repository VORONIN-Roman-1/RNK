package com.project.marvelBack.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "personnage")
public class Personnage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column (name= "name")
	private String name;
	@Column (name= "image")
	private String image;
	@Column (name= "alias")
	private String alias;
	@Column (name= "description")
	private String description;
	
	// définir les constructeurs
	public Personnage(int id, String name, String image, String alias, String description) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.alias = alias;
		this.description = description;
	}
	
	public Personnage(String name, String image, String alias, String description) {
		this.name = name;
		this.image = image;
		this.alias = alias;
		this.description = description;
	}

	public Personnage() {
	}
	
	// définir les getters() & les setters()
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	// définir toString()
	
	@Override
	public String toString() {
		
	return "Film [id=" + id + ", name=" + name + ", image=" + image + ", alias=" + alias + ", description= " + description + "]";
	}
	
}
