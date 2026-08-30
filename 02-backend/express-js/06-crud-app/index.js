const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static('public'));

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { id, name } = req.body;
    users.push({ id, name });
    res.json({ message: 'User added successfully' });
});

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name } = req.body;
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.json({ message: 'User not found' });
    }
    users[index].name = name;
    res.json({ message: 'User updated successfully' });
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({ message: 'User deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
