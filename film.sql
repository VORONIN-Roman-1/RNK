USE `bdd_marvel`;
--
-- Table structure for table `film`
--
DROP TABLE IF EXISTS `film`;
CREATE TABLE `film` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `title` varchar(60) DEFAULT NULL,
 `image` varchar(200) DEFAULT NULL,
 `year` varchar(45) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `message`
--
INSERT INTO `film` VALUES 
(1,'Iron Man','IronMan.jpg','2007'),
(2,'L Incroyable Hulk','Hulk.jpg','2011'),
(3,'Iron Man 2','IronMan2.jpg','2013'),
(4,'Thor','Thor.jpg', '2014' ),
(5,'Captain America : First Avenger','CaptainAmericaFirstAvenger.jpg ','2015'),
(6,'Avengers', 'Avengers.jpg','2012'), 
(7, 'Iron Man 3','IronMan3.jpg','2013'),                                  
(8, 'Thor: Le monde des ténèbres','Thor2.jpg','2013'),                
(9, 'Captain America : Le Soldat de l hiver', 'CaptainAmerica2.jpg','2014'),        
(10, 'Les Gardiens de la Galaxie', 'Gardiens.jpg', '2014'),                  
(11, 'Avengers: L Ere d Ultron', 'Avengers2.jpg' , '2015'),                 
(12, 'Ant-Man', 'Ant-Man.jpg', '2015'),                                    
(13, 'Captain America: Civil War', 'CaptainAmerica3.jpg', '2016'),                
(14, 'Doctor Strange','DoctorStrange.jpg','2016'),                       
(15,'Les Gardiens de la Galaxie Vol.2', 'Gardiens2.jpg', '2017'),         
(16,'Spider-Man: Homecoming', 'Spider-Man.jpg', '2017'),                    
(17, 'Thor : Ragnarok', 'Thor3.jpg', '2017'),                           
(18, 'Black Panther', 'BlackPanther.jpg', '2018'),                             
(19, 'Avengers: Infinity War', 'Avengers3.jpg',  '2018'),                 
(20, 'Ant-Man et la Guêpe', 'AntMan2.jpg', '2018'),                    
(21,'Captain Marvel' , 'CaptainMarvel.jpg', '2019'),                          
(22, 'Avengers: Endgame', 'Avengers4.jpg', '2019'),                        
(23, 'Spider-Man: Far From Home', 'SpiderMan2.jpg', '2019'),             
(24, 'Black Widow', 'BlackWidow.jpg', '2021'),                               
(25, 'Shang-Chi et la Légende des Dix Anneaux' , 'Shang-Chi.jpg', '2021'),   
(26, 'Les Éternels' , 'Eternels.jpg','2021'),                            
(27, 'Spider-Man: No Way Home' , 'SpiderMan3.jpg' ,'2021');