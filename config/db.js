const mysql=require("mysql")

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"data_mahasiswa",
})

db.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log("database sukses terkoneksi")
})

module.exports=db