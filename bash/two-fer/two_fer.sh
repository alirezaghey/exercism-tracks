#!/usr/bin/env bash

  main () {

    # Using shell parameter expansion
    # https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html
    echo "One for ${1:-you}, one for me."

    # Using conditional constructs
    # https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html#Conditional-Constructs
    # if [[ -z "$1" ]]; then
    #     echo "One for you, one for me."
    # elif [[ -n "$1" ]]; then
    #     echo "One for $1, one for me."
    # fi
  }
  main "$@"
