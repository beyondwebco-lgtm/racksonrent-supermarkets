import React from 'react';

export default function HowItWorks() {
  return (
    <section className="py-20 px-5 bg-[var(--background)]">
      <div className="ror-container text-center">
        {/* Header */}
        <h2 className="fluid-section-title font-extrabold mb-4 text-[var(--heading)]">
          How It <span className="text-[var(--accent)] drop-shadow-sm">Works</span>
        </h2>
        <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-16 leading-relaxed">
          We've made our process incredibly simple. Get everything up and running in just three easy steps.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-[var(--surface)] p-10 rounded-2xl shadow-sm border border-[var(--border)] border-b-[5px] border-b-[var(--accent)] card-hover-system">
            <div className="bg-[var(--accent)] text-[var(--primary-dark)] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6">
              1
            </div>
            <h3 className="fluid-card-title font-bold mb-4 text-[var(--heading)]">Create an Account</h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-base">
              Sign up in seconds using your email. No credit card required to get started and explore the platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[var(--surface)] p-10 rounded-2xl shadow-sm border border-[var(--border)] border-b-[5px] border-b-[var(--accent)] card-hover-system">
            <div className="bg-[var(--accent)] text-[var(--primary-dark)] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6">
              2
            </div>
            <h3 className="fluid-card-title font-bold mb-4 text-[var(--heading)]">Configure Setup</h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-base">
              Personalize your dashboard and adjust the settings to perfectly match your unique requirements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[var(--surface)] p-10 rounded-2xl shadow-sm border border-[var(--border)] border-b-[5px] border-b-[var(--accent)] card-hover-system">
            <div className="bg-[var(--accent)] text-[var(--primary-dark)] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6">
              3
            </div>
            <h3 className="fluid-card-title font-bold mb-4 text-[var(--heading)]">Start Using</h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-base">
              You are all set! Dive right in, start experiencing the benefits, and watch your productivity soar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
