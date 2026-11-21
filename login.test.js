
const { login } = require("./login");

describe("Login Function", () => {
    test("Login successfully with correct username and password", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Login failed with incorrect password", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Login failed with incorrect username", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Login failed with empty username", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Login failed with empty password", () => {
        expect(login("admin", "")).toBe(false);
    });
});
