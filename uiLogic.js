// INTERFA DE USUARIO
document.querySelector('#btnSaveFriend').addEventListener("click", saveFriend);
drawFriendsTable();



function saveFriend() {
    var sId = document.querySelector('#txtId').value,
        sName = document.querySelector('#txtName').value,
        sCountry = document.querySelector('#txtCountry').value,
        dBirthday = document.querySelector('#txtBirthday').value,
        sEmail = document.querySelector('#txtEmail').value;
    
    addFriendToSystem(sId, sName, sCountry, dBirthday, sEmail);
    drawFriendsTable();
}

function drawFriendsTable() {
    var list = getFriendList(),
        tbody = document.querySelector('#friendsTable tbody');

    tbody.innerHTML = "";

    for (i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            countryCell = row.insertCell(2),
            birthdayCell = row.insertCell(3),
            emailCell = row.insertCell(4),
            selectCell = row.insertCell(5);

        idCell.innerHTML = list[i].id;
        nameCell.innerHTML = list[i].name;
        countryCell.innerHTML = list[i].country;
        birthdayCell.innerHTML = list[i].birthday;
        emailCell.innerHTML = list[i].email;



        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;
        selectCell.appendChild(inputSelect); 



        tbody.appendChild(row);

    }



}








