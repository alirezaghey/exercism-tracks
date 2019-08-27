#!/usr/bin/env bash


main () {
    declare -A colors
    colors[black]="0"
    colors[brown]="1"
    colors[red]="2"
    colors[orange]="3"
    colors[yellow]="4"
    colors[green]="5"
    colors[blue]="6"
    colors[violet]="7"
    colors[grey]="8"
    colors[white]="9"

    if [[ -v "colors[$1]" ]] && [[ -v "colors[$2]" ]] ; then
        echo ${colors[$1]}${colors[$2]}
    else
        echo "invalid color"
        return 1
    fi
}

main "$@"

