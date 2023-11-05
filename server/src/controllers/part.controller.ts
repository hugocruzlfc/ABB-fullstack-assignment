import { Request, Response } from "express";
import { faker } from "@faker-js/faker";
import { Part, Control, Feature } from "../types";

function createRandomControl(): Control {
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

function cerateRandomPart(): Part {
  const arrayLength = Math.floor(Math.random() * 5) + 1;
  const controlsArray = Array.from(
    { length: arrayLength },
    createRandomControl
  );
  const controlsArrayWithoutRepeatingItems = controlsArray.filter(
    (objeto, index, self) => {
      return (
        self.findIndex(
          (obj) =>
            obj.feature === objeto.feature &&
            obj.measuredParameter === objeto.measuredParameter
        ) === index
      );
    }
  );

  return {
    name: faker.helpers.arrayElement([
      "door",
      "engine",
      "gearbox",
      "wheel",
      "window",
    ]),
    controls: faker.helpers.arrayElement([controlsArrayWithoutRepeatingItems]),
  };
}

export const getPart = async (req: Request, res: Response) => {
  try {
    const part = cerateRandomPart();
    return res.status(200).json(part);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
