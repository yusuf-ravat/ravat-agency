import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | Ravat Agency';
  }, []);

  return (
    <div className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-primary-700 sm:text-5xl"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-2xl font-semibold text-primary-500"
          >
            Featured Projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            Explore our portfolio of successful projects that showcase our expertise in building
            scalable and user-friendly applications.
          </motion.p>
        </div>
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col h-full rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition group p-6"
              >
                {/* Project Name */}
                <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-500 transition">
                  {project.name}
                </h3>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 border border-primary-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Description */}
                <p className="text-gray-600 text-sm flex-1 mb-6">{project.description}</p>
                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block rounded-full bg-primary-600 px-6 py-2 text-white font-semibold text-sm shadow hover:bg-primary-700 transition text-center"
                >
                  View Project
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}