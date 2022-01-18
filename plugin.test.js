const { plugin } = require("./plugin");
class ServerMock {
  constructor() {
    this.extensions = {};
    this.methods = {};
  }
  ext(name, func) {
    this.extensions[name] = func;
  }
  method(name, func) {
    this.methods[name] = func;
  }
}
describe("i18n", () => {
  let server;
  const handler = { continue: jest.fn() };
  beforeAll(async () => {
    server = new ServerMock();
    await plugin.register(server);
  });
  it("can translate using request t function", () => {
    const request = {};
    server.extensions["onPreHandler"](request, handler);
    expect(request.i18n).not.toBeNull();
    expect(request.t("test")).toEqual("test");
  });
});
