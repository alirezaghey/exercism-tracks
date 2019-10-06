#!/usr/bin/env bash

main () {
    if [[ $1 != 'total' && ( $1 -lt 1 || $1 -gt 64 ) ]]; then
        echo "Error: invalid input"
        exit 1
    fi

    local result=0
    if [[ $1 == 'total' ]]; then
        for (( i=0; i<64; i++ )); do
            result=$(bc <<< "2 ^ $i + $result")
        done
    else
        result=$(bc <<< "2 ^ ($1-1)")
    fi
    echo $result
}

main "$@"
