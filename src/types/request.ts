import { Direction } from './direction';
export interface Start {
    x: number;
    y: number;
}

export interface Command {
    direction: string;
    steps: number;
}

export interface Request {
    start: Start;
    commands: Command[];
}