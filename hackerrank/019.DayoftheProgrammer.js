// if 1918 leap year it will be 26.09.1918
// if leap year it will be 12.09.given year
// if non leap year it will be 13.09.given year

function dayOfProgrammer(year) {
    let result = '';
    if (year === 1918) {
        result = '26.09.1918' //fixed
    } else if (
        year <= 1917 && year % 4 === 0 ||
        year >= 1919 && year % 400 === 0 ||
        year % 4 === 0 && year % 100 !== 0
    ) {
        result = '12.09.' + year;
    } else {
        result = '13.09.' + year;
    }
    console.log(result);
}

dayOfProgrammer(1918) //26.09.1918
dayOfProgrammer(1984) //12.09.1984
dayOfProgrammer(2017) //13.09.2017
dayOfProgrammer(2016) //12.09.2016
dayOfProgrammer(1800) //12.09.1800