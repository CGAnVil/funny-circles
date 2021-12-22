class Circle {
    _x;
    _y;
    _radius;
    constructor(x,y,radius) {
        this._x = x
        this._y = y
        this._radius = radius
    }
    get x(){
        return this._x
    }
    get y(){
        return this._y
    }
    get radius(){
        return this._radius
    }

    set x(x){
        this._x = x
    }
    set y(y){
        this._y = y
    }set radius(radius){
        this._radius = radius
    }
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createCircle(){
    let ctx = document.getElementById('myCanvas').getContext('2d')
    let circle = new Circle()
    circle.x = Math.random() * window.innerWidth;
    circle.y = Math.random() * window.innerHeight;
    circle.radius = Math.floor(Math.random() * 80)

    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0 , 2*Math.PI)

    let color = getRandomColor()
    ctx.fillStyle = color
    ctx.fill()
}

function multiplyCircle(times){
    for (i=0; i<times;i++){
        createCircle()
    }
}