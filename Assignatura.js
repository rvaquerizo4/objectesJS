var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1','UF2','UF3','UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1','alu2','alu13','alu4','alu5']
    };

console.log(Asignatura);

//Exercici 1
function listarPropiedades(Asignatura){
    var result = Object.keys(Asignatura);
    return result;
}
listarPropiedades(Asignatura);

//Exercici 2
function esborrarPropiedades(Asignatura){
    console.log(listarPropiedades(Asignatura));
    delete Asignatura.alumnes;
    return listarPropiedades(Asignatura);
}
esborrarPropiedades(Asignatura);

//Exercici 3
function longitudObjecte(Asignatura){
    return listarPropiedades(Asignatura).length;
}
longitudObjecte(Asignatura);

//Exercici 4
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

function infoLibros(library){
    var cont = 1;
    for (var i in library) {
        console.log('Libro ' + cont)
        console.log(library[i].author)
        console.log(library[i].title)
        cont++;
    }
}

//Exercici 5
const PI = 3.1416

class cilindro{
    constructor(radio, height) {
        this.radio = radio;
        this.height = height;
    }
    get volum() {
        return this.calcVolum();
    }
    // Método
    calcVolum () {
        return PI * Math.pow(this.radio, 2) * this.height;
    }
}

const cili = new cilindro(5, 10);
console.log(cili.area);

//Exercici 6
class Cercle{
    constructor(radio, color_contorn, color_fons, gruix_contorn){
        this.radio = radio;
        this.color_contorn = color_contorn;
        this.color_fons = color_fons;
        this.gruix_contorn = gruix_contorn;
    }
    get area() {
        return this.calcArea();
    }
    get perimetro(){
        return this.calcPerimetro();
    }
    // Métodos
    calcArea() {
        return PI * Math.pow(this.radio, 2);
    }
    calcPerimetro() {
        return 2 * PI * this.radio;
    }
    //Exercici 7
    pintar() {
        
    }
}

