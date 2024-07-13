// TODO: write your code here
import sum from './basic';
import { Character } from './user';
import { Bowman } from './personas/bowman';
import { Daemon } from './personas/daemon';
import { Magican } from './personas/magican';
import { Swordsman } from './personas/swordsman';
import { Undead } from './personas/undead';
import { Zombie } from './personas/zombie';


console.log('worked');

console.log(sum([1, 2]));


const adventurer = new Character('John Doe', 'Daemon', 19, 21);
const adventurer1 = new Bowman('Astarion', 'Bowman');
const adventurer2 = new Daemon('Karlach', 'Daemon');
const adventurer3 = new Magican('Gail', 'Magican');
const adventurer4 = new Swordsman('Will', 'Swordsman');
const adventurer5 = new Undead('NightSong', 'Undead');
const adventurer6 = new Zombie('Imperor', 'Zombie');

console.log(adventurer);
console.log(adventurer1);
console.log(adventurer2);
console.log(adventurer3);
console.log(adventurer4);
console.log(adventurer5);
console.log(adventurer6);

console.log(adventurer2.levelUp());
console.log(adventurer5.validateName('NightSong', 'Undead'));