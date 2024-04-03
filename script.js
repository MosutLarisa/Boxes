const boxes = [];
for (let i = 0; i < 28; i++) {
    const x = 10 + 70 * (i % 7);
    const y = 10 + 70 * Math.floor(i / 7);
    boxes.push({ x, y, latura: 60, nr: i + 1 });
}

function setup() {
    createCanvas(600, 400);
    textSize(20); 
    textAlign(CENTER, CENTER);

    for (let box of boxes) {
        box.culoare = color(random(255), random(255), random(255));
    }
}

function draw() {
    background("gray");
    for (let box of boxes) {
        fill(box.culoare);
        rect(box.x, box.y, box.latura, box.latura);
        fill("black"); 
        text(box.nr, box.x + box.latura / 2, box.y + box.latura / 2);
    }
}