import { statistics } from "../data/statistics";

function Statistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-grid">
        {statistics.map((stat) => (
          <div
            key={stat.id}
            className="stat-card"
          >
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;