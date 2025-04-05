import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  Sparkles, 
  MessageSquare, 
  Palette, 
  Share2,
  Users,
  Lightbulb,
  Target,
  Heart,
  Clock,
  ThumbsUp,
  Shuffle,
  Trophy,
  Zap,
  Mail
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const Counter = ({ from, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, value => Math.round(value));
  
  React.useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, []);

  return <motion.span className="counter">{rounded}</motion.span>;
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setErrorMessage('This email is already on the waitlist.');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen pt-16 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-24">
            <motion.h1 
              className="text-[64px] leading-tight font-bold text-gray-900 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Reimagine stories,{' '}
              <span className="gradient-text">one twist</span>
              <br />
              <span className="gradient-text">at a time.</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join a community of creative minds where every story finds its unique voice.
              Transform your narratives into unforgettable experiences.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-lg bg-white/80 backdrop-blur border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-3 bg-gradient-to-r from-[#F15A24] to-[#ff7e47] text-white rounded-lg hover:from-[#ff7e47] hover:to-[#F15A24] transition-all duration-300 disabled:opacity-50 font-medium whitespace-nowrap shadow-lg hover:shadow-xl"
                >
                  Join Waitlist
                </button>
              </div>
              {status === 'success' && (
                <p className="text-green-600 text-sm">Thank you for joining our waitlist! We'll keep you updated on our launch.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}
              <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <Sparkles className="w-4 h-4 text-[#F15A24]" />
                <Counter from={0} to={800} /> members already waiting!
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-orange-50/30 to-white/0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Your creative journey starts here
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: '100-Word Twists',
                description: 'Create concise 100-word twists to reshape narratives from books, movies, and shows. Edit within a 5-minute window before your twist is locked in.',
              },
              {
                icon: ThumbsUp,
                title: 'Gain Visibility',
                description: 'The most liked twists rise to the top and get featured. Share your unique perspective and get recognized by the community.',
              },
              {
                icon: Shuffle,
                title: 'Random Threads',
                description: 'Join Random Threads to contribute to collaborative stories. Work with others to create unexpected narrative directions.',
              },
              {
                icon: Trophy,
                title: 'Leaderboards',
                description: 'Compete for top spots on our leaderboards. Get recognized as a top contributor and build your creative reputation.',
              },
              {
                icon: Zap,
                title: 'Daily Challenges',
                description: 'Participate in daily writing challenges. Push your creative boundaries and stay engaged with new prompts.',
              },
              {
                icon: Mail,
                title: 'Stay Connected',
                description: 'Receive daily email updates about stories you follow. Never miss a twist in your favorite narratives.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="step-card rounded-xl p-6 relative glow-on-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon mb-4">
                  <step.icon className="w-12 h-12 text-[#F15A24]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Stush</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the tools and features that make Stush the perfect platform
              for your creative journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Collaborative Writing',
                description:
                  'Work together with other writers to create amazing stories.',
              },
              {
                icon: Palette,
                title: 'Creative Tools',
                description:
                  'Access powerful tools designed specifically for storytelling.',
              },
              {
                icon: Share2,
                title: 'Share Your Stories',
                description:
                  'Share your creations with a community of passionate writers.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card gradient-border p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <feature.icon className="w-12 h-12 text-[#F15A24] mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white/0 via-orange-50/30 to-white/0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
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
                className="step-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon mb-4">
                  <value.icon className="w-12 h-12 text-[#F15A24]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}