import { Direction } from "../types/direction";

class Robot {
    x: number;
    y: number;
    visited: Set<string>;
    position: string;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.visited = new Set();
      this.position = `{${x}: ${y}}`;
      this.visited.add(this.position);
    }
  
    move(direction: string, steps: number) {
      if (this.x < -100000 || this.x > 100000 || this.y < -100000 || this.y > 100000) {
        throw new Error('Invalid position');
      }
      if (steps < 0 || steps > 100000 || !Number.isInteger(steps)) {
        throw new Error('Invalid steps');
      }
      for (let i = 0; i < steps; i++) {
        switch (direction) {
            case Direction.NORTH:
                this.y += 1;
                break;
            case Direction.SOUTH:
                this.y -= 1;
                break;
            case Direction.EAST:
                this.x += 1;
                break;
            case Direction.WEST:
                this.x -= 1;
                break;
            default:
              throw new Error('Invalid direction');
                break;
        }
        this.position = `{${this.x}: ${this.y}}`;
        this.visited.add(this.position);
      }
    }

    getCleanedPlaces() {
        return this.visited.size;
      }
    }
  
  export default Robot;