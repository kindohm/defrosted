import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import Home from "./page";
import * as statusModule from "@/getDefrostedStatus";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedExpect = expect as any;

jest.mock("@/getDefrostedStatus");

const mockGetDefrostedStatus =
  statusModule.getDefrostedStatus as jest.MockedFunction<
    typeof statusModule.getDefrostedStatus
  >;

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Defrosted component when status is defrosted", () => {
    mockGetDefrostedStatus.mockReturnValue("defrosted");

    render(<Home />);

    typedExpect(screen.getByText("Yes")).toBeInTheDocument();
    typedExpect(
      screen.getByText("Mariah Carey is currently defrosted.")
    ).toBeInTheDocument();
  });

  it("should render Frozen component when status is frozen", () => {
    mockGetDefrostedStatus.mockReturnValue("frozen");

    render(<Home />);

    typedExpect(screen.getByText("No")).toBeInTheDocument();
    typedExpect(
      screen.getByText("Mariah Carey is currently frozen.")
    ).toBeInTheDocument();
  });

  it("should render Peak component when status is hot", () => {
    mockGetDefrostedStatus.mockReturnValue("hot");

    render(<Home />);

    typedExpect(screen.getByText("Yes")).toBeInTheDocument();
    typedExpect(
      screen.getByText("Mariah Carey has reached peak temperature.")
    ).toBeInTheDocument();
  });

  it("should render Unknown component when status is unknown", () => {
    mockGetDefrostedStatus.mockReturnValue("unknown");

    render(<Home />);

    typedExpect(screen.getByText("Unknown")).toBeInTheDocument();
    typedExpect(screen.getByText("We don't know.")).toBeInTheDocument();
  });

  it("should render the page title", () => {
    mockGetDefrostedStatus.mockReturnValue("defrosted");

    render(<Home />);

    typedExpect(
      screen.getByText("Is Mariah Carey defrosted?")
    ).toBeInTheDocument();
  });
});
