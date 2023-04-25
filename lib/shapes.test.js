const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    test('should render circle', () => {
        const shape = new Circle();
        const color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="25" width="100" height="100" fill="${color}"/>`);
    });
  });

  describe('Square', () => {
    test('should render square', () => {
        const shape = new Square();
        const color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(` <rec cx="25" cy="25" r="20" width="50" height="50" fill="${color}"/>`);
    });
  });

  
describe('Triangle', () => {
    test('should render triangle', () => {
        const shape = new Triangle();
        const color =('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(` <polygon width="100" height="100" points="0, 200 300, 200 150, 0" fill="${color}"/>`);
    });
  });
  