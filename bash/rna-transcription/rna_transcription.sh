#!/usr/bin/env bash

main () {
    local -A rna=(
        [G]=C   [C]=G   [T]=A    [A]=U
    )
    local result
    # loop over each and ever char of input string
    for (( i=0; i<${#1}; i++ )); do
        # check if it's among the keys of rnas
        if [[ " ${!rna[*]} " =~ " ${1:$i:1} " ]]; then
            # add corresponding DNA to results
            result+="${rna[${1:$i:1}]}"
        else
            echo "Invalid nucleotide detected."
            exit 1
        fi
    done
    echo $result


}

main "$@"
