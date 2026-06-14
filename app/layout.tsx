import type { Metadata } from 'next';
import './globals.css';
import { ExitIntent, FloatingWhatsApp, Footer, Header } from '@/components/site';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://jstravelers.com'),
  title: { default: 'Jaladhi Setu Travel | India Tours, Flights & Visa Assistance', template: '%s | Jaladhi Setu Travel' },
  description: 'Jaladhi Setu Travel helps Mauritian travelers plan India tours, flights, visa assistance, hotels, travel insurance, and personalized packages.',
  openGraph: { title: 'Jaladhi Setu Travel', description: 'Your Gateway to India and Beyond', url: 'https://jstravelers.com', siteName: 'Jaladhi Setu Travel', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { '@context': 'https://schema.org', '@type': 'TravelAgency', name: company.name, alternateName: company.short, url: 'https://jstravelers.com', telephone: company.phone, email: company.email, slogan: company.tagline, areaServed: ['Mauritius','India'], serviceType: ['Flights','Visa Assistance','Hotel Reservations','Tour Packages','Travel Insurance','Airport Transfers'] };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header/><main>{children}</main><Footer/><FloatingWhatsApp/><ExitIntent/></body></html>;
}
