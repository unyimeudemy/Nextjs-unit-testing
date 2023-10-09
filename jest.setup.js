import "whatwg-fetch";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

// Start the server before your tests
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

// Stop the server after your tests
afterAll(() => {
  server.close();
});
