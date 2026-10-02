//import
import http from "http";

//criar o servidor 
const servidor = http.createServer((req, res )=> {
//headers
res.writeHead(200, {"content-type": "text/html; charset=utf-8"});

//body
res.end(JSON.stringify({mensagem: "A minha primeira API com node.js"}));

//Demonstra que é método que está sendo utilizado
console.log(req.method);

});

//saber se o servidor está rodando
servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});