const express= require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(3000, () => {
    console.log(`listening on port ${app.get('port')}`);
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/rutas'));

