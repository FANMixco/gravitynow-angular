export class CelestialObjects{
    private celestialObjectsArray=[];

    constructor(){
        this.celestialObjectsArray = [
            {value:0,name:"Sun", gravity: 274, CelestialObjectTypes:"Star",selected:""},
            {value:1,name:"Mercury", gravity: 3.7, CelestialObjectTypes:"Planet",selected:""},
            {value:2,name:"Venus", gravity: 8.87, CelestialObjectTypes:"Planet",selected:""},
            {value:3,name:"Earth", gravity: 9.798, CelestialObjectTypes:"Planet",selected:"selected"},
            {value:4,name:"Moon", gravity: 1.62, CelestialObjectTypes:"Moon",selected:""},
            {value:5,name:"Mars", gravity: 3.71, CelestialObjectTypes:"Planet",selected:""},
            {value:6,name:"Jupiter", gravity: 24.92, CelestialObjectTypes:"Planet",selected:""},
            {value:7,name:"Titan", gravity: 1.352, CelestialObjectTypes:"Moon",selected:""},
            {value:8,name:"Saturn", gravity: 10.44, CelestialObjectTypes:"Planet",selected:""},
            {value:9,name:"Uranus", gravity: 8.69, CelestialObjectTypes:"Planet",selected:""},
            {value:10,name:"Neptune", gravity: 11.15, CelestialObjectTypes:"Planet",selected:""},
            {value:11,name:"Pluto", gravity: 0.58, CelestialObjectTypes:"Dwarf planet",selected:""}
          ];
    }

    comparedGravity(id1:number, id2:number):number{
        let gravity1 = this.celestialObjectsArray[id1].gravity;
        let gravity2 = this.celestialObjectsArray[id2].gravity;

        if (gravity1 > gravity2)
            return 0;
        else if (gravity1 < gravity2)
            return 1;
        else
            return 2;
    }

    percentageGravity(id1:number, id2:number):number{
        let result = this.comparedGravity(id1, id2);

        let gravity1 = this.celestialObjectsArray[id1].gravity;
        let gravity2 = this.celestialObjectsArray[id2].gravity;

        if (result == 0)
            return (gravity1 * 100) / gravity2;
        else if (result == 1)
            return (gravity2 * 100) / gravity1;
        else
            return 1;
    }

    getGravity(id:number):number{
        return this.celestialObjectsArray[id].gravity;
    }

    celestialObjectType(id:number){
        return this.celestialObjectsArray[id].CelestialObjectTypes;
    }

    getCelestialObjects(){
        return this.celestialObjectsArray;
    }
}