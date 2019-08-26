from typing import List, Dict


def convert(number: int) -> str:
    lookup: Dict[int, str] = {3: "Pling", 5: "Plang", 7: "Plong"}
    result: List[str] = [lookup[key] for key in lookup if number % key == 0]
    return "".join(result) if len(result) else str(number)
