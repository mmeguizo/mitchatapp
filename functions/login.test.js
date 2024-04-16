// login.test.js

import { login, signup } from './login'; // import the login and signup functions

describe('login function', () => {
 
test("login",async  () => {
    expect( await login("tester", "testertester")).toBe(undefined);
})


test("login error", async() => {
    const mockAlertLogin = jest.fn();
    global.alert = mockAlertLogin;
  await  login("testerx", "testertesterx")
    expect(mockAlertLogin)
})

test("signup return a login functions", async () => {
    const mockAlert = jest.fn();
    global.alert = mockAlert; // Mock the global alert function
   await signup("tester", "testertester");
    expect(mockAlert).toHaveBeenCalledTimes(1); // Assert that the mock alert was called
})
});

