export default function Home() {
  const faqs = [
    {
      q: 'How does automatic reviewer assignment work?',
      a: 'The bot maintains a round-robin queue of available reviewers in your Discord server. When a PR review is requested, it picks the next available reviewer and notifies them via DM and channel mention.'
    },
    {
      q: 'Can I track review status from outside Discord?',
      a: 'Yes. The web dashboard syncs with your Discord server via webhooks, showing open reviews, assignees, and completion status in real time.'
    },
    {
      q: 'What Discord permissions does the bot need?',
      a: 'The bot needs Read Messages, Send Messages, and Use Slash Commands permissions. It does not require admin access to your server.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Developer Tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Turn Discord into a<br />
          <span className="text-[#58a6ff]">code review system</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A Discord bot that monitors review requests, auto-assigns reviewers from a queue, and tracks status with slash commands — all synced to a web dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $12/mo
        </a>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', label: 'Auto-assign reviewers' },
          { icon: '📊', label: 'Web dashboard' },
          { icon: '🔔', label: 'Slash command tracking' }
        ].map(({ icon, label }) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-sm text-[#8b949e]">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything included</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited review requests',
              'Round-robin reviewer queue',
              'Web dashboard & webhooks',
              'Slash command interface',
              'DM notifications'
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
