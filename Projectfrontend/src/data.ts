import {Food} from './app/shared/models/food';
import { Tag } from './app/shared/models/Tag';


 export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    price: 120,
    imageUrl: '/assets/images/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },

  {
    id: '2',
    name: 'Meatball',
    price: 90,
    imageUrl: '/assets/images/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Hamburger',
    price: 120,
    imageUrl: '/assets/images/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    price: 100,
    imageUrl: '/assets/images/food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id: '5',
    name: 'Chicken Soup',
    price: 70,
    imageUrl: '/assets/images/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id: '6',
    name: 'Vegetables Pizza',
    price: 100,
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


