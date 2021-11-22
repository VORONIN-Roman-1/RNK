package com.project.marvelBack.entity;

public class Personnage {
	private int id;
	private String name;
	private String image;
	private String alias;
	private String description;
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
	
}
