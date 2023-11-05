import { faker } from "@faker-js/faker";
import { Control } from "../types";

export function createRandomControl(): Control {
  const expectedIdealSize = faker.number.float({
    min: 0,
    max: 100,
    precision: 0.01,
  });
  const realSize = faker.number.float({ min: 0, max: 100, precision: 0.01 });
  const tolerance = faker.number.float({ min: 0, max: 100, precision: 0.01 });
  const dev = expectedIdealSize - realSize;
  return {
    feature: faker.helpers.arrayElement(["seam", "slot", "hole"]),
    measuredParameter: faker.helpers.arrayElement([
      "length",
      "position",
      "diameter",
    ]),
    expectedIdealSize,
    realSize,
    tolerance,
    dev,
    devOutTolerance: tolerance - dev,
  };
}
