import orderByProps from './app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
};

getAttackTypes(unit);

orderByProps(obj, ['level', 'name']);
