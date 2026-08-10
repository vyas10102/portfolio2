import { publications } from "../data/publications";

function Publications() {
  return (
    <section className="section" id="publications">
      <div className="section-heading">
        <p className="eyebrow">
          Academic Work
        </p>

        <h2>
          Research & Publications
        </h2>
      </div>

      <div className="publication-list">
        {publications.map((publication) => (
          <article
            className="publication-card"
            key={publication.id}
          >
            <span className="publication-year">
              {publication.year}
            </span>

            <div>
              <h3>
                {publication.title}
              </h3>

              <h4>
                {publication.publisher}
              </h4>

              <p>
                {publication.description}
              </p>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;