export function convert(n: number): String {
    if (n < 0) {
        return "negative " + convert(-n);
    }
    switch (n) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";

        // Tens
        case 10:
            return "ten";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 80:
            return "eighty";

        // Between 11 to 19
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 15:
            return "fifteen";
        case 18:
            return "eighteen";
        
        default:
            // -ty numbers
            if (n%10 == 0 && n >= 60 && n <= 90) {
                return convert(n/10)+"ty";
            }
            // -teen numbers
            if (n >= 13 && n <= 19) {
                return convert(n%10)+"teen";
            }
            // Between 21 to 99
            if (n >= 21 && n <= 99) {
                return `${convert(n - (n%10))} ${convert(n%10)}`;
            }
            // Between 100 to 999
            if (n >= 100 && n <= 999) {
                return convert_with_place_value(n, 100, "hundred");
            }
            // Between 1000 to 999_999
            if (n >= 1000 && n <= 999_999) {
                return convert_with_place_value(n, 1000, "thousand");
            }
            // Between 1M to 999M
            if (n >= 1_000_000 && n <= 999_999_999) {
                return convert_with_place_value(n, 1_000_000, "million");
            }
            // Between 1B to 999B
            if (n >= 1_000_000_000 && n <= 999_999_999_999) {
                return convert_with_place_value(n, 1_000_000_000, "billion");
            }
            return "";
    }
}

function convert_with_place_value(
    n: number,
    place_value: number,
    place_value_name: string
    ): string {
    if (n % place_value == 0) {
        return `${convert(n/place_value)} ${place_value_name}`;
    } else {
        return `${convert(n - (n%place_value))} ${convert(n%place_value)}`;
    }
}