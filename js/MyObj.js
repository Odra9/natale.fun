class MyObj {
    constructor(ID, imgSrc, imgWidth, imgHeight, div) {
        this.position = [0, 0];

        this.div = div;
        this.ID = ID;
        this.sprite = document.createElement("img");
        this.sprite.className = "sprite";
        this.sprite.src = imgSrc;
        this.sprite.id = div.id + "#" + this.ID;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.div.append(this.sprite);
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
        this.sprite.style = "left: " + (this.position[0]-this.imgWidth/2) +
                            "px; top: " + (this.position[1]-this.imgHeight/2) + 
                            "px; width: " + this.imgWidth +
                            "px; height: " + this.imgHeight + "px;";
    }
}

class MyObj2 extends MyObj {
    constructor(ID, imgSrc, imgWidth, imgHeight, div) {
        super(ID, imgSrc, imgWidth, imgHeight, div);
        this.direction = null;
    }

    move() {
        this.setPos([this.position[0] + this.speed*this.direction[0], this.position[1] + this.speed*this.direction[1]]);
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