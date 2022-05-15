//models/user/createTable.js
 
function createTable(db){
    let sql = `CREATE TABLE users(
        userid TEXT, 
        title TEXT,
        password TEXT,
        email TEXT,
        role TEXT,
        thumb TEXT,
        info TEXT,
        video TEXT,
        date TEXT
        )`
 
    db.run(sql)
}
 
export default createTable