package com.project.marvelBack.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.marvelBack.dao.FilmRepository;
import com.project.marvelBack.dao.PersonnageRepository;
import com.project.marvelBack.entity.Film;
import com.project.marvelBack.entity.Personnage;

@RestController
@CrossOrigin
public class HelloRestController {

	@Autowired
	private FilmRepository filmrepository ;
	
	@Autowired
	private PersonnageRepository personnagerepository;
	
	
	@PostConstruct
	public void loadDatasMockObject() {

	}
	@GetMapping("/")
	public String sayHello() {
		return "Hello spring Boot Rest World !";
	}
	@GetMapping("/films")
	public List<Film> getFilms() {
		return filmrepository.findAll();
	}
	@GetMapping("/personnages")
	public List<Personnage> getPersonnages() {
		return personnagerepository.findAll();
	}
	@GetMapping("/personnages/{id}")
	public Personnage getPersonnageById(@PathVariable Long id) {
		return personnagerepository.findById(id).get();
	}
}