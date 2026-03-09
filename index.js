const express = require ("express");
const app = express();
const port = 3333;

//https://localhost:3333/users?nome=pasquale&cognome=andaloro
//https://localhost:3333/users/pasquale/andaloro

app.get("/users",(req,res) => {
const nome = req.query.nome;
const cognome = req.query.cognome;
console.log(`nome = ${nome} - cognome = ${cognome}`);
res.status(200).send("Ciao");
})

app.get("/users/:nome/:cognome",(req,res) => {
const nome = req.params.nome;
const cognome = req.params.cognome;
console.log(`nome = ${nome} - cognome = ${cognome}`);
res.status(200).send("Ciao");
})

//rotta in post

app.post("/users",(req,res) => {
const nome = req.body.nome;
const cognome = req.body.cognome;
console.log(`nome = ${nome} - cognome = ${cognome}`);
res.status(200).send("Ciao");
})

app.listen(port, () => {

console.log(`server listen on port ${port}`);

});

