document.getElementById('tinhDiem').addEventListener('click', hienthi);
function hienthi() {
    var Point = tinhDiem();
    var divHT = document.getElementById('divHienThi');
    var pEL = document.createElement('p');

    divHT.innerHTML = "";
    pEL.innerHTML = Point;
    divHT.appendChild(pEL);

    divHT.style.display = "block";
}

function tinhDiem() {

    var diemA = +document.getElementById('diemA').value;
    var diemB = +document.getElementById('diemB').value;
    var diemC = +document.getElementById('diemC').value;

    var khuA = document.getElementById('khuA').checked;
    var khuB = document.getElementById('khuB').checked;
    var khuC = document.getElementById('khuC').checked;

    var doiTuong1 = document.getElementById('doiTuong1').checked;
    var doiTuong2 = document.getElementById('doiTuong2').checked;
    var doiTuong3 = document.getElementById('doiTuong3').checked;

    const diemChuan = 20;

    if (diemLiet(diemA, diemB, diemC)) {
        alert("Bạn Bị Điểm Liệt, Chúc Bạn May Mắn Lần Sau");
    }

    var diemThi = tongDiem3Mon(diemA, diemB, diemC) + khuVuc(khuA, khuB, khuC) + doiTuong(doiTuong1, doiTuong2, doiTuong3);
    if (diemThi >= diemChuan) {
        return "Bạn đã đậu: " + diemThi + " điểm" + '-' + 'Điểm chuẩn là: 20';
    }
    else {
        return "Chúc Bạn May Mắn Lần Sau Với :" + diemThi + " điểm" + '-' + 'Điểm chuẩn là: 20';
    }
}

function tongDiem3Mon(diem1, diem2, diem3) {
    return parseFloat(diem1 + diem2 + diem3);
}
function khuVuc(KhuA, KhuB, KhuC) {
    if (KhuA) {
        return diemKhuvuc = 2;
    }
    if (KhuB) {
        return diemKhuvuc = 1;
    }
    if (KhuC) {
        return diemKhuvuc = 0.5;
    }
    else {
        return diemKhuvuc = 0;
    }
}
function doiTuong(DT1, DT2, DT3) {
    if (DT1) {
        return diemKhuvuc = 2.5;
    }
    if (DT2) {
        return diemKhuvuc = 1.5;
    }
    if (DT3) {
        return diemKhuvuc = 1;
    }
    else {
        return diemKhuvuc = 0;
    }
}
function diemLiet(diem1, diem2, diem3) {
    if (diem1 === 0) {
        return true;
    }
    if (diem2 === 0) {
        return true;
    }
    if (diem3 === 0) {
        return true;
    }
}

