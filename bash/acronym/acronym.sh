#!/usr/bin/env bash


main () {
    local words
    IFS="- _*" read -a words <<< "$1"

    for i in "${words[@]}"; do
        result+=${i:0:1}
    done

    echo "${result^^}"

}

main "$@"
