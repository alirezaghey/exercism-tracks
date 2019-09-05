#!/usr/bin/env bash

main () {
    local -A colors=(
        [black]=0   [brown]=1   [red]=2     [orange]=3  [yellow]=4
        [green]=5   [blue]=6    [violet]=7  [grey]=8    [white]=9
    )

    # At least one of the colors is not in the associative array
    if  ! [[ -v "colors[$1]" ]] ||
        ! [[ -v "colors[$2]" ]] ||
        ! [[ -v "colors[$3]" ]]; then
        echo "Color(s) invalid!"
        return 1
    fi

    # Calculate the numeric value
    result=$(( (${colors[$1]} * 10 + ${colors[$2]}) * 10 ** ${colors[$3]} ))

    # echo output while taking care of units
    if (( $result > 10 ** 10 )); then
        echo $(( result / 10 ** 9 )) gigaohms
    elif (( $result > 10 ** 7 )); then
        echo $(( result / 10 ** 6 )) megaohms
    elif (( $result > 10 ** 3 )); then
        echo $(( result / 10 ** 3)) kiloohms
    else echo "$result" ohms
    fi


}

main "$@"
