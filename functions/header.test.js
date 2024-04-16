// login.test.js

import { signout } from './header'; // import the login and signup functions

describe('signout function',  () => {
 
test("signout",async () => {
    await  expect(  signout()).toBe(undefined);
})
});


