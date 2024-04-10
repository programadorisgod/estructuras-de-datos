/* El nodo contiene informacion, valor y sus conexiones */
/* Debemos permitir agregar esas conexiones */
class Node {
    _value = ''
    _edges = []

    constructor(value) {
        this._value = value
        this._edges = []
    }

    addEdges(node) {
        this._edges.push(node)
    }
}

function logNodes(value, key) {
    console.log(`Node: ${key} \nconexiones:`)
    value._edges.forEach(edge => {
        console.log(edge._value)
    })
}

/**Un grafo es una lista de nodos interconectados, dirigidos o no dirigidos
 * Una vez creado la lista de nodos con una [] o map 
 * debemos permitir agrega la conexion al nodo
 */

class Graph {

    constructor() {
        this.nodes = new Map()
    }

    addNodes(value) {
        const node = new Node(value)
        this.nodes.set(value, node)
    }

    addEdge(startValueNode, endValueNode) {
        const startNode = this.nodes.get(startValueNode)
        const endNode = this.nodes.get(endValueNode)

        if (startNode && endNode) {
            startNode.addEdges(endNode)
        }
    }

    show() {
        this.nodes.forEach(logNodes)
    }
}

const graph = new Graph()

graph.addNodes('A')
graph.addNodes('B')
graph.addNodes('C')
graph.addNodes('D')

graph.addEdge('A', 'D')
graph.addEdge('D', 'A')
graph.addEdge('A', 'B')
graph.addEdge('B', 'D')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')





graph.show()