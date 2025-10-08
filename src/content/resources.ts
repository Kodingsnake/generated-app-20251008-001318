export interface Resource {
  id: string;
  title: string;
  organization: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  county: string;
}
export const rehomingResources: Resource[] = [
  {
    id: 'rehome-1',
    title: 'Maryland SPCA',
    organization: 'Maryland SPCA',
    address: '3300 Falls Rd, Baltimore, MD 21211',
    phone: '(410) 235-8826',
    website: 'https://www.mdspca.org/',
    description: 'A leading animal welfare organization in Maryland, offering comprehensive adoption and rehoming services. They provide care for thousands of animals each year and have a robust foster network.',
    county: 'Baltimore City',
  },
  {
    id: 'rehome-2',
    title: 'BARCS Animal Shelter',
    organization: 'Baltimore Animal Rescue and Care Shelter (BARCS)',
    address: '2490 Giles Rd, Baltimore, MD 21225',
    phone: '(410) 396-4695',
    website: 'https://www.barcs.org/',
    description: 'The largest companion animal shelter in Maryland, taking in over 10,000 animals annually. BARCS offers surrender prevention programs and rehoming assistance.',
    county: 'Baltimore City',
  },
  {
    id: 'rehome-3',
    title: 'Humane Society of Baltimore County',
    organization: 'Humane Society of Baltimore County',
    address: '1601 Nicodemus Rd, Reisterstown, MD 21136',
    phone: '(410) 833-8848',
    website: 'https://www.bmorehumane.org/',
    description: 'A private, non-profit organization dedicated to protecting and caring for animals. They offer adoption services and resources for pet owners facing difficult decisions.',
    county: 'Baltimore County',
  },
  {
    id: 'rehome-4',
    title: 'Montgomery County Animal Services',
    organization: 'MCASAC',
    address: '7315 Muncaster Mill Rd, Derwood, MD 20855',
    phone: '(240) 773-5900',
    website: 'https://www.montgomerycountymd.gov/animalservices/',
    description: 'The county\'s official animal shelter, providing adoption, foster care, and lost & found services for Montgomery County residents.',
    county: 'Montgomery County',
  },
];
export const spayNeuterServices: Resource[] = [
  {
    id: 'spay-1',
    title: 'MD SPCA Spay/Neuter Clinic',
    organization: 'Maryland SPCA',
    address: '3300 Falls Rd, Baltimore, MD 21211',
    phone: '(410) 235-8826 ext. 2',
    website: 'https://www.mdspca.org/community-programs/spay-neuter-2024/',
    description: 'Offers high-quality, low-cost spay and neuter surgeries to the public. Their goal is to reduce pet overpopulation in the Baltimore area. Appointments are required.',
    county: 'Baltimore City',
  },
  {
    id: 'spay-2',
    title: 'BARCS Spay/Neuter Services',
    organization: 'BARCS',
    address: '2490 Giles Rd, Baltimore, MD 21225',
    phone: '(410) 396-4695',
    website: 'https://www.barcs.org/spay',
    description: 'Provides affordable spay/neuter services for owned pets and community cats through their clinic. They aim to make these essential services accessible to all.',
    county: 'Baltimore City',
  },
  {
    id: 'spay-3',
    title: 'Spay Now Animal Surgery Clinic',
    organization: 'Spay Now, Inc.',
    address: '7401 Van Dusen Rd, Laurel, MD 20707',
    phone: '(301) 483-7080',
    website: 'https://spaynow.com/',
    description: 'A non-profit organization focused on providing low-cost, high-volume spay and neuter surgeries. They serve pet owners, rescue groups, and municipal shelters across Maryland.',
    county: 'Prince George\'s County',
  },
  {
    id: 'spay-4',
    title: 'Rude Ranch Spay Spa & Neuter Nook',
    organization: 'Rude Ranch Animal Rescue',
    address: '1251 W Central Ave, Davidsonville, MD 21035',
    phone: '(410) 798-5560',
    website: 'https://ruderanch.org/what-we-do/clinic/',
    description: 'A state-of-the-art facility dedicated to providing subsidized spay/neuter surgeries for cats and dogs, helping to combat pet overpopulation in Anne Arundel County and beyond.',
    county: 'Anne Arundel County',
  },
  {
    id: 'spay-5',
    title: 'Howard County Animal Control Clinic',
    organization: 'Howard County Animal Control',
    address: '8576 Davis Rd, Columbia, MD 21045',
    phone: '(410) 313-2780',
    website: 'https://www.howardcountymd.gov/police/animal-control',
    description: 'Offers low-cost spay/neuter services for residents of Howard County, helping to ensure pets are healthy and to control the local animal population.',
    county: 'Howard County',
  },
];