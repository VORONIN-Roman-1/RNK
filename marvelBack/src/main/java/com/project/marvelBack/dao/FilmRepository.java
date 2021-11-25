package com.project.marvelBack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.marvelBack.entity.Film;

@Repository
public interface FilmRepository extends JpaRepository <Film, Long> {
	
	public List<Film> findByTitle (String title);
	
	public List<Film> findById (String id);

}
