const {Router} = require('express');
const router = Router();

usuarios =[
{
 'nombre':'juan esteban',
 'rol':'estudiante'
},

{
    'nombre':'Sonia Reteria',
    'rol':'coordinador'
   }

]
router.get('/usuarios', (req, res) => {res.json(usuarios)});

module.exports = router;