def recite(start_verse, end_verse):
    return [create(day, day) for day in range(start_verse, end_verse+1)]


def create(start_verse, end_verse):
    ordinal = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth',
               'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth']

    gifts = ['a Partridge in a Pear Tree', 'two Turtle Doves',
             'three French Hens', 'four Calling Birds', 'five Gold Rings',
             'six Geese-a-Laying', 'seven Swans-a-Swimming', 'eight Maids-a-Milking',
             'nine Ladies Dancing', 'ten Lords-a-Leaping', 'eleven Pipers Piping',
             'twelve Drummers Drumming']

    result = [
        f'On the {ordinal[start_verse-1]} day of Christmas my true love gave to me: ']
    result.extend(
        [gifts[day] + ', ' for day in reversed(range(1, end_verse))])
    if end_verse > 1:
        result.append('and ')
    result.append(gifts[0]+'.')
    return "".join(result)
