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

  const wrongVals = ['x', 'i', 'c', 'b', 'm', 'q', 'd']

  for(let i=0; i<wrongVals.length -1; i++) {
    const wrongBtn = container.querySelector(`button[value='${wrongVals[i]}']`)
    fireEvent.click(wrongBtn);
  }
  //TODO: set expectation that buttons exist prior
  //to last guess and removed once the game is over
  expect(container.querySelector('.Snowman-msg')).toBeInTheDocument();
  expect(container.querySelector('img')).toBeInTheDocument();
});