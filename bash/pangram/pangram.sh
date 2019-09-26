#!/usr/bin/env bash

main () {

    # convert to lowercase
    input=${1,,}
    # remove none-alpha chars
    input=${input//[!a-z]/}
    # input=$(echo "$input" | sed "s/[^a-z]//g")

    # using a dictionary we remove dups
    local -A chars
    for (( i = 0; i < ${#input}; i++ )); do
        chars[${input:i:1}]=1
    done

    # check if it's pangram
    [[ ${#chars[@]} -eq 26 ]] && echo true || echo false
}

main "$@"
