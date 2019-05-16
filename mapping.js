// spaces in parking lot

function ParkingSpace(top, left, width, height){
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;

    this.paint = () => {
        let parkingLot = document.getElementById("parkinglot");
        console.log(parkingLot)
        let parkingSpace = document.createElement('div');
        parkingSpace.setAttribute ("style", `position: absolute; top:${this.top}px;  left:${this.left}px; width:${this.width}px; height:${this.height}px; border:solid 1px red;`)
        parkingLot.appendChild(parkingSpace);
    }
}


function Intersection(top, left, turns){
    this.top = top;
    this.left = left;
    this.turns = turns;

    this.paint = () => {
        let parkingLot = document.getElementById("parkinglot");
        let intersection = document.createElement('div');
        intersection.setAttribute ("style", `position: absolute; top:${this.top}px;  left:${this.left}px; width:15px; height:15px; border-radius:50%; background-color:#333;`)
        parkingLot.appendChild(intersection);
    }
}

function Road(top, left, width, height, type){
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.type = type;

    this.paint = () => {
        let parkingLot = document.getElementById("parkinglot");
        let road = document.createElement('div');
        road.setAttribute ("style", `position: absolute; top:${this.top}px;  left:${this.left}px; width:10px; height:10px; border-radius:50%; background-color:purple;`)
        parkingLot.appendChild(road);
    }
}

// left/right rail width:125, height: 63

function createParkingLot(opening, numOfSpaces){
    let sideCounter = 16;
    let middleTopRailCounter = 314;
    let middleRailCounter = 250;

    for(i = 0; i < numOfSpaces; i++){
        if(opening === 'left'){
            new ParkingSpace(sideCounter, 15, 125, 63).paint();
            sideCounter = sideCounter + 63;

        } else if(opening === 'right'){
            new ParkingSpace(sideCounter, 670, 125, 63).paint();
            sideCounter = sideCounter + 63;

        } else if (opening === 'top'){
            new ParkingSpace(20, middleTopRailCounter, 63, 125).paint();
            middleTopRailCounter = middleTopRailCounter + 63;

        } else if (opening === 'middle'){
            new ParkingSpace(240, middleRailCounter, 63, 125).paint();
            middleRailCounter = middleRailCounter + 63;

        } else if (opening === 'bottom'){
            new ParkingSpace(465, middleRailCounter, 63, 125).paint();
            middleRailCounter = middleRailCounter + 63;

        } else {
            console.log("Need to pass in opening");
        }
    }
}

createParkingLot('left', 9)
createParkingLot('right', 8)
createParkingLot('top', 4)
createParkingLot('middle', 5)
createParkingLot('bottom', 5)


new Intersection(410, 190, ['north', 'south', 'east']).paint()
new Intersection(190, 190, ['north', 'south', 'east']).paint()
new Road(10, 190, 230, 230).paint()
new Intersection(410, 600, ['north', 'south', 'west']).paint()
new Intersection(190, 600, ['north', 'south', 'west']).paint()
new Road(10, 610, 230, 230).paint()