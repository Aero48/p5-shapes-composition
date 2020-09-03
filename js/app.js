function setup() {

    createCanvas(800,600);

    //Setting up color palette variables

    //Diamond
    let a = "#08B3E5";
    let b = "#0FBED8";
    let c = "#14C9CB";
    let d = "#1BD7BB";
    let e = "#22E4AC";
    let f = "#2AF598";

    //Ring
    let g = "#909090"

    //Background
    let back = "#0745B7"


    //setting the line thickness and background color
    strokeWeight(1);
    background(back);


    //Outer Circle
    fill(g);
    circle(400,560,300);

    //Inner Circle
    fill(back);
    circle(400,560,260);


    //Bottom portion of the diamond
    triangle(400,350,200,150,600,150);
    fill(a);
    triangle(400,350,200,150,250,150);
    fill(b);
    triangle(400,350,250,150,325,150);
    fill(c);
    triangle(400,350,325,150,400,150);
    fill(d);
    triangle(400,350,400,150,475,150);
    fill(c);
    triangle(400,350,475,150,550,150);
    fill(b);
    triangle(400,350,550,150,600,150);
    
    //Lower triangles on the top portion
    triangle(200,150,240,110,250,150);
    fill(c);
    triangle(250,150,292,110,325,150);
    fill(d);
    triangle(325,150,363,110,400,150);
    fill(e);
    triangle(400,150,437,110,475,150);
    fill(d);
    triangle(475,150,508,110,550,150);
    fill(c);
    triangle(550,150,560,110,600,150);

    //Upper triangles on the top portion
    fill(d);
    triangle(240,110,292,110,250,150);
    fill(e);
    triangle(292,110,363,110,325,150);
    fill(f);
    triangle(363,110,437,110,400,150);
    triangle(437,110,508,110,475,150);
    fill(e);
    triangle(508,110,560,110,550,150);


    //Ring Connector
    fill(g);
    quad(325,325,475,325,525,260,275,260);
}