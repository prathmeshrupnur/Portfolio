import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Homesection1 } from '../homesection1/homesection1';
import { Heading } from '../heading/heading';
import { Teckslider } from '../teckslider/teckslider';
import { Projecttemplate } from '../projecttemplate/projecttemplate';
import { Footer } from '../footer/footer';
import { Qualification } from '../qualification/qualification';

@Component({
  selector: 'app-homepage',
  imports: [Navbar,Homesection1,Heading,Teckslider,Projecttemplate,Footer,Qualification],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  heading:string[] = ["Tech Tools","Projects","Qualification"]
}
