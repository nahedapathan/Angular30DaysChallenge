import { Component } from '@angular/core';
import { Testimonial } from '../model/testimonial';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-testinomial',
  templateUrl: './testinomial.component.html',
  styleUrls: ['./testinomial.component.css'],
})
export class TestinomialComponent {

  testimonials:Testimonial[]=[
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      message: 'Amazing service! Highly recommended.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'UI Designer',
      message: 'Great experience working with this team.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Full Stack Developer',
      message: 'Professional and efficient work.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Sneha Verma',
      role: 'HR Manager',
      message: 'Very supportive and responsive.',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      rating: 4
    },
    {
      id: 5,
      name: 'Karan Mehta',
      role: 'Business Analyst',
      message: 'Loved the quality and speed.',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      rating: 5
    },
    {
      id: 6,
      name: 'Neha Gupta',
      role: 'QA Engineer',
      message: 'Smooth and hassle-free experience.',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      rating: 4
    },
    {
      id: 7,
      name: 'Rohit Jain',
      role: 'DevOps Engineer',
      message: 'Excellent support and delivery.',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      rating: 5
    },
    {
      id: 8,
      name: 'Anjali Kapoor',
      role: 'Product Manager',
      message: 'Very professional approach.',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      rating: 4
    },
    {
      id: 9,
      name: 'Vikas Yadav',
      role: 'Backend Developer',
      message: 'Top-notch service quality.',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      rating: 5
    },
    {
      id: 10,
      name: 'Pooja Nair',
      role: 'Frontend Developer',
      message: 'Great UI and smooth experience.',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      rating: 5
    }
  ];
}
