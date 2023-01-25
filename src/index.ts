// 1- Loguear el método que se está llamando
export const logMethod = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const metodoOriginal = descriptor.value;
  descriptor.value = (...args: any) => {
    console.log(
      `Se ha llamado al método ${propertyKey} con los parámetros ${JSON.stringify(
        args
      )}`
    );
    const resultado = metodoOriginal.apply(this, args);
    console.log(`El método ha devuelto el siguiente valor ${resultado}`);

    return resultado;
  };
};

// 2- Medir el tiempo que tarda un método en ejecutarse

// 3- Almacernar en caché la información de un valor

class Cantante {
  nombre: string;
  estrofa: string;
  constructor(n: string, e: string) {
    this.nombre = n;
    this.estrofa = e;
  }
  @logMethod
  canta() {
    console.log(this.estrofa);
    return this.estrofa;
  }
}

const miCantante = new Cantante(
  "Kurt Cobain",
  "Load up on guns, bring your friends"
);
miCantante.canta();
