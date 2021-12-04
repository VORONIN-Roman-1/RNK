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
    (6, 'Black Widow','NatashaRomanoff.jpg','Natasha Romanoff'),
    (7, 'Thor','photoThor.jpg','Thor'),
    (8, 'Odin','Odin.jpg','Odin'),
    (9, 'Jane Foster','JaneFoster.jpg','Jane Foster'),
    (10, 'Heimdall','Heimdall.jpg','Heimdall'),
    (11, 'Loki','Loki.jpg','Loki'),
    (12, 'Hawkeye','ClintBarton.jpg','Clint Barton'),
    (13, 'Captain America','SteveRogers.jpg','Steve Rogers'),
    (14, "Le Soldat de l'hiver",'Bucky.jpg','James « Bucky » Barnes'), 
    (15, 'Thanos','Thanos.jpg','Thanos'),
    (16, 'Le Collectionneur','LeCollectionneur.jpg','Le Collectionneur'),
    (17, 'Le Faucon','SamWilson.jpg','Sam Wilson'),
    (18, 'Wanda Maximoff','WandaMaximoff.jpg','Wanda Maximoff'),
    (19, 'Star-Lord','StarLord.jpg','Peter Jason Quill'),
    (20, 'Gamora','Gamora.jpg','Gamora'),
    (21, 'Rocket','Rocket.jpg','Rocket'),
    (22, 'Groot','Groot.jpg','Groot'),
    (23, 'Drax','Drax.jpg','Drax'),
    (24, 'Yondu','Yondu.jpg','Yondu'),
    (25, 'Nebula','Nebula.jpg','Nebula'),
    (26, 'Vision','Vision.jpg','Vision'),
    (27, 'Pietro Maximoff','PietroMaximoff.jpg','Pietro Maximoff'),
    (28, 'Ultron','Ultron.jpg','Ultron'),
    (29, 'Ant-Man','ScottLang.jpg','Scott Lang'),
    (30, 'La Guêpe','HopePym.jpg','Hope Pym'),
    (31, 'Spider-Man','PeterParker.jpg','Peter Parker'),
    (32, 'Black Panther','Tchalla.jpg',"T'Challa"),
    (33, 'Docteur Strange','StephenStrange.jpg','Dr Stephen Strange'),
    (34, 'Mordo','Mordo.jpg','Mordo'),
    (35, 'Wang','Wang.jpg','Wang'),
    (36, 'Mantis','Mantis.jpg','Mantis'),
    (37, 'Valkyrie','Valkyrie.jpg','Valkyrie'),
    (38, 'Nakia','Nakia.jpg','Nakia'),
    (39, 'Okoye','Okoye.jpg','Okoye'),
    (40, 'Shuri','Shuri.jpg','Shuri'),
    (41, 'W Kabi','WKabi.jpg','W Kabi'),
    (42, 'Captain Marvel','CarolDanvers.jpg','Carol Danvers'),
    (43, 'Yelena Belova','YelenaBelova.jpg','Yelena Belova'),
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
   
    
    
    