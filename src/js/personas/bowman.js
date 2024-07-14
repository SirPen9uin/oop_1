import { Character } from '../user';

export class Bowman extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 25; 
		this.defence = 25;
	}
}