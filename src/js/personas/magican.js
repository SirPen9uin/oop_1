import { Character } from '../user';

export class Magican extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 10; 
		this.defence = 40;
	}
}