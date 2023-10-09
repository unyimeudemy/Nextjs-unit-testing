import { UserList } from "@/components/UserList";
import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("userList- rendering", () => {
  it("should not have the text 'there are no users'", () => {
    render(<UserList />);
    expect(screen.queryByText("There is not user")).not.toBeInTheDocument();
  });

  it("should have text 'unyime'", async () => {
    render(<UserList />);
    expect(await screen.findByText(/udoh/i)).toBeInTheDocument();
  });

  it("should have text 'emma'", async () => {
    render(<UserList />);
    server.use(
      rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.json([{ id: 4, name: "williams" }]));
      })
    );
    expect(await screen.findByText("williams")).toBeInTheDocument();
  });
});
