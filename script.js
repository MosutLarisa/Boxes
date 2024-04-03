const box1 = { x: 10, y: 10, latura: 50, culoare: 'red', numar: 1 };

function setup() {
    createCanvas(600, 400);
    textSize(15); 
    textAlign(CENTER, CENTER);
}

function draw() {
    background("gray");
    fill(box1.culoare);
    rect(box1.x, box1.y, box1.latura, box1.latura);
    fill("black"); 
    text(box1.numar, box1.x + box1.latura / 2, box1.y + box1.latura / 2);

}