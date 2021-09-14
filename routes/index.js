const express = require('express');
const router = express.Router();

//home
router.get('/',(req,res)=>{
    res.send({response: 'running...'}).status(200);
})
//ingreso de datos
router.post('/new_kiss',(req,res)=>{
    res.send('aun no disponible');
})

router.post('/new_test', (req,res) =>{
    res.send('aun no disponible');
})
module.exports = router;
