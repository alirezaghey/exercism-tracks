#!/usr/bin/env bash


  main () {

    # Num of arguments == 1
    if [[ "$#" -ne 1 ]] ||
    # Not a float
    [[ $1 =~ ^[0-9]+\.[0-9]+$ ]] ||
    # No alpha chars
    [[ $1 =~ [a-zA-Z] ]]; then
        echo "Usage: leap.sh <year>"
        return 1
    elif !(($1 % 400)) || (!(($1 % 4)) && (($1 % 100))); then
        echo "true"
    else
        echo "false"
    fi
  }

    main "$@"
