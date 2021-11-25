package com.project.marvelBack.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "film")
public class Film {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "year")
	private int year;
	
	// définir les constructeurs
	public Film() {
	}
	public Film(Long id, String title, String image, int year) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.year = year;
	}
	
	public Film(String title, String image, int year) {
		this.title = title;
		this.image = image;
		this.year = year;
	}
	// définir les getters() & les setters()
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	// définir toString()
		@Override
		public String toString() {
			return "Film [id=" + id.longValue()  + ", title=" + title + ", image=" + image + ", year=" + year + "]";
		}
	
}
