function computeLeapYear(year) {
    result = `평년입니다.`;
    if (year % 4 === 0 || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
        if ((year % 100 === 0 && year % 400 !== 0)!==true) {
            result = `윤년 입니다.`;
        }
    }
    return result;
}
function showStarPyramid(floor, mark) {
    result = ``;
    for (i = 0; i < floor+1; ++i) {
        for (l = 0; l < i; ++l) {
            result += mark;
        }
        result += '<br>';
    }
    document.write(`${result}<br>`);
}
function showAMPM(hour, minute, second) {
    result = `잘못 입력하셨습니다.`;
    if(((hour<0||hour>=24)||(minute<0||minute>=60)||(second<0||second>=60))!==true){
        switch (hour < 12) {
            case true:
                result = `오전입니다.`;
                break;
            case false:
                result = `오후입니다.`;
                break;
        }
    }
    return result;
}
function computeSungJuk(kor, eng, mat){
    tot = (kor + eng + mat);
    avg = Math.floor((tot / 3)*10)/10;
    grd = '가';
    if((kor<0||kor>100)||(eng<0||eng>100)||(mat<0||mat>100)){
        grd = null;
        return grd;
    }
    switch (parseInt(avg / 10)) {
        case 10:
        case 9:
            grd=`수`;
            break;
        case 8:
            grd=`우`;
            break;
        case 7:
            grd=`미`;
            break;
        case 6:
            grd=`양`;
            break;
        default:
            break;
    }
    document.write(`총점은 ${tot}입니다.<br> 평균 점수는 ${avg}입니다.<br>`);
    return grd;
}