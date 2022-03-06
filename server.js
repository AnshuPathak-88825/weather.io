
const fs = require("fs");

const requests = require("requests");
const indexfile = fs.readFileSync('index.html', 'utf-8');
const http = require("http");
const replacing=(indexfile,val)=>{
    
let temperature=indexfile.replace("temperatureofcity",val.main.temp);
console.log(temperature);

}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f6d0b8198a1971dc9b4840f6a65b738d").on("data", (chunk) => {
            const obj = JSON.parse(chunk);
            const arrdata = [obj];
            const realtimedata = arrdata.map((val) => {
                replacing(indexfile, val);
                console.log(val);

            });



        })
            .on("end", (err) => {
                if (err) {
                    return console.log("Error ", err);
                }
                console.log("end");
            })

    }

})
server.listen(8000, () => {
    console.log("Helo");
})