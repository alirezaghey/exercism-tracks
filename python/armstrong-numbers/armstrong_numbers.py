def is_armstrong_number(number):
    numOfDigits = len(str(number))
    numTemp = number
    sum = 0
    while(numTemp > 0):
        sum += (numTemp % 10) ** numOfDigits
        numTemp = numTemp // 10

    return sum == number
