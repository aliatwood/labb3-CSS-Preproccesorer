async function readData(){
    try{
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema.json");
        const data = await response.json();
        return data;
    } catch(error){
        console.log("Något har gått fel " + error);
    }

}

async function getData(){
    try{
        const data = await readData();
        const tableBody = document.getElementById("table-body");
        data.forEach(course => {
            const row = document.createElement("tr");

            const codeCell = document.createElement("td");
            codeCell.textContent = course.code;

            const nameCell = document.createElement("td");
            nameCell.textContent = course.coursename;

            const progressionCell = document.createElement("td");
            progressionCell.textContent = course.progression;

            row.appendChild(codeCell);
            row.appendChild(nameCell);
            row.appendChild(progressionCell);

            tableBody.appendChild(row);
        })
    } catch{
        console.log("Något har gått fel " + error);
    }

}
getData();

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    filterTable(searchInput.value);
});

function filterTable(searchTerm) {
    const tableBody = document.getElementById("table-body");
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach(row => {
        const code = row.cells[0].textContent.toLowerCase();
        const name = row.cells[1].textContent.toLowerCase();
        const term = searchTerm.toLowerCase();

        if(code.includes(term) || name.includes(term)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    })
}

document.getElementById("sort-code").addEventListener("click", () => {
    sortTable(0);
})
document.getElementById("sort-name").addEventListener("click", () => {
    sortTable(1);
})
document.getElementById("sort-progression").addEventListener("click", () => {
    sortTable(2);
})

function sortTable(column) {
    const tableBody = document.getElementById("table-body");
    const rows = Array.from(tableBody.querySelectorAll("tr"));

    rows.sort((a, b) => {
        const aText = a.cells[column].textContent.toLowerCase();
        const bText = b.cells[column].textContent.toLowerCase();
        return aText.localeCompare(bText);
    });

    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));

}

