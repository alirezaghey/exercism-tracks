#!/usr/bin/env bash

main () {
    local A=0
    local C=0
    local G=0
    local T=0

    for (( i=0; i<${#1}; i++ )); do
        if [[ ${1:$i:1} == "A" ]]; then
            A=$(( A+1 ))
        elif [[ ${1:$i:1} == "C" ]]; then
            C=$(( C+1 ))
        elif [[ ${1:$i:1} == "G" ]]; then
            G=$(( G+1 ))
        elif [[ ${1:$i:1} == "T" ]]; then
            T=$(( T+1 ))
        else
            echo "Invalid nucleotide in strand"
            exit 1
        fi
    done

    echo -e $"A: $A\nC: $C\nG: $G\nT: $T"
}

main "$@"
