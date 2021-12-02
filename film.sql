USE `bdd_marvel`;
--
-- Table structure for table `film`
--
-- DROP TABLE IF EXISTS `film`;
-- CREATE TABLE `film` (
 -- `id` int(11) NOT NULL AUTO_INCREMENT,
 -- `title` varchar(60) DEFAULT NULL,
 -- `image` varchar(200) DEFAULT NULL,
 -- `year` varchar(45) DEFAULT NULL,
 -- PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `message`
--

INSERT INTO `film`(id, title, image, `year`) VALUES 
(0,'Iron Man','IronMan.jpg','2007'),
(1,'L Incroyable Hulk','Hulk.jpg','2011'),
(2,'Iron Man 2','IronMan2.jpg','2013'),
(3,'Thor','Thor.jpg', '2014' ),
(4,'Captain America : First Avenger','CaptainAmericaFirstAvenger.jpg ','2015'),
(5,'Avengers', 'Avengers.jpg','2012'), 
(6, 'Iron Man 3','IronMan3.jpg','2013'),                                  
(7, 'Thor: Le monde des ténèbres','Thor2.jpg','2013'),                
(8, 'Captain America : Le Soldat de l hiver', 'CaptainAmerica2.jpg','2014'),        
(9, 'Les Gardiens de la Galaxie', 'Gardiens.jpg', '2014'),                  
(10, 'Avengers: L Ere d Ultron', 'Avengers2.jpg' , '2015'),                 
(11, 'Ant-Man', 'Ant-Man.jpg', '2015'),                                    
(12, 'Captain America: Civil War', 'CaptainAmerica3.jpg', '2016'),                
(13, 'Doctor Strange','DoctorStrange.jpg','2016'),                       
(14,'Les Gardiens de la Galaxie Vol.2', 'Gardiens2.jpg', '2017'),         
(15,'Spider-Man: Homecoming', 'Spider-Man.jpg', '2017'),                    
(16, 'Thor : Ragnarok', 'Thor3.jpg', '2017'),                           
(17, 'Black Panther', 'BlackPanther.jpg', '2018'),                             
(18, 'Avengers: Infinity War', 'Avengers3.jpg',  '2018'),                 
(19, 'Ant-Man et la Guêpe', 'AntMan2.jpg', '2018'),                    
(20,'Captain Marvel' , 'CaptainMarvel.jpg', '2019'),                          
(21, 'Avengers: Endgame', 'Avengers4.jpg', '2019'),                        
(22, 'Spider-Man: Far From Home', 'SpiderMan2.jpg', '2019'),             
(23, 'Black Widow', 'BlackWidow.jpg', '2021'),                               
(24, 'Shang-Chi et la Légende des Dix Anneaux' , 'Shang-Chi.jpg', '2021'),   
(25, 'Les Éternels' , 'Eternels.jpg','2021'),                            
(26, 'Spider-Man: No Way Home' , 'SpiderMan3.jpg' ,'2021');