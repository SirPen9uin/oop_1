import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;
    
    this.attack = undefined;
    this.defence = undefined;
  }

  validateName(name, type) {
    const list = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10 && typeof name !== 'string') {
      throw new Error('Name should be 2-10 chars and should be a string');
    }

    if (list.indexOf(type) === -1) {
      throw new Error ('Wrong type of charcter');
    }

    return name;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
    else {
      throw new Error('Your character is dead, impossible to level up necro');
    }
    return this;
  }
  
  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    else {
      throw new Error ('That is enougth, he is dead already');
    }
    return this;
  }
}