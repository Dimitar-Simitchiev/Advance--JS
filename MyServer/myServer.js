const http=require('http');
const homePage=`<!DOCTYPE html>
<html lang="en">
<head>
   
<body>
    <h1>Home</h1>
    <p>Hello world!</p>
</body>
</html>`;
const aboutPage=`<!DOCTYPE html>
<html lang="en">
<head>
   
<body>
    <h1>About Us</h1>
    <p>Information</p>
</body>
</html>`;
const server=http.createServer((request,response)=>{
    const url=new URL(request.url,`http://${request.headers.host}`);
    if (url.pathname=='/') {
        response.write(homePage);
        response.end();
    }else if (url.pathname=='/about') {
        response.write(aboutPage);
        response.end();
    }else{
        response.statusCode=404;
        response.write('Not Found')
        response.end();
    }
    
})
server.listen(3000);
