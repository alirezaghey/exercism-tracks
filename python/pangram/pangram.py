import string


def is_pangram(sentence):
    return len(set([char for char in sentence.lower()
                    if char in string.ascii_lowercase])) == 26

# def is_pangram(sentence):
#     return len(set([char for char in sentence.lower()
#                     if ord(char) > 96 and ord(char) < 123])) == 26
