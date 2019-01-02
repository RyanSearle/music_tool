export const makeArray = size => new Array(size).fill();

export const toNumerals = num => {
    switch (num) {
        case 1:
            return 'i';
        case 2:
            return 'ii';
        case 3:
            return 'iii';
        case 4:
            return 'iv';
        case 5:
            return 'v';
        case 6:
            return 'vi';
        case 7:
            return 'vii';
        case 8:
            return 'viii';
        case 9:
            return 'ix';
        case 10:
            return 'x';
        case 11:
            return 'xi';
        case 12:
            return 'xii';
    
        default:
            throw new Error('Numeral out of bounds')
    }
}