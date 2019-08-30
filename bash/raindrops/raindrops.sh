#!/usr/bin/env bash

main () {
    declare -A sounds
    sounds[3]="Pling"
    sounds[5]="Plang"
    sounds[7]="Plong"

    if (( $1 % 3 == 0 )); then
        name=${sounds[3]}
    fi
    if (( $1 % 5 == 0 )); then
        name=$name${sounds[5]}
    fi
    if (( $1 % 7 == 0 )); then
        name=$name${sounds[7]}
    fi

    if [[ ${#name} > 0 ]]; then
        echo $name
    else
        echo $1
    fi
}

main "$@"
