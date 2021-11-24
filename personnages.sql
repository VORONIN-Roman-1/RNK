USE `bdd_marvel`;
--
-- Table structure for table `personnage`
--
DROP TABLE IF EXISTS `personnage`;
CREATE TABLE `personnage` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(60) DEFAULT NULL,
 `image` varchar(200) DEFAULT NULL,
 `truename` varchar(45) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `personnage`
--


INSERT INTO `personnage` VALUES 
	(1,'Iron Man','photoIronMan','Tony Stark'),
	(2,'War Machine','photoWarMachine','lieutenant-colonel James « Rhodey » Rhodes'),
	(3,'Pepper Potts','photoPepperPotts','Pepper Potts'),
    (4, 'Hulk','photoHulk', 'Bruce Banner'),
    (5, 'Nick Fury','photoNickFury','Nick Fury'),
    (7, 'Black Widow','photoBlackWidow','Natasha Romanoff'),
    (8, 'Thor','photoThor','Thor'),
    (9, 'Odin','photoOdin','Odin'),
    (10, 'Jane Foster','photoJaneFoster','Jane Foster'),
    (11, 'Heimdall','photoHeimdall','Heimdall'),
    (12, 'Loki','photoLoki','Loki'),
    (13, 'Hawkeye','photoHawkeye','Clint Barton'),
    (14, 'Captain America','photoCaptainAmerica','Steve Rogers'),
    (15, "Le Soldat de l'hiver",'photoLeSoldatDeLhiver','James « Bucky » Barnes'), 
    (16, 'Thanos','photoThanos','Thanos'),
    (17, 'Le Collectionneur','photoLeCollectionneur','Le Collectionneur'),
    (18, 'Le Faucon','photoLeFaucon','Sam Wilson'),
    (19, 'Wanda Maximoff','photoWandaMaximoff','Wanda Maximoff'),
    (20, 'Star-Lord','photoStarLord','Peter Jason Quill'),
    (21, 'Gamora','photoGamora','Gamora'),
    (22, 'Rocket','photoRocket','Rocket'),
    (23, 'Groot','photoGroot','Groot'),
    (24, 'Drax','photoDrax','Drax'),
    (25, 'Yondu','photoYondu','Yondu'),
    (26, 'Nebula','photoNebula','Nebula'),
    (27, 'Ultron','photoUltron','Ultron'),
    (28, 'Pietro Maximoff','photoPietroMaximoff','Pietro Maximoff'),
    (29, 'Ant-Man','photoAntMan','Scott Lang'),
    (30, 'La Guêpe','photoLaGuêpe','Hope Pym'),
    (31, 'Spider-Man','photoSpiderMan','Peter Parker'),
    (32, 'Black Panther','photoBlackPanther',"T'Challa"),
    (33, 'Vision','photoVision','Vision'),
    (34, 'Docteur Strange','photoDocteurStrange','Dr Stephen Strange'),
    (35, 'Mordo','photoMordo','Mordo'),
    (36, 'Wang','photoWang','Wang'),
    (37, 'Mantis','photoMantis','Mantis'),
    (38, 'Valkyrie','photoValkyrie','Valkyrie'),
    (39, 'Nakia','photoNakia','Nakia'),
    (40, 'Okoye','photoOkoye','Okoye'),
    (41, 'Shuri','photoShuri','Shuri'),
    (42, 'W Kabi','photoWKabi','W Kabi'),
    (43, 'Captain Marvel','photoCaptainMarvel','Carol Danvers'),
    (44, 'Shang-Chi','photoShangChi','Shang-Chi'),
    (45, 'Ajak','photoAjak','Ajak'),
    (46, 'Druig','photoDruig','Druig'),
    (47, 'Gilgamesh','photoGilgamesh','Gilgamesh'),
    (48, 'Ikaris','photoIkaris','Ikaris'),
    (49, 'Kingo','photoKingo','Kingo'),
    (50, 'Makkari','photoMakkari','Makkari'),
    (51, 'Phastos','photoPhastos','Phastos'),
    (52, 'Sersi','photoSersi','Sersi'),
    (53, 'Sprite','photoSprite','Sprite'),
    (54, 'Thena', 'photoThena', 'Thena') ;
   
    
    
    