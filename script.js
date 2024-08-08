document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("employee-form");
    const tableBody = document.querySelector("#employee-table tbody");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = form.name.value.trim();
        const position = form.position.value.trim();
        const department = form.department.value.trim();

        if (name && position && department) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>${position}</td>
                <td>${department}</td>
            `;

            tableBody.appendChild(row);

            form.reset();
        }
    });
});
