function buttonClick() {
    document.getElementById("table").innerHTML = ""
    let m = document.getElementById("number-1").value
    let n = document.getElementById("number-2").value
    let input = calculateGCD(m, n)
    if (!input.valid)
        showErrorMessage(input.errorMessage)
}

function showErrorMessage(msg) {
    document.getElementById("result-gcd").innerText = msg
}

function displayEquation(m, n, s, t, d) {
    document.getElementById("result-gcd").innerHTML =
        "GCD(" + m + ", " + n + ") = " + m + " × <strong>" + s + "</strong> + " + n + " × <strong>" + t + "</strong> = " + d
}

function displayTable(resultArray, m, n) {
    let table = ""
    table += openTable()
    table += resultArray[0]
    const s = resultArray[1]
    const t = resultArray[2]
    const d = resultArray[3]
    table += closeTable(d, s, t)

    displayEquation(m, n, s, t, d)
    document.getElementById("table").innerHTML = table
}

function fillTable(tableArray) {
    let table = ""

    for (let i = 0; i < tableArray.length; i++) {
        table += "<tr><td>" + tableArray[i].d + "</td><td>" + tableArray[i].d_prime + "</td>"
        table += "<td>" + tableArray[i].s + "</td><td>" + tableArray[i].s_prime + "</td>"
        table += "<td>" + tableArray[i].t + "</td><td>" + tableArray[i].t_prime + "</td>"
        table += "<td>" + tableArray[i].q + "</td></tr>"
    }

    return table
}

function openTable() {
    return "<table><tr><th><span class='bold'>d</span></th><th><span class='bold'>d'</span></th><th>" +
        "<span class='bold'>s</span></th><th><span class='bold'>s'</span>" + "</th><th><span class='bold'>t</span>" +
        "</th><th><span class='bold'>t'</span></th><th><span class='bold'>q</span></th></tr>"
}

function closeTable(d, s, t) {
    return "<tr><td>" + d + "</td>" + "<td>" + 0 + "</td>" + "<td><strong>" + s +
        "</strong></td>" + "<td></td>" + "<td><strong>" + t + "</strong></td><td></td><td></td></tr></table>"
}