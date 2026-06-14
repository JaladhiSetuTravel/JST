import { BlogPreview, ContactSection, DestinationCards, FAQ, Hero, InterestTours, PackageCards, SectionTitle, ServicesGrid, Testimonials, TrustGrid } from '@/components/site';

export default function Home(){ return <>
  <Hero/>
  <section className="section"><div className="container"><SectionTitle eyebrow="What we arrange" title="Complete travel services for India and beyond"/><ServicesGrid/></div></section>
  <section className="section bg-mist"><div className="container"><SectionTitle eyebrow="Popular destinations" title="India’s most loved places for Mauritian travelers"/><DestinationCards/></div></section>
  <section className="section"><div className="container"><SectionTitle eyebrow="Featured packages" title="Signature routes designed for comfort and discovery"/><PackageCards/></div></section>
  <section className="section bg-mist"><div className="container"><SectionTitle eyebrow="Special interest tours" title="Travel around what matters to you"/><InterestTours/></div></section>
  <section className="section"><div className="container"><SectionTitle eyebrow="Why choose JST" title="Trusted planning from inquiry to return"/><TrustGrid/></div></section>
  <section className="section bg-mist"><div className="container"><SectionTitle eyebrow="Testimonials" title="Travelers trust Jaladhi Setu Travel"/><Testimonials/></div></section>
  <section className="section"><div className="container"><SectionTitle eyebrow="FAQ" title="Questions before your India trip"/><FAQ/></div></section>
  <section className="section bg-mist"><div className="container"><SectionTitle eyebrow="Travel guide" title="Helpful reads for planning better"/><BlogPreview/></div></section>
  <ContactSection/>
</> }
