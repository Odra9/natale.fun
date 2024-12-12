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

    setPos(pos) {
        this.position = pos;
        this.sprite.style = "left: " + (this.position[0]-this.imgWidth/2) + "px; top: " + (this.position[1]-this.imgHeight/2) + "px;";
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
