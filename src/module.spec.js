const m = require("./module");

describe("EventEmitter", () => {
  it("should always update snapshot to now", () => {
    expect(m).toMatchSnapshot();
  });
});
