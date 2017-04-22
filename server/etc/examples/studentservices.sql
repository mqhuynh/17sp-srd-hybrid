-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 18, 2017 at 02:59 PM
-- Server version: 5.5.53-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `web_apps`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentservices`
--

CREATE TABLE IF NOT EXISTS `studentservices` (
  `ID` int(2) NOT NULL DEFAULT '0',
  `COL 2` varchar(34) DEFAULT NULL,
  `COL 3` varchar(34) DEFAULT NULL,
  `COL 4` varchar(9) DEFAULT NULL,
  `COL 5` varchar(8) DEFAULT NULL,
  `COL 6` varchar(13) DEFAULT NULL,
  `COL 7` varchar(34) DEFAULT NULL,
  `COL 8` varchar(77) DEFAULT NULL,
  `COL 9` text,
  `COL 10` text,
  `COL 11` text,
  `COL 12` text,
  `COL 13` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studentservices`
--

INSERT INTO `studentservices` (`ID`, `COL 2`, `COL 3`, `COL 4`, `COL 5`, `COL 6`, `COL 7`, `COL 8`, `COL 9`, `COL 10`, `COL 11`, `COL 12`, `COL 13`) VALUES
(0, 'Service/Office', 'Building', 'Room', 'BLD-Code', 'Phone', 'E-mail', 'Link', 'Description', 'Audio', 'Video', 'Image', 'Map'),
(1, 'search_name_text', 'search_text', 'text', 'text', 'phone', 'search_email', 'url', 'text ', 'audio', 'video', 'image', 'map'),
(2, 'University Police Department', 'Pride Hall', '', 'PRDH', '985-549-2222', 'police@selu.edu', 'www.southeastern.edu/admin/police/', 'The police department is responsible for responding to emergencies on campus.', '', 'techslides.com/demos/sample', 'www.southeastern.edu/admin/police/assets/dsaflagfootball2008.jpg', '500 Western Ave, Hammond, LA 70402'),
(3, 'KSLU Radio Station', 'D Vickers Hall', '112', 'DVIC', '985-549-2330', 'KSLU@selu.edu', 'www2.southeastern.edu/kslu/', 'KSLU is a 3000 watt CPB-qualified non-commercial educational radio station owned and operated by Southeastern Louisiana University in Hammond, LA. The radio station''s city-grade signal reaches a 10 mile radius and is often heard from Denham Springs to Covington to Kentwood. Many of the announcers are communication students at Southeastern training for careers in the broadcast industry. KSLU strives to serve both the Southeastern and surrounding communities. For this reason it has adopted the following mission...', 'http://www2.southeastern.edu/kslu/news.mp3', 'https://www.youtube.com/embed/6d4X-QpSjlM', 'http://www2.southeastern.edu/kslu/images/aaa.gif', '500 Western Ave, Hammond, LA 70402'),
(4, 'Disability Services', 'Mims Hall', '117', '', '985-549-2247', 'disabilityservices@selu.edu', 'www.southeastern.edu/admin/ds/', 'The Office of Disability Services facilitates the process of academic accommodations for students with disabilities and works in collaboration with other University departments in an attempt to ensure full participation in all activities, programs, and services of the University.', '', '', '', ''),
(5, 'Campus Card Operations', 'North Campus Main Building', '223', 'NCMB', '985-549-3990', 'lionslagniappe@southeastern.edu', 'www.southeastern.edu/admin/campus_card/', 'Campus card operations is responsible for issueing student ID cards. They also manage the information and balance on that card.', '', '', '', ''),
(6, 'The Document Source', 'Student Union', '1st Floor', 'SUA', ' 985-549-5565', 'thedocumentsource@southeastern.edu', 'www.southeastern.edu/admin/doc_source/', 'The Document Source is a full-service print and mail center on campus.', '', '', '', ''),
(7, 'Textbook Rental', 'North Campus Building F', '', 'NCTR', ' 985-549-3780', 'textbooks@southeastern.edu', 'www.southeastern.edu/admin/tb_rental/', 'Textbook rental is in charge of supplying textbooks to students every semester.', '', '', '', ''),
(8, 'University Bookstore', 'Student Union', '1st Floor', 'SUA', '985-549-5393', 'bookstore@selu.edu', 'www.southeastern.edu/admin/bookstore/', 'The University Bookstore sells official SELU merchandise and school supplies.', '', '', '', ''),
(9, 'University Housing', 'Pride Hall', '', 'PRDH', '985-549-2118', 'universityhousing@selu.edu', 'www.southeastern.edu/admin/housing/', 'Housing is in charge of assigning dorms or apartments to students.', '', '', '', ''),
(10, 'University Mail Center', 'Student Union', '1st Floor', 'SUA', '985-549-2124', 'mailcenter@southeastern.edu', 'www.southeastern.edu/admin/post_office/', 'The post-office is in charge of the on campus PO boxes. Students can mail packages and mail here.', '', '', '', ''),
(11, 'Office of Career Services', 'Student Union', '241', 'SUA', '985-549-2121', 'careerservices@selu.edu', 'www.southeastern.edu/admin/career_srv/', 'The Office of Career Services provides students and alumni with a multitude of career counseling and job', '', '', '', ''),
(12, 'International Services Office', '', '', '', '985-549-2360', 'international@selu.edu', 'www.southeastern.edu/admin/international/', 'The ISO assists departments in bringing new foreign nationals to our campus and community. We also provide advisory services to international students and scholars so that they may successfully accomplish the goals that brought them to Southeastern.', '', '', '', ''),
(13, 'Student Help Desk (computer)', 'Fayard Hall', '126', 'FAY', '985-549-2700', 'studenthelpdesk@selu.edu', 'www.southeastern.edu/admin/sps/helpdesk/', 'The Southeastern Student Help Desk is a technical support service for students that are using the various computer systems at Southeastern.', '', '', '', ''),
(14, 'Library', 'Sims Memorial Library', '', 'SIMS', '985-549-3860', '', 'www.southeastern.edu/library/', 'The library can be used for research. You can get help from a librarian. Group study rooms are also available.', '', '', '', ''),
(15, 'Rec Sports and Wellness', 'Pennington Student Activity Center', '', 'SAC', '985-549-5591', '', 'www.southeastern.edu/admin/rec_sports/', 'The activity center houses a weight and cardio room, an indoor track, basketball courts, and raquetball courts. Intramurals are also hosted here.', '', '', '', ''),
(16, 'Office of Testing', 'North Campus Main Building', '172', 'NCMB', '985-549-3897', 'testing@selu.edu', 'www.southeastern.edu/admin/testing/', 'Offers testing accomodations to students who need extra help on tests. Students must register with the Office of Disabilities first.', '', '', '', ''),
(17, 'Office of Records and Registration', 'North Campus Main Building', '107', 'NCMB', '985-549-2066', 'records@selu.edu', 'www.southeastern.edu/admin/rec_reg/', 'The Office of Records and Registration establishes and maintains the academic records of the university and provides students with the enrollment services necessary to attain their educational goals.', '', '', '', ''),
(18, 'Office of Financial Aid', 'North Campus Building A', '', 'NCFA', '985-549-2244', 'finaid@selu.edu', 'www.southeastern.edu/admin/fin_aid/', 'Financial Aid is in charge of student loans and scholarships for students.', '', '', '', ''),
(19, 'Office of Admissions', 'North Campus Main Building', '', 'NCMB', '800-222-SELU', 'admissions@selu.edu', 'www.southeastern.edu/admin/admissions/', 'The Office of Admissions is responible for the recruitment of students and the acceptance into the university.', '', '', '', ''),
(20, 'University Counseling Center', 'Community Counseling Center', '', '', '985-549-3894', 'slucc@selu.edu', 'www.southeastern.edu/admin/counseling/', 'The Counseling Center provides free mental health counseling services to students, faculty, and staff.', '', '', '', ''),
(21, 'University Health Center', 'Thomason Health Center', '', '', '985-549-5718', 'health@selu.edu', 'www.southeastern.edu/admin/health_ctr/', 'The health center provides medical care to active students.', '', '', '', ''),
(22, 'Student Technology Center', 'Fayard Hall', '126/129', 'FAY', '985-549-2700', 'techcenter@selu.edu', 'www.southeastern.edu/admin/sps/', 'The Student Technology Center provides two computer labs to students. Students can print in color here.', '', '', '', ''),
(23, 'Tutoring', 'Southeastern Hall', '114', 'SLU', '985-549-2434', 'learningassistance@selu.edu', 'www.southeastern.edu/acad_research/programs/cse/learning_assistance/tutoring/', 'Tutoring in different subjects is offered to students by appointment and walk-ins.', '', '', '', ''),
(24, 'Center for Student Excellence', 'Southeastern Hall', '113', 'SLU', '985-549-3981', '', 'www.southeastern.edu/acad_research/programs/cse/', 'This center offers many support programs designed to help students succeed in college and provides advising for all incoming freshmen for their first two semesters', '', '', '', ''),
(25, 'Foreign Language Resource Center', 'D Vickers Hall', '211', 'DVIC', '985-549-2291', 'flrc@selu.edu', 'www.southeastern.edu/acad_research/depts/lang_comm/flrc/', 'This center provides many different services for international students.', '', '', '', ''),
(26, 'Internet Resource Center', 'Garrett Hall', '99/80/73', 'GARR', '985-549-3949', 'minh.huynh@selu.edu', 'http://www.southeastern.edu/acad_research/programs/irc/', 'The IRC offers three state-of-the-art computer labs dedicated to meet general computing needs of students.', '', '', '', ''),
(27, 'Math Tutoring Lab', 'Sims Memorial Library', '208', 'SIMS', '', '', 'www.southeastern.edu/acad_research/depts/math/tutoring_lab/', 'It houses two hundred computers and is staffed by nineteen tutors. Faculty from the Mathematics Department are also present to help. The MTLC is open fifty-one hours a week with both day and evening times during the Fall and Spring semesters. ', '', '', '', ''),
(28, 'The Writing Center', 'D Vickers Hall', '210', 'DVIC', '985-549-2076', '', 'www.southeastern.edu/acad_research/programs/writing_center/', 'The Southeastern Writing Center is a peer consultation and resource center dedicated to the writing needs, interests, and concerns of students.', '', '', '', ''),
(29, 'University Parking Office', 'Pride Hall', '', 'PRDH', '985-549-5695', 'parking@selu.edu', 'www.southeastern.edu/admin/parking/', 'The parking office is in charge of issuing campus parking decals.', '', '', 'http://www.southeastern.edu/news_media/images/demyan-original.jpg', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
