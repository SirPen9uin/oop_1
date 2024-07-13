import { loadUser } from '../user';
import { httpGet } from '../http';
import { Bowman } from '../personas/bowman';
import { Zombie } from '../personas/zombie';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('name length', () => {
  const adventurer = new Zombie('Imperor', 'Zombie');
  const result = adventurer.validateName('Imperor', 'Zombie');
  expect(result).toBe('Imperor');
});

test('level up', () => {
  const standart = {
    name: 'Astarion',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  };
  const adventurer = new Bowman('Astarion', 'Bowman');
  const result = adventurer.levelUp();
  expect(result).toEqual(standart);
});

test('damage', () => {
  const standart = {
        name: 'Astarion',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25
  };
  const adventurer = new Bowman('Astarion', 'Bowman');
  const result = adventurer.damage(50);
  expect(result).toEqual(standart);
});