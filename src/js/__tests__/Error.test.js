import { errorList } from '../ErrorRepository';
import Bowman from '../Bowman';


test('true', () => {
  const bowman = new Bowman('test1-_t');
  expect(bowman.name).toBe('test1-_t');
});

test('Число в начале стоки', () => {
  expect(() => new Bowman('1r')).toThrow(errorList.translate(2));
});

test('Число в конце стоки', () => {
  expect(() => new Bowman('r1')).toThrow(errorList.translate(2));
});

test('- в конце стоки', () => {
  expect(() => new Bowman('уr-')).toThrow(errorList.translate(2));
});

test('- в начале стоки', () => {
  expect(() => new Bowman('-r')).toThrow(errorList.translate(2));
});

test('более трех цифр подряд', () => {
  expect(() => new Bowman('rу1234ее')).toThrow(errorList.translate(2));
});

test('ниличие иных символов', () => {
  expect(() => new Bowman('te%st')).toThrow(errorList.translate(2));
});
