// Tabloyu dolduran ana fonksiyon
function fillTable(data) {
    const tableBody = document.getElementById("tableBody");
    if (!tableBody) return;

    // Eğer tablo zaten DataTable olarak başlatılmışsa yok et (güncelleme için)
    if ($.fn.DataTable.isDataTable('#example')) {
        $('#example').DataTable().destroy();
    }

    tableBody.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.classificationSociety || "-"}</td>
            <td>${item.approvalGroup || "-"}</td>
            <td>${item.certificateNumber || "-"}</td>
            <td>${item.productName || "-"}</td>
            <td>${item.productType || "-"}</td>
            <td>${item.expiryDate || "-"}</td>
            <td>${item.company || "-"}</td>
            <td>${item.countryRegion || "-"}</td>
            <td><a href="${item.certificateLink || '#'}" target="_blank" class="btn btn-sm btn-info">View</a></td>
        `;
        tableBody.appendChild(row);
    });

    // DataTable'ı başlat
    $('#example').DataTable({
        "responsive": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Turkish.json"
        }
    });
}

// Örnek veriler
const initialData = [
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

// Sayfa hazır olduğunda doğrudan çalıştır
$(document).ready(function() {
    fillTable(initialData);
});

// Dışarıdan veri gelirse dinle
window.addEventListener('message', function(event) {
    try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        fillTable(data);
    } catch (e) {
        console.error("Veri hatası:", e);
    }
});
