const express = require('express');
const app = express();

app.use(express.json());


app.get('/alunos', (req, res) => {
    console.log(req.query)
    console.log('entrou alunos'); 
    res.status(200).send('Deu certo');
})

app.get('/alunos/:id', (req, res) => {
    console.log(req.params.id)
    console.log('entrou alunos'); 
    res.status(200).send('Deu certo');
})

app.post('/alunos', (req, res) =>{
    console.log(req.body)
    console.log('post alunos')
    res.status(200).send('Deu certo')
})

app.put('/alunos/:id', (req, res) =>{
    console.log(req.params.id)
    console.log('put alunos')
    res.status(200).send('Deu certo')
})



app.listen(3000, () => {
    console.log('Iniciado o servidor');
});
