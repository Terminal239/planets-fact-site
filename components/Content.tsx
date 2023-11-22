import Image from "next/image";

const Content = () => {
  return (
    <div className="content">
      <h2>Earth</h2>
      <p className="text">
        Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from
        the Sun, physical properties and geological history have allowed life to evolve and thrive.
      </p>
      <p className="source">
        Source:
        <a className="source-link" href="https://en.wikipedia.org/wiki/Earth">
          <span>Wikipedia</span> <Image src={"/icon-source.svg"} alt="source icon" width={16} height={16} />
        </a>
      </p>
    </div>
  );
};

export default Content;
