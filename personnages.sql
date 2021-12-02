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
	(1,'Iron Man','TonyStark.jpg','Tony Stark'),
	(2,'War Machine','JamesRhodes.jpg','lieutenant-colonel James « Rhodey » Rhodes'),
	(3,'Pepper Potts','PepperPotts.jpg','Pepper Potts'),
    (4, 'Hulk','BruceBanner.jpg', 'Bruce Banner'),
    (5, 'Nick Fury','NickFury.jpg','Nick Fury'),
    (6, 'Yelena Belova','YelenaBelova.jpg','Yelena Belova'),
    (7, 'Black Widow','NatashaRomanoff.jpg','Natasha Romanoff'),
    (8, 'Thor','photoThor.jpg','Thor'),
    (9, 'Odin','Odin.jpg','Odin'),
    (10, 'Jane Foster','JaneFoster.jpg','Jane Foster'),
    (11, 'Heimdall','Heimdall.jpg','Heimdall'),
    (12, 'Loki','Loki.jpg','Loki'),
    (13, 'Hawkeye','ClintBarton.jpg','Clint Barton'),
    (14, 'Captain America','SteveRogers.jpg','Steve Rogers'),
    (15, "Le Soldat de l'hiver",'Bucky.jpg','James « Bucky » Barnes'), 
    (16, 'Thanos','Thanos.jpg','Thanos'),
    (17, 'Le Collectionneur','LeCollectionneur.jpg','Le Collectionneur'),
    (18, 'Le Faucon','SamWilson.jpg','Sam Wilson'),
    (19, 'Wanda Maximoff','WandaMaximoff.jpg','Wanda Maximoff'),
    (20, 'Star-Lord','StarLord.jpg','Peter Jason Quill'),
    (21, 'Gamora','Gamora.jpg','Gamora'),
    (22, 'Rocket','Rocket.jpg','Rocket'),
    (23, 'Groot','Groot.jpg','Groot'),
    (24, 'Drax','Drax.jpg','Drax'),
    (25, 'Yondu','Yondu.jpg','Yondu'),
    (26, 'Nebula','Nebula.jpg','Nebula'),
    (27, 'Ultron','Ultron.jpg','Ultron'),
    (28, 'Pietro Maximoff','PietroMaximoff.jpg','Pietro Maximoff'),
    (29, 'Ant-Man','ScottLang.jpg','Scott Lang'),
    (30, 'La Guêpe','HopePym.jpg','Hope Pym'),
    (31, 'Spider-Man','PeterParker.jpg','Peter Parker'),
    (32, 'Black Panther','Tchalla.jpg',"T'Challa"),
    (33, 'Vision','Vision.jpg','Vision'),
    (34, 'Docteur Strange','StephenStrange.jpg','Dr Stephen Strange'),
    (35, 'Mordo','Mordo.jpg','Mordo'),
    (36, 'Wang','Wang.jpg','Wang'),
    (37, 'Mantis','Mantis.jpg','Mantis'),
    (38, 'Valkyrie','Valkyrie.jpg','Valkyrie'),
    (39, 'Nakia','Nakia.jpg','Nakia'),
    (40, 'Okoye','Okoye.jpg','Okoye'),
    (41, 'Shuri','Shuri.jpg','Shuri'),
    (42, 'W Kabi','WKabi.jpg','W Kabi'),
    (43, 'Captain Marvel','CarolDanvers.jpg','Carol Danvers'),
    (44, 'Shang-Chi','ShangChi.jpg','Shang-Chi'),
    (45, 'Ajak','Ajak.jpg','Ajak'),
    (46, 'Druig','Druig.jpg','Druig'),
    (47, 'Gilgamesh','Gilgamesh.jpg','Gilgamesh'),
    (48, 'Ikaris','Ikaris.jpg','Ikaris'),
    (49, 'Kingo','Kingo.jpg','Kingo'),
    (50, 'Makkari','Makkari.jpg','Makkari'),
    (51, 'Phastos','Phastos.jpg','Phastos'),
    (52, 'Sersi','Sersi.jpg','Sersi'),
    (53, 'Sprite','Sprite.jpg','Sprite'),
    (54, 'Thena', 'Thena.jpg', 'Thena') ;
   
    
    
    