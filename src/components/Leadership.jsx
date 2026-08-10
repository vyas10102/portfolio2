import { activities } from "../data/leadership";

function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="section-heading">
        <p className="eyebrow">Beyond Engineering</p>
        <h2>Leadership & Activities</h2>
      </div>

      <div className="leadership-grid">
        {activities.map((activity) => (
          <article
            className="leadership-card"
            key={activity.id}
          >
            <span className="leadership-year">
              {activity.year}
            </span>

            <h3>{activity.title}</h3>

            <h4>{activity.role}</h4>

            <p>{activity.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Leadership;