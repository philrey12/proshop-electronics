import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'User Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'User One',
        email: 'user1@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'User Two',
        email: 'user2@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
];

export default users;
