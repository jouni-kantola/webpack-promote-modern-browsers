import pause from "../";

it("can pause", async () => {
  expect(await pause(0)).toEqual(true);
});
