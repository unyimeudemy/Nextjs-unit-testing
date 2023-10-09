import UserProfile from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

const userProfile = () => {
  return {
    username: "unyime",
    email: "unyime@gmail.com",
    displayName: "unyime udoh",
    isEmailVerified: null,
  };
};

describe("User profile", () => {
  it("should display text 'email verified' if email is verified", async () => {
    const userProfileVerified = { ...userProfile(), isEmailVerified: true };
    render(<UserProfile {...userProfileVerified} />);
    expect(screen.queryByText("Email not verified")).not.toBeInTheDocument();
    expect(await screen.findByText("Email verified")).toBeInTheDocument();
  });

  it("should display text 'Email not verified'  if email is not verified", async () => {
    const userProfileNotVerified = { ...userProfile(), isEmailVerified: false };
    render(<UserProfile {...userProfileNotVerified} />);
    expect(screen.queryByText("Email verified")).not.toBeInTheDocument();
    expect(await screen.findByText("Email not verified")).toBeInTheDocument();
  });

  it("should display name with three dots when name is longer than 25 letters", () => {
    const userProfileVerified = {
      ...userProfile(),
      displayName: "unyime udoh sljhajsjfoajodjfaoisjdoajsdojdfkosaj",
    };
    render(<UserProfile {...userProfileVerified} />);
    const displayName = screen.queryByTestId("display-name");
    const textContent = displayName.textContent;

    expect(textContent.endsWith("...")).toBe(true);
  });

  it("should display name without three dots when name is shorter than 25 letters", () => {
    const userProfileVerified = {
      ...userProfile(),
      displayName: "unyime udoh",
    };
    render(<UserProfile {...userProfileVerified} />);
    const displayName = screen.queryByTestId(/display-name/i);
    const textContent = displayName.textContent;

    expect(textContent.endsWith("...")).toBe(false);
  });
});
