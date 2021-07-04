document.getElementById('submit').addEventListener('click', hienThi)

function hienThi() {
    var tongTien = tinhTien();
    var pEL = document.createElement('p');
    var divHienThi = document.getElementById('divHienThi');

    pEL.innerHTML = "Tổng tiền điện: " + tongTien;

    divHienThi.innerHTML = "";
    divHienThi.appendChild(pEL);
    divHienThi.style.display = 'block';
}

function tinhTien() {
    var number = +document.getElementById('number').value;

    const dienMuc1 = 500;
    const dienMuc2 = 650;
    const dienMuc3 = 850;
    const dienMuc4 = 1100;
    const dienMuc5 = 1300;

    return tinhChiTiet(number, dienMuc1, dienMuc2, dienMuc3, dienMuc4, dienMuc5);
}

function tiendienMuc1(number, giaDien) {
    return parseFloat(number) * giaDien;
}
function tiendienMuc2(number, giaDien) {
    return parseFloat(number - 50) * giaDien;
}
function tiendienMuc3(number, giaDien) {
    return parseFloat(number - 100) * giaDien;
}
function tiendienMuc4(number, giaDien) {
    return parseFloat(number - 150) * giaDien;
}
function tiendienMuc5(number, giaDien) {
    return parseFloat(number - 350) * giaDien;
}

function tinhChiTiet(soDien, dienMuc1, dienMuc2, dienMuc3, dienMuc4, dienMuc5) {
    if (soDien > 0 && soDien <= 50) {
        return tiendienMuc1(soDien, dienMuc1);
    }
    if (soDien <= 100) {
        var tienMuc2 = tiendienMuc2(soDien, dienMuc2);
        return (50 * dienMuc1) + tienMuc2;
    }
    if (soDien <= 150) {
        var tienMuc2 = tiendienMuc2(100, dienMuc2);
        var tienMuc3 = tiendienMuc3(soDien, dienMuc3);
        return (50 * dienMuc1) + tienMuc2 + tienMuc3;
    }
    if (soDien <= 350) {
        var tienMuc2 = tiendienMuc2(100, dienMuc2);
        var tienMuc3 = tiendienMuc3(150, dienMuc3);
        var tienMuc4 = tiendienMuc4(soDien, dienMuc4);
        return (50 * dienMuc1) + tienMuc2 + tienMuc3 + tienMuc4;
    }
    var tienMuc2 = tiendienMuc2(100, dienMuc2);
    var tienMuc3 = tiendienMuc3(150, dienMuc3);
    var tienMuc4 = tiendienMuc4(350, dienMuc4);
    var tienMuc5 = tiendienMuc5(soDien, dienMuc5);
    return (50 * dienMuc1) + tienMuc2 + tienMuc3 + tienMuc4 + tienMuc5;
}