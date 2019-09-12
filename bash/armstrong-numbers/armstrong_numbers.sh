#!/usr/bin/env bash

pow=${#1}
result=0

for (( i=0; i<pow; i++ )); do
    (( result+=${1:$i:1}**$pow ))
done

if [[ $result -eq $1 ]]; then
    echo true
else
    echo false
fi