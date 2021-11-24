package com.project.marvelBack.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.marvelBack.dao.FilmRepository;
import com.project.marvelBack.dao.PersonnageRepository;
import com.project.marvelBack.entity.Film;
import com.project.marvelBack.entity.Personnage;

@RestController
@CrossOrigin
public class HelloRestController {
	private List<Film> films = new ArrayList<>();;
	private List<Personnage> personnages;
	
	@Autowired
	private FilmRepository filmrepository ;
	
	@Autowired
	private PersonnageRepository personnagerepository;
	
	
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
		
		Personnage personnage = new Personnage(1, "Iron Man", "IronMan.jpg", "Tony Stark", "Men de metal");
		
		personnages.add(personnage);
				
		personnage = new Personnage(2, "Hulk", "Hulk.jpg", "Bruce Banner", "Men vert");
		personnages.add(personnage);
		
		personnage = new Personnage(3, "Captain America", "Captain America.jpg", "Steve Rogers", "Soldat Americains");
		personnages.add(personnage);
		
		personnage = new Personnage(4, "Thor", "Thor.jpg", "ThorIvanon", "Dieu d'Asgard");
		personnages.add(personnage);
		
		personnage = new Personnage(5, "Black Widow", "Black Widow.jpg", "Natasha Romanov", "Agent du SHIELD");
		personnages.add(personnage);
		

	
	}
	@GetMapping("/")
	public String sayHello() {
		return "Hello spring Boot Rest World !";
	}
	@GetMapping("/films")
	public List<Film> getFilms() {

		filmrepository.save(films.get(1));
		
		return films;
	}
	@GetMapping("/personnages")
	public List<Personnage> getPersonnages() {
		
		personnagerepository.save(personnages.get(1));
		
		return personnages;
	}
}