#!/usr/bin/env bash

main() {
    local len=${#1}
    local rev
    for ((i=$len-1; i>=0; i--)); do
        rev+=${1:$i:1}
    done
    echo "$rev"
    
    # cheating using an external tool
    # echo $1 | rev
}

main "$@"