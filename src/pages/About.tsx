import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Users,
  Lightbulb,
  PencilLine,
  Linkedin
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Stush, we believe in the power of storytelling to connect, inspire,
              and transform. Our journey began with a simple idea: to create a platform
              where creativity knows no bounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <Target className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To empower creators worldwide by providing innovative tools and a
                supportive community that nurtures creativity, encourages collaboration,
                and celebrates unique perspectives in storytelling.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <Heart className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To become the world's leading platform for creative expression,
                where every story finds its voice and every creator finds their
                audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Stush who work tirelessly to bring
              your creative vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Hriday Kadam',
                role: 'CEO & Co-founder',
                bio: 'Visionary leader passionate about revolutionizing digital storytelling and building creative communities.',
                linkedin: 'https://www.linkedin.com/in/hridaykadam/',
              },
              {
                name: 'Amrita Kadam',
                role: 'CTO & Co-founder',
                bio: 'Tech innovator focused on creating seamless, intuitive platforms that empower creative expression.',
                linkedin: 'https://www.linkedin.com/in/amrita-kadam-2a293b287/',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in creating a platform that serves and
              empowers our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Community First',
                description:
                  'We believe in the power of community to inspire and support creative growth.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description:
                  'We constantly push boundaries to provide cutting-edge tools for storytelling.',
              },
              {
                icon: Target,
                title: 'Excellence',
                description:
                  'We strive for excellence in everything we do, from design to user experience.',
              },
              {
                icon: Heart,
                title: 'Inclusivity',
                description:
                  'We celebrate diversity and create space for all voices to be heard.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}