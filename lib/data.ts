import { Plane, Stamp, Hotel, Map, ShieldCheck, Car, HeartHandshake, Users, BadgeCheck, Compass, Route } from 'lucide-react';

export const company = { name: 'Jaladhi Setu Travel', short: 'JST', tagline: 'Your Gateway to India and Beyond', phone: '+230 5960 8155', email: 'support@jstravelers.com', website: 'jstravelers.com', whatsapp: 'https://wa.me/23059608155' };

export const services = [
  { icon: Plane, title: 'Flight Tickets', desc: 'Domestic and international flight booking assistance with practical route guidance.', details: 'We help Mauritian travelers compare routes, plan connections, and secure flight options aligned with comfort, timing, and budget.' },
  { icon: Stamp, title: 'Visa Assistance', desc: 'Professional support throughout the visa application process.', details: 'Our team guides document preparation, application steps, timelines, and travel-readiness checks for Mauritius passport holders.' },
  { icon: Hotel, title: 'Hotel Reservations', desc: 'Accommodation options from trusted budget stays to luxury hotels.', details: 'We recommend hotels by location, comfort, safety, family needs, and itinerary convenience across India.' },
  { icon: Map, title: 'Tour Packages', desc: 'Customized travel experiences across India for families, groups, and first-time visitors.', details: 'Every route is tailored around pace, interests, sightseeing priorities, meals, and transport needs.' },
  { icon: ShieldCheck, title: 'Travel Insurance', desc: 'Travel with confidence and peace of mind.', details: 'Get guidance on suitable travel insurance options for medical emergencies, delays, and trip protection.' },
  { icon: Car, title: 'Airport Transfers', desc: 'Reliable transportation arrangements for smooth arrivals and departures.', details: 'We coordinate private transfers, intercity vehicles, and driver support for stress-free travel.' }
];

export const northDestinations = ['Delhi','Agra','Jaipur','Ayodhya','Varanasi','Haridwar','Rishikesh','Amritsar','Shimla','Manali','Kashmir','Nainital'];
export const southDestinations = ['Kerala','Munnar','Alleppey','Kochi','Ooty','Kodaikanal','Madurai','Rameswaram','Kanyakumari','Coimbatore'];
export const allDestinations = [{ region: 'North India', items: northDestinations }, { region: 'South India', items: southDestinations }];

export const packages = [
  { category: 'North India', title: 'North India Discovery', days: '15 Days', route: ['Delhi','Jaipur','Amritsar','Shimla','Manali','Kashmir','Nainital','Ayodhya'], inclusions: ['Flight tickets','Hotel accommodation','Daily breakfast','Private transport','Sightseeing'], highlights: ['Golden Triangle culture','Himalayan landscapes','Sacred Ayodhya','Kashmir valley experience'] },
  { category: 'South India', title: 'South India Experience', days: '10 to 14 Days', route: ['Kerala','Munnar','Alleppey','Kochi','Ooty','Kodaikanal','Madurai','Rameswaram'], inclusions: ['Hotel accommodation','Daily breakfast','Transfers','Sightseeing'], highlights: ['Backwaters and hill stations','Temple heritage','Tea gardens','Coastal leisure'] },
  { category: 'Pilgrimage Tours', title: 'Sacred India Pilgrimage', days: 'Custom Duration', route: ['Ayodhya','Varanasi','Haridwar','Rishikesh','Kedarnath','Badrinath','Rameswaram','Tirupati','Adiyogi'], inclusions: ['Temple route planning','Hotels','Transfers','Local support'], highlights: ['Spiritual routes','Senior-friendly pacing','Priority comfort planning'] },
  { category: 'Luxury Tours', title: 'Luxury India Escape', days: 'Custom Duration', route: ['Delhi','Jaipur','Udaipur','Kerala','Goa'], inclusions: ['Premium hotels','Private chauffeur','Curated dining','VIP experiences'], highlights: ['Luxury stays','Private touring','Signature experiences'] }
];

export const interestTours = [
  { title: 'Pilgrimage Tours', places: ['Ayodhya','Varanasi','Haridwar','Rishikesh','Kedarnath','Badrinath','Rameswaram','Tirupati','Adiyogi'] },
  { title: 'Hill Station Tours', places: ['Kashmir','Shimla','Manali','Nainital','Ooty','Munnar'] },
  { title: 'Leisure Tours', places: ['Kerala','Goa','Pondicherry'] }
];

export const trust = [
  { icon: HeartHandshake, title: 'Personalized Service', desc: 'Every trip is tailored to the traveler’s needs.' },
  { icon: Users, title: 'Mauritian Travel Specialists', desc: 'Focused on travelers from Mauritius.' },
  { icon: BadgeCheck, title: 'Trusted Travel Support', desc: 'Professional assistance from inquiry to return.' },
  { icon: Compass, title: 'India Travel Experts', desc: 'Deep destination knowledge and planning expertise.' },
  { icon: Route, title: 'End-to-End Planning', desc: 'Flights, hotels, visas, and tours in one place.' }
];

export const faqs = [
  ['How do I book a trip with JST?', 'Send an inquiry through any form, WhatsApp, phone, or email. Our team reviews your travel needs and prepares a personalized quote.'],
  ['Do you provide visa assistance for Mauritius passport holders?', 'Yes. JST supports Mauritius passport holders with guidance throughout the India visa application process.'],
  ['Can I customize my itinerary?', 'Yes. All packages can be personalized by duration, cities, hotel class, travel pace, and special interests.'],
  ['Do you arrange airport transfers in India?', 'Yes. We arrange airport pickup, drop-off, intercity transfers, and private transport options.'],
  ['Do you offer travel insurance?', 'Yes. We help travelers choose suitable travel insurance options for confidence and peace of mind.'],
  ['What destinations in India do you specialize in?', 'We specialize in North India, South India, pilgrimage circuits, hill stations, Kerala, Kashmir, and customized family/group tours.']
];

export const posts = [
  { category: 'Pilgrimage', title: 'Top Pilgrimage Destinations in India', excerpt: 'Plan a meaningful spiritual journey through India’s most respected sacred cities and temples.' },
  { category: 'Visa Tips', title: 'India Visa Tips for Mauritian Travelers', excerpt: 'Helpful guidance for documents, timing, and preparation before your India journey.' },
  { category: 'Season Guide', title: 'Best Time to Visit Kashmir', excerpt: 'Discover when to visit Kashmir for snow, gardens, scenery, and comfortable family travel.' }
];
