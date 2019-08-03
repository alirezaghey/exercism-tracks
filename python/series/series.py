def slices(series, length):
    if len(series) < length or length < 1:
        raise ValueError(
            "Either length is greater than len(series) or it is less than one!")
    return [series[i:i+length] for i in range(len(series)-length+1)]
