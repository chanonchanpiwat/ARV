enum Status {
  On = 'ON',
  Off = 'OFF',
  Blue = 'BLUE',
}

export const isAllBlue = (bulbsIdx: number[]): number => {
  let countAllBlue = 0;
  let currentlyTurnOn = 0;
  const bulbs = Array(bulbsIdx.length).fill(Status.Off);

  for (const e of bulbsIdx) {
    currentlyTurnOn += 1;
    bulbs[e - 1] = Status.On;

    const currentIdx = e - 1;

    const prev = currentIdx - 1 >= 0 ? currentIdx - 1 : null;
    let future = currentIdx + 1 <= bulbsIdx.length - 1 ? currentIdx + 1 : null;

    if (prev == null || bulbs[prev] == Status.Blue) {
      currentlyTurnOn -= 1;
      bulbs[e - 1] = Status.Blue;

      while (
        future !== null &&
        future <= bulbsIdx.length - 1 &&
        bulbs[future] == Status.On
      ) {
        currentlyTurnOn -= 1;
        bulbs[future] = Status.Blue;
        future += 1;
      }

      if (currentlyTurnOn == 0) {
        countAllBlue += 1;
      }
    }
  }

  return countAllBlue;
};
