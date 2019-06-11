var express = require ('express');
var router = express.Router();

var personasRoutes= require('./personas');
router.use('/personas', personasRoutes);

module.exports= router;
