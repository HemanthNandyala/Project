import {Food} from './app/shared/models/food' ;
import { Tag } from './app/shared/Tag';

export const sample_foods: Food[] =[
  {
    id: 1,
    name: 'Pizza Pepperoni',
    price: 10,
    imageUrl: '/assets/images/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: 2,
    name: 'Meatball',
    price: 20,
    imageUrl: '/assets/images/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: 3,
    name: 'Hamburger',
    price: 5,
    imageUrl: '/assets/images/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: 4,
    name: 'Fried Potatoes',
    price: 2,
    imageUrl: '/assets/images/food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id: 5,
    name: 'Chicken Soup',
    price: 11,
    imageUrl: '/assets/images/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id: 6,
    name: 'Vegetables Pizza',
    price: 9,
    imageUrl: '/assets/images/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]
 export const sample_tags: Tag[] =[
  { name: 'All', count: 14 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
 ]
