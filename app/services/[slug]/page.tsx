import { notFound } from 'next/navigation';

const data: any = {
  'web-design-development': {
    title: 'Web Design & Development',
    bullets: ['Next.js sites', 'CMS / Admin', 'SEO ready', 'Fast & responsive']
  },
  'mobile-apps-development': {
    title: 'Mobile Apps Development',
    bullets: ['React Native', 'Play Store & App Store', 'Offline support', 'Analytics']
  },
  'ui-ux': {
    title: 'UI/UX',
    bullets: ['Wireframes', 'Prototypes', 'Design systems', 'User testing']
  },
  'graphics-design': {
    title: 'Graphics Design',
    bullets: ['Logos', 'Brand kits', 'Marketing assets', 'Pitch decks']
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    bullets: ['SEO', 'SEM', 'Social media', 'Content']
  },
  'cyber-security': {
    title: 'Cyber Security',
    bullets: ['Security audits', 'Hardening', 'Training', 'Incident response']
  }
};

export default function ServiceDetail({ params }: { params: { slug: string } }){
  const svc = data[params.slug];
  if(!svc) return notFound();
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl font-bold">{svc.title}</h1>
        <ul className="mt-6 grid md:grid-cols-2 gap-3">
          {svc.bullets.map((b:string)=> <li key={b} className="card">{b}</li>)}
        </ul>
      </div>
    </section>
  )
}
