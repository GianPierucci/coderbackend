import fs from "fs/promises"

/* const ruta = "./static/productos.json"

let datos */

class ProductManager {
    constructor(ruta){
        this.ruta = ruta
    }

    async cargar() {
        const json = await fs.readFile(this.ruta, "utf-8")
        this.datos = JSON.parse(json);
    }

    async guardar(){
        const json = JSON.stringify(this.datos, null, 3)
        await fs.writeFile(this.ruta, json)
    }

    async mostrarDatos(){
        await this.cargar()
        console.log(this.datos);
    }

    async agregarProd(prod){
        await this.cargar()
        this.datos.push(prod)
        await this.guardar()
    }

}

const prods = new ProductManager("./static/productos.json")


await prods.mostrarDatos();
await prods.agregarProd({"product": "Mouse","description": "Gaming Mouse with RGB","price": 1000,"id": 2,"stock": 8,"image": "image","code": ""});
prods.mostrarDatos();