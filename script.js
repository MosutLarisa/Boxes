const box1 = { x: 10, y: 10, latura: 50, culoare: 'red', numar: 1 };
const box2 = { x: 70, y: 10, latura: 50, culoare: 'pink', numar: 2 };
const box3 = { x: 130, y: 10, latura: 50, culoare: 'blue', numar: 3 };
const box4 = { x: 190, y: 10, latura: 50, culoare: 'brown', numar: 4 };
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

    fill(box2.culoare);
    rect(box2.x, box2.y, box2.latura, box2.latura);
    fill("black");
    text(box2.numar, box2.x + box2.latura / 2, box2.y + box2.latura / 2);

    fill(box3.culoare);
    rect(box3.x, box3.y, box3.latura, box3.latura);
    fill("black"); 
    text(box3.numar, box3.x + box3.latura / 2, box3.y + box3.latura / 2);

    fill(box4.culoare);
    rect(box4.x, box4.y, box4.latura, box4.latura);
    fill("black"); 
    text(box4.numar, box4.x + box4.latura / 2, box4.y + box4.latura / 2);

}