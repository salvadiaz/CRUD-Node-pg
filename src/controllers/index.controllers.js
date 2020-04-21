const { Pool } = require('pg')

const pool = new Pool({
    host: '172.17.0.2',
    user: 'postgres',
    password: '40750160sdsd',
    database: 'firstapi',
    port: '5432'
});
    

const getUsers = async (req, res, next) => {
    const response = await pool.query('SELECT * FROM users')
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const createUser = async (req, res, next) => {
    const { name, email } = req.body

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
    console.log(response.fields)
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
}

const getUserById = async (req, res, next) => {
    const userId = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [userId])
    res.json(response.rows)
}

const deleteUser = async (req, res, next) => {
    const idToDelete = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id = $1', [idToDelete])
    console.log(response.rows)
    res.send(`User ${idToDelete} deleted`)
}

const updateUser = async (req, res, next) => {
    const idToUpdate = req.params.id
    const { name, email } = req.body
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, idToUpdate])
    res.json(`user ${idToUpdate} updated`)
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}