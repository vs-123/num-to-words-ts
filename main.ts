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
            return "";
    }
}