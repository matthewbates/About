import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Skills from "./index";

// write a test that validates hover effects for skills icons
test("Icons responds to hover", async () => {
  const user = userEvent.setup();
  render(<Skills />);

  // popover starts out hidden
  const iconLabel = screen.getByRole("image", { name: /icon/i });
  expect(iconLabel).not.toBeInTheDocument();

  
});
