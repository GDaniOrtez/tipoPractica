var express = require('express');
var router = express.Router();

var personaCollecction =[];

var personaStruct= {
    id:0,
    nombre:'',
    correo:'',
    telefono:'',
    nota:''

}

router.get('/', (req,res, next)=>{
res.status(403).json({msg:"not implemented"});
});

router.get('/:id', (req,res,nect)=>{
    res.status(403).json({msg:"not implemented"});
})//get one by id

router.post('/', (req,res,next)=>{
    res.status(403).json({msg:"not implemented"});
});

router.put('/:id', (req,res,next)=>{
    res.status(403).json({msg:"not implemented"});
});

router.delete('/:id', (req,res,next)=>{
    res.status(403).json({msg:"not implemented"});
});


module.exports= router;