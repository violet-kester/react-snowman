import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("renders without crashing", function () {
  render(<Snowman images={[img0, img1, img2, img3, img4, img5, img6]}
    words={["apple"]}
    maxWrong={6}
  />);
});

it("matches snapshot", function () {
  const { container } = render(
    <Snowman images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );
  expect(container).toMatchSnapshot();
});

it("ends on game loss", function () {
  const { container } = render(
    <Snowman images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );

  // const buttons = container.querySelectorAll("button");
  const wrongBtn1 = container.querySelector("button[value='x']");
  const wrongBtn2 = container.querySelector("button[value='c']");
  const wrongBtn3 = container.querySelector("button[value='b']");
  const wrongBtn4 = container.querySelector("button[value='y']");
  const wrongBtn5 = container.querySelector("button[value='i']");
  const wrongBtn6 = container.querySelector("button[value='m']");
  const wrongBtn7 = container.querySelector("button[value='q']");

  fireEvent.click(wrongBtn1);
  fireEvent.click(wrongBtn2);
  fireEvent.click(wrongBtn3);
  fireEvent.click(wrongBtn4);
  fireEvent.click(wrongBtn5);
  fireEvent.click(wrongBtn6);
  fireEvent.click(wrongBtn7);

  // // make {maxWrong} number of wrong guesses
  // for (const i = 0; i < maxWrong + 1; i++) {
  //   for (const button of buttons) {
  //     if (words[0].indexOf(button.value) === -1) {
  //       fireEvent.click(button);
  //     }
  //   }
  // }

  expect(container.querySelector("#lossMsg")).toBeInTheDocument();
  expect(container.querySelector('img')).toBeInTheDocument();
});