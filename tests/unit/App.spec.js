import { render, fireEvent, screen } from "@testing-library/vue";
import App from "../../src/App";

describe("Drag & Drop", () => {
  it("should sort", async () => {
    render(App);
    const dragElement = screen.getByTestId("Jean");
    const dropZone = screen.getByTestId("John");

    await fireEvent.dragStart(dragElement);
    await fireEvent.dragEnter(dropZone);
    await fireEvent.drop(dropZone);
    await fireEvent.dragLeave(dropZone);
    await fireEvent.dragEnd(dragElement);

    screen.debug();
  });
});
