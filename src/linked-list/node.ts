export default class ListNode<T>{
  next: ListNode<T> | null = null
  prev: ListNode<T> | null = null
  constructor(public data: T){}
}