def to_roman(num):
    roman_keys = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 }
    roman_string = ""
    for key in roman_keys:
        while num >= roman_keys[key]:
            roman_string += key
            num -= roman_keys[key]
    return roman_string