#!/usr/bin/env bash

main () {
    if [[ $# != 2 ]]; then
        echo "Usage: hamming.sh <string1> <string2>"
        exit 1
    elif [[ -z $1 ]] && [[ -n $2 ]]; then
        echo "left strand must not be empty"
        exit 1
    elif [[ -z $2 ]] && [[ -n $1 ]]; then
        echo "right strand must not be empty"
        exit 1
    elif [[ ${#1} != ${#2} ]]; then
        status=1
        echo "left and right strands must be of equal length"
        exit 1
    fi

    res=0
    for (( i=0; i<${#1}; i++ )); do
        if [[ ${1:$i:1} != ${2:$i:1} ]]; then
            res=$(( res+1 ))
        fi
    done

    echo "$res"
}

main "$@"
