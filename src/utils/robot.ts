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