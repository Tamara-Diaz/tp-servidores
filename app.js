const express = require ("express");
const panth = require ("path");
const app = express();
let port = 3030;
//funciones
const crearpanth = (filename)=>panth.join(__dirname,`./views/${filename}.html`);

//configuraciones
app.use(express.static("public"))

//rutas
app.get(`/`,(rep,res)=>{
res.sendFile(panth.join(__dirname,"./views/index.html"))
});

app.get("/babbage",(rep,res)=>{
res.sendFile(crearpanth("babbage"))
})
app.get("/berners-lee",(rep,res)=>{
res.sendFile(crearpanth("berners-lee"))
})
app.get("/clarke",(rep,res)=>{
res.sendFile(crearpanth("clarke"))
})
app.get("/hamilton",(rep,res)=>{
res.sendFile(crearpanth("hamilton"))
})
app.get("/hopper",(rep,res)=>{
res.sendFile(crearpanth("hopper"))
})
app.get("/lovelace",(rep,res)=>{
res.sendFile(crearpanth("lovelace"))
})
app.get("/turing",(rep,res)=>{
res.sendFile(crearpanth("turing"))
})
//levantando servidor
app.listen (port,()=>
console.log(`http://localhost:${port}`));