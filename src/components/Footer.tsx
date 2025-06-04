import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Web Development', href: '/services#web' },
    { name: 'Mobile Apps', href: '/services#mobile' },
    { name: 'UI/UX Design', href: '/services#design' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/ravattechsolution/', // Make sure this is your actual Instagram URL!
      icon: (props: React.SVGProps<SVGSVGElement>) => <FaInstagram {...props} />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/yusuf-ravat',
      icon: (props: React.SVGProps<SVGSVGElement>) => <FaGithub {...props} />

    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yusuf-ravat/',
      icon: (props: React.SVGProps<SVGSVGElement>) => <FaLinkedinIn {...props} />

    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-12 w-auto sm:h-22" src="/logo.png" alt="RavatTechSolution" />
            <p className="text-sm leading-6 text-gray-300">
              Empowering businesses with innovative technology solutions. We build scalable, secure, and
              user-friendly applications that drive growth and success.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul> 
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="tel:+91 9714405312" className="text-sm leading-6 text-gray-300 hover:text-primary-400">
                      +91 9714405312
                    </a>
                  </li>
                  <li>
<a href="mailto:ravattechsolution@gmail.com" className="text-sm leading-6 text-gray-300 hover:text-primary-400">
                      ravatagency@gmail.com
                    </a>
                  </li>
                  {/* <li className="text-sm leading-6 text-gray-300">
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-800 pt-4">
          <p className="text-xs leading-5 text-gray-400">
&copy; {new Date().getFullYear()} Ravat Tech Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}