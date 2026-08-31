export const siteConfig = {
  companyName: 'Houston Solutions',
  tagline: 'Reliable Home Services. Quality Work. One Solution.',
  phone: '713-234-0556',
  phoneHref: 'tel:+17132340556',
  email: 'email@solutionshouston.com',
  location: 'Houston, Texas',
  hours: 'Mon-Fri 9:00am to 5:00pm',
  serviceAreas: ['Houston','Spring','The Woodlands','Cypress','Tomball','Katy','Humble','Conroe','Magnolia'],
  nav: [
    ['Home','/'],['Services','/services'],['Projects','/projects'],['About Us','/about'],['Service Areas','/service-areas'],['Contact','/contact']
  ] as const
};

export type Service = {
  slug: string; name: string; short: string; title: string; intro: string; items: string[]; faq: [string,string][];
};

const faqBase: [string,string][] = [
  ['How do I request an estimate?','Use the estimate form and tell us about the property, service needed, and project details. Photos can also be included.'],
  ['Do you work on rental properties?','Yes. Houston Solutions serves homeowners, landlords, investors, agents, and property managers.'],
  ['What areas do you serve?','We serve Houston and surrounding communities including Spring, The Woodlands, Cypress, Tomball, Katy, Humble, Conroe, and Magnolia.'],
  ['Can I send photos of my project?','Yes. The estimate request form allows multiple project photos to help us understand the scope.']
];

export const services: Service[] = [
  ['tree-removal','Tree Removal','Safe, professional removal of unwanted, damaged, or hazardous trees.','Tree Removal Services in Houston, TX','Keep your property safer and cleaner with professional tree removal and cleanup services.',['Tree removal','Emergency tree removal','Storm-damaged trees','Tree cleanup','Debris removal','Related trimming'],faqBase],
  ['tree-trimming','Tree Trimming','Routine trimming and cleanup to improve safety, appearance, and clearance.','Tree Trimming Services in Houston, TX','Maintain tree health, clearance, and curb appeal with careful trimming and cleanup.',['Tree trimming','Branch removal','Canopy cleanup','Clearance trimming','Storm cleanup'],faqBase],
  ['concrete','Concrete Work','Driveways, sidewalks, patios, slabs, walkways, and concrete repairs.','Concrete Services in Houston, TX','Durable concrete solutions for residential properties and outdoor improvements.',['Driveways','Sidewalks','Patios','Slabs','Walkways','Concrete repairs'],faqBase],
  ['remodeling','Home Remodeling','Interior improvements and practical upgrades for residential properties.','Home Remodeling in Houston, TX','Improve function, comfort, and appearance with coordinated residential remodeling services.',['General remodeling','Flooring','Interior improvements','Drywall','Painting','Repairs'],faqBase],
  ['kitchen-remodeling','Kitchen Remodeling','Kitchen upgrades ranging from finishes to broader renovations.','Kitchen Remodeling in Houston, TX','Refresh or transform your kitchen with practical, coordinated improvement services.',['Cabinet updates','Countertops','Backsplashes','Painting','Flooring','Fixture updates'],faqBase],
  ['bathroom-remodeling','Bathroom Remodeling','Bathroom repairs, finishes, fixtures, and renovation work.','Bathroom Remodeling in Houston, TX','Upgrade worn or outdated bathrooms with clean, functional improvements.',['Vanities','Tile','Painting','Fixtures','Drywall repair','General improvements'],faqBase],
  ['painting','Painting','Interior and exterior painting for homes and rental properties.','Painting Services in Houston, TX','Refresh your property with professional painting and surface preparation.',['Interior painting','Exterior painting','Touch-ups','Rental turns','Trim and doors'],faqBase],
  ['drywall','Drywall Repair','Patches, repairs, finishing, and wall restoration.','Drywall Repair in Houston, TX','Repair damaged drywall and restore smooth, paint-ready surfaces.',['Patching','Hole repair','Crack repair','Texture matching','Finishing'],faqBase],
  ['plumbing','Plumbing','General residential plumbing repairs and improvement support.','Residential Plumbing Services in Houston, TX','Address common residential plumbing repair and project needs.',['Fixture replacement','Minor repairs','Remodel support','Leak-related repairs'],faqBase],
  ['electrical','Electrical','General residential electrical repairs and improvement support.','Residential Electrical Services in Houston, TX','Support home repairs and improvements with practical residential electrical services.',['Fixture updates','Switches and outlets','Remodel support','General repairs'],faqBase],
  ['property-maintenance','Property Maintenance','Ongoing repair, upkeep, turnover, and punch-list support.','Property Maintenance in Houston, TX','One reliable resource for recurring repairs and property improvement needs.',['Punch lists','Rental turns','General repairs','Exterior cleanup','Preventive maintenance'],faqBase],
  ['junk-removal','Junk & Debris Removal','Property cleanup, renovation debris, and unwanted item removal.','Junk & Debris Removal in Houston, TX','Clear unwanted materials and project debris from residential properties.',['Renovation debris','Property cleanup','Yard debris','Unwanted items','Move-out cleanup'],faqBase]
].map(([slug,name,short,title,intro,items,faq]) => ({slug,name,short,title,intro,items,faq})) as Service[];
