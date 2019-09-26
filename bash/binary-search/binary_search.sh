#!/usr/bin/env bash


arg1=$1; shift
array=( "$@" )
left=0
right="${#array[@]}"

while (( $left <= $right )); do
    (( mid= (right - left) / 2 + left ))
    if [[ "${array[$mid]}" -eq "$arg1" ]]; then
        echo $mid
        exit 0
    elif [[ "${array[$mid]}" -lt "$arg1" ]]; then
        (( left = mid + 1 ))
    else
        (( right = mid - 1 ))
    fi
done
    echo -1