#!/usr/bin/env bash

main () {
    if [[ $1 != 'total' ]] && (( $1 < 1 || $1 > 64 )); then
        echo "Error: invalid input"
        exit 1
    fi

    local result=0
    if [[ $1 == 'total' ]]; then
        result=$(bc <<< "(2 ^ 64) - 1")
    else
        result=$(bc <<< "2 ^ ($1-1)")
    fi
    echo "$result"
}

main "$@"
