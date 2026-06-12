import Image from 'next/image';

type PreviewDesignId =
  | 'dr-priya'
  | 'dr-rajesh'
  | 'smile-dental'
  | 'dr-amit'
  | 'healthcare-plus'
  | 'bright-smile'
  | 'city-medical'
  | 'dr-sneha'
  | 'dr-vikram';

type PreviewConfig = {
  brand: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  specialty: string;
  location: string;
  phone: string;
  email: string;
  image: string;
  secondaryImage: string;
  theme: {
    accent: string;
    accentDark: string;
    accentSoft: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
    dark: string;
    darkText: string;
  };
  stats: Array<{ value: string; label: string }>;
  services: Array<{ title: string; body: string }>;
  highlights: Array<{ title: string; body: string }>;
  process: Array<{ step: string; title: string; body: string }>;
  packages: Array<{ name: string; price: string; body: string; featured?: boolean }>;
  testimonial: { quote: string; name: string; role: string };
};

const previewConfigs: Record<PreviewDesignId, PreviewConfig> = {
  'dr-priya': {
    brand: 'Priya Skin Institute',
    eyebrow: 'Advanced Dermatology & Aesthetic Science',
    headline: 'Clinical skin care with editorial confidence.',
    subhead:
      'A refined dermatology website for specialists who need treatment clarity, trust proof, and premium patient education before the first consultation.',
    specialty: 'Dermatology Authority',
    location: 'Delhi, India',
    phone: '+91 98765 12345',
    email: 'care@priyaskin.in',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#7c3aed',
      accentDark: '#4c1d95',
      accentSoft: '#f3e8ff',
      background: '#fbf7ff',
      surface: '#ffffff',
      text: '#17111f',
      muted: '#60566d',
      dark: '#1d1230',
      darkText: '#f7f1ff',
    },
    stats: [
      { value: '12+', label: 'years skin expertise' },
      { value: '8k+', label: 'patient visits' },
      { value: '42', label: 'treatment protocols' },
      { value: '4.9', label: 'patient rating' },
    ],
    services: [
      { title: 'Acne & Scar Revision', body: 'Structured acne control, scar resurfacing, and maintenance plans for long-term skin confidence.' },
      { title: 'Laser Dermatology', body: 'Precision laser protocols for pigmentation, texture, vascular concerns, and rejuvenation.' },
      { title: 'Injectables & Contouring', body: 'Subtle aesthetic injectables planned around facial anatomy and natural expression.' },
      { title: 'Medical Skincare Plans', body: 'Prescription-led skincare routines with staged follow-up and seasonal adjustment.' },
    ],
    highlights: [
      { title: 'Treatment-led navigation', body: 'Patients can explore concerns, procedures, outcomes, downtime, and consultation next steps.' },
      { title: 'Authority-first doctor profile', body: 'Credentials, memberships, training, and patient outcomes are presented with editorial polish.' },
      { title: 'Conversion-ready booking path', body: 'Every section guides patients toward a skin assessment without feeling sales-heavy.' },
    ],
    process: [
      { step: '01', title: 'Skin Mapping', body: 'Visual assessment, concern history, triggers, previous treatments, and lifestyle review.' },
      { step: '02', title: 'Protocol Design', body: 'A staged plan across clinic procedures, prescription care, and home maintenance.' },
      { step: '03', title: 'Progress Review', body: 'Before-after documentation, treatment refinement, and long-term prevention.' },
    ],
    packages: [
      { name: 'Skin Audit', price: '₹1,500', body: 'Concern mapping, treatment options, and routine correction.' },
      { name: 'Laser Plan', price: '₹7,500', body: 'Procedure consultation and personalized session planning.', featured: true },
      { name: 'Aesthetic Plan', price: 'Custom', body: 'Injectables, contouring, and maintenance roadmap.' },
    ],
    testimonial: {
      quote: 'The website feels premium, clinical, and easy to trust. Patients arrive already informed about treatments and expectations.',
      name: 'Dr. Priya Sharma',
      role: 'Consultant Dermatologist',
    },
  },
  'dr-rajesh': {
    brand: 'OrthoAxis Surgical Center',
    eyebrow: 'Joint Replacement & Sports Injury Care',
    headline: 'Precision orthopedic care for active recovery.',
    subhead:
      'A strong surgical website for orthopedic doctors who need procedure credibility, recovery education, and clear appointment pathways.',
    specialty: 'Orthopedic Precision',
    location: 'Mumbai, India',
    phone: '+91 98765 43210',
    email: 'appointments@orthoaxis.in',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#2563eb',
      accentDark: '#1e3a8a',
      accentSoft: '#dbeafe',
      background: '#f6f9ff',
      surface: '#ffffff',
      text: '#111827',
      muted: '#526073',
      dark: '#0b1730',
      darkText: '#eef5ff',
    },
    stats: [
      { value: '5k+', label: 'surgeries assisted' },
      { value: '18+', label: 'years experience' },
      { value: '96%', label: 'mobility goals met' },
      { value: '24h', label: 'trauma response' },
    ],
    services: [
      { title: 'Joint Replacement', body: 'Hip, knee, and shoulder replacement pages with implant choices and recovery timelines.' },
      { title: 'Sports Injury Repair', body: 'ACL, meniscus, ligament, and cartilage procedures explained for active patients.' },
      { title: 'Arthroscopy', body: 'Minimally invasive surgery details with diagnostic and rehabilitation clarity.' },
      { title: 'Fracture & Trauma Care', body: 'Emergency care information with fast contact and location guidance.' },
    ],
    highlights: [
      { title: 'Procedure confidence', body: 'Each procedure explains who it is for, expected recovery, and decision points.' },
      { title: 'Rehabilitation journey', body: 'Content supports post-op exercises, milestones, and care team follow-up.' },
      { title: 'Surgical proof', body: 'Credentials, case categories, and patient stories create confidence before booking.' },
    ],
    process: [
      { step: '01', title: 'Diagnosis', body: 'Clinical exam, imaging, range-of-motion review, and pain mapping.' },
      { step: '02', title: 'Surgical Planning', body: 'Conservative care, procedure choices, risk guidance, and recovery plan.' },
      { step: '03', title: 'Return To Motion', body: 'Follow-up, physiotherapy coordination, and milestone-based recovery.' },
    ],
    packages: [
      { name: 'Joint Opinion', price: '₹1,200', body: 'Diagnosis review and treatment pathway.' },
      { name: 'Surgery Planner', price: '₹3,500', body: 'Imaging review, risks, and recovery schedule.', featured: true },
      { name: 'Sports Rehab', price: '₹2,400', body: 'Injury assessment and return-to-play plan.' },
    ],
    testimonial: {
      quote: 'The orthopedic pages make complex procedures feel clear. Patients ask better questions and move faster toward decisions.',
      name: 'Dr. Rajesh Kumar',
      role: 'Orthopedic Surgeon',
    },
  },
  'smile-dental': {
    brand: 'Smile Dental Modern',
    eyebrow: 'Family Dentistry & Appointment Flow',
    headline: 'A bright dental clinic experience built for bookings.',
    subhead:
      'A friendly clinic website for dental practices that need clear services, family trust, and fast appointment conversion.',
    specialty: 'Dental Clinic',
    location: 'Bangalore, India',
    phone: '+91 80 1234 5678',
    email: 'hello@smiledental.in',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#0d9488',
      accentDark: '#0f766e',
      accentSoft: '#ccfbf1',
      background: '#f2fffc',
      surface: '#ffffff',
      text: '#10201f',
      muted: '#58706d',
      dark: '#0a2b2a',
      darkText: '#effffb',
    },
    stats: [
      { value: '6k+', label: 'family visits' },
      { value: '24h', label: 'appointment response' },
      { value: '12', label: 'dental services' },
      { value: '4.8', label: 'review score' },
    ],
    services: [
      { title: 'General Dentistry', body: 'Checkups, cleanings, fillings, preventive care, and long-term dental records.' },
      { title: 'Cosmetic Smile Care', body: 'Whitening, bonding, veneers, and smile planning for confident outcomes.' },
      { title: 'Children Dentistry', body: 'Warm pediatric care pages designed to reduce anxiety for parents and kids.' },
      { title: 'Emergency Dental Care', body: 'Pain, swelling, chipped teeth, and same-day urgent visit pathways.' },
    ],
    highlights: [
      { title: 'Friendly service clarity', body: 'Patients can quickly choose a treatment and understand what happens next.' },
      { title: 'Family-first tone', body: 'Warm copy, trust badges, and reviews build comfort for first-time patients.' },
      { title: 'Fast booking flow', body: 'Phone, WhatsApp, and appointment calls-to-action are visible across the page.' },
    ],
    process: [
      { step: '01', title: 'Checkup', body: 'Digital exam, pain history, gum assessment, and treatment priorities.' },
      { step: '02', title: 'Treatment Plan', body: 'Clear pricing, visit count, expected comfort, and alternatives.' },
      { step: '03', title: 'Smile Maintenance', body: 'Recall reminders, hygiene support, and long-term preventive care.' },
    ],
    packages: [
      { name: 'Family Checkup', price: '₹799', body: 'Routine exam and hygiene plan.' },
      { name: 'Smile Cleanse', price: '₹1,999', body: 'Cleaning, polish, and stain review.', featured: true },
      { name: 'Emergency Visit', price: 'Priority', body: 'Same-day dental pain support.' },
    ],
    testimonial: {
      quote: 'The design feels friendly and practical. Patients can find services, understand pricing, and book without confusion.',
      name: 'Smile Dental Team',
      role: 'Family Dental Clinic',
    },
  },
  'dr-amit': {
    brand: 'Amit Cardiac Institute',
    eyebrow: 'Interventional Cardiology & Preventive Care',
    headline: 'High-confidence heart care for urgent decisions.',
    subhead:
      'A specialist cardiology website built around trust, emergency readiness, diagnostics, and prevention-focused patient education.',
    specialty: 'Cardiac Specialist',
    location: 'Mumbai, India',
    phone: '+91 22 1234 5678',
    email: 'heartcare@amitcardiac.in',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#dc2626',
      accentDark: '#7f1d1d',
      accentSoft: '#fee2e2',
      background: '#fff7f7',
      surface: '#ffffff',
      text: '#1f1414',
      muted: '#6d5555',
      dark: '#2b0909',
      darkText: '#fff5f5',
    },
    stats: [
      { value: '500+', label: 'angioplasty cases' },
      { value: '12+', label: 'years heart care' },
      { value: '3k+', label: 'patients managed' },
      { value: '24/7', label: 'emergency pathway' },
    ],
    services: [
      { title: 'Angioplasty & Stenting', body: 'Procedure pages explain symptoms, diagnosis, stent choices, and recovery expectations.' },
      { title: 'Heart Failure Clinic', body: 'Long-term management, medicine planning, monitoring, and lifestyle guidance.' },
      { title: 'Preventive Cardiology', body: 'Risk scoring, cholesterol control, family history, and cardiac wellness plans.' },
      { title: 'Advanced Diagnostics', body: 'ECG, echo, stress testing, Holter, and imaging explained in patient language.' },
    ],
    highlights: [
      { title: 'Emergency-first CTAs', body: 'High-intent patients can quickly call, request urgent advice, or book a consultation.' },
      { title: 'Diagnostic clarity', body: 'Patients understand when they need tests and what the results mean.' },
      { title: 'Credibility under pressure', body: 'Experience, outcomes, and hospital affiliations are presented prominently.' },
    ],
    process: [
      { step: '01', title: 'Risk Review', body: 'Symptoms, vitals, ECG, family history, and lifestyle risk profile.' },
      { step: '02', title: 'Cardiac Plan', body: 'Diagnostic tests, medical therapy, intervention options, and follow-up schedule.' },
      { step: '03', title: 'Prevention', body: 'Medicine adherence, lifestyle metrics, and recurring cardiac health reviews.' },
    ],
    packages: [
      { name: 'Heart Risk Visit', price: '₹1,800', body: 'Risk assessment and prevention plan.' },
      { name: 'Chest Pain Pathway', price: 'Priority', body: 'Urgent consultation and test guidance.', featured: true },
      { name: 'Cardiac Wellness', price: '₹4,999', body: 'Review, diagnostics, and lifestyle roadmap.' },
    ],
    testimonial: {
      quote: 'The website communicates urgency without panic. Patients quickly understand symptoms, tests, and next steps.',
      name: 'Dr. Amit Patel',
      role: 'Interventional Cardiologist',
    },
  },
  'healthcare-plus': {
    brand: 'HealthCare Plus',
    eyebrow: 'Multi-Specialty Hospital System',
    headline: 'Hospital-grade structure for every department.',
    subhead:
      'A scalable multi-specialty website for hospitals and large clinics that need departments, facilities, packages, and emergency access.',
    specialty: 'Hospital / Clinic',
    location: 'Hyderabad, India',
    phone: '+91 11 2345 6789',
    email: 'info@healthcareplus.in',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#16a34a',
      accentDark: '#14532d',
      accentSoft: '#dcfce7',
      background: '#f5fff8',
      surface: '#ffffff',
      text: '#102117',
      muted: '#52685b',
      dark: '#092215',
      darkText: '#f0fff6',
    },
    stats: [
      { value: '18', label: 'departments' },
      { value: '60+', label: 'consultants' },
      { value: '24/7', label: 'emergency' },
      { value: '12k+', label: 'annual patients' },
    ],
    services: [
      { title: 'Department Directory', body: 'Cardiology, orthopedics, pediatrics, neurology, medicine, diagnostics, and more.' },
      { title: 'Emergency & ICU', body: 'Emergency response information, ICU facilities, and ambulance pathways.' },
      { title: 'Diagnostics & Imaging', body: 'Lab, imaging, radiology, health packages, and report workflows.' },
      { title: 'Patient Facilities', body: 'Rooms, insurance, billing, pharmacy, appointments, and visitor support.' },
    ],
    highlights: [
      { title: 'Scalable department pages', body: 'Every specialty can have doctors, services, timings, FAQs, and appointment actions.' },
      { title: 'Operational clarity', body: 'Patients can quickly find emergency numbers, packages, facilities, and location.' },
      { title: 'Institutional trust', body: 'Quality standards, technology, and care teams are presented like a hospital system.' },
    ],
    process: [
      { step: '01', title: 'Find Care', body: 'Search by department, symptom, doctor, package, or emergency need.' },
      { step: '02', title: 'Book & Prepare', body: 'Appointment details, documents, directions, and pre-visit instructions.' },
      { step: '03', title: 'Continuity', body: 'Follow-up pathways, reports, pharmacy, and long-term care coordination.' },
    ],
    packages: [
      { name: 'Basic Health Check', price: '₹999', body: 'Core blood tests and physician review.' },
      { name: 'Executive Package', price: '₹4,999', body: 'Advanced diagnostics and lifestyle consult.', featured: true },
      { name: 'Emergency Access', price: '24/7', body: 'Ambulance and urgent care guidance.' },
    ],
    testimonial: {
      quote: 'The structure finally makes our departments easy to navigate. Patients can find the right service without calling reception first.',
      name: 'HealthCare Plus Admin',
      role: 'Multi-Specialty Clinic',
    },
  },
  'bright-smile': {
    brand: 'Bright Smile Studio',
    eyebrow: 'Cosmetic Dentistry & Smile Design',
    headline: 'Visual dental marketing for confidence-led care.',
    subhead:
      'A premium cosmetic dental website designed around smile galleries, treatment packages, pricing clarity, and visual outcomes.',
    specialty: 'Cosmetic Dentist',
    location: 'Pune, India',
    phone: '+91 20 1234 5678',
    email: 'studio@brightsmile.in',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#ea580c',
      accentDark: '#9a3412',
      accentSoft: '#ffedd5',
      background: '#fff8f1',
      surface: '#ffffff',
      text: '#24170d',
      muted: '#715f52',
      dark: '#2b1407',
      darkText: '#fff8ef',
    },
    stats: [
      { value: '3k+', label: 'smile makeovers' },
      { value: '500+', label: 'implants placed' },
      { value: '8+', label: 'years cosmetic care' },
      { value: '100%', label: 'planning-first approach' },
    ],
    services: [
      { title: 'Smile Makeovers', body: 'A visual treatment page for veneers, whitening, contouring, and complete smile design.' },
      { title: 'Dental Implants', body: 'Implant process, timeline, cost ranges, and restoration options explained clearly.' },
      { title: 'Aligners & Veneers', body: 'Clear comparison between discreet alignment and instant cosmetic correction.' },
      { title: 'Before/After Gallery', body: 'Outcome-led sections that help aesthetic patients understand possibilities.' },
    ],
    highlights: [
      { title: 'Gallery-driven conversion', body: 'The design leads with visual proof while keeping medical credibility intact.' },
      { title: 'Treatment pricing clarity', body: 'Packages and ranges reduce hesitation for cosmetic dentistry buyers.' },
      { title: 'Consultation-focused flow', body: 'Every service leads into smile analysis and treatment planning.' },
    ],
    process: [
      { step: '01', title: 'Smile Analysis', body: 'Photo review, bite check, shade mapping, and aesthetic goals.' },
      { step: '02', title: 'Design Preview', body: 'Treatment options, timeline, pricing, and expected visual outcome.' },
      { step: '03', title: 'Transformation', body: 'Step-by-step treatment, comfort planning, and maintenance.' },
    ],
    packages: [
      { name: 'Whitening Visit', price: '₹5,000', body: 'In-clinic whitening and shade review.' },
      { name: 'Smile Design', price: 'Custom', body: 'Veneer, aligner, and contour plan.', featured: true },
      { name: 'Implant Plan', price: '₹25k+', body: 'Implant consultation and restoration roadmap.' },
    ],
    testimonial: {
      quote: 'The gallery-led layout makes cosmetic dental outcomes feel premium and believable, not generic.',
      name: 'Bright Smile Studio',
      role: 'Cosmetic Dental Team',
    },
  },
  'city-medical': {
    brand: 'City Medical Center',
    eyebrow: 'Primary Care & Family Medicine',
    headline: 'Accessible family healthcare with everyday clarity.',
    subhead:
      'A practical, trustworthy primary care website for clinics that need services, health packages, emergency info, and family-friendly booking.',
    specialty: 'Primary Care',
    location: 'Mumbai, India',
    phone: '+91 22 9876 5432',
    email: 'hello@citymedical.in',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#2563eb',
      accentDark: '#1d4ed8',
      accentSoft: '#dbeafe',
      background: '#f6f9ff',
      surface: '#ffffff',
      text: '#111827',
      muted: '#566477',
      dark: '#0b1936',
      darkText: '#eff6ff',
    },
    stats: [
      { value: '15k+', label: 'families served' },
      { value: '20+', label: 'years care' },
      { value: '30+', label: 'doctors' },
      { value: '7d', label: 'weekly access' },
    ],
    services: [
      { title: 'Family Medicine', body: 'Primary care for fever, infections, chronic illness, follow-ups, and everyday health concerns.' },
      { title: 'Pediatric Care', body: 'Child checkups, vaccinations, growth tracking, and parent education.' },
      { title: 'Health Packages', body: 'Preventive checkups, blood work, ECG, screenings, and doctor consultation.' },
      { title: 'Telemedicine & Home Visits', body: 'Online consultation and home-care options for elderly or busy families.' },
    ],
    highlights: [
      { title: 'Service breadth without clutter', body: 'The page organizes many everyday services into a simple family-care experience.' },
      { title: 'Package-led decision making', body: 'Health checkup plans make preventive care easy to understand and book.' },
      { title: 'Trust for all ages', body: 'Parents, seniors, and working adults each find relevant pathways.' },
    ],
    process: [
      { step: '01', title: 'Choose Need', body: 'Select appointment, package, vaccination, lab test, or urgent visit.' },
      { step: '02', title: 'Visit Or Consult', body: 'Clinic visit, telemedicine, or home visit based on patient context.' },
      { step: '03', title: 'Follow-Up', body: 'Reports, prescriptions, reminders, and chronic-care tracking.' },
    ],
    packages: [
      { name: 'Basic Checkup', price: '₹999', body: 'CBC, sugar, lipid, kidney, liver profile.' },
      { name: 'Family Plan', price: '₹2,499', body: 'Comprehensive screening and doctor review.', featured: true },
      { name: 'Senior Care', price: '₹3,999', body: 'Chronic care review and follow-up plan.' },
    ],
    testimonial: {
      quote: 'Families understand services faster. The package layout and contact paths reduce repetitive phone calls.',
      name: 'City Medical Center',
      role: 'Primary Care Clinic',
    },
  },
  'dr-sneha': {
    brand: "Sneha Women's Care",
    eyebrow: 'Obstetrics, Gynecology & Wellness',
    headline: "Sensitive women's care with calm clinical guidance.",
    subhead:
      'A warm gynecology website for patient-sensitive specialties, built around trust, privacy, education, and life-stage care.',
    specialty: 'Gynecologist',
    location: 'Hyderabad, India',
    phone: '+91 40 1234 5678',
    email: 'care@snehawomen.in',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#db2777',
      accentDark: '#831843',
      accentSoft: '#fce7f3',
      background: '#fff7fb',
      surface: '#ffffff',
      text: '#25121c',
      muted: '#6f5965',
      dark: '#32101f',
      darkText: '#fff4fa',
    },
    stats: [
      { value: '2k+', label: 'deliveries' },
      { value: '10+', label: 'years experience' },
      { value: '500+', label: 'surgeries' },
      { value: '99%', label: 'patient satisfaction' },
    ],
    services: [
      { title: 'Pregnancy Care', body: 'Trimester-wise care, scans, nutrition, birth planning, and high-risk monitoring.' },
      { title: 'Gynecology Consultation', body: 'Periods, PCOS, infections, pelvic pain, menopause, and preventive screenings.' },
      { title: 'Fertility Guidance', body: 'Initial fertility evaluation, ovulation tracking, partner testing, and referral pathways.' },
      { title: 'Laparoscopic Surgery', body: 'Minimally invasive surgical care with recovery education and follow-up.' },
    ],
    highlights: [
      { title: 'Privacy-conscious design', body: 'The tone and layout feel warm, discreet, and reassuring for sensitive concerns.' },
      { title: 'Life-stage navigation', body: 'Patients can choose care paths for adolescence, fertility, pregnancy, and menopause.' },
      { title: 'Education-first trust', body: 'FAQs and guidance help patients feel prepared before discussing personal symptoms.' },
    ],
    process: [
      { step: '01', title: 'Listen', body: 'Confidential history, symptoms, goals, pregnancy status, and concerns.' },
      { step: '02', title: 'Assess', body: 'Exam, scans, lab guidance, and diagnosis explained clearly.' },
      { step: '03', title: 'Care Plan', body: 'Treatment, follow-up, lifestyle guidance, and ongoing support.' },
    ],
    packages: [
      { name: 'Well Woman Visit', price: '₹1,200', body: 'Consultation, screening guidance, and care plan.' },
      { name: 'Pregnancy Plan', price: 'Custom', body: 'Trimester-wise monitoring and birth preparation.', featured: true },
      { name: 'PCOS Program', price: '₹3,500', body: 'Cycle, metabolic, and lifestyle management.' },
    ],
    testimonial: {
      quote: 'The page feels gentle and trustworthy. It gives patients confidence to book for sensitive concerns.',
      name: 'Dr. Sneha Reddy',
      role: 'Gynecologist & Obstetrician',
    },
  },
  'dr-vikram': {
    brand: 'NeuroVanguard Institute',
    eyebrow: 'Brain, Spine & Advanced Neurosurgery',
    headline: 'Specialist authority for complex neurological care.',
    subhead:
      'A dark, high-trust neurosurgery website for advanced specialists who need diagnostic depth, procedural authority, and emergency credibility.',
    specialty: 'Neurosurgeon',
    location: 'Bangalore, India',
    phone: '+91 80 9876 5432',
    email: 'care@neurovanguard.in',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1581093458791-9d09cc362a17?auto=format&fit=crop&w=1000&q=85',
    theme: {
      accent: '#60a5fa',
      accentDark: '#1e3a8a',
      accentSoft: '#dbeafe',
      background: '#070b14',
      surface: '#101827',
      text: '#eff6ff',
      muted: '#a8b3c7',
      dark: '#030712',
      darkText: '#f8fbff',
    },
    stats: [
      { value: '1k+', label: 'brain surgeries' },
      { value: '500+', label: 'spine procedures' },
      { value: '15+', label: 'years expertise' },
      { value: '97%', label: 'case success' },
    ],
    services: [
      { title: 'Brain Tumor Surgery', body: 'Advanced microsurgery, skull base care, neuro-oncology, and recovery planning.' },
      { title: 'Minimally Invasive Spine', body: 'Disc, stenosis, nerve compression, and spine stabilization pathways.' },
      { title: 'Stroke & Trauma', body: 'Emergency neurological care with urgent routing and hospital coordination.' },
      { title: 'Epilepsy & Functional Care', body: 'Surgical evaluation, imaging review, and long-term neurological management.' },
    ],
    highlights: [
      { title: 'Dark authority interface', body: 'A serious visual system suits complex care and high-trust specialist positioning.' },
      { title: 'Case complexity clarity', body: 'Patients and families can understand procedures, risks, recovery, and urgency.' },
      { title: 'Advanced proof structure', body: 'Training, cases, technology, and outcomes are presented with institutional weight.' },
    ],
    process: [
      { step: '01', title: 'Neuro Review', body: 'Symptoms, scans, neuro exam, previous treatment, and urgent risks.' },
      { step: '02', title: 'Case Conference', body: 'Surgery, conservative care, imaging, and referral coordination.' },
      { step: '03', title: 'Recovery System', body: 'ICU pathway, rehabilitation, follow-up scans, and long-term tracking.' },
    ],
    packages: [
      { name: 'Scan Review', price: '₹2,500', body: 'MRI/CT review and opinion.' },
      { name: 'Surgery Opinion', price: 'Priority', body: 'Complex case consultation and options.', featured: true },
      { name: 'Spine Clinic', price: '₹1,800', body: 'Pain, nerve, and mobility assessment.' },
    ],
    testimonial: {
      quote: 'The visual tone matches advanced neurosurgery. Families can understand complex procedures without losing confidence.',
      name: 'Dr. Vikram Singh',
      role: 'Consultant Neurosurgeon',
    },
  },
};

const previewPresentation: Record<
  PreviewDesignId,
  {
    heroGrid: string;
    heroMedia: string;
    heroOrder?: string;
    servicesGrid: string;
    featuredService: number;
    servicesTitle: string;
    experienceTitle: string;
    journeyTitle: string;
    journeyBody: string;
    packageLabel: string;
    ctaLabel: string;
    variant: 'editorial' | 'surgical' | 'friendly' | 'urgent' | 'directory' | 'gallery' | 'soft' | 'dark';
  }
> = {
  'dr-priya': {
    heroGrid: 'lg:grid-cols-[0.95fr_1.05fr]',
    heroMedia: 'rounded-t-[120px]',
    servicesGrid: 'md:grid-cols-2 lg:grid-cols-4',
    featuredService: 0,
    servicesTitle: 'Concerns Organized Like A Premium Skin Journal.',
    experienceTitle: 'Editorial Authority With Clinical Calm.',
    journeyTitle: 'From Skin Concern To Treatment Confidence.',
    journeyBody: 'This dermatology journey turns unclear symptoms into structured consultation readiness.',
    packageLabel: 'Skin Programs',
    ctaLabel: 'Book Skin Assessment',
    variant: 'editorial',
  },
  'dr-rajesh': {
    heroGrid: 'lg:grid-cols-[1.15fr_0.85fr]',
    heroMedia: 'rounded-none',
    servicesGrid: 'md:grid-cols-2',
    featuredService: 1,
    servicesTitle: 'Surgical Services Mapped Around Recovery.',
    experienceTitle: 'Procedure Proof For High-Intent Patients.',
    journeyTitle: 'Diagnosis, Decision, Recovery.',
    journeyBody: 'Orthopedic patients need clarity on pain, procedure options, risks, and return-to-motion timelines.',
    packageLabel: 'Surgery Pathways',
    ctaLabel: 'Request Ortho Opinion',
    variant: 'surgical',
  },
  'smile-dental': {
    heroGrid: 'lg:grid-cols-[1fr_1fr]',
    heroMedia: 'rounded-[40px]',
    servicesGrid: 'md:grid-cols-2 lg:grid-cols-4',
    featuredService: 3,
    servicesTitle: 'Dental Services Built For Fast Family Decisions.',
    experienceTitle: 'Friendly, Bright, And Easy To Book.',
    journeyTitle: 'From Dental Worry To Appointment.',
    journeyBody: 'The flow helps patients choose checkup, emergency, cosmetic, or family care without confusion.',
    packageLabel: 'Dental Visits',
    ctaLabel: 'Book Dental Visit',
    variant: 'friendly',
  },
  'dr-amit': {
    heroGrid: 'lg:grid-cols-[0.9fr_1.1fr]',
    heroMedia: 'rounded-none',
    servicesGrid: 'md:grid-cols-2',
    featuredService: 0,
    servicesTitle: 'Cardiac Care Structured Around Urgency.',
    experienceTitle: 'Emergency Trust Without Panic.',
    journeyTitle: 'Symptoms, Tests, Next Step.',
    journeyBody: 'Cardiology pages must help patients act quickly while still understanding diagnostics and prevention.',
    packageLabel: 'Heart Care Paths',
    ctaLabel: 'Request Cardiac Visit',
    variant: 'urgent',
  },
  'healthcare-plus': {
    heroGrid: 'lg:grid-cols-[1fr_1fr]',
    heroMedia: 'rounded-none',
    servicesGrid: 'md:grid-cols-2 lg:grid-cols-4',
    featuredService: 0,
    servicesTitle: 'Departments, Facilities, And Packages In One System.',
    experienceTitle: 'Hospital Navigation Without Friction.',
    journeyTitle: 'Find The Right Department Faster.',
    journeyBody: 'Large clinics need structure for services, doctors, emergency access, packages, and patient facilities.',
    packageLabel: 'Health Packages',
    ctaLabel: 'Find Department',
    variant: 'directory',
  },
  'bright-smile': {
    heroGrid: 'lg:grid-cols-[0.85fr_1.15fr]',
    heroMedia: 'rounded-[80px_12px_80px_12px]',
    servicesGrid: 'md:grid-cols-2',
    featuredService: 0,
    servicesTitle: 'Smile Design Sold Through Visual Confidence.',
    experienceTitle: 'Gallery-Led Cosmetic Conversion.',
    journeyTitle: 'Analyze, Preview, Transform.',
    journeyBody: 'Cosmetic dental buyers need to see possibilities, understand options, and trust the plan before booking.',
    packageLabel: 'Smile Offers',
    ctaLabel: 'Plan Smile Design',
    variant: 'gallery',
  },
  'city-medical': {
    heroGrid: 'lg:grid-cols-[1.05fr_0.95fr]',
    heroMedia: 'rounded-3xl',
    servicesGrid: 'md:grid-cols-2 lg:grid-cols-4',
    featuredService: 2,
    servicesTitle: 'Everyday Care Made Easy To Navigate.',
    experienceTitle: 'Simple Access For Families And Seniors.',
    journeyTitle: 'Choose Need, Visit, Follow Up.',
    journeyBody: 'Primary care websites should reduce phone calls by making services, packages, and access obvious.',
    packageLabel: 'Care Packages',
    ctaLabel: 'Book Family Care',
    variant: 'directory',
  },
  'dr-sneha': {
    heroGrid: 'lg:grid-cols-[0.95fr_1.05fr]',
    heroMedia: 'rounded-[120px]',
    servicesGrid: 'md:grid-cols-2',
    featuredService: 0,
    servicesTitle: "Women's Care Organized By Life Stage.",
    experienceTitle: 'Privacy-First Design With Warm Guidance.',
    journeyTitle: 'Listen, Assess, Care Plan.',
    journeyBody: 'Sensitive specialties need a softer digital experience that reassures before asking patients to book.',
    packageLabel: "Women's Care Plans",
    ctaLabel: 'Book Private Consult',
    variant: 'soft',
  },
  'dr-vikram': {
    heroGrid: 'lg:grid-cols-[1.2fr_0.8fr]',
    heroMedia: 'rounded-none',
    heroOrder: 'lg:order-first',
    servicesGrid: 'md:grid-cols-2',
    featuredService: 0,
    servicesTitle: 'Complex Neuro Care With Institutional Weight.',
    experienceTitle: 'Dark Specialist Authority For High-Stakes Cases.',
    journeyTitle: 'Scan Review, Case Conference, Recovery.',
    journeyBody: 'Advanced neurosurgery pages must help families understand urgency, procedure depth, and specialist proof.',
    packageLabel: 'Neuro Case Paths',
    ctaLabel: 'Request Case Review',
    variant: 'dark',
  },
};

export default function PremiumPreviewPage({ designId }: { designId: PreviewDesignId }) {
  const config = previewConfigs[designId];
  const presentation = previewPresentation[designId];
  const isDark = config.theme.background.startsWith('#07') || config.theme.background.startsWith('#0');

  return (
    <div style={{ backgroundColor: config.theme.background, color: config.theme.text }} className="min-h-screen font-primary">
      <nav style={{ backgroundColor: isDark ? 'rgba(3, 7, 18, 0.92)' : 'rgba(255, 255, 255, 0.92)', borderColor: `${config.theme.accent}22` }} className="sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#" className="font-secondary text-2xl font-bold tracking-[-0.03em]">
            {config.brand}
          </a>
          <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.16em] md:flex" style={{ color: config.theme.muted }}>
            <a href="#services" className="transition-colors hover:opacity-70">Services</a>
            <a href="#experience" className="transition-colors hover:opacity-70">Experience</a>
            <a href="#packages" className="transition-colors hover:opacity-70">Packages</a>
            <a href="#contact" className="transition-colors hover:opacity-70">Contact</a>
          </div>
          <a href="#contact" style={{ backgroundColor: config.theme.accent, color: isDark ? '#030712' : '#ffffff' }} className="px-5 py-3 text-xs font-bold uppercase tracking-[0.14em]">
            {presentation.ctaLabel}
          </a>
        </div>
      </nav>

      <main>
        {presentation.variant === 'directory' ? (
          <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div>
              <p style={{ backgroundColor: config.theme.accentSoft, color: config.theme.accentDark }} className="mb-6 inline-flex px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]">
                {config.eyebrow}
              </p>
              <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                {config.headline}
              </h1>
              <p style={{ color: config.theme.muted }} className="mt-7 max-w-2xl text-lg leading-8">
                {config.subhead}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" style={{ backgroundColor: config.theme.text, color: config.theme.background }} className="px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em]">
                  {presentation.ctaLabel}
                </a>
                <a href="#services" style={{ borderColor: config.theme.text, color: config.theme.text }} className="border px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em]">
                  Browse Departments
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: config.theme.surface, borderColor: `${config.theme.accent}35` }} className="border p-4 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
              <div className="grid gap-4 md:grid-cols-[1fr_0.85fr]">
                <div className="relative min-h-[520px] overflow-hidden">
                  <Image src={config.image} alt={config.specialty} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Patient Access Desk</p>
                    <h2 className="mt-3 font-secondary text-4xl font-bold">{config.brand}</h2>
                  </div>
                </div>
                <div className="grid gap-3">
                  {config.services.map((service) => (
                    <a key={service.title} href="#services" style={{ borderColor: `${config.theme.accent}30` }} className="border bg-white p-5 transition-transform hover:-translate-y-1">
                      <p style={{ color: config.theme.accent }} className="text-[10px] font-bold uppercase tracking-[0.16em]">Department</p>
                      <h3 className="mt-3 font-secondary text-2xl font-bold">{service.title}</h3>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : presentation.variant === 'gallery' ? (
          <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
            <Image src={config.image} alt={config.specialty} fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
            <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-end gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
              <div className="pb-10 text-white">
                <p className="mb-6 inline-flex border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                  {config.eyebrow}
                </p>
                <h1 className="font-secondary text-6xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                  {config.headline}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                  {config.subhead}
                </p>
                <a href="#contact" style={{ backgroundColor: config.theme.accent }} className="mt-10 inline-flex px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {presentation.ctaLabel}
                </a>
              </div>
              <div className="grid gap-4 pb-10 sm:grid-cols-3 lg:grid-cols-1">
                {config.packages.map((pkg) => (
                  <div key={pkg.name} className="border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">{pkg.name}</p>
                    <p className="mt-4 font-secondary text-3xl font-bold">{pkg.price}</p>
                    <p className="mt-3 text-sm leading-6 text-white/70">{pkg.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : presentation.variant === 'urgent' || presentation.variant === 'dark' ? (
          <section style={{ backgroundColor: config.theme.dark, color: config.theme.darkText }} className="min-h-[calc(100vh-72px)] py-16">
            <div className={`mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 ${presentation.heroGrid} lg:px-12`}>
              <div>
                <p style={{ color: config.theme.accent }} className="mb-6 text-xs font-bold uppercase tracking-[0.22em]">{config.eyebrow}</p>
                <h1 className="font-secondary text-5xl font-bold leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  {config.headline}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                  {config.subhead}
                </p>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {config.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label} className="border border-white/15 bg-white/[0.04] p-5">
                      <p style={{ color: config.theme.accent }} className="font-secondary text-4xl font-bold">{stat.value}</p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <a href="#contact" style={{ backgroundColor: config.theme.accent, color: presentation.variant === 'dark' ? '#030712' : '#ffffff' }} className="mt-10 inline-flex px-8 py-4 text-xs font-bold uppercase tracking-[0.14em]">
                  {presentation.ctaLabel}
                </a>
              </div>
              <div className="relative">
                <div className="absolute -left-5 -top-5 h-40 w-40 border border-white/15" />
                <div className="relative h-[580px] overflow-hidden border border-white/15">
                  <Image src={config.image} alt={config.specialty} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-black/45 p-5 text-white backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">{config.specialty}</p>
                    <h2 className="mt-3 font-secondary text-4xl font-bold">{config.brand}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className={`mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 ${presentation.heroGrid} lg:px-12`}>
            <div>
              <p style={{ backgroundColor: config.theme.accentSoft, color: config.theme.accentDark }} className="mb-6 inline-flex px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]">
                {config.eyebrow}
              </p>
              <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                {config.headline}
              </h1>
              <p style={{ color: config.theme.muted }} className="mt-7 max-w-2xl text-lg leading-8">
                {config.subhead}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" style={{ backgroundColor: config.theme.text, color: config.theme.background }} className="px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em]">
                  {presentation.ctaLabel}
                </a>
                <a href="#services" style={{ borderColor: config.theme.text, color: config.theme.text }} className="border px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em]">
                  Explore Care
                </a>
              </div>
            </div>

            <div className={`relative ${presentation.heroOrder || ''}`}>
              <div style={{ borderColor: `${config.theme.accent}55`, backgroundColor: config.theme.surface }} className="border p-4 shadow-[0_30px_90px_rgba(0,0,0,0.14)]">
                <div className={`relative h-[560px] overflow-hidden ${presentation.heroMedia}`}>
                  <Image src={config.image} alt={config.specialty} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{config.specialty}</p>
                    <h2 className="mt-3 font-secondary text-4xl font-bold leading-tight">{config.brand}</h2>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: config.theme.accent, color: isDark ? '#030712' : '#ffffff' }} className="absolute -bottom-8 left-6 px-7 py-5 shadow-xl">
                <p className="font-secondary text-4xl font-bold">{config.stats[0].value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">{config.stats[0].label}</p>
              </div>
            </div>
          </section>
        )}

        <section style={{ backgroundColor: config.theme.dark, color: config.theme.darkText }} className="py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4 lg:px-12">
            {config.stats.map((stat) => (
              <div key={stat.label} className="border border-white/10 p-6">
                <p style={{ color: config.theme.accent }} className="font-secondary text-4xl font-bold">{stat.value}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
              <div>
                <p style={{ color: config.theme.accent }} className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">Care Architecture</p>
                <h2 className="font-secondary text-4xl font-bold tracking-[-0.04em] lg:text-6xl">{presentation.servicesTitle}</h2>
              </div>
              <p style={{ color: config.theme.muted }} className="text-lg leading-8">
                Each service is presented with a clear promise, clinical context, and action path so patients understand what to book and why it matters.
              </p>
            </div>

            <div className={`grid gap-5 ${presentation.servicesGrid}`}>
              {config.services.map((service, index) => (
                <article key={service.title} style={{ backgroundColor: index === presentation.featuredService ? config.theme.accent : config.theme.surface, color: index === presentation.featuredService ? '#ffffff' : config.theme.text, borderColor: `${config.theme.accent}24` }} className="min-h-[280px] border p-7">
                  <p className="mb-10 text-xs font-bold uppercase tracking-[0.16em] opacity-60">0{index + 1}</p>
                  <h3 className="font-secondary text-2xl font-bold leading-tight">{service.title}</h3>
                  <p className="mt-5 text-sm leading-7 opacity-75">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" style={{ backgroundColor: config.theme.surface }} className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div className="relative min-h-[520px] overflow-hidden">
              <Image src={config.secondaryImage} alt={`${config.brand} patient experience`} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <p style={{ color: config.theme.accent }} className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">Experience System</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.04em] lg:text-6xl">{presentation.experienceTitle}</h2>
              <div className="mt-10 space-y-5">
                {config.highlights.map((item) => (
                  <div key={item.title} style={{ borderColor: `${config.theme.accent}2f` }} className="border-t pt-5">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p style={{ color: config.theme.muted }} className="mt-3 leading-7">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl font-secondary text-4xl font-bold tracking-[-0.04em] lg:text-6xl">{presentation.journeyTitle}</h2>
              <p style={{ color: config.theme.muted }} className="max-w-md leading-7">
                {presentation.journeyBody}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {config.process.map((step) => (
                <article key={step.step} style={{ borderColor: `${config.theme.accent}30`, backgroundColor: config.theme.surface }} className="border p-8">
                  <p style={{ color: config.theme.accentSoft }} className="font-secondary text-7xl font-bold">{step.step}</p>
                  <h3 className="mt-8 font-secondary text-3xl font-bold">{step.title}</h3>
                  <p style={{ color: config.theme.muted }} className="mt-4 leading-7">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" style={{ backgroundColor: config.theme.dark, color: config.theme.darkText }} className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p style={{ color: config.theme.accent }} className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">{presentation.packageLabel}</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.04em] lg:text-6xl">Clear Ways To Begin.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {config.packages.map((pkg) => (
                <article key={pkg.name} style={{ borderColor: pkg.featured ? config.theme.accent : 'rgba(255,255,255,0.18)', backgroundColor: pkg.featured ? config.theme.surface : 'rgba(255,255,255,0.04)', color: pkg.featured ? config.theme.text : config.theme.darkText }} className="border p-8">
                  {pkg.featured && <p style={{ color: config.theme.accent }} className="mb-5 text-xs font-bold uppercase tracking-[0.16em]">Recommended</p>}
                  <h3 className="font-secondary text-3xl font-bold">{pkg.name}</h3>
                  <p className="mt-4 leading-7 opacity-70">{pkg.body}</p>
                  <p className="mt-8 font-secondary text-5xl font-bold">{pkg.price}</p>
                  <a href="#contact" style={{ backgroundColor: pkg.featured ? config.theme.text : config.theme.accent, color: pkg.featured ? config.theme.surface : '#ffffff' }} className="mt-8 inline-flex w-full justify-center px-5 py-4 text-xs font-bold uppercase tracking-[0.14em]">
                    Start Here
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.65fr] lg:px-12">
            <blockquote className="font-secondary text-4xl font-semibold italic leading-tight tracking-[-0.04em] lg:text-6xl">
              "{config.testimonial.quote}"
            </blockquote>
            <div style={{ backgroundColor: config.theme.surface, borderColor: `${config.theme.accent}30` }} className="border p-8">
              <p style={{ color: config.theme.accent }} className="text-xs font-bold uppercase tracking-[0.18em]">Design Fit</p>
              <h3 className="mt-6 font-secondary text-3xl font-bold">{config.testimonial.name}</h3>
              <p style={{ color: config.theme.muted }} className="mt-3">{config.testimonial.role}</p>
            </div>
          </div>
        </section>

        <section id="contact" style={{ backgroundColor: config.theme.accent, color: '#ffffff' }} className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] opacity-70">Book Appointment</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.04em] lg:text-6xl">Ready To Start The Conversation?</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Phone', config.phone],
                ['Email', config.email],
                ['Location', config.location],
              ].map(([label, value]) => (
                <div key={label} className="border border-white/25 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">{label}</p>
                  <p className="mt-3 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: config.theme.dark, color: config.theme.darkText }} className="py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 text-sm sm:px-8 md:flex-row lg:px-12">
          <p className="font-secondary text-2xl font-bold">{config.brand}</p>
          <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[0.14em] opacity-65">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
