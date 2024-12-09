document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Foydalanuvchi allaqachon borligini tekshirish
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('User already exists!');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('message').innerText = 'Registration successful!';
            
            // Formani tozalash
            document.getElementById('register').reset();  // To'g'ri forma elementini reset qilamiz
        }
    }
});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Foydalanuvchi kirishini tekshirish
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            document.getElementById('message').innerText = 'Login successful!';
        } else {
            alert('Invalid credentials!');
        }
    }
});
