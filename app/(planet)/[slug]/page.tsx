import Content from "@/components/Content";
import ContentTab from "@/components/ContentTab";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Statistics from "@/components/Statistics";
import Image from "next/image";

const Planet = () => {
  return (
    <main>
      <MaxWidthWrapper>
        <section className="information">
          <div className="planet-image">
            <Image src={"/planet-earth.svg"} alt="earth" width={0} height={0} style={{ width: "70%", height: "100%" }} />
          </div>
          <Content />
          <ContentTab />
        </section>
        <Statistics />
      </MaxWidthWrapper>
    </main>
  );
};

export default Planet;
