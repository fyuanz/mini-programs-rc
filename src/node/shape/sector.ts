import Shape from './shape';

class Sector extends Shape {
  [x: string]: any;

  constructor(r: number, from: number, to: number, option: any) {
    super();

    this.option = option || {};
    this.r = r;
    this.from = from;
    this.to = to;
  }

  draw() {
    this.beginPath()
      .moveTo(0, 0)
      .arc(0, 0, this.r, this.from, this.to)
      .closePath()
      .fillStyle(this.option.fillStyle)
      .fill()
      .strokeStyle(this.option.strokeStyle)
      .lineWidth(this.option.lineWidth)
      .stroke();
  }
}

export default Sector;
