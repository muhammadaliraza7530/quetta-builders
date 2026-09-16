export const CONTACT = {
  phoneDisplay: "+92 332 1503141",
  phoneHref: "tel:+923321503141",
  whatsapp: "https://wa.me/923321503141",
  email: "info@quettabuilders.com",
  address:
    "Plaza No.43, MCB Bank's Basement, Dolphin Chowk, C Junction Commercial, Phase 8, Bahria Town, Rawalpindi",
};

export const SHOWREEL = {
  video: "/videos/showreel.mp4",
  poster: "/images/showreel-poster.jpg",
};

export const GALLERY = [
  { src: "/images/gallery-1.jpg", caption: "Drawing lounge · ceiling & wall panelling" },
  { src: "/images/gallery-2.jpg", caption: "Master bedroom · gold inlay headboard" },
  { src: "/images/gallery-3.jpg", caption: "Bedroom · wardrobes in polished veneer" },
  { src: "/images/gallery-4.jpg", caption: "Modular kitchen · marble & tall units" },
  { src: "/images/gallery-6.jpg", caption: "Bedroom · wood and brass detailing" },
  { src: "/images/gallery-7.jpg", caption: "Bedroom suite · cove lighting" },
  { src: "/images/carousel-05.jpeg", caption: "Master bedroom · arched backlit panels" },
  { src: "/images/carousel-06.jpeg", caption: "Feature wall · hand-painted foliage art" },
  { src: "/images/carousel-07.jpeg", caption: "Entrance console · brass mirror panelling" },
  { src: "/images/carousel-08.jpeg", caption: "Double-height lounge · herringbone wall" },
  { src: "/images/carousel-09.jpeg", caption: "Family lounge · full white scheme" },
  { src: "/images/carousel-10.jpeg", caption: "Foyer · curved cove light & fluted console" },
  { src: "/images/carousel-11.jpeg", caption: "Textured 3D wall · triangular light wash" },
  { src: "/images/carousel-12.jpeg", caption: "Arched seating lounge · lantern lighting" },
];

export const IMAGES = {
  banner: "/images/home-banner.png",
  slider1: "/images/slider-1.jpg",
  slider2: "/images/slider-2.jpg",
  whoWeAre: "/images/who-we-are.png",
  aboutUs: "/images/about-us.jpg",
  standards: "/images/working-standards.webp",
  contactSide: "/images/contact-side.jpg",
  quettaIcon: "/images/quetta-icon.png",
  quettaIcon2: "/images/quetta-icon-2.png",
  residential: "/images/residential-10-marla.jpg",
  residentialCommercial: "/images/residential-commercial.jpg",
  interior1: "/images/interior-1.jpg",
  interior2: "/images/interior-2.jpg",
};

export const PARTNERS = [
  { src: "/images/partners/cda.png", name: "Capital Development Authority" },
  { src: "/images/partners/rda.png", name: "Rawalpindi Development Authority" },
  { src: "/images/partners/bahria.png", name: "Bahria Town" },
  { src: "/images/partners/dha-isb.png", name: "DHA Islamabad / Rawalpindi" },
  { src: "/images/partners/dha-lhr.png", name: "DHA Lahore" },
  { src: "/images/partners/ichs.png", name: "ICHS Town" },
];

export const SERVICES = [
  {
    slug: "buying-selling",
    title: "Property Acquisition & Disposal",
    scope: "Residential / Commercial",
    summary:
      "Plot, house and commercial transactions handled end to end — file verification, rate benchmarking, negotiation, transfer and possession, with every document checked before money moves.",
    points: [
      {
        title: "Verified files only",
        text: "Before a deal is presented to you we confirm the file with the society office, check dues, NOC status, dimension and category, and flag any litigation or transfer restriction. Nothing is recommended on a broker's word alone.",
      },
      {
        title: "Rate benchmarking",
        text: "We price against recorded transactions in the same block and category rather than asking rates, so you know the realistic buying and exit value before you negotiate.",
      },
      {
        title: "Transfer handled for you",
        text: "Transfer letters, dues clearance, society transfer appointment, mutation and possession paperwork are completed by our own documentation desk and handed over as a complete file.",
      },
    ],
    image: IMAGES.residentialCommercial,
  },
  {
    slug: "consultancy",
    title: "Investment & Feasibility Consultancy",
    scope: "Advisory",
    summary:
      "Independent advice on where to place capital in the twin cities — development status, absorption, holding period and expected yield studied before a single recommendation is made.",
    points: [
      {
        title: "Society-level analysis",
        text: "Approvals, master-plan progress, utility installation and handover history are reviewed society by society, because two files at the same price rarely carry the same risk.",
      },
      {
        title: "Costed feasibility",
        text: "For build-to-sell and build-to-rent plans we prepare a cost sheet covering land, grey structure, finishing, utilities and society charges against a realistic sale or rental value.",
      },
      {
        title: "Risk and exit planning",
        text: "We set out the holding period, likely resale window and the conditions that would erode your return, so you enter a position knowing how and when you can leave it.",
      },
    ],
    image: IMAGES.interior2,
  },
  {
    slug: "construction",
    title: "Turnkey Construction & Contracting",
    scope: "Residential / Commercial",
    summary:
      "Grey structure and turnkey construction delivered by our own engineers and site teams — engineered drawings, tested materials, staged quality checks and a documented handover.",
    points: [
      {
        title: "Engineering & drawings",
        text: "Architectural, structural and MEP drawings are prepared and approved from the relevant authority before excavation, so layout, load paths and services are settled on paper first.",
      },
      {
        title: "Specified materials",
        text: "Steel, cement, blocks, plumbing and electrical items are procured to an agreed specification sheet with brand and grade named in the contract — substitution only with your written approval.",
      },
      {
        title: "Supervised execution",
        text: "Excavation, DPC, framing, slab casting, curing, masonry, plaster, tiling and finishing are each checked against the schedule, with progress photographs and billing tied to completed stages.",
      },
      {
        title: "Safety & site discipline",
        text: "Scaffolding, edge protection, electrical isolation and material stacking follow a written site routine, keeping labour, neighbours and the structure protected throughout the build.",
      },
    ],
    image: IMAGES.quettaIcon,
  },
  {
    slug: "rental",
    title: "Rentals & Property Management",
    scope: "Residential / Commercial",
    summary:
      "Tenant sourcing, screening, agreements and ongoing upkeep for owners who want dependable income without handling the day-to-day running of the property.",
    points: [
      {
        title: "Screened tenants",
        text: "Identity, employment or business verification and references are checked before a tenant is placed, and every tenancy is executed on a properly drafted, registered agreement.",
      },
      {
        title: "Rent & renewals managed",
        text: "Collection, annual increments, renewals and exit settlements are tracked on your behalf, with condition inspections at handover and at vacation.",
      },
      {
        title: "Maintenance under control",
        text: "Repairs, utility issues and society matters are handled by our maintenance team at agreed rates, keeping the asset in lettable condition between tenancies.",
      },
    ],
    image: IMAGES.interior1,
  },
];

export const PROJECTS = [
  {
    name: "Quetta Icon",
    status: "Completed",
    kind: "Commercial",
    location: "Business District, Bahria Town Phase 8, Rawalpindi",
    tagline: "A world of unrivalled luxury, convenience, and elegance!",
    intro:
      "Quetta Icon is our completed commercial development in the business district of Bahria Town Phase 8, Rawalpindi. The building was executed on an earthquake-resistant RCC frame with a planned service core, dedicated parking and a unit mix that suits offices, showrooms and serviced apartments alike. Finishes were specified for commercial wear — marble and porcelain flooring, imported sanitary ware, tinted aluminium glazing and solid timber joinery — and every unit was metered, wired and handed over ready for fit-out.",
    image: IMAGES.quettaIcon,
    apartmentFacilities: [
      "All bedrooms with attached bathrooms",
      "High-quality tiles / marble flooring",
      "Imported bathroom fittings",
      "High-quality aluminium windows with tinted glass",
      "High-quality kitchen with granite / marble countertop",
      "Built-in UPS wiring facility",
      "Built-in TV and telephone wiring",
      "Doors of solid Dayar / imported wood",
      "Separate electricity meter for every apartment",
    ],
    communalFacilities: [
      "Ideal location",
      "Earthquake resistant structure",
      "High-speed passenger lift 24/7",
      "Firefighting equipment",
      "Garbage collection",
      "Close to the shopping centre & mosque",
      "Car parking",
      "Boulevard",
      "Corner",
    ],
  },
  {
    name: "Quetta Icon 2",
    status: "Upcoming",
    kind: "Commercial + Residential",
    location: "Bahria Central Business District, Rawalpindi",
    tagline: "Reimagining the luxurious living lifestyle.",
    intro:
      "Quetta Icon 2 is our upcoming mixed-use tower in the Bahria Central Business District, Rawalpindi — a retail mall on the lower floors with grand offices and luxury apartments above, rising ground plus seven on a boulevard corner plot. The scheme has been planned around structured parking, a redundant power and water supply, fire detection and suppression, high-speed lifts and a facade detailed for long-term durability rather than short-term appearance.",
    image: IMAGES.quettaIcon2,
    highlights: [
      "World class mall / shops",
      "Luxury apartments",
      "Ground plus seven",
      "Grand offices",
    ],
  },
  {
    name: "Residential Villa",
    status: "Completed",
    kind: "Residential",
    location: "Bahria Town Phase 8, Rawalpindi",
    tagline: "Size: 10 Marla",
    intro:
      "A completed 10 Marla residence designed, constructed and handed over by our own team in Bahria Town Phase 8, Rawalpindi. The house was delivered turnkey — engineered foundations and RCC frame, concealed plumbing and electrical works, false ceilings with cove lighting, imported bathroom fittings, a fitted modular kitchen and polished veneer joinery throughout — completed to the agreed specification sheet and the agreed programme.",
    image: IMAGES.residential,
  },
];

export const VALUES = [
  {
    title: "Qualified & professional team",
    text: "Engineers, site supervisors, documentation staff and market specialists working to one written standard, so guidance is consistent whether you are buying a file or casting a slab.",
  },
  {
    title: "Confidentiality",
    text: "Deal objectives, financial positions, ownership records and pricing strategy stay inside our office. Client information is never shared with another buyer, seller or agent.",
  },
  {
    title: "Loyalty",
    text: "We represent one side of a transaction at a time and never use a client mandate to benefit ourselves, a co-agent or a third party at your expense.",
  },
  {
    title: "Communication",
    text: "You are told the weaknesses of a deal as plainly as its strengths — location drawbacks, development delays, resale limitations and cost overruns are raised before signing, not after.",
  },
  {
    title: "Financial accountability",
    text: "Every payment, dues clearance, material purchase and contractor bill is recorded and reported, and client funds are never mixed with company working capital.",
  },
  {
    title: "Customer satisfaction",
    text: "Our work is judged at handover — a clean file, a sound structure and a client who returns for the next project or refers us to their family.",
  },
];

export const AREAS = [
  "Bahria Town",
  "DHA",
  "ICHS Town",
  "Capital Smart City",
  "Top City",
  "Mumtaz City",
  "PWD Housing Society",
  "Ghauri Town",
];

export const FAQS = [
  {
    q: "Where does Quetta Builders operate?",
    a: "We mainly operate in Bahria Town, DHA, ICHS (Islamabad Co-operative Housing Society), Capital Smart City, Top City, Mumtaz City, PWD Housing Society, Ghauri Town and surrounding areas of Islamabad and Rawalpindi.",
  },
  {
    q: "Do you handle construction as well as property dealing?",
    a: "Yes. We undertake grey structure and turnkey contracts for houses, apartments and commercial buildings with our own architects, structural engineers, site supervisors and finishing teams — from approved drawings and excavation through to snagging and handover.",
  },
  {
    q: "Can you manage my property for me?",
    a: "Yes. We place and screen tenants, execute the tenancy agreement, collect rent, handle renewals and maintenance, and report to you in writing — so the asset stays occupied and in good condition without you running after it.",
  },
  {
    q: "How is a construction project priced and billed?",
    a: "After the drawings and specification sheet are agreed we issue a costed BOQ covering structure, finishing, utilities and society charges. Billing is tied to completed stages — foundation, slabs, masonry, plaster, finishing and handover — so payment always follows verified progress on site.",
  },
  {
    q: "How do I get started?",
    a: `Call or WhatsApp ${CONTACT.phoneDisplay}, email ${CONTACT.email}, or visit our office at Dolphin Chowk, C Junction Commercial, Phase 8, Bahria Town, Rawalpindi.`,
  },
];

export const COMPANY = {
  legalName: "Quetta Builders & Associates (SMC-PVT) LTD",
  shortName: "Quetta Builders & Associates",
  foundedText: "Founded in 2010 · Serving Islamabad & Rawalpindi",
};

export const SOCIAL = {
  youtube: "https://www.youtube.com/@quettabuildersandassoiates",
  instagram: "https://www.instagram.com/quettabuildersandassociates",
  facebook: "https://www.facebook.com/share/1EUMnP9TJp/",
};

export const VIDEOS = [
  {
    id: "HEY0ArwyBVs",
    title: "Are you ready for a new era of Real Estate?",
    note: "Bahria Town, Rawalpindi",
  },
  {
    id: "4173jjUd480",
    title: "7 Marla Brand New House For Sale",
    note: "Bahria Town Phase 8",
  },
  {
    id: "qmoEoPxDnf8",
    title: "Stop thinking & start building your home!",
    note: "Construction services",
  },
];

export const CEO = {
  name: "M. Hanif Gujjar",
  role: "Founder & Chief Executive Officer",
  qualification: "MBA — Marketing & Finance",
  phoneDisplay: "+92 332 150 31 41",
  phoneHref: "tel:+923321503141",
  email: "info@quettabuilders.com",
  socials: [
    {
      label: "LinkedIn",
      handle: "m-hanif-gujjar",
      href: "https://www.linkedin.com/in/m-hanif-gujjar-29227755",
    },
  ],
  paragraphs: [
    "M. Hanif Gujjar is the Founder and Chief Executive Officer of Quetta Builders and Associates SMC PVT LTD. He brings more than fourteen years of leadership experience gained across multinational and large national organisations, where he held senior positions in Marketing, Human Resources, Operations, Administration and Public Relations, and was recognised with professional excellence awards by several institutions across Pakistan.",
    "He established Quetta Builders and Associates SMC PVT LTD in 2010 in Bahria Town, Islamabad, and has since built the company into a full-service property, construction and investment firm operating across Bahria Town, DHA, Capital Smart City, ICHS, Top City and the wider jurisdictions of RDA Rawalpindi and CDA Islamabad.",
    "Under his direction the company follows a disciplined delivery model — verified documentation, transparent pricing, engineered drawings, quality-checked materials and a site supervision routine that runs from excavation and structural work through to finishing and handover. Every mandate the firm accepts is executed to that same standard, whether it is a single residential unit or a multi-storey commercial development.",
    "He is equally committed to educating clients. Buyers, sellers and investors who work with Quetta Builders and Associates SMC PVT LTD are walked through market rates, legal status, construction cost and realistic timelines before any commitment is made, so that decisions are based on facts rather than speculation. That clarity, maintained consistently for over a decade, remains the foundation of the company's reputation in the twin cities.",
  ],
};

export const SOCIETIES = [
  {
    slug: "bahria-town",
    name: "Bahria Town (Pvt) Limited",
    tagline: "The force turning the vision of modern Pakistan into reality.",
    logo: "/images/partners/bahria.png",
    stats: [
      { value: "1996", label: "Since" },
      { value: "25,000", label: "Employees" },
      { value: "$5B", label: "Developments" },
    ],
    paragraphs: [
      "Bahria Town has been shaping landscapes and lives in Pakistan since the company's inception in 1996. Not just building homes, Bahria Town has developed value-added, master-planned communities housing thousands of families enjoying a complete living experience. When complete, projects such as the JV D&B Valley, Golf City, Garden City, Bahria Icon and many more under development will accommodate more than a million residents and will cover over 1 billion sq ft.",
      "As the region's largest private estate developer, Bahria Town is delivering iconic developments, driving leadership, pioneering innovation and creating a legacy for generations to come — landmark buildings, thriving communities, market leading retail offerings and unprecedented investment opportunities.",
      "Through all its initiatives, Bahria Town has created, and will continue to create, jobs for millions of individuals and families. It has also supported the development of 55 allied industries including cement, paint, tiles, glass and aluminium, resulting in the economic development of Pakistan.",
    ],
    points: [
      "Master-planned gated communities",
      "1 billion+ sq ft under development",
      "55 allied industries supported",
    ],
  },
  {
    slug: "top-city-1",
    name: "TopCity-1",
    tagline: "Prime location between Kashmir Highway, M1/M2 and the new airport.",
    logo: "/images/partners/rda.png",
    stats: [
      { value: "7", label: "NOCs & approvals" },
      { value: "3 km", label: "Thalian Interchange" },
      { value: "NIIA", label: "Airport adjacent" },
    ],
    paragraphs: [
      "TopCity-1 is located within the natural boundaries of Kashmir Highway, Motorways M1/M2, and the New Islamabad International Airport (NIIA). It possesses the most prime location of the twin cities and is home to major roads that connect CPEC routes with NIIA. The main Kashmir Highway leading to the NIIA passes by TopCity-1 and connects to it via an exclusive interchange.",
      "The Islamabad Metro bus extension will cater to the commute needs of Top Citizens with its dedicated stop for the society. The 3 km long Thalian Interchange also connects the other end of TopCity-1 with NIIA, benefiting all traffic from South and Central Punjab — giving the society an edge over its contenders and a high commercial value.",
    ],
    points: [
      "RDA — Rawalpindi Development Authority",
      "CAA — Civil Aviation Authority",
      "ICT — Islamabad Capital Territory",
      "EPD Punjab — Environment Protection Department",
      "NHA — National Highway Authority",
      "SNGPL — Sui Northern Gas Pipelines Limited",
      "PAF — Pakistan Air Force",
    ],
    pointsTitle: "NOCs & Govt. approvals",
  },
  {
    slug: "capital-smart-city",
    name: "Capital Smart City",
    tagline: "Pakistan's first smart city — ranked 23rd smart city of the world.",
    logo: "/images/partners/cda.png",
    stats: [
      { value: "1st", label: "Smart city in Pakistan" },
      { value: "23rd", label: "Smart city worldwide" },
      { value: "M2", label: "Motorway frontage" },
    ],
    paragraphs: [
      "In view of the growing housing demand in the twin cities, FDHL is building a quality housing project on the M2 Motorway near the New Islamabad International Airport, falling on the eastern route of CPEC. Capital Smart City aims to become the first ever smart city in Pakistan and a model for sustainable development.",
      "Capital Smart City Islamabad is a joint venture between Future Developments Holdings (Pvt.) Limited and Habib Rafiq (Pvt) Limited — a well-known name in the real estate industry of Pakistan and the developers of Bahria Town, DHA Islamabad and numerous other projects.",
      "It is widely believed to be one of the best options for investors in both national and international markets. Its legal framework, means of production and efficient business opportunities make it a centre of attraction for every kind of investor.",
    ],
    points: [
      "Eastern route of CPEC",
      "FDHL & Habib Rafiq (Pvt) Ltd joint venture",
      "Sustainable, technology-led master plan",
    ],
  },
  {
    slug: "ichs-town",
    name: "ICHS — Islamabad Co-operative Housing Society",
    tagline: "1500 kanal of fully-facilitated living beside the new airport.",
    logo: "/images/partners/ichs.png",
    stats: [
      { value: "1500", label: "Kanal" },
      { value: "24/7", label: "Security" },
      { value: "9-15", label: "Kanal of parks" },
    ],
    paragraphs: [
      "ICHS Town, located within the vicinity of the New Islamabad International Airport, offers a fully-facilitated and relaxing living experience amidst the peaceful backdrop of Islamabad. Spread over 1500 kanal, it is specifically designed to facilitate middle-class families who prefer a high-quality lifestyle. Its proximity to the new airport, State Life Society and Sawan Garden is great for future prospects.",
      "The society promises schools, hospitals, parks, 24/7 security surveillance, a jogging track, a community centre and mini golf club, a commercial market, masjids and a sports complex. Development work is fully engaged on the project — you can visit the location and see the progress yourself before making a decision.",
    ],
    pointsTitle: "Amenities",
    points: [
      "Underground electricity & street lights",
      "Gas and sewerage system",
      "Schools and college",
      "Boundary wall & green belts",
      "Wide carpeted road network",
      "Jamia Masjid",
      "Parks and play areas",
      "Hospital & shopping centres",
    ],
  },
  {
    slug: "dha",
    name: "DHA Islamabad – Rawalpindi",
    tagline: "Changing the face of living concepts through the DHA Community System.",
    logo: "/images/partners/dha-isb.png",
    stats: [
      { value: "3C", label: "Credibility, Community, Customer" },
      { value: "Mixed", label: "Use developments" },
      { value: "Twin", label: "Cities vision" },
    ],
    paragraphs: [
      "We at DHA Islamabad-Rawalpindi have a vision of changing the face of living concepts in Pakistan through a holistic yet progressive concept of the \u201CDHA Community System\u201D, by extending a total experience in living, housing and different levels and options for investments and commercial activities under a controlled and dependable environment.",
      "DHA Islamabad-Rawalpindi reflects the ambitious vision of the twin cities — a place built to equal the most exceptional cities in terms of infrastructure, design and urban planning. It offers residential, commercial and mixed-use developed communities with a host of contemporary civic amenities, along with a credible hub for smart investments and businesses.",
      "At DHA, credibility, communities and customer satisfaction are at the heart of everything. Future belongs to those who believe in the beauty of their dreams.",
    ],
    points: [
      "Residential, commercial & mixed-use",
      "Controlled, dependable environment",
      "Contemporary civic amenities",
    ],
  },
];

/* ------------------------------------------------------------------
 * Signature project spotlight — Quetta Icon (Home page premium block)
 * ------------------------------------------------------------------ */
export const ICON_SPOTLIGHT = {
  eyebrow: "Signature project · Delivered",
  name: "Quetta Icon",
  location: "Business District, Bahria Town Phase 8, Rawalpindi",
  headline: "Targeted in 3 years. Constructed and handed over in 1.5.",
  lead: "Quetta Icon is the project our construction record is built on. A fully approved, fully documented commercial high-rise in Bahria Town Phase 8, Rawalpindi — sanctioned for a three-year construction programme and completed, inspected and handed over in about eighteen months, without shortening the structural specification or skipping a single approval stage.",
  body: [
    "The build was run entirely by our own engineers, site supervisors and finishing crews. Architectural, structural and MEP drawings were approved before excavation, the raft and RCC frame were cast to an earthquake-resistant design with tested steel and batched concrete, and every slab was surveyed and cured before the next lift began. Running the structure, the services and the finishing trades in a planned overlap — instead of one after the other — is what cut half the programme.",
    "Documentation moved at the same speed as the concrete. Society approvals, RDA-side compliance, completion certification, utility connections, lift and firefighting clearances and per-unit metering were all closed out and handed to owners as a complete file — so possession was not held up by paperwork after construction finished.",
    "The result is widely regarded as one of the finest buildings in Bahria Town: a boulevard-corner landmark with structured parking, a high-speed lift core, full fire detection and suppression, marble and porcelain floors, tinted aluminium glazing and solid timber joinery — units delivered wired, metered and ready for fit-out.",
  ],
  metrics: [
    { value: "1.5", suffix: " yrs", label: "Actual construction time" },
    { value: "3", suffix: " yrs", label: "Original target programme" },
    { value: "50", suffix: "%", label: "Programme saved" },
    { value: "100", suffix: "%", label: "Approvals & documents closed" },
  ],
  proof: [
    {
      title: "Fastest delivery of its class",
      text: "Grey structure, services and finishing sequenced in a controlled overlap with a written weekly programme — half the sanctioned construction time, with no stage left uninspected.",
    },
    {
      title: "Every approval in place",
      text: "Drawing approvals, society and authority NOCs, completion certification, utility connections and lift, fire and safety clearances were all obtained and formally approved.",
    },
    {
      title: "Engineered, not improvised",
      text: "Earthquake-resistant RCC frame, tested steel and batched concrete, surveyed and cured slabs, concealed MEP routed off approved drawings — specification named in the contract.",
    },
    {
      title: "One of Bahria Town's finest",
      text: "A boulevard-corner commercial landmark finished to a standard that has since become the benchmark clients ask us to repeat on their own buildings.",
    },
  ],
  timeline: [
    { phase: "Month 0–2", title: "Approvals & mobilisation", text: "Drawings approved, BOQ frozen, site set out, labour camp and material yard established." },
    { phase: "Month 2–8", title: "Substructure & RCC frame", text: "Excavation, raft, columns and slabs cast to an earthquake-resistant design with tested materials." },
    { phase: "Month 8–14", title: "Envelope, MEP & finishing", text: "Masonry, plaster, concealed services, glazing, flooring, joinery and sanitary fit-out run in parallel." },
    { phase: "Month 14–18", title: "Certification & handover", text: "Lifts, firefighting, metering and completion documentation cleared; snag lists closed and units handed over." },
  ],
};

/* ------------------------------------------------------------------
 * Why choose Quetta Builders & Associates (Home page section)
 * ------------------------------------------------------------------ */
export const WHY_CHOOSE = {
  eyebrow: "Why choose us",
  headline: "Why choose Quetta Builders & Associates",
  lead: "We are a construction company first. Drawings are approved before excavation, materials are named in the contract, every stage is inspected before the next one is allowed to start, and the programme we sign is the programme we build to — Quetta Icon was delivered in half its sanctioned time with all documentation approved and complete.",
  reasons: [
    {
      title: "Our own engineers and site teams",
      text: "No work is sublet to an unknown contractor. Structural engineers, site supervisors, steel fixers, masons, electricians, plumbers and finishing crews are on our own payroll, working to one written site standard on every project.",
    },
    {
      title: "Delivery ahead of programme",
      text: "We plan the structure, services and finishing trades to overlap safely instead of queueing. That is how Quetta Icon, sanctioned for three years, was completed in about a year and a half — and how our clients start earning rent or trading earlier.",
    },
    {
      title: "Complete, approved documentation",
      text: "Drawing approvals, society and authority NOCs, completion certificates, utility connections, lift and fire clearances and per-unit metering are closed out by our documentation desk and handed over as one complete file.",
    },
    {
      title: "Engineered structures, tested materials",
      text: "Earthquake-resistant RCC design, tested steel and batched concrete, surveyed slabs and controlled curing. Brand and grade are written into the contract and substituted only with your written approval.",
    },
    {
      title: "Costing you can check",
      text: "A costed BOQ covering structure, finishing, utilities and society charges before work starts, with billing tied to verified completed stages — foundation, slabs, masonry, plaster, finishing, handover.",
    },
    {
      title: "Quality control at every stage",
      text: "Excavation, DPC, framing, casting, curing, masonry, plaster, waterproofing, tiling and finishing are each signed off against the schedule, with progress photographs shared in writing every week.",
    },
    {
      title: "Safety and site discipline",
      text: "Scaffolding, edge protection, electrical isolation, material stacking and site cleanliness follow a written routine that protects your labour force, your neighbours and the structure itself.",
    },
    {
      title: "Finishing done in-house",
      text: "False ceilings and cove lighting, imported sanitary ware, modular kitchens, polished veneer joinery and marble work are executed by our own interior team — one accountable party from excavation to handover.",
    },
    {
      title: "Handover, then support",
      text: "You receive as-built drawings, warranties, approved documents and a closed snag list — plus a defect-liability period and a maintenance team that stays reachable after possession.",
    },
  ],
};

// ---------------------------------------------------------------------------
// LOCAL VIDEO SLOTS
// Drop your .mp4 files at the exact paths below (inside the public folder).
// Until a file exists, the site shows a tidy "video coming soon" placeholder.
// ---------------------------------------------------------------------------

export const PROJECT_VIDEO = {
  src: "/videos/projects/project-fast-track.mp4",
  eyebrow: "Project film",
  title: "Built at record speed — a project completed ahead of schedule",
  note: "Bahria Town Phase 8, Rawalpindi",
  description:
    "This project was completed in remarkably short time. Planning, approvals, structure and finishing were run in tightly overlapping stages, with two supervised shifts on site and materials scheduled to arrive exactly when each stage needed them. Nothing was rushed at the cost of quality — every slab was cured to specification and every stage signed off before the next began. The film below walks through the build from excavation to handover, so you can see how fast delivery and engineered standards can hold together on the same site.",
};

export const GUIDANCE_VIDEOS = [
  {
    src: "/videos/guidance/guidance-1-before-you-buy.mp4",
    title: "Before you buy: checking a file, an NOC and the real market rate",
    note: "Episode 1 · Buying safely",
    summary:
      "The CEO explains the checks that must be completed before any payment is made — society office verification, dues and NOC status, plot dimension and category, and how to benchmark an asking price against genuine recent transactions instead of hearsay.",
  },
  {
    src: "/videos/guidance/guidance-2-construction-cost.mp4",
    title: "What construction really costs — grey structure to finishing",
    note: "Episode 2 · Budget & BOQ",
    summary:
      "A practical breakdown of where the money goes: excavation and foundation, steel and concrete, masonry and plaster, utilities, and finishing. You will also hear how a costed BOQ and stage-wise billing protect you from mid-project price surprises.",
  },
  {
    src: "/videos/guidance/guidance-3-quality-control.mp4",
    title: "Quality control on site — the stages you must never skip",
    note: "Episode 3 · Standards",
    summary:
      "Curing time, DPC and waterproofing, steel cover, mix ratios and plaster levels: the CEO walks through the checkpoints that decide whether a house stands well for decades, and how weekly written sign-offs keep a contractor accountable.",
  },
  {
    src: "/videos/guidance/guidance-4-timeline-handover.mp4",
    title: "Realistic timelines, snag lists and a clean handover",
    note: "Episode 4 · Delivery",
    summary:
      "How long each stage honestly takes, what causes delays, and what you should receive at handover — as-built drawings, approvals, warranties and a closed snag list, followed by a defect-liability period with a reachable maintenance team.",
  },
];
