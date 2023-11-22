interface Props {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

const Statistics = ({ rotation, revolution, radius, temperature }: Props) => {
  return (
    <section className="statistics">
      <div className="item between">
        <h3>Rotation Time</h3>
        <p>{rotation}</p>
      </div>
      <div className="item between">
        <h3>Revolution Time</h3>
        <p>{revolution}</p>
      </div>
      <div className="item between">
        <h3>Radius</h3>
        <p>{radius}</p>
      </div>
      <div className="item between">
        <h3>Average temp.</h3>
        <p>{temperature}</p>
      </div>
    </section>
  );
};

export default Statistics;
