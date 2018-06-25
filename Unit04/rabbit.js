/**
 * app.js
 * unit 04 lab
 * This program is a server-side JavaScript program that
 * simulates rabbit reproduction using Fibonacci sequence.
 * This project is adapted from text book example Listing 2-24 starveit.js on page 29.
 */
var http = require('http');

// function to calculate rabbit reproduction using fibonacci sequence
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

var server = http.createServer(function (request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        response.write('<h1>Rabbit Population Forecast</h1>')
        response.write('<div><iframe width="560" height="315" src="https://www.youtube.com/embed/koFsRrJgioA" frameborder="0" allowfullscreen></iframe></div>')
        response.write('<ul>');
        response.write('<li><a href="/1m">1 month population</a></li>');
        response.write('<li><a href="/10m">10 months population</a></li>');
        response.write('<li><a href="/30m">30 months population</a></li>');
        response.write('<li><a href="/44m">44 months population</a></li>');
        response.write('<li><a href="/55m">55 months population</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else if (request.method == 'GET' && request.url == '/1m') {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        console.time('1m_timer');
        response.write('<p style="color: red">Pairs of rabbits after 1 month is: ' + fibonacci(1) + '</p>');
        console.timeEnd('1m_timer')
        response.write('<h1>Rabbit Population Forecast</h1>')
        response.write('<div><iframe width="560" height="315" src="https://www.youtube.com/embed/koFsRrJgioA" frameborder="0" allowfullscreen></iframe></div>')
        response.write('<ul>');
        response.write('<li><a href="/1m">1 month population</a></li>');
        response.write('<li><a href="/10m">10 months population</a></li>');
        response.write('<li><a href="/30m">30 months population</a></li>');
        response.write('<li><a href="/44m">44 months population</a></li>');
        response.write('<li><a href="/55m">55 months population</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else if (request.method == 'GET' && request.url == '/10m') {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        console.time('10m_timer');
        response.write('<p style="color: red">Pairs of rabbits after 10 months is: ' + fibonacci(10) + '</p>');
        console.timeEnd('10m_timer');
        response.write('<h1>Rabbit Population Forecast</h1>')
        response.write('<div><iframe width="560" height="315" src="https://www.youtube.com/embed/koFsRrJgioA" frameborder="0" allowfullscreen></iframe></div>')
        response.write('<ul>');
        response.write('<li><a href="/1m">1 month population</a></li>');
        response.write('<li><a href="/10m">10 months population</a></li>');
        response.write('<li><a href="/30m">30 months population</a></li>');
        response.write('<li><a href="/44m">44 months population</a></li>');
        response.write('<li><a href="/55m">55 months population</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else if (request.method == 'GET' && request.url == '/30m') {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        console.time('30m_timer');
        response.write('<p style="color: red">Pairs of rabbits after 30 months is: ' + fibonacci(30) + '</p>');
        console.timeEnd('30m_timer');
        response.write('<h1>Rabbit Population Forecast</h1>')
        response.write('<div><iframe width="560" height="315" src="https://www.youtube.com/embed/koFsRrJgioA" frameborder="0" allowfullscreen></iframe></div>')
        response.write('<ul>');
        response.write('<li><a href="/1m">1 month population</a></li>');
        response.write('<li><a href="/10m">10 months population</a></li>');
        response.write('<li><a href="/30m">30 months population</a></li>');
        response.write('<li><a href="/44m">44 months population</a></li>');
        response.write('<li><a href="/55m">55 months population</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else if (request.method == 'GET' && request.url == '/44m') {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        console.time('44m_timer');
        response.write('<p style="color: red">Pairs of rabbits after 44 months is: ' + fibonacci(44) + '</p>');
        console.timeEnd('44m_timer');
        response.write('<h1>Rabbit Population Forecast</h1>')
        response.write('<div><iframe width="560" height="315" src="https://www.youtube.com/embed/koFsRrJgioA" frameborder="0" allowfullscreen></iframe></div>')
        response.write('<ul>');
        response.write('<li><a href="/1m">1 month population</a></li>');
        response.write('<li><a href="/10m">10 months population</a></li>');
        response.write('<li><a href="/30m">30 months population</a></li>');
        response.write('<li><a href="/44m">44 months population</a></li>');
        response.write('<li><a href="/55m">55 months population</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else if (request.method == 'GET' && request.url == '/55m') {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        console.time('55m_timer');
        response.write('<p style="color: red">Pairs of rabbits after 55 months is: ' + fibonacci(55) + '</p>');
        console.timeEnd('55m_timer');
        response.write('<h1>Rabbit Population Forecast</h1>')
        response.write('<div><iframe width="560" height="315" src="https://www.youtube.com/embed/koFsRrJgioA" frameborder="0" allowfullscreen></iframe></div>')
        response.write('<ul>');
        response.write('<li><a href="/1m">1 month population</a></li>');
        response.write('<li><a href="/10m">10 months population</a></li>');
        response.write('<li><a href="/30m">30 months population</a></li>');
        response.write('<li><a href="/44m">44 months population</a></li>');
        response.write('<li><a href="/55m">55 months population</a></li>');
        response.write('</ul>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else {
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><title>Rabbit Population Forcast</title></head>');
        response.write('<body>');
        response.write('<h1>Error: invalid request!</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }
});
server.listen(3333);
console.log("Server is running at http://localhost:3333");
