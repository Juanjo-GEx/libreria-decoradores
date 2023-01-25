var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1- Loguear el método que se está llamando
export const logMethod = (target, propertyKey, descriptor) => {
    const metodoOriginal = descriptor.value;
    descriptor.value = (...args) => {
        console.log(`Se ha llamado al método ${propertyKey} con los parámetros ${JSON.stringify(args)}`);
        const resultado = metodoOriginal.apply(this, args);
        console.log(`El método ha devuelto el siguiente valor ${resultado}`);
        return resultado;
    };
};
// 2- Medir el tiempo que tarda un método en ejecutarse
// 3- Almacernar en caché la información de un valor
class Cantante {
    constructor(n, e) {
        this.nombre = n;
        this.estrofa = e;
    }
    canta() {
        console.log(this.estrofa);
        return this.estrofa;
    }
}
__decorate([
    logMethod
], Cantante.prototype, "canta", null);
const miCantante = new Cantante("Kurt Cobain", "Load up on guns, bring your friends");
miCantante.canta();
