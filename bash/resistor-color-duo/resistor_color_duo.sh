#!/usr/bin/env bash


main () {
    local -A colors=(
        [black]=0	    [brown]=1	    [red]=2	    [orange]=3	    [yellow]=4
        [green]=5	    [blue]=6	    [violet]=7	[grey]=8	    [white]=9	
    )
    if [[ -v "colors[$1]" ]] && [[ -v "colors[$2]" ]] ; then
        echo ${colors[$1]}${colors[$2]}
    else
        echo "invalid color"
        return 1
    fi
}

main "$@"

