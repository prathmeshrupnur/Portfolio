import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projecttemplate',
  imports: [NgFor],
  templateUrl: './projecttemplate.html',
  styleUrl: './projecttemplate.css'
})
export class Projecttemplate {
  projects = [
    {
      id: 1,
      heading: 'Digital Library',
      desc:'Digital Library is an Intership Project. to show case expertise in technology. Digital Library is a Subscription based website to excess your Favorite book content',
      gitlink:'https://github.com/prathmeshrupnur/Digital-Library',
      weblink:'',
      img:'assets/project1.png',
      teck:['springboot','angular','html','css','rabbitmq','microservice','JwtAuth','Eureka','Docker','Postgres Sql']
    },
    {
      id: 2,
      heading: 'Plant Cure',
      desc:'Plant Cure is Btec Final year Project. Plant Cure have UserFriendly UI for farmers and people having intrest in Agriculture Field. provides UI to upload disease prone plant image and find out disease name and cure',
      gitlink:'https://github.com/prathmeshrupnur/final-year-project',
      weblink:'',
      img:'assets/project2.png',
      teck:['Html','Css','Python','Flask','AI','ML']
    },
    {
      id: 3,
      heading: 'Pune Ploggers',
      desc:'Pune Ploggers is an non-profitable NGO which take initiative to keep Pune surrounding enviroment clean for good cause and love for pune made this website for free to make people more aware.',
      gitlink:'https://github.com/prathmeshrupnur/Digital-Library',
      weblink:'',
      img:'assets/project1.png',
      teck:['springboot','angular','html','css','rabbitmq','microservice','Eureka','JwtAuth','Docker','Postgres Sql']
    },
    {
      id: 4,
      heading: 'Portfolio',
      desc:'Portfolio to display projects, teckStack, Qualification and Achievements',
      gitlink:'https://github.com/prathmeshrupnur/Portfolio',
      weblink:'',
      img:'assets/project4.png',
      teck:['Angular','Html','Css']
    },
    {
      id: 4,
      heading: 'Malhar Constructions',
      desc:'Free Lance Project for client having construction bussiness want to showcase work and contact details. single page application',
      gitlink:'https://github.com/prathmeshrupnur/Portfolio',
      weblink:'',
      img:'assets/project4.png',
      teck:['Angular','Html','Css']
    }
  ];
}
