#!/usr/bin/env bash

main () {
    declare -A sounds=( [3]=Pling [5]=Plang [7]=Plong)

    for i in 3 5 7
        do  if (( $1 % $i == 0 )); then
                name+=${sounds[$i]}
            fi
    done

    if [[ -n $name ]]; then
        echo "$name"
    else
        echo "$1"
    fi
}

main "$@"
