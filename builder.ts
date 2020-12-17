class Frog {
  public name: string;
  public weight: number = 0;
  public height: number = 0;
  public gender: string;
  constructor(name: string, weight: number, height: number, gender: string) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
  }
}

class FrogBuilder {
  public name: string;
  public weight: number = 0;
  public height: number = 0;
  public gender: string;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
  setWeight(weight: number): FrogBuilder {
    this.weight = weight;
    return this;
  }
  setHeight(height: number): FrogBuilder {
    this.height = height;
    return this;
  }
  build(): Frog {
    if (!('weight' in this)) {
      throw new Error('Weight is missing');
    }
    if (!('height' in this)) {
      throw new Error('Height is missing');
    }
    return new Frog(this.name, this.weight, this.height, this.gender);
  }
}

const frog = new FrogBuilder('Leon', 'male').setWeight(14).setHeight(3.7).build();

console.log(frog);
