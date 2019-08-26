#!/usr/bin/env bash

main() {
    
    len=${#1}
    for ((i=$len-1; i>=0; i--))
        do rev="$rev${1:$i:1}"
    done
    echo $rev
    status=0
    
    # cheating using an external tool
    # echo $1 | rev
}

main "$@"