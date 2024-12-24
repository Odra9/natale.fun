class MyObj {
    constructor(ID, imgSrc, imgWidth, imgHeight) {
        this.position = [
            Math.floor(Math.random()*width), 
            Math.floor(Math.random()*height) 
        ];

        this.ID = ID;
        this.sprite = new Image();
        this.sprite.src = imgSrc;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
    }

    /*getCollider() {
        return [
            [this.position[0]-this.imgWidth/10, this.position[1]-this.imgHeight/10], 
            [this.position[0]+this.imgWidth/10, this.position[1]-this.imgHeight/10],
            [this.position[0]-this.imgWidth/10, this.position[1]+this.imgHeight/10], 
            [this.position[0]+this.imgWidth/10, this.position[1]+this.imgHeight/10]
        ]
    }*/

    setPos(pos) {
        this.position = pos;
        /* this.sprite.style = "left: " + (this.position[0]-this.imgWidth/2) +
                            "px; top: " + (this.position[1]-this.imgHeight/2) + 
                            "px; width: " + this.imgWidth +
                            "px; height: " + this.imgHeight + "px;"; */
    }

    getImgPosX() {
        return this.position[0] - (this.imgWidth/2);
    }
    getImgPosY() {
        return this.position[1] - (this.imgHeight/2);
    }
}

class MyObj2 extends MyObj {
    constructor(ID, imgSrc, imgWidth, imgHeight) {
        super(ID, imgSrc, imgWidth, imgHeight);

        let angle = Math.random()*2*Math.PI;
        this.direction = [Math.cos(angle), Math.sin(angle)];
        this.speed = (Math.ceil(Math.random()*5)) * 0.1;
        this.isAlive = true;
    }

    move(delta) {
        this.setPos([this.position[0] + delta*this.speed*this.direction[0], this.position[1] + delta*this.speed*this.direction[1]]);
    }
}

 
function checkCollision(obj1, obj2) {
    /*const square1 = obj1.getCollider();
    const square2 = obj2.getCollider();

    //check if a vertex of 1 in contained in 2
    for (vertex in square1) {
        if(vertex[0] > square2[0][0] && vertex[0] > square2[0][0])
    }*/

    let R = Math.max(obj1.imgWidth, obj2.imgWidth, obj1.imgHeight, obj2.imgHeight)/3;
    let distSqr = Math.pow((obj1.position[0] - obj2.position[0]), 2) + Math.pow((obj1.position[1] - obj2.position[1]), 2)

    return distSqr <= R*R;
}
