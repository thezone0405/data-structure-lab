import ListNode from './node'

interface ILinkedLIst<T>{
  prepend(data: T): ListNode<T>
  append(data: T): ListNode<T>
  deleleteNode(listNode: ListNode<T>): void
  search(comparer: (data: T) => boolean): ListNode<T> | null
}

export default class LinkedList<T> implements ILinkedLIst<T>{
  private head: ListNode<T> | null = null

  constructor(...data:T[]){
    for(let i = 0; i < data.length; i ++){
      this.append(data[i])
    }
  }
  prepend(data: T): ListNode<T> {
    const node = new ListNode(data)
    if(!this.head){
      this.head = node
      return node
    }
    this.head.prev =  node
    node.next = this.head
    this.head = node
    return node
  }

  append(data: T): ListNode<T> {
    const node = new ListNode(data)
    if(!this.head){
      this.head = node
      return node
    }

    const lastNode = (currentNode: ListNode<T>): ListNode<T> => {
      return currentNode.next ?lastNode(currentNode.next) : currentNode
    }
  
    const endNode = lastNode(this.head)
    node.prev = endNode
    endNode.next = node
    return node
  }

  deleleteNode(listNode: ListNode<T>): void {
    if(!listNode.prev){
      this.head = listNode.next
      return
    }
    const prevNode = listNode.prev
    prevNode.next = listNode.next
  }

  search(comparisonOperation: (data: T) => boolean): ListNode<T> | null {
    const checkMatch =  (node: ListNode<T>): ListNode<T> | null =>{
      if(comparisonOperation (node.data)){
        return node
      }
      return node.next ? checkMatch(node.next) : null
    }
    return this.head ? checkMatch(this.head) : null
  }

  traverse(): T[] {
    const nodesData: T[] = []
    if(!this.head){
      return nodesData
    }

    const addToArray = (node: ListNode<T>): T[] => {
      nodesData.push(node.data)
      return node.next ? addToArray(node.next) : nodesData
    }
    return addToArray(this.head)
  }

  size(): number {
    return this.traverse().length
  }
  
}