var get_val = new Array();
var get_grd = new Array();
var total = 0;
var sumOfTotal = 0;
var sumOfHours = 0;

function changeVal() {
    for (var i = 1; i <= 13; i++) {

        get_val[i] = parseInt(document.getElementById("b" + i).value);
    }

}

function changeGrd() {

    for (var i = 1; i <= 13; i++) {
        get_grd[i] = parseFloat(document.getElementById("c" + i).value);

    }

}

function calculate() {

    for (var i = 1; i <= 13; i++) {

        (
            isNaN(get_val[i] || get_grd[i])
                ? 0
                : sumOfTotal = get_val[i] * get_grd[i]
        );

        total = total + sumOfTotal;

    }

    for (var i = 0; i <= 13; i++) {
        (
            isNaN(get_val[i])
                ? 0
                : sumOfHours += parseInt(get_val[i])
        )

    }

    return (
        isNaN(total / sumOfHours)
            ? "입력을 다시 해주시기 바랍니다."
            : (total / sumOfHours).toFixed(2)
    );

}

function viewResults() {

    document
        .getElementById("Result")
        .innerHTML = "학점 평균 : " + calculate();

}
