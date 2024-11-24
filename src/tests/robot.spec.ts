import type { Command, Request } from '../types/request';
import {
    test_data_set_1,
    test_data_set_1_result,
    test_data_set_2,
    test_data_set_2_result,
    test_data_set_3,
    test_data_set_3_result,
    test_data_set_4,
    test_data_set_4_result,
    test_data_set_5,
    test_data_set_5_result,
    test_data_set_6,
    test_data_set_6_result,
    test_data_set_7,
    test_data_set_7_result,
    test_data_set_8,
    test_data_set_8_result
} from './data';

import Robot from '../utils/robot';

describe('Robot', () => {
  it('test data 1 result should be 13', () => {
    const request = test_data_set_1 as Request;
    const robot = new Robot(request.start.x, request.start.y);
    request.commands.forEach((element: Command) => {
        robot.move(element.direction, element.steps);
    });
    const result = robot.getCleanedPlaces();
    expect(result).toBe(test_data_set_1_result);
  });

  it('test data 2 result should be 4', () => {
    const request = test_data_set_2 as Request;
    const robot = new Robot(request.start.x, request.start.y);
    request.commands.forEach((element: Command) => {
      robot.move(element.direction, element.steps);
    });
    const result = robot.getCleanedPlaces();
    expect(result).toBe(test_data_set_2_result);
  });

  it('test data 3 result should be 4', () => {
    const request = test_data_set_3 as Request;
    const robot = new Robot(request.start.x, request.start.y);
    request.commands.forEach((element: Command) => {
      robot.move(element.direction, element.steps);
    });
    const result = robot.getCleanedPlaces();
    expect(result).toBe(test_data_set_3_result);
  });

  it('test data 4 result should be 201', () => {
    const request = test_data_set_4 as Request;
    const robot = new Robot(request.start.x, request.start.y);
    request.commands.forEach((element: Command) => {
      robot.move(element.direction, element.steps);
    });
    const result = robot.getCleanedPlaces();
    expect(result).toBe(test_data_set_4_result);
  });

  it('test data 5 result should be 3', () => {
    const request = test_data_set_5 as Request;
    const robot = new Robot(request.start.x, request.start.y);
    request.commands.forEach((element: Command) => {
      robot.move(element.direction, element.steps);
    });
    const result = robot.getCleanedPlaces();
    expect(result).toBe(test_data_set_5_result);
  });

    it('test data 6 result should be 1', () => {
        const request = test_data_set_6 as Request;
        const robot = new Robot(request.start.x, request.start.y);
        request.commands.forEach((element: Command) => {
        robot.move(element.direction, element.steps);
        });
        const result = robot.getCleanedPlaces();
        expect(result).toBe(test_data_set_6_result);
    });

    it('test data 7 result should be 10000', () => {
        const request = test_data_set_7 as Request;
        const robot = new Robot(request.start.x, request.start.y);
        request.commands.forEach((element: Command) => {
        robot.move(element.direction, element.steps);
        });
        const result = robot.getCleanedPlaces();
        expect(result).toBe(test_data_set_7_result);
    });

    it('test data 8 result should be 21', () => {
        const request = test_data_set_8 as Request;
        const robot = new Robot(request.start.x, request.start.y);
        request.commands.forEach((element: Command) => {
        robot.move(element.direction, element.steps);
        });
        const result = robot.getCleanedPlaces();
        expect(result).toBe(test_data_set_8_result);
    });
});