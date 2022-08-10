document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true);

    xhr.onload = function() {
        let list = document.getElementById("employees");

        if (this.status === 200) {
            const employes = JSON.parse(this.responseText);

            employes.forEach(function(employe) {
                list.innerHTML += `<tr>
					<td>${employe.name}</td>
					<td>${employe.department}</td>
					<td>${employe.salary}</td>
				</tr>`

            });

        }
    }

    xhr.send();

}