#!/usr/bin/env bash

main () {

    # convert to lowercase
    input=${1,,}
    # remove none-alpha chars
    input=$(echo "$input" | sed "s/[^a-z]//g")

    # using a dictionary we remove dups
    local -A chars
    for (( i = 0; i < ${#input}; i++ )); do
        chars[${input:i:1}]=1
    done

    # check if it's pangram
    # TODO: change this to a one-line with && ||
    if [[ ${#chars[@]} -eq 26 ]]; then
        echo true
    else
        echo false
    fi
}

main "$@"
