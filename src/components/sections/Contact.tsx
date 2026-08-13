import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MapPin, Mail, Phone } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    if (!supabase.from) {
      setStatus('error');
      setErrorMsg('Messaging is temporarily unavailable. Please email me directly.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const inputBase =
    'w-full rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-all duration-200 focus:border-accent-500 focus:ring-1 focus:ring-accent-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]';

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="06 / CONTACT"
          title={<>Get In <span className="text-accent-500 text-glow">Touch</span></>}
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-800 glass-strong p-8">
              <div>
                <h3 className="font-display text-2xl font-black text-neutral-50">
                  Let&apos;s build something <span className="text-accent-500 text-glow">futuristic</span>.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  I&apos;m currently open to internships, freelance opportunities and
                  collaborations. Whether you have a question or just want to connect,
                  feel free to reach out.
                </p>

                <div className="mt-8 space-y-4">
                  <InfoRow icon={<MapPin size={18} />} label="Location" value="Tamil Nadu, India" />
                  <InfoRow icon={<Mail size={18} />} label="Email" value="sivaprakash@example.com" />
                  <InfoRow icon={<Phone size={18} />} label="Availability" value="Open to opportunities" />
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-accent-500/30 bg-accent-600/10 p-4">
                <p className="font-mono text-xs text-accent-300">
                  STATUS: <span className="text-accent-400">ONLINE</span>
                  <span className="ml-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent-500 align-middle" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl border border-neutral-800 glass-strong p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputBase}
                  disabled={status === 'loading'}
                />
              </Field>
              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputBase}
                  disabled={status === 'loading'}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Subject">
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputBase}
                  disabled={status === 'loading'}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputBase} resize-none`}
                  disabled={status === 'loading'}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              data-cursor="hover"
              className="btn btn-lg btn-primary w-full justify-center disabled:opacity-60 mt-6"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-300"
              >
                <CheckCircle2 size={16} /> Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                <AlertCircle size={16} /> {errorMsg}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-neutral-400">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900/60 border border-accent-500/25 text-accent-400 glow-red-sm">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</p>
        <p className="text-sm text-neutral-200">{value}</p>
      </div>
    </div>
  );
}
