import {Food} from './app/shared/models/food';
import { Tag } from './app/shared/models/Tag';


 export const sample_foods: Food[] = [

  {
    id: '1',
    name: 'CheeseBurger',
    price: 140,
    imageUrl: '/assets/images/Cheeseburger.jpg',
    tags: ['FastFood', 'Burger', 'Lunch'],
  },

  {
    id: '2',
    name: 'Hamburger',
    price: 120,
    imageUrl: '/assets/images/Hamburger.jpg',
    tags: ['FastFood', 'Burger', 'Lunch'],
  },

  {
    id: '3',
    name: 'Muffins',
    price: 40,
    imageUrl: '/assets/images/Muffins.jpg',
    tags: ['Muffins', 'Cakes', 'Cup Cakes'],
  },

  {
    id: '4',
    name: 'Sandwich',
    price: 100,
    imageUrl: '/assets/images/Sandwich.jpg',
    tags: ['FastFood', 'Sandwich', 'Lunch'],
  },

  {
    id: '5',
    name: 'Taco',
    price: 80,
    imageUrl: '/assets/images/Taco.jpg',
    tags: ['SlowFood'],
  },

  {
    id: '6',
    name: 'Pizza Pepperoni',
    price: 120,
    imageUrl: '/assets/images/Pizza Pepperoni.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },

  {
    id: '7',
    name: 'Meatball',
    price: 120,
    imageUrl: '/assets/images/Metaball.jpg',
    tags: ['SlowFood', 'Lunch'],
  },

  {
    id: '8',
    name: 'Fried Potatoes',
    price: 60,
    imageUrl: '/assets/images/Fried Potatoes.jpg',
    tags: ['FastFood', 'Fry'],
  },

  {
    id: '9',
    name: 'Chicken Soup',
    price: 80,
    imageUrl: '/assets/images/Chicken Soup.jpg',
    tags: ['SlowFood', 'Soup'],
  },

  {
    id: '10',
    name: 'Vegetable Pizza',
    price: 100,
    imageUrl: '/assets/images/Vegetable Pizza.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },

  {
    id: '11',
    name: 'Kit Kat Cake',
    price: 150,
    imageUrl: '/assets/images/Kit Kat Cake.jpg',
    tags: ['FastFood', 'Cakes'],
  },

  {
    id: '12',
    name: 'Choclate Cake',
    price: 180,
    imageUrl: '/assets/images/Choclate cake.jpg',
    tags: ['FastFood', 'Cakes'],
  },

  ]


   export const sample_tags: Tag[] =[
    { name: 'All', count: 12 },
    { name: 'FastFood', count: 8 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 6 },
    { name: 'SlowFood', count: 3 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
    { name: 'Burger',count: 2},
    { name: 'Cakes',count: 3},
    { name: 'Muffins',count: 1},
    { name: 'Cup Cakes',count: 1},
    { name: 'Sandwich',count: 1},
   ]


