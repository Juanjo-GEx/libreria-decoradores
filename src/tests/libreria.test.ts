import { logMethod } from "../../dist/cjs";

class Persona {
  @logMethod
  saluda(nombre: string) {
    console.log(`Hola ${nombre}`);
  }
}

describe("Testeando el decorador logMethod", () => {
  beforeEach(() => {
    // Spies on console.log
    jest.spyOn(console, "log");
  });
  afterEach(() => {
    // Spies on console.log
    jest.clearAllMocks();
  });
  it("Testeamos que el decorador logMethod llama al console.log tres veces", () => {
    const miPersona = new Persona();
    miPersona.saluda("Juanjo");
    expect(console.log).toBeCalledTimes(3);
  });
});
