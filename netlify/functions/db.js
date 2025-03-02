const mysql = require('mysql2/promise');

exports.handler = async (event, context) => {
    const connection = await mysql.createConnection({
        host: process.env.mysql.railway.internal,
        user: process.env.root,
        password: process.env.jPfAWXnyWXACEHzSKWtjtJpoPDekYyLK,
        database: process.env.railway,
    });

    const [rows] = await connection.execute('SELECT * FROM users');
    await connection.end();

    return {
        statusCode: 200,
        body: JSON.stringify(rows),
    };
};
