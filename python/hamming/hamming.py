from functools import reduce
from sys import getsizeof


def distance(strand_a: str, strand_b: str) -> int:
    if len(strand_a) != len(strand_b):
        raise ValueError(
            "Comparing strands need to have the same length for a valid Hamming Distance")

    # using len, beautiful list comprehension with where clause and dangerous zip
    return len([True for x, y in zip(strand_a, strand_b) if x != y])

    # Using sum, a generator with where clause and dangerous zip
    #  return sum((1 for x, y in zip(strand_a, strand_b) if x != y))

    # Using sum, beautiful list comprehension with where clause and dangerous zip
    # return sum([1 for x, y in zip(strand_a, strand_b) if x != y])

    # Using sum, beautiful list comprehension and dangerous zip
    # return sum([1 if x != y else 0 for x, y in zip(strand_a, strand_b)])

    # using badass reduce, lambda, beautiful list comprehension and dangerous zip
    # return reduce(lambda x, y: x+y, [1 for x, y in zip(strand_a, strand_b) if x != y], 0)

    # Using good old for loop and dangerous zip
    # result: int = 0
    # for x, y in zip(strand_a, strand_b):
    #     if x != y:
    #         result += 1
    # return result
