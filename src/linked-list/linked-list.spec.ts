import LinkedList from "./linked-list"

let digitList = new LinkedList<number>(10,56,80,90,250)

test("Returns accurate linked list size", async () => {
  expect(digitList.size()).toEqual(5)
})

test("Returns an array of the linked list", ()  => {
  expect(digitList.traverse()).toEqual([10,56,80,90,250])
})

describe("Linked List search", () => {
  test("Returns correct node upon search",async () => {
    let searchedNode = digitList.search((data) => data === 90)
    expect(searchedNode?.data).toEqual(90)
    expect(searchedNode!!.next!!.data).toEqual(250)
    expect(searchedNode!!.prev!!.data).toEqual(80)
  })

  test("Returns null if the search doesn't exist", () => {
    let searchedNode = digitList.search((data) => data === 1000)
    expect(searchedNode).toBeFalsy()
  })
})

describe("Adding new node to a linked list", () => {
  test("Appending to the Linked list works", () => {
    let appendedNode = digitList.append(2123)
    expect(digitList.traverse()).toEqual([10,56,80,90,250,2123])
    expect(appendedNode.next).toBeFalsy()
    expect(appendedNode.prev?.data).toEqual(250)
  })

  test("Preppending to the Linked list works", () => {
    let preppendedNode = digitList.prepend(5)
    expect(digitList.traverse()).toEqual([5,10,56,80,90,250,2123])
    expect(preppendedNode.prev).toBeFalsy()
    expect(preppendedNode.next?.data).toEqual(10)
    expect((digitList.search((data) => data === 10)?.prev?.data)).toEqual(5)
  })
})

test("Node deletion works", () => {
  let toBeDeleted = digitList.search((data) => data === 10)
  digitList.deleleteNode(toBeDeleted!!)

  expect(digitList.traverse()).toEqual([5,56,80,90,250,2123])
})