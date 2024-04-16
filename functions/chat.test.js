import { sendNewMessage } from "./chat"; // import the login and signup functions

describe("send a message function", () => {
  let index = "2024-04-16T10:27:48.598Z";
  const message = "tester";
  test("send a message", async () => {
    const mockSendMessage = jest.fn();
    global.alert = mockSendMessage;
    await sendNewMessage(message, index);
    expect(mockSendMessage);
  });
});
