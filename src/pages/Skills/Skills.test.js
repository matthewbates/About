import { render, screen } from "@testing-library/react";
import Skills from "./index";
import userEvent from "@testing-library/user-event";

// initial conditions
describe("Headers are rendered on the screen", () => {
  test("Initial conditions", () => {
    render(<Skills />);
    const skillsHeader = screen.getByRole("");
    expect(skillsHeader).toHaveTextContent(/skills/i);
    const languagesHeader = screen.getByRole("");
    expect(languagesHeader).toHaveTextContent(/programming languages/i);
    const technicalHeader = screen.getByRole("");
    expect(technicalHeader).toHaveTextContent(/technical tools/i);
    const markupHeader = screen.getByRole("");
    expect(markupHeader).toHaveTextContent(/markup and frameworks/i);
  });

  test("User can hover over the icon and display the title", () => {
    
  })
});
