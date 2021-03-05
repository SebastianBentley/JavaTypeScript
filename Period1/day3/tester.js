const { getSecureRandoms } = require("./exercise1");


function withPromise() {
    return getSecureRandoms().then(res => {
        console.log(res)
        return res
    })
}
async function withAsync() {
    const result = await getSecureRandoms([48, 40, 32, 24, 16, 8, 4, 2]);
    return result
}


const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/api/securerandoms') {
        res.setHeader('Content-Type', 'application/json');
        //Return a response with OS-info, using the code implemented in part-a
        const obj = {
            title: "6 Secure Randoms",
            randoms: []
        }

        withAsync().then(result => result.filter(r => obj.randoms.push({ length: r.length / 2, random: r })))
            .then(() => {
                res.write(JSON.stringify(obj, null, 2))
                return res.end();
            })

    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/securerandoms</code></p>
    `);
        return res.end();
    }
});

server.listen(3000);
console.log('listening on 3000...'); 
