let canv = document.querySelector ("#myCanvas")
let ctx=canv.getContext("2d")

class personaje{
    constructor(x, y, angle, r){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.r = r;
    }
    dibujarse (){
        ctx.translate (this.x, this.y);
        ctx.rotate (this.angle*Math.PI/180);
        ctx.beginPath();
        ctx.arc (0, 0, this.r, 0, 2*Math.PI);
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (0, 0, this.r/2, 0.25*Math.PI, 0.75*Math.PI);
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI);
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();
        ctx.beginPath ();
        ctx.arc (15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();
        ctx.beginPath();
        ctx.moveTo(-5,0);
        ctx.lineTo(6,5);
        ctx.lineTo(-5,10);
        ctx.stroke();
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black";
        ctx.rotate (-this.angle*Math.PI/180);
        ctx.translate (-this.x, -this.y);
    }
}
let Nicolas = new personaje (200, 100, 0, 30)
Nicolas.dibujarse ();
let contenedor=document.querySelector("#contenedor")
contenedor.innerHTML="Haga click en el personaje para hacerlo desaparecer."

canv.addEventListener("click", function(e) {
    let XM=e.offsetX
    let YM=e.offsetY
    console.log(XM,YM)
    if((XM-Nicolas.x)**2+(YM-Nicolas.y)**2<=(Nicolas.r)**2){
        ctx.fillStyle="white"
        ctx.beginPath()
        ctx.rect(Nicolas.x-Nicolas.r,Nicolas.y-Nicolas.r,2.1*Nicolas.r,2.1*Nicolas.r)
        ctx.fill()
        ctx.fillStyle="black"
    }
}
)