const nameInput = document.getElementById('name');
const userIdInput = document.getElementById('userId');
const userTable = document.getElementById('userTable');
const message = document.getElementById('message');

function showMessage(text) {
    message.textContent = text;
}

function renderTable(users) {
    userTable.innerHTML = '';
    for (let user of users) {
        userTable.innerHTML += `<tr><td>${user.id}</td><td>${user.name}</td></tr>`;
    }
}

async function getUsers() {
    const res = await fetch('/users');
    const users = await res.json();
    renderTable(users);
    showMessage(`${users.length} user(s) loaded`);
}

async function addUser() {
    const name = nameInput.value.trim();
    const id = Number(userIdInput.value);
    if (!name || !id) {
        showMessage('Please fill in both Name and User ID');
        return;
    }
    const res = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name }),
    });
    const data = await res.json();
    showMessage(data.message);
    getUsers();
}

async function updateUser() {
    const id = Number(userIdInput.value);
    const name = nameInput.value.trim();
    if (!id || !name) {
        showMessage('Enter the ID to update and new Name');
        return;
    }
    const res = await fetch(`/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
    });
    const data = await res.json();
    showMessage(data.message);
    getUsers();
}

async function deleteUser() {
    const id = Number(userIdInput.value);
    if (!id) {
        showMessage('Enter the User ID to delete');
        return;
    }
    const res = await fetch(`/users/${id}`, {
        method: 'DELETE',
    });
    const data = await res.json();
    showMessage(data.message);
    getUsers();
}
