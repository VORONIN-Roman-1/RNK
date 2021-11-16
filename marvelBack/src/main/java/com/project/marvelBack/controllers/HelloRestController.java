package com.project.marvelBack.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.marvelBack.entity.Film;
import com.project.marvelBack.entity.Personnage;

@RestController
@CrossOrigin
public class HelloRestController {
	private List<Film> films = new ArrayList<>();;
	private List<Personnage> personnages;

	@PostConstruct
	public void loadDatasMockObject() {
		films = new ArrayList<>();
		personnages = new ArrayList<>();
		Film film= new Film (1, "Iron Man", "IronMan.jpg", 2007);
		films.add(film);
		film= new Film (2, "L'incroyable Hulk", "LIncroyableHulk.jpg", 2011);
		films.add(film);
		film= new Film (3, "Iron Man 2", "IronMan2.jpg", 2013);
		films.add(film);
		film= new Film (4, "Thor", "Thor.jpg", 2014);
		films.add(film);
		film= new Film (5, "Captain America: First Avenger", "CaptainAmericaFirstAvenger.jpg", 2015);
		films.add(film);
		Personnage personnage = new Personnage(1, "Iron Man", "IronMan.jpg", "ManIvanon", "Men de metal");
		personnages.add(personnage);
				
		personnage = new Personnage(2, "Hulk", "Hulk.jpg", "HulkIvanon", "Men vert");
		personnages.add(personnage);
		
		personnage = new Personnage(3, "Captain Americ", "Captain Americ.jpg", "CaptainAmericIvanon", "Men en culotte");
		personnages.add(personnage);
		
		personnage = new Personnage(4, "Thor", "Thor.jpg", "ThorIvanon", "Alcogolic");
		personnages.add(personnage);
		

	
	}
	@GetMapping("/")
	public String sayHello() {
		return "Hello spring Boot Rest World !";
	}
	@GetMapping("/films")
	public List<Film> getFilms() {


		return films;
	}
	@GetMapping("/personnages")
	public List<Personnage> getPersonnages() {
		Personnage personnage = new Personnage(4, "Thor", "Thor.jpg", "ThorIvanon", "Alcogolic");
		personnages.add(personnage);
		return personnages;
	}
}