package com.project.marvelBack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.marvelBack.entity.Personnage;

public interface PersonnageRepository extends JpaRepository<Personnage , Integer> {
	
}
