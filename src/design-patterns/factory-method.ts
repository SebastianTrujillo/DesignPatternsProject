interface IShape {
  name: string;
  draw(): void;
}

class Circle implements IShape {
  name: string;

  constructor() {
    this.name = 'Circle';
  }

  public draw(): void {
    console.log(this.name);
  }
}

class Square implements IShape {
  name: string;

  constructor() {
    this.name = 'Square';
  }

  public draw(): void {
    console.log(this.name);
  }
}

class ShapeFactory {
  public static getShape(type: string): IShape | undefined {
    switch (type) {
      case 'circle':
        return new Circle();
      case 'square':
        return new Square();
      default:
        return undefined;
    }
  }
}

export const shape = ShapeFactory.getShape('circle');
