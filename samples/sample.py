# Single-line comment

"""
Module docstring
"""

from typing import Optional, Union
import os

CONSTANT = 42
greeting = "hello"
template = f"value is {CONSTANT}"

type Vector = list[float]


class Animal:
    """Base animal class."""

    name: str

    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> str:
        return f"{self.name} makes a sound"

    @staticmethod
    def kingdom() -> str:
        return "Animalia"

    @classmethod
    def create(cls, name: str) -> "Animal":
        return cls(name)


class Dog(Animal):
    def speak(self) -> str:
        return "woof"


def greet(name: str, title: Optional[str] = None) -> str:
    if title:
        return f"Hello, {title} {name}"
    return f"Hello, {name}"


def add(a: int | float, b: int | float) -> int | float:
    return a + b


numbers = [1, 2, 3]
doubled = [n * 2 for n in numbers]
first, *rest = numbers
mapping = {"id": 1, "name": "Alice"}

result = "positive" if first > 0 else "non-positive"

match first:
    case 1:
        print("one")
    case _:
        print("other")


def fibonacci(n: int) -> int:
    match n:
        case 0 | 1:
            return n
        case _:
            return fibonacci(n - 1) + fibonacci(n - 2)


try:
    value = int("not a number")
except ValueError as e:
    print(f"Error: {e}")
finally:
    print("done")

path = os.path.join("home", "user")
exists = os.path.exists(path)
