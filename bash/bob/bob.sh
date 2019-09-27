#!/usr/bin/env bash

main() {
    # Question yelled
    questionYelled='^[A-Z ]+\?$'
    normalQuestion='^[[:alpha:][:digit:],!\:\)\. ]+\? *$'
    yellCapital='^[[:upper:][:digit:][:punct:] ]+!?$'
    digits='^[[:digit:], ]+$'
    empty='^[[:space:]]*$'
    if [[ $1 =~ $empty ]]; then
        echo "Fine. Be that way!"
    elif [[ $1 =~ $digits ]]; then
        echo "Whatever."
    elif [[ $1 =~ $questionYelled ]]; then
        echo "Calm down, I know what I'm doing!"
    elif [[ $1 =~ $normalQuestion ]]; then
        echo "Sure."
    elif [[ $1 =~ $yellCapital ]]; then
        echo "Whoa, chill out!"
    else echo "Whatever."
    fi
}

main "$@"
