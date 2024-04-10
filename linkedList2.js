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
    constructor() {
        this.head = null,
            this.size = 0
    }

    addNode(data) {
        const newNode = new Node(data, null)

        if (!this.cabeza) {
            this.cabeza = newNode
        } else {
            let current = this.cabeza
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }

        this.size++
    }

    delete(data) {
        //el anterior es nulo
        let previous = null
        //como sabemos la cabeza contiene el primer nodo, por ende el valor actual es la cabeza
        let current = this.cabeza

        while (current) {
            //buscamos el nodo a eliminar
            if (current.data === data) {
             //si es el primer nodo solo actualizamos la cabeza, que seria el nodo siguiente
                if (previous === null) {
                    this.cabeza = current.next
                }
                else {
                    previous.next = current.next
                }
                return

            }
            previous = current
            current = current.next
        }
        console.log("Valor no encontrado")
    }

    show() {
        let current = this.cabeza

        while (current) {
            console.log(current.data)

            current = current.next
        }
    }

}


const list = new LinkedList()
list.addNode('Pedrio')
list.addNode('manuel')
list.addNode('Rodrigo')

list.show()
list.delete('manuel')

console.log('-----Delete------')

list.show()


