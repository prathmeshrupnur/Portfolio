import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-qualification',
  imports: [NgFor,NgClass],
  templateUrl: './qualification.html',
  styleUrl: './qualification.css'
})
export class Qualification {
  data:any=[
    {
      id:1,
      heading:"Education",
      data:[
        {
          title:"2018-2019",
         desc:"HSC in Science kendriya vidyalaya 75%"
        },
        {
          title:"2020-2021",
         desc:"SSC in Science kendriya vidyalaya 71.5%"
        },
       {
         title:"2021-2025",
        desc:"B.tech in Information & Technology Rajarshi shau College 8.25CGPA"
       }
      ]
    },
    {
      id:2,
      heading:"Experience",
      data:[
       {
         title:"Capgemini Intership",
        desc:"Intern at Capgemini as java Full Stack. learned new technologies & got to learn about working enviroment of It sector (Feb 2025 - July 2025)"
       },
       {
         title:"KPIT Intership",
        desc:"Intern at KPIT worked on technology like C,C++,OOPS,OpenCV etc. (Jan 2025 - June 2025)"
       },
       {
        title:"Open Source Contribution",
        desc:"Worked for 3 months on web app MakesMathEasy and developed responsive and adaptive webapp Learned the workflow of Github and how to collaborate on large codebases."
       }
      ]
    },{
      id:3,
      heading:"Achievements",
      data:[
       {
         title:"Lorem Fake Data",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eligendi quibusdam illo dolorum fuga quas, dicta id vero voluptas quaerat consequatur odio ullam omnis vel totam earum molestias amet? Odit?"
       },
       {
         title:"Lorem Fake Data",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eligendi quibusdam illo dolorum fuga quas, dicta id vero voluptas quaerat consequatur odio ullam omnis vel totam earum molestias amet? Odit?"
       }
      ]
    }
  ]
}
