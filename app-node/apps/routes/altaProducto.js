const express = require('express')
const router = express.Router()

let title = "Alta de Inmuebles"
let year = new Date().getFullYear();

router.get('/',function(request,response){
    response.render('form-altaProd.hbs',{title,year})
})

//Cargar productos
const tablaInmuebles = require('../models/tablaInmuebles')

router.post('/', async (req,res) => {
    const newProd = {
        id:0,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen,
        ubicacion: req.body.ubicacion,
        categoria: req.body.categoria,
    }
    console.log(newProd)
    //ojo el orden de los campos -> ver la tabla antes
    try {
        const cargarProd = await tablaInmuebles.create({
            id: newProd.id,
            nombre:newProd.nombre,
            descripcion:newProd.descripcion,
            imagen:newProd.imagen,
            precio:newProd.precio,
            ubicacion:newProd.ubicacion,
            categoria:newProd.categoria
        })    
        //console.log(cargarProd)
    
        res.render("form-altaProd.hbs",{title,year,alta:true})
        
    } catch (error) {
        console.log("Error en el alta "+error)
        res.render("form-altaProd.hbs",{data,year,alta:false,error})
    }
})

module.exports = router;