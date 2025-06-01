import { motion } from 'framer-motion';
import { FaLightbulb, FaHandsHelping, FaAward, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const values = [
  {
    name: 'Innovation',
    description:
      'We stay at the forefront of technology, constantly exploring new solutions and approaches to deliver cutting-edge products.',
    icon: FaLightbulb,
  },
  {
    name: 'Quality',
    description:
      'We maintain high standards in everything we do, from code quality to user experience, ensuring reliable and maintainable solutions.',
    icon: FaAward,
  },
  {
    name: 'Collaboration',
    description:
      'We work closely with our clients, treating their challenges as our own and building strong partnerships for long-term success.',
    icon: FaHandsHelping,
  },
  {
    name: 'Impact',
    description:
      "We focus on creating solutions that make a real difference, whether it's streamlining processes or enabling new possibilities.",
    icon: FaRocket,
  },
];

const uniquePoints = [
  {
    name: 'Technical Expertise',
    description:
      'Hands-on experience in full-stack development, image processing, and event management platforms, delivering robust solutions like Duplicate Image Finder and EventSnap Organizer.',
    icon: FaLightbulb,
  },
  {
    name: 'Rural Roots, Global Reach',
    description:
      'Localized solutions with Gujarati support for rural clients, combined with a modern tech stack serving global markets.',
    icon: FaHandsHelping,
  },
  {
    name: 'Client-Centric Approach',
    description:
      'Agile development with transparent communication, prioritizing your goals from ideation to launch.',
    icon: FaRocket,
  },
  {
    name: 'Affordability & Scalability',
    description:
      'Solutions optimized for lean budgets, ensuring your project grows with your business without compromising quality.',
    icon: FaAward,
  },
];

const teamMembers = [
  {
    name: 'Yusuf Ravat',
    role: 'Founder & Full Stack Developer',
    image: 'user.png',
    bio: 'Yusuf is the visionary behind Ravat Agency, with a deep passion for crafting robust and scalable web applications using .NET Core, AngularJS, and MS SQL.',
  },
  {
    name: 'Vishal Patel',
    role: 'Full Stack Developer',
    image: 'user.png',
    bio: 'Vishal excels at bringing ideas to life, seamlessly working across front-end and back-end technologies to deliver exceptional user experiences.',
  },
  {
    name: 'Shivang Patel',
    role: 'App Developer',
    image: 'user.png',
    bio: 'Shivang is our mobile expert, creating intuitive and high-performing applications that delight users on both iOS and Android platforms.',
  },
  {
    name: 'Saurav Kasundra',
    role: 'UI/UX Designer',
    image: 'user.png',
    bio: 'Saurav designs captivating and user-centric interfaces, ensuring every interaction is smooth, engaging, and aesthetically pleasing.',
  },
  {
    name: 'Nirmit Trivedi',
    role: 'QA Engineer',
    image: 'user.png',
    bio: 'Nirmit is our quality guardian, meticulously testing and ensuring that every product we deliver is flawless and performs beyond expectations.',
  },
];

export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-8 sm:pt-32 sm:pb-10 lg:px-8">
        <div className="mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-primary-700 sm:text-5xl text-center"
          >
            About Ravat Agency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-2xl font-semibold text-primary-500 text-center"
          >
            Empowering Businesses with Innovative Tech Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            <p>
              Founded in 2025 by a passionate full-stack developer from a rural village in Gujarat, Ravat Agency bridges the gap between innovative technology and real-world impact. Inspired by a vision to empower businesses—whether startups chasing big dreams or local entrepreneurs transforming rural communities—we deliver cutting-edge digital solutions that drive growth. Our founder’s journey, from mastering .NET Core, AngularJS, and MS SQL to building tools like Duplicate Image Finder and EventSnap Organizer, fuels our commitment to creating scalable, user-focused applications.
            </p>
            <p className="mt-4">
              At Ravat Agency, we believe technology should be accessible and impactful. Our roots in rural India shape our approach, ensuring we craft solutions that resonate with both global markets and local needs. From MVPs launched in weeks to custom web and mobile apps, we’re here to turn your vision into reality.
            </p>
            <p className="mt-4 font-semibold">
              Our Mission: To empower startups, SMEs, and rural businesses with affordable, scalable, and innovative tech solutions that drive success and create lasting impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Sets Us Apart
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our unique blend of technical expertise, client focus, and community-driven innovation ensures your project succeeds.
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {uniquePoints.map((point) => (
            <motion.div
              key={point.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * uniquePoints.indexOf(point) }}
              className="flex flex-col items-start rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary-600">
                  <point.icon className="h-10 w-10" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{point.name}</h3>
              </div>
              <p className="text-base text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Foundation</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            The Values We Live By
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to these core principles ensures every project we undertake is handled with integrity, excellence, and a focus on lasting impact.
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * values.indexOf(value) }}
              className="flex flex-col items-start rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary-600">
                  <value.icon className="h-10 w-10" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{value.name}</h3>
              </div>
              <p className="text-base text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet the Brilliant Minds at Ravat Agency
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our diverse team of experts is the heart of our innovation, bringing together a wealth of experience and passion to deliver exceptional results.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.li
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-300"
            >
              <img
                className="w-32 h-32 rounded-full object-cover border-4 border-primary-200 group-hover:border-primary-400 transition-colors duration-300"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-6 text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-primary-600 font-semibold text-center">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600 text-center">{member.bio}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Get to Know Us Section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-900"
        >
          Get to Know Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-lg leading-8 text-gray-600"
        >
          Ready to transform your idea into reality? Whether you’re a startup building an MVP, an SME needing a custom app, or a rural business seeking digital solutions, Ravat Agency is your partner for success.{' '}
          <Link to="/portfolio" className="text-primary-600 hover:underline">
            Explore our portfolio
          </Link>{' '}
          or{' '}
          <Link to="/contact" className="text-primary-600 hover:underline">
            contact us
          </Link>{' '}
          for a free consultation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-6"
        >
          <Link
            to="/contact"
            className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>

      {/* Extra space at the end of the page */}
      <div className="h-16 sm:h-8"></div>

      {/* Commented Stats Section for Future Use */}
      {/*
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Team Members', value: '10+' },
            { label: 'Client Satisfaction', value: '98%' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
      */}
    </div>
  );
}