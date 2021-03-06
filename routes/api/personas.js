var express = require('express');
var router = express.Router();
var uuid= require('uuid/V4');

var personaCollection =[];

var personaStruct= {
    id:0,
    nombre:'',
    correo:'',
    telefono:'',
    nota:''

}

personaCollection.push(
Object.assign(
    {},
    personaStruct,
    {id:uuid(),
     nombre: 'Genesis Ortez',
     correo:'genesis@hotmail.com',
     telefono:'12345678',
     nota:'lola'
    }
  )
);

router.get('/', (req,res, next)=>{
res.status(200).json(personaCollection);
});

router.get('/:id', (req,res,nect)=>{
    if(!this.report.params.id) return next();
    var id = req.params.id;
    var persona = persona.personaCollection.filter((e, i)=>{
        return (e.id === id);
    });
    
    if (persona.length > 0){
        res.status(200).json(persona[0]);
    }
    else{
        res.status(404).json({});
    }
})//get one by id

router.post('/', (req,res,next)=>{
    var newPersona = Object.assign(
        {},
        personaStruct,
        {id:uuid()},
        req.body
    );
    personaCollection.push(newPersona)
    res.status(403).json(newPersona);
});

router.put('/:id', (req,res,next)=>{
    var id = req.params.id;
    var modifiedPersona = {};
    var originalPersona = {};
    personaCollection = personaCollection.map((e, i)=>{
        if(e.id===id){
            originalPersona = Object.assign({}, e);
            return modifiedPersona =Object.assign({}, e, req.body);
        }
        return e;
    });
    res.status(200).json({o: originalPersona, m: modifiedPersona});
});

router.delete('/:id', (req,res,next)=>{
    var id = req.params.id;
    var deletedPersona = {};
    personaCollection = personaCollection.filter((e, i)=>{
        if(e.id===id){
            deletedPersona = Object.assign({}, e)
            return false;
        }
        return true;
    });
    res.status(200).json({d: deletedPersona, c: PersonaCollection});
});


module.exports= router;