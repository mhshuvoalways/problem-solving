// input = '12:01:00AM'
// return '00:01:00'

// input = '07:05:45AM'
// return '07:05:45'

// input = '12:01:00PM'
// return '12:01:00'

// input = '07:05:45PM'
// return '19:05:45'


function timeConversion(s) {
    var tc = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'A' && s[0] === '1' && s[1] === '2') {
            tc = s.replace('12', '00');
        } else if (s[i] === 'A') {
            tc = s;
        }
        if (s[i] === 'P' && s[0] === '1' && s[1] === '2') {
            tc = s
        } else if (s[i] === 'P' && s[1] === ':') {
            var hrs = (s[0]);
            tc = s.replace(hrs, parseInt(hrs) + 12);
        } else if (s[i] === 'P') {
            var hrs = (s[0] + s[1]);
            tc = s.replace(hrs, parseInt(hrs) + 12);
        }
    }
    return tc.slice(0, -2);
}
var res = timeConversion('12:05:45PM')
console.log(res)