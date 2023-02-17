http.createserver ((reques, response)=>{
response.write("este es mi host");
return response.end

if (reques.url === '/home'){
    const read = fs.createreadStream("ruta_del_html");
    read.pipe(response);
    return response.end;
}

response.write('hello word');
response.end

if (reques.url === '/'){
    response.write('inicio de proyecto');
    return response.end
}
}) .listen(port, host, ()=>{
    console.log('server is running on http://${host};${port}')
});




