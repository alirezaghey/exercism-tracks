import re


def is_isogram(string: str) -> bool:
    string = re.sub(("[^a-z]"), "", string.lower())
    return len(string) == len({c for c in string})
