import Link from 'next/link';

const services = [
  { title: 'Web Design & Development', slug: 'web-design-development', summary: 'Modern websites with Next.js & SEO.' },
  { title: 'Mobile Apps Development', slug: 'mobile-apps-development', summary: 'Cross-platform apps that scale.' },
  { title: 'UI/UX', slug: 'ui-ux', summary: 'Usable and delightful interfaces.' },
  { title: 'Graphics Design', slug: 'graphics-design', summary: 'Logos, branding & assets.' },
  { title: 'Digital Marketing', slug: 'digital-marketing', summary: 'SEO, ads, social growth.' },
  { title: 'Cyber Security', slug: 'cyber-security', summary: 'Audits, hardening & training.' },
];

export default function ServicesPage(){
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <Link href={`/services/${s.slug}`} key={s.slug} className="card block">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{s.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
