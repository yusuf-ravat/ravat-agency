import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' // Add this import
import { useEffect } from 'react';

const services = [
  {
    title: 'MVP Development',
    tagline: 'Launch fast, scale smart.',
    description:
      'Launch your startup with a minimum viable product (MVP) built quickly and affordably. We transform your ideas into functional prototypes to validate concepts and attract investors.',
    features: [
      'Rapid prototyping in 4–8 weeks',
      'Scalable architecture (React, .NET Core, Node.js)',
      'User-centric UI/UX design',
      'Cost-effective for lean budgets',
      'Feedback-driven iterations',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // MVP/Startup
  },
  {
    title: 'Web Application Development',
    tagline: 'Custom, high-performance web apps.',
    description:
      'Build custom, high-performance web applications tailored to your business needs. From SaaS platforms to internal tools, we deliver secure, scalable, and responsive solutions.',
    features: [
      'Tailored solutions (React, AngularJS, .NET Core)',
      'Responsive, mobile-friendly design',
      'Secure API integrations',
      'Optimized for <2-second load times',
      'JWT-based authentication',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Web App
  },
  {
    title: 'Mobile Application Development',
    tagline: 'Cross-platform apps for iOS & Android.',
    description:
      'Create cross-platform mobile apps for iOS and Android that engage users and drive business growth. We use React Native or Flutter for fast development and native-like performance.',
    features: [
      'Single codebase (React Native/Flutter)',
      'Push notifications',
      'Offline functionality',
      'App Store & Play Store deployment',
      'Custom features (e.g., image processing)',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // Mobile App
  },
  {
    title: 'UI/UX Design',
    tagline: 'Intuitive, beautiful interfaces.',
    description:
      'Design intuitive, visually appealing interfaces that enhance user experiences and drive engagement. Our designs prioritize usability, accessibility, and brand consistency.',
    features: [
      'Wireframing & prototyping (Figma)',
      'User-centered design',
      'Responsive layouts',
      'Accessibility (WCAG-compliant)',
      'Brand integration',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // UI/UX
  },
  {
    title: 'Tech Consulting',
    tagline: 'Strategic digital guidance.',
    description:
      'Provide strategic guidance to businesses navigating digital transformation. We help startups and SMEs choose the right tech stack, optimize workflows, and plan scalable solutions.',
    features: [
      'Tech stack selection',
      'Roadmap planning',
      'Cost optimization',
      'Scalability advice',
      'Training & support',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Consulting
  },
  {
    title: 'Agri-Tech Solutions',
    tagline: 'Empowering rural businesses.',
    description:
      'Empower rural businesses with custom tech solutions, such as e-commerce platforms, inventory management, or farm-to-market apps, tailored to local needs in regions like Gujarat.',
    features: [
      'Gujarati language support',
      'Inventory & sales tracking',
      'E-commerce for farmers',
      'Offline functionality',
      'Data-driven insights',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80', // Agriculture
  },

  {
    title: 'Image Processing Solutions',
    tagline: 'Smart image analysis & management.',
    description:
      'Develop specialized applications for image analysis, recognition, or management, leveraging algorithms like dHash or SSIM.',
    features: [
      'Duplicate detection',
      'Image optimization',
      'Custom algorithms',
      'Cloud integration',
      'User-friendly dashboards',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // Alternative: computer vision
  },
  {
    title: 'Event Management Software',
    tagline: 'Streamline your events.',
    description:
      'Create platforms to streamline event planning, photo sharing, or attendee management, inspired by our EventSnap Organizer project.',
    features: [
      'Event planning tools',
      'Photo sharing galleries',
      'Real-time updates',
      'Custom dashboards',
      'Calendar & social integration',
    ],
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', // Events
  },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Ravat Agency';
  }, []);

  return (
    <div className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Optional: Add a decorative background image */}
      {/* <div className="absolute inset-0 bg-[url('/images/banner-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none" /> */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-primary-700 sm:text-5xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-2xl font-semibold text-primary-500"
          >
            Comprehensive Tech Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            We offer end-to-end development services, from ideation to deployment, ensuring your
            product is built with the latest technologies and best practices.
          </motion.p>
        </div>
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-white/90 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition group"
              >
                <div className="h-56 w-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-t-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold text-primary-700">{service.title}</h3>
                  <p className="mt-1 text-primary-500 text-sm font-medium">{service.tagline}</p>
                  <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
                  <ul className="mt-4 mb-4 space-y-2 text-gray-700 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 text-primary-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-auto inline-block rounded-lg bg-primary-600 px-4 py-2 text-white font-semibold text-sm shadow hover:bg-primary-500 transition text-center"
                  >
                    {service.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}