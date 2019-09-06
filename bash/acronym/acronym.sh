#!/usr/bin/env bash


main () {
    IFS="- _*" read -a words <<< "$1"

    for i in "${words[@]}"; do
        result=$result${i:0:1}
    done

    echo "${result^^}"

}

main "$@"
