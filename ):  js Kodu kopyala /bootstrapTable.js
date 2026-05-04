// DataTable nesnesini globalde tutalım ki kontrol edebilelim
let table;

function fillTable(data) {
    const tableBody = document.getElementById("tableBody");
    if (!tableBody) return;

    // Eğer tablo daha önce başlatılmışsa, verileri güncellemek için yok et
    if ($.fn.DataTable.isDataTable('#example')) {
        $('#example').DataTable().destroy();
    }

    tableBody.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement("tr");

        const rowData = [
            item.classificationSociety || "-",
            item.approvalGroup || "-",
            item.certificateNumber || "-",
            item.productName || "-",
            item.productType || "-",
            item.expiryDate || "-",
            item.company || "-",
            item.countryRegion || "-",
            `<a href="${item.certificateLink || '#'}" target="_blank" class="btn btn-sm btn-outline-primary">View</a>`
        ];

        rowData.forEach(text => {
            const td = document.createElement("td");
            td.innerHTML = text;
            row.appendChild(td);
        });

        tableBody.appendChild(row);
    });

    // DataTable'ı başlat ve değişkene ata
    table = $('#example').DataTable({
        "responsive": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Turkish.json"
        }
    });
}

// 1. Sayfa ilk açıldığında örnek verileri yükle
document.addEventListener("DOMContentLoaded", function() {
    const exampleData = [
        {
            classificationSociety: "Türk Loydu",
            approvalGroup: "Hull",
            certificateNumber: "TL-2026-001",
            productName: "Steel Plate",
            productType: "Marine Grade",
            expiryDate: "2027-10-17",
            company: "Yıldız Shipbuilding",
            countryRegion: "Turkey",
            certificateLink: "#"
        },
        {
            classificationSociety: "ABS",
            approvalGroup: "Machinery",
            certificateNumber: "ABS-9982-A",
            productName: "Main Engine",
            productType: "Diesel",
            expiryDate: "2026-05-20",
            company: "Onur Marine",
            countryRegion: "Netherlands",
            certificateLink: "#"
        }
    ];

    fillTable(exampleData);
});

// 2. Dışarıdan (postMessage ile) yeni veri gelirse tabloyu güncelle
window.addEventListener('message', function(event) {
    try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        fillTable(data);
    } catch (e) {
        console.error("Veri işleme hatası:", e);
    }
});
