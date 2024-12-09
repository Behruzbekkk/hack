const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Statik fayllarni xizmat ko'rsatish
app.use(express.json());

// Ro'yxatdan o'tish uchun endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Foydalanuvchini ma'lumotlar bazasida saqlash (simulyatsiya)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    res.status(200).json({ message: 'Registration successful!' });
});

// Tizimga kirish uchun endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        return res.status(200).json({ message: 'Login successful!' });
    }
    
    res.status(400).json({ message: 'Invalid credentials!' });
    console.log('/login')
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
