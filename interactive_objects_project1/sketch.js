//Original Code from Steve Hudak, amended portions by Jordan Akinlotan
let url = 'https://io.adafruit.com/api/v2/boyega/feeds/project1';
let counter = 0;

function setup() {
    createCanvas(255, 255);
}

function draw() {
    fill(255, 10);
    if (counter % 80 == 0) {
        getData();
    }
    counter++;
}

function getData() {
    let data;
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        //Edited Code
        if(data == 0){
        let resize = map(data, 1, 0, 25, 150);
        noStroke();
        fill(255, 0, 0);
        location.replace("https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt")
        console.log(data);
            }
        //End of Edited Code
    });
}