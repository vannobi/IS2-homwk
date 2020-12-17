# Builder Design Pattern

## Problema
Cuando la creacion de un objeto es compleja los parametros que puede necesitar el constructor pueden ser largos y ademas pueden cambiar con el tiempo.

## Solucion
Crear distintas variedades del objeto sin tener que contar con una larga lista de parametros en el constructos.

## Usar cuando
La construccion del objeto requiere una gran cantidad de parametros.

## Implementacion
Classic
```ts
class Frog {
  constructor(name, weight, height, gender) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
  }
}

class FrogBuilder {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  setWeight(weight): FrogBuilder {
    this.weight = weight;
    return this;
  }
  setHeight(height): FrogBuilder {
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
```
Ejecucion
```js
const frog = new FrogBuilder('Leon', 'male').setWeight(14).setHeight(3.7).build();
```

```go
type BuildProcess interface {
	SetWheels() BuildProcess
	SetSeats() BuildProcess
	SetStructure() BuildProcess
	Build() VehicleProduct
}

type ManufacturingDirector struct {
	builder BuildProcess
}
func (f *ManufacturingDirector) SetBuilder(b BuildProcess) {
	f.builder = b
}
func (f *ManufacturingDirector) Construct() {
	f.builder.SetSeats().SetStructure().SetWheels()
}

type VehicleProduct struct {
	Wheels    int
	Seats     int
	Structure string
}
type CarBuilder struct {
	v VehicleProduct
}
func (c *CarBuilder) SetWheels() BuildProcess {
	c.v.Wheels = 4
	return c
}
func (c *CarBuilder) SetSeats() BuildProcess {
	c.v.Seats = 5
	return c
}
func (c *CarBuilder) SetStructure() BuildProcess {
	c.v.Structure = "Car"
	return c
}
func (c *CarBuilder) Build() VehicleProduct {
	return c.v
}
```
Ejecucion
```go
manufacturingComplex := ManufacturingDirector{}
carBuilder := &CarBuilder{}
manufacturingComplex.SetBuilder(carBuilder)
manufacturingComplex.Construct()
car := carBuilder.Build()
```

## Variantes Similares
Factory D.P.
Aunque la diferencia principal es que:
En Factory la creacion del objeto envuelve un paso mientras que builder requiere multiples procesos para su creacion.


## Conclusion
En casos donde tengamos objetos que tienen docenas de parametros, la construccion podria ser facilitada mediante un Builder
