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

    $('#example').DataTable();
}

// JSON verisini dinleyin ve tabloyu doldurun
window.addEventListener('message', function(event) {
    const data = JSON.parse(event.data);
    fillTable(data);
});
