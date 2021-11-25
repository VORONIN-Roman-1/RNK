package com.project.marvelBack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.marvelBack.entity.Personnage;

@Repository
public interface PersonnageRepository extends JpaRepository<Personnage , Long> {
	
	public List<Personnage> findByName(String name);
	
}
