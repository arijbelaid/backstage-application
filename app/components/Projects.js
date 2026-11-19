const projects = [
  { name: 'Plateforme Backstage', desc: 'Portail développeur avec templates et CI/CD automatisé.' },
  { name: 'Pipeline Docker', desc: 'Build, push Docker Hub et déploiement avec Docker Compose.' },
  { name: 'Infrastructure Cloud', desc: 'Déploiement Kubernetes et automatisation cloud.' },
];

export default function Projects() {
  return (
    <section>
      <h3>Projets DevOps & Cloud</h3>
      {projects.map((p) => (
        <div className="card" key={p.name}>
          <strong>{p.name}</strong>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}