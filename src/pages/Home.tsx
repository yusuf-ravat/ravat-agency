	import { Link } from 'react-router-dom';
	import { motion } from 'framer-motion';
	import { useState, useEffect, useCallback } from 'react';
	import { HiRocketLaunch, HiDevicePhoneMobile, HiOutlinePencilSquare } from "react-icons/hi2";
	import { projects as portfolioProjects } from '../data/projects';

	export default function Home() {
		const [currentTestimonial, setCurrentTestimonial] = useState(0);
		const [isPaused, setIsPaused] = useState(false);

		useEffect(() => {
			document.title = 'Home | RavatTechSolution';
		}, []);

		// Dummy data (replace with your own)
		const services = [
			{
				title: 'MVP Development',
				description:
					'Launch your startup with a minimum viable product in weeks, not months.',
				icon: <HiRocketLaunch className="h-7 w-7" />,
			},
			{
				title: 'Web & Mobile Apps',
				description: 'Custom, scalable applications built with modern technologies.',
				icon: <HiDevicePhoneMobile className="h-7 w-7" />,
			},
			{
				title: 'UI/UX Design',
				description: 'Intuitive, user-centered designs for seamless experiences.',
				icon: <HiOutlinePencilSquare className="h-7 w-7" />,
			},
		];

		// Use the first 3 projects for the Home page
		const projects = portfolioProjects.slice(0, 3);

		const testimonials = [
			{
				content: "RavatTechSolution's innovative approach transformed our business.",
				author: { name: 'Alex Thompson', role: 'Innovation Director', image: 'user.png' },
			},
			{
				content: 'They delivered a solution that exceeded our expectations.',
				author: { name: 'Maria Garcia', role: 'CTO', image: 'user.png' },
			},
			{
				content: 'Exceptional attention to detail and technical expertise.',
				author: { name: 'James Wilson', role: 'Founder', image: 'user.png' },
			},
		];

		// Testimonial carousel logic
		const nextTestimonial = useCallback(
			() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length),
			[testimonials.length]
		);
		const handleInteraction = () => {
			setIsPaused(true);
			setTimeout(() => setIsPaused(false), 10000);
		};
		useEffect(() => {
			let interval: ReturnType<typeof setInterval> | undefined;
			if (!isPaused) {
				interval = setInterval(nextTestimonial, 5000);
			}
			return () => {
				if (interval !== undefined) {
					clearInterval(interval);
				}
			};
		}, [isPaused, nextTestimonial]);

		return (
			<div className="bg-white pt-20">
				{/* HERO */}
				<section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-white">
					<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
						{/* Left */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="flex-1 text-center lg:text-left"
						>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
								Build. Launch. <span className="text-primary-600">Grow.</span>
							</h1>
							<p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
								We craft digital products that drive results. From MVPs to enterprise solutions, our
								team delivers innovation at every step.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Link
									to="/contact"
									className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-700 transition"
								>
									Start Your Project
								</Link>
								<Link
									to="/portfolio"
									className="inline-flex items-center justify-center rounded-full border border-primary-600 px-8 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition"
								>
									View Portfolio
								</Link>
							</div>
						</motion.div>
						{/* Right */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="flex-1 flex justify-center"
						>
							<img
								src="/hero-image.svg"
								alt="Digital Innovation"
								className="w-full max-w-md rounded-2xl shadow-xl"
							/>
						</motion.div>
					</div>
				</section>

				{/* SERVICES */}
				<section className="py-16 bg-gray-50">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold text-gray-900 text-center mb-5">Our Services</h2>
						<p className="max-w-2xl mx-auto text-center text-gray-600 mb-6">
							Discover how our expert team can help you turn your ideas into reality. From MVP development to full-scale web and mobile apps, we deliver solutions tailored to your business goals.
						</p>
						<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
							{services.map((service, idx) => (
								<motion.div
									key={service.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.1 }}
									className="group min-w-[280px] sm:min-w-[320px] flex-1 flex-shrink-0 flex-col rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200 hover:shadow-lg snap-center"
								>
									<div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
										{service.icon}
									</div>
									<h3 className="text-xl font-semibold text-gray-900 text-center">
										{service.title}
									</h3>
									<p className="mt-3 text-gray-600 text-center">{service.description}</p>
									<div className="mt-6 text-center">
										<Link to="/services" className="text-primary-600 font-medium hover:underline">
											Learn more &rarr;
										</Link>
									</div>
								</motion.div>
							))}
						</div>
						<div className="mt-10 text-center">
							<Link
								to="/Services"
								className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow hover:bg-primary-700 transition"
							>
								View All Services
							</Link>
						</div>
					</div>
				</section>

				{/* PROJECTS */}
				<section className="py-16 bg-white">
	<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<h2 className="text-3xl font-bold text-gray-900 text-center mb-5">Featured Projects</h2>
		<p className="max-w-2xl mx-auto text-center text-gray-600 mb-6">
		Explore a selection of our recent work. Each project highlights our commitment to quality, innovation, and delivering real results for our clients.
		</p>
		<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
		{projects.map((project, idx) => (
			<motion.article
			key={project.name}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: idx * 0.1 }}
			className="group min-w-[280px] sm:min-w-[320px] flex-1 flex-shrink-0 flex flex-col h-full rounded-2xl bg-gray-50 p-6 shadow ring-1 ring-gray-200 hover:shadow-lg snap-center"
			>
			{/* Project Name */}
			<h3 className="text-lg font-semibold text-primary-700 mb-2 group-hover:text-primary-500 transition">
				{project.name}
			</h3>
			{/* Technologies */}
			<div className="flex flex-wrap gap-2 mb-3">
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
			<p className="mt-2 text-gray-600 text-sm flex-1">{project.description}</p>
			{/* CTA */}
			<div className="mt-4">
				<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block rounded-full bg-primary-600 px-6 py-2 text-white font-semibold text-sm shadow hover:bg-primary-700 transition text-center"
				>
				View Project
				</a>
			</div>
			</motion.article>
		))}
		</div>
		<div className="mt-10 text-center">
		<Link
			to="/portfolio"
			className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3 text-base font-semibold text-white shadow hover:bg-primary-700 transition"
		>
			View All Projects
		</Link>
		</div>
	</div>
	</section>

				{/* PROJECT DEVELOPMENT TIMELINE */}
				<section className="py-16 bg-gray-50">
	<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<h2 className="text-3xl font-bold text-gray-900 text-center mb-5">Our Project Development Timeline</h2>
		<p className="max-w-2xl mx-auto text-center text-gray-600 mb-12">
		From idea to launch, here’s how we bring your vision to life.
		</p>
		<div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative">
		{/* Timeline Line */}
		<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-100 z-0" style={{transform: 'translateY(-50%)'}} />
		{/* Timeline Steps */}
		{[
			{
			title: "Discovery & Planning",
			desc: "We start by understanding your goals, users, and requirements to create a clear project roadmap.",
			icon: <span className="inline-block bg-primary-600 text-white rounded-full p-3"><HiRocketLaunch className="w-6 h-6" /></span>
			},
			{
			title: "UI/UX Design",
			desc: "Our designers craft intuitive, engaging interfaces and user flows tailored to your audience.",
			icon: <span className="inline-block bg-primary-600 text-white rounded-full p-3"><HiOutlinePencilSquare className="w-6 h-6" /></span>
			},
			{
			title: "Development",
			desc: "Our engineers build robust, scalable solutions using modern technologies and best practices.",
			icon: <span className="inline-block bg-primary-600 text-white rounded-full p-3"><HiDevicePhoneMobile className="w-6 h-6" /></span>
			},
			{
			title: "Testing & QA",
			desc: "We rigorously test your product to ensure quality, performance, and security before launch.",
			icon: <span className="inline-block bg-primary-600 text-white rounded-full p-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" /></svg></span>
			},
			{
			title: "Launch & Support",
			desc: "We deploy your product and provide ongoing support to help you grow and succeed.",
			icon: <span className="inline-block bg-primary-600 text-white rounded-full p-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0a9 9 0 0118 0z" /></svg></span>
			}
		].map((step, idx, arr) => (
			<div key={step.title} className="relative z-10 flex-1 flex flex-col items-center text-center">
			<div className="flex items-center justify-center mb-4">
				{step.icon}
			</div>
			<div className="flex items-center justify-center mb-2">
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold text-lg border-2 border-primary-200">{idx + 1}</span>
			</div>
			<h3 className="font-semibold text-lg text-primary-700 mb-1">{step.title}</h3>
			<p className="text-gray-600 text-sm">{step.desc}</p>
			{/* Connector for mobile */}
			{idx < arr.length - 1 && (
				<div className="lg:hidden w-1 h-10 bg-primary-100 mx-auto my-4 rounded"></div>
			)}
			</div>
		))}
		</div>
	</div>
	</section>

				{/* TESTIMONIALS */}
				<section className="py-16 bg-primary-50">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-5">What Our Clients Say</h2>
						<p className="max-w-2xl mx-auto text-center text-gray-600 mb-6">
	Hear directly from our clients about their experiences working with us and the impact our solutions have made on their businesses.
	</p>
						<motion.div
							key={currentTestimonial}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
						>
							<p className="text-lg text-gray-700 mb-6">
								"{testimonials[currentTestimonial].content}"
							</p>
							<div className="flex items-center justify-center gap-4">
								<img
									className="h-12 w-12 rounded-full bg-gray-100"
									src={testimonials[currentTestimonial].author.image}
									alt={testimonials[currentTestimonial].author.name}
								/>
								<div className="text-left">
									<div className="font-semibold text-gray-900">
										{testimonials[currentTestimonial].author.name}
									</div>
									<div className="text-sm text-gray-500">
										{testimonials[currentTestimonial].author.role}
									</div>
								</div>
							</div>
						</motion.div>
						<div className="mt-6 flex justify-center gap-2">
							{testimonials.map((_, idx) => (
								<button
									key={idx}
									onClick={() => {
										setCurrentTestimonial(idx);
										handleInteraction();
									}}
									className={`h-2.5 w-6 rounded-full transition-all duration-300 ${
										idx === currentTestimonial
											? 'bg-primary-600'
											: 'bg-gray-300 hover:bg-gray-400'
									}`}
									aria-label={`Go to testimonial ${idx + 1}`}
								/>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-16 bg-gradient-to-br from-primary-600 to-primary-400 text-white text-center">
					<div className="mx-auto max-w-2xl px-4">
						<h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vision?</h2>
						<p className="mb-8 text-lg">
							Let's create something extraordinary together. Your next innovation starts here.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center rounded-full bg-white text-primary-700 px-8 py-3 text-base font-semibold shadow hover:bg-primary-100 transition"
							>
								Start Your Project
							</Link>
							<Link
								to="/portfolio"
								className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-base font-semibold text-white hover:bg-primary-500 transition"
							>
								Explore Our Work
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}