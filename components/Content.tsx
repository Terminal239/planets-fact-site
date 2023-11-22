import Planet from "@/app/(planet)/[slug]/page";
import data from "@/data";
import Image from "next/image";

interface Props {
  name: string;
  data: {
    content: string;
    source: string;
  };
}

const Content = ({ name, data }: Props) => {
  return (
    <div className="content">
      <h2>{name}</h2>
      <p className="text">{data.content}</p>
      <p className="source">
        Source:
        <a className="source-link" href={data.source}>
          <span>Wikipedia</span> <Image src={"/icon-source.svg"} alt="source icon" width={16} height={16} />
        </a>
      </p>
    </div>
  );
};

export default Content;
