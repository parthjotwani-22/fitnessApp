import logo from '../assets/pngs/Fitness_Logo.png';
import yoga from '../assets/pngs/yoga.jpg';
import protein from '../assets/pngs/protein.jpg';
import weight from '../assets/pngs/weight.png';
import home from '../assets/pngs/home.png';
import workout from '../assets/pngs/workout.png';
import person from '../assets/pngs/person.png';
import gym from '../assets/pngs/Gym.jpg';
import plus from '../assets/pngs/plus-icon.png';
import homebgimg from '../assets/pngs/GymBackground2.jpg';
import menu from '../assets/pngs/menu.png';
import arrow from '../assets/pngs/arrow.png';
import edit from '../assets/pngs/edit.png';
import point from '../assets/pngs/Point.png';
import colors from './colors';
import abc;

export default {
  logo: logo,
  yoga: yoga,
  edit: edit,
  protein: protein,
  weight: weight,
  home: home,
  workout: workout,
  person: person,
  gym: gym,
  plus: plus,
  homebgimg: homebgimg,
  menu: menu,
  point: point,
  arrow: arrow,
  exe: [
    {key: 1, data: 'Running', time: 100, img: homebgimg, sel: false},
    {key: 2, data: 'Pushups', time: 150, img: homebgimg, sel: false},
    {key: 3, data: 'Squats', time: 100, img: homebgimg, sel: false},
    {key: 4, data: 'Squats', time: 100, img: homebgimg, sel: false},
    {key: 5, data: 'Squats', time: 100, img: homebgimg, sel: false},
    {key: 6, data: 'Squats', time: 100, img: homebgimg, sel: false},
  ],
  calories: {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 90],
      },
    ],
    color: colors.grey,
  },
};
