//import
import http from "http";

//logica do servidor
const servidor = http.createServer((req, res ) => {
//headers

res.setHeader("content-type", "text/html; charset=utf-8");

//logica body de rotas
if(req.url === "/"){

    res.end("Página Inicial");

}else if(req.url === "/livros"){

    res.end("Página de livros");

}else if (req.url === "/usuarios"){

    res.end("Páginas de usuários")
}else  {
    
    res.end(" Erro 404: Página não encontrada")
}

});

//saber se o servidor está rodando
servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});