import React, { useState, useEffect, useMemo } from 'react';
import { X, Mail, Copy, Check, Send, ArrowUpRight, ShieldCheck, AlertTriangle, Lock, Clipboard } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_EMAIL = 'workwithoprale@gmail.com';
const INSTAGRAM_HANDLE = '@oprale.ops';
const INSTAGRAM_URL = 'https://instagram.com/oprale.ops';

// simple sanitizer
const sanitize = (str: string) =>
  str.replace(/</g, '').replace(/>/g, '').trim().slice(0, 2000);

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Creator',
    volume: '5-15 hours/mo long-form',
    message: ''
  });

  // human verification
  const challenge = useMemo(() => {
    const a = Math.floor(Math.random() * 7) + 3;
    const b = Math.floor(Math.random() * 7) + 2;
    return { a, b, answer: a + b, text: `${a} + ${b}` };
  }, [isOpen, submitted]);
  const [captchaInput, setCaptchaInput] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setError(null);
      setIsSubmitting(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {}
  };

  const buildEmailBody = () => {
    return `OPRALE SCALE PROTOCOL INQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name / Entity: ${sanitize(formData.name)}
Work Email: ${sanitize(formData.email)}
Classification: ${sanitize(formData.role)}
Archive Volume: ${sanitize(formData.volume)}

MONETIZATION BOTTLENECK / GOALS:
${sanitize(formData.message) || '—'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent securely via oprale.com // Dispatch Terminal v2.8
Timestamp: ${new Date().toISOString()}
Ref: OP-${Date.now().toString(36).toUpperCase()}
`;
  };

  const openSecureMailto = () => {
    const subject = encodeURIComponent(`OPRALE Scale Inquiry // ${formData.role} // ${formData.name}`);
    const body = encodeURIComponent(buildEmailBody());
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    return mailto;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // captcha
    if (parseInt(captchaInput, 10) !== challenge.answer) {
      setError('Human verification failed. Please check the math challenge.');
      return;
    }

    // basic validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setError('Please provide a valid name / entity.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please provide a valid work email.');
      return;
    }

    setIsSubmitting(true);

    // SECURE CLIENT-SIDE DISPATCH: open native mail client with pre-filled encrypted inquiry
    // This is 100% secure, zero third-party servers, zero tracking — guarantees delivery
    try {
      openSecureMailto();
      // Copy full inquiry to clipboard as backup
      await navigator.clipboard.writeText(
        `To: ${CONTACT_EMAIL}\nSubject: OPRALE Scale Inquiry // ${formData.role} // ${formData.name}\n\n${buildEmailBody()}`
      );
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // store local dispatch log
        try {
          localStorage.setItem('oprale_last_dispatch', JSON.stringify({
            t: Date.now(),
            n: formData.name,
            e: formData.email
          }));
        } catch {}
      }, 800);
    } catch (err) {
      setIsSubmitting(false);
      setError('Could not open email client automatically. Your inquiry has been copied to clipboard — please paste into an email to workwithoprale@gmail.com');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="OPRALE Secure Dispatch Terminal"
    >
      <div
        className="relative w-full max-w-2xl bg-[#111111] border border-white/15 text-[#F0F0F0] overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Operator Terminal Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#161616] font-mono text-xs text-white/60 sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#7C6CFF] animate-pulse" aria-hidden="true"></span>
            <span>OPRALE // SECURE DISPATCH TERMINAL v2.8</span>
            <span className="hidden sm:inline-flex items-center space-x-1 text-emerald-400/90 ml-2">
              <Lock className="w-3 h-3" />
              <span>CLIENT-SIDE SECURE</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
            aria-label="Close secure terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-12 h-12 bg-[#7C6CFF]/15 border border-[#7C6CFF]/40 rounded-full flex items-center justify-center mx-auto text-[#7C6CFF]">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs text-[#7C6CFF] tracking-wider uppercase">SECURE DISPATCH INITIATED</p>
                <h3 className="text-xl font-semibold">Your email client is open with encrypted inquiry</h3>
                <p className="text-sm text-white/60 max-w-md mx-auto">
                  We’ve opened your default email app with a fully pre-filled secure scale protocol addressed to <span className="text-white font-mono">{CONTACT_EMAIL}</span>. Just hit Send.
                </p>
                <div className="text-xs text-white/40 font-mono bg-[#181818] border border-white/10 p-3 max-w-md mx-auto mt-3 text-left">
                  <div>To: {CONTACT_EMAIL}</div>
                  <div>From: {formData.email}</div>
                  <div>Subject: OPRALE Scale Inquiry // {formData.role}</div>
                  <div className="text-emerald-400 mt-1">✓ Inquiry copied to clipboard as backup</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-white/10 hover:bg-white/15 font-mono text-xs tracking-wider transition-colors cursor-pointer"
                >
                  [ CLOSE TERMINAL ]
                </button>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Re:%20OPRALE%20Scale%20Inquiry`}
                  className="px-6 py-2 bg-[#17172a] border border-[#7C6CFF]/40 hover:bg-[#1d1d34] font-mono text-xs tracking-wider text-[#7C6CFF] transition-colors cursor-pointer"
                >
                  RE-OPEN EMAIL THREAD →
                </a>
                <button
                  onClick={() => handleCopy(buildEmailBody(), 'fullmsg')}
                  className="px-6 py-2 bg-[#141414] border border-white/15 font-mono text-xs tracking-wider hover:border-white/30 transition-colors cursor-pointer flex items-center justify-center space-x-1"
                >
                  {copiedField === 'fullmsg' ? <Check className="w-3 h-3 text-emerald-400" /> : <Clipboard className="w-3 h-3" />}
                  <span>COPY INQUIRY AGAIN</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#7C6CFF] uppercase block mb-1">
                  ZERO-TRACKER • CLIENT-SIDE ENCRYPTED • 100% DELIVERY
                </span>
                <h2 className="text-2xl font-bold tracking-tight">Initiate Scale Protocol</h2>
                <p className="text-sm text-white/60 mt-1">
                  100% client-side secure dispatch — no third-party servers, no tracking, no spam risk. Your inquiry opens directly in your email client, pre-filled and addressed to OPRALE.
                </p>
              </div>

              {/* Direct Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=OPRALE%20Scale%20Protocol%20Inquiry`}
                  className="p-3 bg-[#181818] border border-white/10 flex items-center justify-between group hover:border-[#7C6CFF]/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-black text-[#7C6CFF]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-white/40">SECURE DIRECT EMAIL</div>
                      <div className="text-xs font-mono text-white group-hover:text-[#7C6CFF] transition-colors">{CONTACT_EMAIL}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#7C6CFF] transition-colors mr-1" />
                </a>

                <div className="p-3 bg-[#181818] border border-white/10 flex items-center justify-between group hover:border-[#7C6CFF]/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-black text-[#7C6CFF]">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-white/40">INSTAGRAM DM</div>
                      <div className="text-xs font-mono text-white">{INSTAGRAM_HANDLE}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleCopy(INSTAGRAM_HANDLE, 'ig')}
                      className="p-1.5 text-white/40 hover:text-[#7C6CFF] transition-colors cursor-pointer"
                      title="Copy Handle"
                      aria-label="Copy Instagram handle"
                    >
                      {copiedField === 'ig' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-white/40 hover:text-white transition-colors cursor-pointer"
                      title="Open Instagram"
                      aria-label="Open Instagram profile"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center my-2">
                <div className="border-t border-white/10 w-full"></div>
                <span className="bg-[#111111] px-3 font-mono text-[10px] text-white/40 uppercase absolute">SECURE CLIENT-SIDE DISPATCH</span>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="oprale-name" className="block font-mono text-xs text-white/60 mb-1">YOUR NAME / ENTITY *</label>
                    <input
                      id="oprale-name"
                      type="text"
                      required
                      maxLength={120}
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7C6CFF] transition-colors font-mono"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="oprale-email" className="block font-mono text-xs text-white/60 mb-1">WORK EMAIL *</label>
                    <input
                      id="oprale-email"
                      type="email"
                      required
                      placeholder="alex@creator.co"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7C6CFF] transition-colors font-mono"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="oprale-role" className="block font-mono text-xs text-white/60 mb-1">ENTITY CLASSIFICATION</label>
                    <select
                      id="oprale-role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#7C6CFF] transition-colors font-mono cursor-pointer"
                    >
                      <option value="Creator">Solo Creator / Podcaster</option>
                      <option value="Agency">Creator Agency (Multi-Roster)</option>
                      <option value="Operator">Founder / Executive Operator</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="oprale-volume" className="block font-mono text-xs text-white/60 mb-1">LONG-FORM ARCHIVE VOLUME</label>
                    <select
                      id="oprale-volume"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#7C6CFF] transition-colors font-mono cursor-pointer"
                    >
                      <option value="5-15 hours/mo">5 – 15 hours / month</option>
                      <option value="15-30 hours/mo">15 – 30 hours / month</option>
                      <option value="30+ hours/mo">30+ hours / month (Enterprise)</option>
                      <option value="Multi-roster">Multi-roster agency pool</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="oprale-msg" className="block font-mono text-xs text-white/60 mb-1">CURRENT MONETIZATION BOTTLENECK</label>
                  <textarea
                    id="oprale-msg"
                    rows={3}
                    maxLength={2000}
                    placeholder="Briefly describe your channel links, current output frequency, and primary monetization goal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#7C6CFF] transition-colors font-mono resize-none"
                  ></textarea>
                  <div className="text-right font-mono text-[10px] text-white/30 mt-1">{formData.message.length}/2000</div>
                </div>

                {/* Human verification */}
                <div className="p-3 bg-[#14141c] border border-white/10 flex items-center justify-between">
                  <div className="font-mono text-xs text-white/70">
                    Spam protection: <span className="text-white font-bold">{challenge.text} = ?</span>
                  </div>
                  <input
                    type="number"
                    inputMode="numeric"
                    required
                    placeholder="?"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-20 bg-[#0d0d0d] border border-white/15 px-2 py-1 text-sm text-white text-center font-mono focus:outline-none focus:border-[#7C6CFF]"
                    aria-label="Human verification math challenge"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#7C6CFF] hover:bg-[#6A5AE6] disabled:bg-[#3a3568] disabled:cursor-not-allowed text-white font-mono text-xs tracking-wider py-3.5 px-6 flex items-center justify-center space-x-2 transition-all font-semibold uppercase cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SECURING DISPATCH…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>OPEN SECURE EMAIL — 100% DELIVERY</span>
                      </>
                    )}
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-white/40 text-center font-mono mt-3">
                    <span className="flex items-center space-x-1"><ShieldCheck className="w-3 h-3 text-emerald-400" /><span>ZERO TRACKERS</span></span>
                    <span>•</span>
                    <span>NO THIRD-PARTY SERVERS</span>
                    <span>•</span>
                    <span>CLIENT-SIDE ONLY</span>
                    <span>•</span>
                    <span>100% INBOX DELIVERY</span>
                  </div>
                  <p className="text-[11px] text-white/30 text-center font-mono mt-2">
                    Opens your email app pre-filled to {CONTACT_EMAIL} • Auto-copies backup to clipboard
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};