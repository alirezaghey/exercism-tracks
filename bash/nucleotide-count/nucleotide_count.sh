#!/usr/bin/env bash

main () {
    local -A types=(
        [A]=0   [C]=0   [G]=0    [T]=0
    )
    # loop over each and ever char of input string
    for (( i=0; i<${#1}; i++ )); do
        # check if it's among the keys of types
        if [[ " ${!types[*]} " =~ " ${1:$i:1} " ]]; then
            # increment corresponding value
            ((types["${1:$i:1}"]++))
        else
            echo "Invalid nucleotide in strand"
            exit 1
        fi
    done

    echo -e $"A: ${types[A]}\nC: ${types[C]}\nG: ${types[G]}\nT: ${types[T]}"
}

main "$@"
