#!/usr/bin/env bash

# Time complexity: O(n) but can be done in O(1)
# Space complexity: O(1)

squareOfSum=0
sumOfSquare=0

for (( i=1; i<=$2; i++ )); do
    (( squareOfSum+=$i ))
    (( sumOfSquare+=( $i**2 ) ))
done
(( squareOfSum=$squareOfSum**2))

# Using math formulas for sum of n and sum of n^2 we can render time complexity constant
# (( squareOfSum=($2*($2+1)/2)**2 ))
# (( sumOfSquare=($2*($2+1)*(2*$2+1))/6 ))

if [[ $1 == square_of_sum ]]; then
    echo "$squareOfSum"
elif [[ $1 == sum_of_squares ]]; then
    echo "$sumOfSquare"
else
    echo "$(( $squareOfSum - $sumOfSquare ))"
fi


