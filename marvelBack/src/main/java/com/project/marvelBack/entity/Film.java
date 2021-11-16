package com.project.marvelBack.entity;

public class Film {
	private int id;
	private String title;
	private String image;
	private int annee;
	
	public Film() {
	}
	public Film(int id, String title, String image, int annee) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.annee = annee;
	}
	
	public Film(String title, String image, int annee) {
		this.title = title;
		this.image = image;
		this.annee = annee;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getAnnee() {
		return annee;
	}
	public void setAnnee(int annee) {
		this.annee = annee;
	}
	
}
