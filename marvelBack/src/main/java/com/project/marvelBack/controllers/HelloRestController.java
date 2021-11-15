package com.project.marvelBack.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRestController {
@GetMapping("/")
public String sayHello() {
return "Hello spring Boot Rest World !";
}}