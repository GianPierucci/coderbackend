/* class Contador {
    static cant = 0

    constructor(responsable){
        this.resp = responsable 
        this.contador = 0
    }

    contar(){
        this.contador++
        Contador.cant++
    }
}

const c1 = new Contador("hola")
const c2 = new Contador("hola2")

c1.contar()
c1.contar()
c1.contar()


console.log(c1);
console.log(c2);
console.log(Contador.cant); */


class ProductManager {
    
    constructor(name, description, price, image, code, stock ,id){
        this.name = name
        this.description = description
        this.price = price
        this.image = image
        this.code = code
        this.stock = stock
        this.id = id
    }


    addProducts(){
        console.log(`${this.name}`+" fue agregado con exito");
    }
}

const product1 = new ProductManager("T-shirt", "Large yellow t-shirt", "$200", "image", 12, 6, "01")
const product2 = new ProductManager("Hoodie", "Large black hoodie", "$200", "image", 18, 3, "02")

product1.addProducts()
product2.addProducts();


function getProducts(a,b) {
    let valuesProduct1 = Object.values(product1)
    let valuesProduct2 = Object.values(product2)
    const products = [valuesProduct1,valuesProduct2]
    console.log(products, "productos que elegiste");
}

console.log(getProducts());









