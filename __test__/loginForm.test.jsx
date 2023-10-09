import { findByText, render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";
import { LoginForm } from "@/components/LoginForm";
import userEvent from "@testing-library/user-event";

describe("Login Form", () => {
  it("should enter username and password and click on login button", async () => {
    render(<LoginForm />);

    //checking if button is disable before typing in text
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();

    //typing in text to the input fields
    const userNameElement = screen.getByLabelText(/Username/);
    const passwordElement = screen.getByLabelText(/Password/);
    await userEvent.type(userNameElement, "unyime");
    await userEvent.type(passwordElement, "unyime");

    //checking if button is enabled after typing text
    expect(loginButton).toBeEnabled();

    //clicking the login button
    await userEvent.click(loginButton);

    //checking if the success message is displayed
    expect(
      await screen.findByText("Successfully logged in")
    ).toBeInTheDocument();
  });

  it("should try logging in user and display error message", async () => {
    server.use(
      rest.post("/api/auth", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    render(<LoginForm />);

    //checking if button is disable before typing in text
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeDisabled();

    //typing in text to the input fields
    const userNameElement = screen.getByLabelText(/Username/);
    const passwordElement = screen.getByLabelText(/Password/);
    await userEvent.type(userNameElement, "unyime");
    await userEvent.type(passwordElement, "unyime");

    //checking if button is enabled after typing text
    expect(loginButton).toBeEnabled();

    //clicking the login button
    await userEvent.click(loginButton);

    //checking if the success message is displayed
    expect(await screen.findByText("Error logging in")).toBeInTheDocument();
  });
});
