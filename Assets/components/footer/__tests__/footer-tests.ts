import { Footer } from "../";

it("has text", () => {
  expect(new Footer("a-footer").text).toEqual("a-footer");
});
