#!/usr/bin/env bash

pow=${#1}
result=0

for (( i=0; i<${#1}; i++ )); do
    (( result+=${1:$i:1}**$pow ))
done

if (( $result == $1 )); then
    echo true
else
    echo false
fi