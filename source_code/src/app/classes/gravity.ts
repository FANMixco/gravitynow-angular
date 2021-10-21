export enum WrongValues {
  Latitude,
  Everest,
  DeadSea
}

export class Gravity {
  public readonly EVEREST = 6168;
  public readonly DEAD_SEA = -427;
  private readonly FOOT = 3.2808399;

  public async getAltitude(lat:number, lng:number) {
    const response = await fetch(`https://elevation-api.io/api/elevation?points=(${lat},${lng})&key=iijkws66Y5FIa99ZoEpa56pb25v6mo`);
    const jsonResult = await response.json(); //extract JSON from the http response

    return jsonResult;
  }

  public GetGravity(lat : number, alt: number, isMap: boolean = true, isImperial:boolean =false):number {
    if (!isMap) {
      if (lat < -90 || lat > 90) {
        return WrongValues.Latitude;
      }
  
      let tmpEverest = this.EVEREST;
      let tmpDeadSea = this.DEAD_SEA;

      if (isImperial) {
        tmpEverest = this.ChangeToFeet(tmpEverest);
        tmpDeadSea = this.ChangeToFeet(tmpDeadSea)
      }
      
      if (alt > tmpEverest) {
        return WrongValues.Everest;
      }
      else if (alt < tmpDeadSea) {
        return WrongValues.DeadSea;
      }
    }

    let IGF = 9.780327 * (1 + 0.0053024 * Math.pow(Math.sin(lat), 2) - 0.0000058 * Math.pow(Math.sin(2 * lat), 2));

    let FAC = -3.086 * Math.pow(10, -6) * alt;

    let g = IGF + FAC;

    if (g < 9.7639 || g > 9.8337) {
        g = 9.798;
    }
    return isImperial ? this.ChangeToFeet(g) : g;
  }

  public ChangeToMetres(value : number) : number {
    return value / this.FOOT;
  }

  public ChangeToFeet(value : number) : number {
    return value * this.FOOT;
  }
}