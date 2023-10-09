import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("home page rendering", () => {
  describe("rendering", () => {
    it("should have home page text", () => {
      render(<Home />);
      expect(screen.getByText("Home page")).toBeInTheDocument();
    });

    it("should have button with text click me", () => {
      render(<Home />);
      expect(screen.getByRole("button", { name: "click me" }));
    });

    it("should have an input field with the label random text", () => {
      render(<Home />);
      expect(
        screen.getByRole("textbox", { name: "Input a random text" })
      ).toBeInTheDocument();
    });

    it("should have an input field with the label random text", () => {
      render(<Home />);
      expect(screen.getByLabelText(/Input a random Text/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText("randomText")).toBeInTheDocument();
    });

    it("should have an input with value 'test value'", () => {
      render(<Home />);
      expect(screen.getByDisplayValue(/test value/i)).toBeInTheDocument();
    });

    it("should not find element with text: Display this sometimes", () => {
      render(<Home />);
      expect(
        screen.queryByText("Display this sometimes")
      ).not.toBeInTheDocument();
    });

    it("should display user profile details", () => {
      render(<Home />);
      const profile = screen.queryByTestId("user-profile");
      console.log("kkkkkkkk", profile);
      expect(profile).toBeInTheDocument();
    });
  });

  describe("behaviour", () => {
    it("should click on show text button to find new text", async () => {
      const user = userEvent.setup();
      render(<Home />);

      expect(
        screen.queryByText("Display this sometimes")
      ).not.toBeInTheDocument();

      const showTextButton = screen.getByRole("button", { name: "show text" });
      await user.click(showTextButton);
      // expect(screen.getByText("Display this sometimes")).toBeInTheDocument();
      expect(
        await screen.findByText("Display this sometimes", {}, { timeout: 3000 })
      ).toBeInTheDocument();
    });
  });
});
