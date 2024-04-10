/* Lista enlazada simple 

Conjunto de nodos finitos. Los nodos son los elementos

--> Si está vacio, la lista es nula.
--> Es no vacio, en caso de que cada nodo tenga la siguiente composición.

[INFORMACION | Referencia del siguiente nod ]  

*Extiste un apuntador externo a la lista, llamado "CABEZA", que contiene la direccion de memoria del primer nodo.

* El ultimo nodo de la lista, contiene en la sección "SIGUIENTE" un valr nulo, propio de apuntadores, que recibe el nobre de nill (nulo)
*/

class Node {
    constructor(data, next) {
        this.data = data,
            this.next = next
    }

}

class LinkedList {
    /* Cada que se cree la lista, debe ser 0 la cabeza. */
    constructor() {
        this.head = null,
        this.size = 0
    }
    addNode(data){
        /* Se crea el node */
        const newNode = new Node(data, null)
 
        /* Si la cabeza está vacia, es porque es el primer nodo, caso contrario, buscamos el ultimo nodo, para enganchar el nuevo */
        if (!this.head) {
            this.head = newNode
        }else{
            /* Como ahora la cabeza contiene la información del nodo que queremos agregar, lo asignamos a un apuntador,
            que nos permitirá buscar el ultimo nod */
            let current =  this.head
             /* Mientras el nodo actual, tenga referencia al siguiente iremos buscando, sino es que ya encontramos el ultimo nodo
             ya que este no tiene nada en su posicion siguiente y a ese nodo que es el ultimo, en la posicion siguiente, ahora el enganchamos
             el nuevo nodo */
            while (current.next) {
                current = current.next
            }

            current.next = newNode
        }
        this.size++
    }
}

const list = new LinkedList()

list.addNode('Prueba')
list.addNode('Manuel')
list.addNode('Jesu')
console.log(list)