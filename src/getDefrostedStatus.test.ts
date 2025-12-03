import { describe, it, expect } from "@jest/globals";
import { getDefrostedStatus } from "./getDefrostedStatus";

describe("getDefrostedStatus", () => {
  const year = 2000;

  it("should return hot on Dec 31 of prev year", () => {
    const now = new Date(year - 1, 11, 31);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("hot");
  });

  it("should return frozen on Jan 1", () => {
    const now = new Date(year, 0, 1);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("frozen");
  });

  it("should return frozen on October 31", () => {
    const now = new Date(year, 9, 31);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("frozen");
  });

  it("should return defrosted on November 1", () => {
    const now = new Date(year, 10, 1);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("defrosted");
  });

  it("should return defrosted on Thanksgiving 2000", () => {
    const now = new Date(year, 10, 23);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("defrosted");
  });

  it("should return hot the day after Thanksgiving 2000", () => {
    const now = new Date(year, 10, 24);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("hot");
  });

  it("should return hot on new years eve", () => {
    const now = new Date(year, 11, 31);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("hot");
  });

  it("should return frozen on next new years day", () => {
    const now = new Date(year + 1, 0, 1);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("frozen");
  });

  it("should return frozen on 2026-01-01", () => {
    const now = new Date(2026, 0, 1);
    const result = getDefrostedStatus(now);
    expect(result).toEqual("frozen");
  });
});
