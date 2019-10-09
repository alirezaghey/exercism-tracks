import re


def is_isogram(string: str) -> bool:
    string = [c.lower() for c in string if c.isalpha()]
    return len(string) == len({c for c in string})
