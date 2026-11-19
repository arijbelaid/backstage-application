const certs = [
  'AWS Certified Cloud Practitioner',
  'Microsoft Azure Fundamentals (AZ-900)',
  'Certified Kubernetes Application Developer (CKAD)',
  'Docker Certified Associate',
];

export default function Certifications() {
  return (
    <section>
      <h3>Certifications</h3>
      <ul>
        {certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}