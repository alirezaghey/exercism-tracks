from typing import List

# Time Complexity: Creating a Matrix Object takes O(n) where n is the number of elements in the Matrix
# Space Complexity: O(1)


class Matrix(object):
    """
    Takes a string matrix (rows delimited with \n columns with one white space) of ints and turns them into proper lists

    Methods:
        1- row(): Returns a row by index
        2- column(): Returns a column by index
    """

    def __init__(self, matrix_string: str) -> None:
        """
        Initializes the _row and _column lists by parsing the plain string matrix and converting each element into an int

        Args:
            matrix_string str: A string matrix where rows are delimited with \n and columns with 
        """
        self._row: List[List[int]] = [
            [int(y) for y in x.split(" ")] for x in matrix_string.split("\n")]

        # using zip and * operator to transpose
        # self._column: List[List[int]] = [list(l) for l in zip(*self._row)]

        # using list comprehensions to transpose
        self._column: List[List[int]] = [[self._row[j][i] for j in range(
            len(self._row))] for i in range(len(self._row[0]))]

        # using plain old for loops to transpose
        # for i in range(len(self._row[0])):
        #     temp: List[int] = []
        #     for j in range(len(self._row)):
        #         temp.append(self._row[j][i])
        #     self._column.append(temp)

    def row(self, index: int) -> List[int]:
        """
        Returns a row

        Args:
            index int: The index of the desired row (One-based)

        Returns:
            List[int]: A list of ints that represents the specified row
        """
        return self._row[index-1].copy()

    def column(self, index: int) -> List[int]:
        """
        Returns a column

        Args:
            index int: The index of the desired column (One-based)

        Returns:
            List[int]: A list of ints that represents the specified column
        """
        return self._column[index-1].copy()
