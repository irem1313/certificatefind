// Bootstrap ve DataTables'ı dinamik olarak başlatır
function fillTable(data) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ''; // Tabloyu temizler

    data.forEach(item => {
        const row = document.createElement("tr");

        const rowData = [
            item.classificationSociety,
            item.approvalGroup,
            item.certificateNumber,
            item.productName,
            item.productType,
            item.expiryDate,
            item.company,
            item.countryRegion,
            `<a href="${item.certificateLink}" target="_blank">View Certificate</a>`
        ];

        rowData.forEach(text => {
            const td = document.createElement("td");
            td.innerHTML = text;
            row.appendChild(td);
        });

        tableBody.appendChild(row);
    });

    // Sayfa yüklendiğinde örnek verileri çalıştır
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
        },
        {
            classificationSociety: "DNV",
            approvalGroup: "Safety",
            certificateNumber: "DNV-SA-442",
            productName: "Life Raft",
            productType: "Inflatable",
            expiryDate: "2026-03-12",
            company: "Global Yachting",
            countryRegion: "Germany",
            certificateLink: "#"
        }
    ];

    fillTable(exampleData);
});

function fillTable(data) {
    const tableBody = document.getElementById("tableBody");
    if (!tableBody) return;
    
    tableBody.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement("tr");

        const rowData = [
            item.classificationSociety,
            item.approvalGroup,
            item.certificateNumber,
            item.productName,
            item.productType,
            item.expiryDate,
            item.company,
            item.countryRegion,
            `<a href="${item.certificateLink}" target="_blank" class="btn btn-sm btn-outline-primary">View</a>`
        ];

        rowData.forEach(text => {
            const td = document.createElement("td");
            td.innerHTML = text;
            row.appendChild(td);
        });

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
}

// JSON verisini dinleyin ve tabloyu doldurun
window.addEventListener('message', function(event) {
    const data = JSON.parse(event.data);
    fillTable(data);
});
