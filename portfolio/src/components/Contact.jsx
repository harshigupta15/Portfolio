import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from './SectionWrapper';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'harshig75@gmail.com', href: 'mailto:harshig75@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Greater Noida, Uttar Pradesh', href: '#' },
  { icon: Phone, label: 'Phone', value: '+91 7455991438', href: 'tel:+917455991438' },
];

function InputField({ label, name, type = 'text', placeholder, value, onChange, error, multiline }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} <span className="text-indigo-400">*</span>
      </label>
      <Tag
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={multiline ? 5 : undefined}
        className={`form-input w-full px-4 py-3 rounded-xl text-sm resize-none ${multiline ? 'min-h-[120px]' : ''} ${error ? 'border-red-500/50 focus:border-red-500' : ''}`}
      />
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus('loading');
    // Simulate network request
    await new Promise((r) => setTimeout(r, 2000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" className="bg-slate-900/30">
      <SectionTitle
        label="Let's Talk"
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message!"
      />

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Left info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let's build something great
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I'm currently open to freelance projects, full-time roles, and exciting collaborations.
              My response time is typically within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl border border-slate-700/40 hover:border-indigo-500/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Status badges */}
          <div className="p-4 glass-card rounded-xl border border-green-500/20">
            <div className="flex items-center gap-2 text-sm text-green-400 font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently available
            </div>
            <p className="text-xs text-slate-500">Open to full-time roles & freelance projects</p>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-3">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl border border-green-500/20 p-10 text-center flex flex-col items-center gap-4 h-full justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <CheckCircle size={30} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Message Sent!</h3>
              <p className="text-slate-400 text-sm max-w-xs">Thanks for reaching out! I'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-colors"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl border border-slate-700/40 p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="Name" name="name" placeholder="ABC XYZ" value={form.name} onChange={handleChange} error={errors.name} />
                <InputField label="Email" name="email" type="email" placeholder="abc@example.com" value={form.email} onChange={handleChange} error={errors.email} />
              </div>
              <InputField label="Subject" name="subject" placeholder="Project collaboration / Job opportunity..." value={form.subject} onChange={handleChange} error={errors.subject} />
              <InputField label="Message" name="message" placeholder="Tell me about your project or inquiry..." value={form.message} onChange={handleChange} error={errors.message} multiline />

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
