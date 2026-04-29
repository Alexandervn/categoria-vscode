// @ts-nocheck

/**
 * Block comment / JSDoc
 *
 * @param name - the name to greet
 * @param options - optional configuration
 * @returns a greeting string
 * @example
 *   greet('Alice') // => 'Hello, Alice'
 * @see {@link https://example.com}
 * @deprecated use `greetUser` instead
 */

import { readFile } from 'fs/promises'

const PI = 3.14159
const greeting = 'hello'
const template = `value is ${PI}`

type Status = 'active' | 'inactive'

interface User {
  id: number
  name: string
  status: Status
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

class Animal {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  speak(): string {
    return `${this.#name} makes a sound`
  }
}

class Dog extends Animal {
  speak(): string {
    return 'woof'
  }
}

function greet(user: User): string {
  return `Hello, ${user.name}`
}

const add = (a: number, b: number): number => a + b

async function fetchData(url: string): Promise<User[]> {
  const data = await readFile(url, 'utf-8')
  return JSON.parse(data) as User[]
}

const numbers = [1, 2, 3]
const doubled = numbers.map(n => n * 2)
const [first, ...rest] = numbers
const { id, name } = { id: 1, name: 'Alice' }

const result = first > 0 ? 'positive' : 'non-positive'

// Generics
function identity<T>(value: T): T {
  return value
}

type Maybe<T> = T | null | undefined

// Decorators
function log(target: unknown, key: string) {
  console.log(`Accessing ${key}`)
}
