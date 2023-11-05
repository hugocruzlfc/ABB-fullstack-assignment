import { faker } from "@faker-js/faker";
import { Part } from "../types";
import { createRandomControl } from "./createRandomControl";

export function cerateRandomPart(): Part {
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
    _id: faker.string.uuid(),
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
