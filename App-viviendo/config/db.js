//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> wamp
let database = 'facuwebmaster'
let userMYSQL = 'root'
let passMySQL = ''
let hostMySQL = 'localhost'



const db = new Sequelize(database, userMYSQL, passMySQL, {
  host: hostMySQL,
  dialect: 'mysql',
  define: {
        //desactivamos el timestamp, para que no envie fechas de actualizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
    }
})

db.authenticate ()
.then ( ()=> {
  console.log('conectados')
})
.catch (err => {console.log ('no estamos conectados'+err)  })



module.exports = db;