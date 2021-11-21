const express = require('express');
const app = express();

const mockData = {
    fio: 'Т******* Н***** В************',
    birthDate: '18.08.1995',
    documentNumber: '45** ***102',
    covidNum: '9230 0000 3264 1797',
    expireDate: '06.08.2022'
}

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("gosuslugi", {...req.query});
});

app.listen(3000)
