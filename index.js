const express = require('express');
const app = express();

app.use(express.json());

const users = []

app.get('/alunos', (req, res) => {
    console.log(req.query)
    console.log('entrou alunos'); 
    res.status(200).send({users: users});
})

app.get('/alunos/:id', (req, res) => {
    const alunoId = req.params.id
    
    res.status(200).send(users.find(x => x.id == alunoId));
})

app.post('/alunos', (req, res) =>{
    console.log(req.body)
    users.push(req.body)
    console.log('post alunos')
    res.status(200).send(req.body)
})

app.put('/alunos/:id', (req, res) =>{
    console.log(req.params.id)
    console.log('put alunos')
    res.status(200).send('Deu certo')
})



app.listen(3000, () => {
    console.log('Iniciado o servidor');
});
