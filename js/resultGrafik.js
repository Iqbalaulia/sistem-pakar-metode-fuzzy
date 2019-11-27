// Data perhitungan


var minPermintaan = 1000;
var maxPermintaan = 5000;

var minPersediaan = 100;
var maxPersediaan = 600;

var minProduksi = 2000;
var maxProduksi = 7000;

// var x = 4000;
// var y = 300;

var totalPerhitunganPermintaanBesar = 0;
var totalPerhitunganPermintaanKecil = 0;
var totalPerhitunganProduksi = 0;
var totalMaxProduksi = 0;
var totalMinProduksi = 0;

var getValueProduksi = maxProduksi - minProduksi;

var valueRulePertama = 0;
var valueRuleKedua = 0;
var valueRuleKetiga = 0;
var valueRuleKeempat = 0;

var hasil = 0;


function hitung() {

    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;

    if (cekRangeInputX(minPermintaan, maxPermintaan, x) && cekRangeInputY(minPersediaan, maxPersediaan, y)) {

        var hasilKecilPermintaan = hitungKecilPermintaan(x, minPermintaan, maxPermintaan);
        var hasilBesarPermintaan = hitungBesarPermintaan(x, minPermintaan, maxPermintaan);
        var hasilPersediaanTerbanyak = hitungPersediaanTerbanyak(y, minPersediaan, maxPersediaan);
        var hasilPersediaanTerkecil = hitungPersediaanTerkecil(y, minPersediaan, maxPersediaan);
        var hasilMinProduksi = hitungMinProduksi(x, minProduksi, maxProduksi, getValueProduksi);
        var hasilMaxProduksi = hitungMaxProduksi(x, minProduksi, maxProduksi, getValueProduksi);

        var totalRulePertamaBanget = rulePertama(hasilKecilPermintaan, hasilPersediaanTerbanyak, maxProduksi, hasilMaxProduksi);
        var totalRuleKeduaBanget = ruleKedua(hasilKecilPermintaan, hasilPersediaanTerkecil, maxProduksi, hasilMaxProduksi);
        var totalRuleKetigaBanget = ruleKetiga(hasilBesarPermintaan, hasilPersediaanTerbanyak, maxProduksi, hasilMaxProduksi);
        var totalRuleKeempatBanget = ruleKeempat(hasilBesarPermintaan, hasilPersediaanTerkecil, maxProduksi, hasilMaxProduksi);

        var hitungTotalPrediksiBanget = hitungPrediksi(valueRulePertama, valueRuleKedua, valueRuleKetiga, valueRuleKeempat, totalRulePertamaBanget, totalRuleKeduaBanget, totalRuleKetigaBanget, totalRuleKeempatBanget);
        
        document.getElementById('hasilKecilPermintaan').innerHTML = "Hasil Kecil Permintaan =" + hasilKecilPermintaan;
        document.getElementById('hasilBesarPermintaan').innerHTML = "Hasil Besar Permintaan =" + hasilBesarPermintaan;
        document.getElementById('hasilPersediaanTerbanyak').innerHTML = "Hasil Persediaan Terbanyak =" + hasilPersediaanTerbanyak;
        document.getElementById('hasilPersediaanTerkecil').innerHTML = "Hasil Persediaan Terkecil =" + hasilPersediaanTerkecil;
        document.getElementById('hasilMaxProduksi').innerHTML = "Hasil Max Produksi =" + hasilMaxProduksi;
        document.getElementById('totalRulePertamaBanget').innerHTML = "Hasil Rule Pertama =" + totalRulePertamaBanget;
        document.getElementById('totalRuleKeduaBanget').innerHTML = "Hasil Rule Kedua =" + totalRuleKeduaBanget;
        document.getElementById('totalRuleKetigaBanget').innerHTML = "Hasil Rule Ketiga =" + totalRuleKetigaBanget;
        document.getElementById('totalRuleKeempatBanget').innerHTML = "Hasil Rule Keempat =" + totalRuleKeempatBanget;
        document.getElementById('hitungTotalPrediksiBanget').innerHTML = "Hasil Total Prediksi =" + hitungTotalPrediksiBanget;
        


// ------------------------------------


var lineChartDataSatu = {
    labels: [0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000],
    // labels: ['0','5', '10','15', '20','25', '30','35','40','45', '50','55', '60','65','70','75','80','85','90','95','100'],

    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilKecilPermintaan ,0,0,0,0,0,0,0],
        // data: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataSatu').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataSatu,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Pertama'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });


// ------------------------------------
var lineChartDataDua = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilBesarPermintaan  ,1,1,1,1,1,1,1],
        
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataDua').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataDua,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Kedua'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });



// ------------------------------------




var lineChartData = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilKecilPermintaan ,0,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilBesarPermintaan  ,1,1,1,1,1,1,1],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Hasil Grafik'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });

// ------------------------------------


// ------------------------------------

       // alert(hitungTotalPrediksiBanget);
    } else {
        alert("Iam Sorry But.");
    }

}

function hitungBesarPermintaan(input, minPermintaan, maxPermintaan) {

    totalPerhitunganPermintaanBesar = (input - minPermintaan) / (maxPermintaan - minPermintaan);

    return totalPerhitunganPermintaanBesar;
}

function hitungKecilPermintaan(input, minPermintaan, maxPermintaan) {

    totalPerhitunganPermintaanKecil = (maxPermintaan - input) / (maxPermintaan - minPermintaan);

    return totalPerhitunganPermintaanKecil
}

function hitungPersediaanTerbanyak(input, minPersediaan, maxPersediaan) {

    totalPerhitunganPersediaanterbanyak = (input - minPersediaan) / (maxPersediaan - minPersediaan);

    return totalPerhitunganPersediaanterbanyak;
}

function hitungPersediaanTerkecil(input, minPersediaan, maxPersediaan) {

    totalPerhitunganPersediaanTerkecil = (maxPersediaan - input) / (maxPersediaan - minPersediaan);

    return totalPerhitunganPersediaanTerkecil;
}

function hitungMaxProduksi(input, minProduksi, maxProduksi, getValueProduksi) {

    totalMaxProduksi = ((input - minProduksi) / (maxProduksi - minProduksi)) * getValueProduksi;

    totalMaxProduksi = maxProduksi - totalMaxProduksi;

    return totalMaxProduksi;
}

function hitungMinProduksi(input, minProduksi, maxProduksi, getValueProduksi) {

    totalMinProduksi = ((maxProduksi - input) / (maxProduksi - minProduksi)) * getValueProduksi;

    totalMinProduksi = maxProduksi - totalMinProduksi;

    return totalMinProduksi;
}


function rulePertama(permintaanTurun, persediaanBanyak, maxProduksi, totalMaxProduksi) {

    valueRulePertama = Math.max(permintaanTurun, persediaanBanyak);

    var totalRulePertama = maxProduksi - (valueRulePertama * totalMaxProduksi)

    return totalRulePertama;
}

function ruleKedua(permintaanTurun, persediaanSedikit, maxProduksi, totalMaxProduksi) {

    valueRuleKedua = Math.max(permintaanTurun, persediaanSedikit);

    var totalRuleKedua = maxProduksi - (valueRuleKedua * totalMaxProduksi)

    return totalRuleKedua;
}

function ruleKetiga(permintaanNaik, persediaanBanyak, maxProduksi, totalMaxProduksi) {

    valueRuleKetiga = Math.max(permintaanNaik, persediaanBanyak);

    var totalRuleKetiga = maxProduksi - (valueRuleKetiga * totalMaxProduksi)

    return totalRuleKetiga;
}

function ruleKeempat(permintaanNaik, persediaanSedikit, maxProduksi, totalMaxProduksi) {

    valueRuleKeempat = Math.max(permintaanNaik, persediaanSedikit);

    var totalRuleKeempat = maxProduksi - (valueRuleKeempat * totalMaxProduksi)

    return totalRuleKeempat;
}

function hitungPrediksi(valueRulePertama, valueRuleKedua, valueRuleKetiga, valueRuleKeempat, totalRulePertama, totalRuleKedua, totalRuleKetiga, totalRuleKeempat) {

    var hasilPertama = (valueRulePertama * totalRulePertama) + (valueRuleKedua * totalRuleKedua) + (valueRuleKetiga * totalRuleKetiga) + (valueRuleKeempat * totalRuleKeempat);
    var hasilKedua = valueRulePertama + valueRuleKedua + valueRuleKetiga + valueRuleKeempat;

    var totalHitungPrediksi = hasilPertama / hasilKedua;

    return totalHitungPrediksi;
}

function cekRangeInputX(minPermintaan, maxPermintaan, inputanX) {

    if (inputanX >= minPermintaan && inputanX <= maxPermintaan) {
        return true;
    } else {
        return false;
    }
}

function cekRangeInputY(minPersediaan, maxPersediaan, inputanY) {

    if (inputanY >= minPersediaan && inputanY <= maxPersediaan) {
        return true;
    } else {
        return false;
    }
}


var lineChartData = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1, hasilKecilPermintaan ,0,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0, hasilBesarPermintaan  ,1,1,1,1,1,1,1],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Hasil Grafik'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });





var lineChartDataSatu = {
    labels: [0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000],
    // labels: ['0','5', '10','15', '20','25', '30','35','40','45', '50','55', '60','65','70','75','80','85','90','95','100'],

    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [1,1,1,1,1,1,1,  ,0,0,0,0,0,0,0],
        // data: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [],
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataSatu').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataSatu,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Pertama'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });


// ------------------------------------



var lineChartDataDua = {
    labels: ['0','500','1000','1500','2000','2500','3000','3500','4000','4500','5000','5500','6000','6500','7000'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [],
        // data: [6000,6000,6000, 6000, 6000,6000,5400,4800,4200,3600,3000,2400,1800,1200,600,0,0,0,0,0,0],

        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [0,0,0,0,0,0,0,  ,1,1,1,1,1,1,1],
        
        yAxisID: 'y-axis-2'
    }]
};

    var ctx = document.getElementById('DataDua').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartDataDua,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Grafik Kedua'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });




    