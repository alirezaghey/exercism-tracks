from typing import List


def latest(scores: List[int]) -> int:
    """
    Returns the last added element to a List

    Args:
        scores List[int]: A list of integers representing scores

    Returns:
        int: The last added element to the scores list
    """
    return scores[-1]


def personal_best(scores: List[int]) -> int:
    """
    Returns the highest score in the list

    Args:
        scores List[int]: A list of integers representing scores

    Returns:
        int: The highest score in the list of scores
    """
    return max(scores)


# Initial thoughts:
# There are two approaches to this problem:
#   1- Sort the List and return the last three. Time complexity: O(n log n)
#   2- Iterate through the List and copy the top three highest scores to the result List. Time complexity: O(n)


def personal_top_three(scores: List[int]) -> List[int]:
    """
    Returns the 3 highest scores from the list

    Args:
        scores List[int]: A list of integers representing scores

    Returns:
        List[int]: The three highest scores in the list of scores
    """
    result: List[int] = []
    for score in scores:
        if len(result) < 3:
            result.append(score)
        elif min(result) < score:
            result[result.index(min(result))] = score
    return sorted(result, reverse=True)
