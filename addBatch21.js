const fs = require('fs');
const file = 'src/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

const newTemplates = [
  {
    slug: 'email-to-pitch-venture-capital-investors',
    title: 'How to Pitch Venture Capital Investors via Cold Email',
    description: 'Raise your Seed round fast. Use these proven cold email pitch templates to get meetings with top-tier Venture Capital and Angel investors.',
    intro: 'Raising capital is a brutal numbers game. Top-tier Venture Capital (VC) partners receive dozens of highly polished pitch decks every single week. If your cold outreach email is a 5-paragraph wall of text detailing your dense technical architecture, they will delete it instantly. VCs are not investors in technology; they are investors in massive, exponential financial returns. Your email must immediately convey massive traction and undeniable momentum.\n\nA brilliant VC pitch email is violently brief. You must establish credibility in the very first sentence (e.g. "We previously exited a YC-backed startup" or "We just crossed $50k MRR completely bootstrapped"). Briefly state the massive, specific market you are disrupting and exactly how your unique insight gives you an unfair advantage. Close the email by asking for a strictly brief 15-minute introductory chat—do not demand a full 60-minute formal partner pitch on the very first touchpoint. \n\nUtilize the highly refined fundraising templates below to effortlessly bypass gatekeepers, cut straight to the core financial narrative, and secure meetings with elite capital allocators.',
    templates: [
      "Subject: [Your Company Name] / [Specific High-Growth Metric] over last 6 months\n\nHi [Partner Name],\n\nI have heavily followed [VC Firm Name]'s deep thesis on the [Specific Industry] space—specifically your brilliant recent investment in [Portfolio Company].\n\nMy co-founder and I recently left [Major Tech Company/Previous Startup] to build [Your Company Name], a platform completely automating [Specific Pain Point] for [Target Audience].\n\nOver the last 6 months, we have entirely bootstrapped the product to $50k MRR, growing aggressively at 15% month-over-month. We just signed massive pilots with [Recognizable Brand A] and [Recognizable Brand B].\n\nWe are officially raising a $2M Seed round to aggressively scale our enterprise GTM motion. I’d love to briefly share our 12-slide deck and see if we align with your Q4 deployment strategy.\n\nAre you open to a brief 15-minute intro chat next week?\n\nBest regards,\n[Your Name]",
      "Subject: Re: Your recent tweet regarding [Specific Market Trend]\n\nHi [Partner Name],\n\nYour recent Twitter thread outlining the massive inefficiency in the [Industry] supply chain was completely spot on.\n\nThat exact thesis is why my team and I built [Your Company Name]. We uniquely solve the [Specific Bottleneck] by leveraging [Unique Insight/Technology].\n\nWe officially launched out of beta 8 weeks ago and have inherently secured 5,000 highly active daily users with zero paid marketing spend.\n\nWe are currently assembling our Pre-Seed syndicate and would be absolutely honored to have your expertise on the cap table. \n\nWould you be open to an introductory 10-minute sync this Friday?\n\nCheers,\n[Your Name]",
      "Subject: [Your Company] + [VC Firm Name]\n\nHi [Partner Name],\n\nI am the CEO of [Your Company], a B2B SaaS platform specifically disrupting the archaic [Niche] sector by enabling users to [Primary Benefit].\n\nWe are highly profitable and serving 120 enterprise customers, including [Major Client]. We are now raising a highly strategic Series A specifically to rapidly expand into the European market.\n\nBecause of your deep operational expertise successfully scaling [Their Past Success Portfolio Company] across the EU, I believe [VC Firm Name] would be the absolute perfect lead investor for this round.\n\nI have securely linked our data room and pitch deck below. If the metrics look incredibly compelling to you, let's schedule a formal review.\n\nRegards,\n[Your Name]"
    ],
    tips: [
      "Target specific partners. Never email 'info@vcfirm.com'. Identify the specific partner whose explicit investment thesis matches your exact startup sector.",
      "Lead with massive traction. Traction entirely overrides ideas. If you have revenue, user growth, or signed letters of intent (LOI), put those metrics in the very first paragraph.",
      "Attach a brief docsend link. Do not attach a massive 20MB PDF pitch deck. Send a secure Docsend link so you can specifically track exactly which slides the partner heavily reviewed."
    ],
    faq: [
      { question: "Should I ask for an NDA before pitching?", answer: "Absolutely not. VCs literally evaluate thousands of ideas. Asking a VC to sign a Non-Disclosure Agreement instantly marks you as a clueless amateur." },
      { question: "How much should I ask for?", answer: "Explicitly state the exact round size (e.g. '$1.5M Seed'). Do not say 'We are looking for whatever capital we can get.'" },
      { question: "What if the partner ignores me?", answer: "Wait exactly one week and reply to the same thread with a brief 'Traction Update' (e.g. 'We just closed another $10k contract'). If they ignore that, move on." }
    ]
  },
  {
    slug: 'angel-investor-outreach-email',
    title: 'Angel Investor Outreach Email Templates',
    description: 'Secure early funding. Use these personalized templates to successfully pitch high-net-worth Angel Investors on your early-stage startup.',
    intro: 'Pitching an angel investor is entirely different than pitching a massive institutional VC firm. Angels are frequently successful former founders entirely investing their own personal capital. They invest heavily based on personal rapport, an incredibly massive vision, and pure gut instinct. While traction is still crucial, your cold outreach must heavily emphasize your unique personal founder story and why this specific angel is uniquely qualified to advise you.',
    templates: [
      "Subject: Building the future of [Industry] - [Your Company]\n\nHi [Angel Name],\n\nI have massively admired the incredible company you built and successfully exited at [Their Past Company]. \n\nI recently founded [Your Company Name] to completely solve the exact same [Pain Point] you frequently discussed on the [Podcast Name] podcast last year.\n\nWe have a working prototype and just secured our first 3 paying beta customers. Because you inherently possess the exact GTM playbook we desperately need, I would be honored to show you what we’ve built.\n\nWe are raising a small $500k Angel round to complete the V1 engineering sprint. Are you open to a brief 15-minute product demo?\n\nBest,\n[Your Name]",
      "Subject: Quick question for a brilliant [Industry] veteran\n\nHi [Angel Name],\n\nYour deep strategic insights regarding the [Niche] market have been heavily influential on my career.\n\nI’m currently explicitly building [Your Company Name], a platform targeting [Specific Persona]. We just crossed $5k MRR entirely bootstrapped.\n\nAs we officially strategize our upcoming Pre-Seed fundraise, I am actively seeking incredibly smart advice from founders who have 'been there.' Would you be open to a strictly 15-minute feedback session next week? \n\nI am not explicitly pitching you for a check right now, I strictly want to ensure our GTM strategy is completely un-breakable.\n\nCheers,\n[Your Name]",
      "Subject: Seeking Angel Investment: [Your Company] + [Niche]\n\nHi [Angel Name],\n\nI know you occasionally angel invest exclusively in highly-vetted [Industry] startups.\n\nMy team and I just officially launched [Your Company]. Rather than telling you about it, I’d love to show you. We just hit a massive milestone this week, signing [Major Client Name] to an annual contract.\n\nIf you are currently actively deploying early-stage checks this quarter, here is our 10-slide brief deck. I’d love to formally discuss having you involved!\n\nBest regards,\n[Your Name]"
    ],
    tips: [
      "Emphasize flattery without being entirely sycophantic. Prove you deeply researched their specific career history.",
      "Lower the friction immediately by promising a strictly 10 to 15-minute call.",
      "The 'Feedback' pivot. Asking for advice frequently leads to them voluntarily writing a check."
    ],
    faq: [
      { question: "How do I find angel investors?", answer: "Look at AngelList, Signal (NFX), or simply search LinkedIn for successful founders who recently sold their companies." },
      { question: "Is cold emailing angels effective?", answer: "Warm introductions are infinitely better, but a highly targeted, brilliant cold email can absolutely secure a $25k check." },
      { question: "What is an average angel check size?", answer: "Typically $10k to $50k per individual investor." }
    ]
  },
  {
    slug: 'consulting-proposal-email-template',
    title: 'Consulting Proposal Email Templates',
    description: 'Close five-figure consulting deals. Use these highly persuasive proposal emails to pitch high-ticket consulting retainers to executives.',
    intro: 'When pitching a massive five-figure consulting retainer to an executive, your proposal email is vastly more important than the attached PDF document. The executive will heavily read your email summary, incredibly quickly skim the attached actual proposal for the total final price, and make an instant gut decision based entirely on the ROI you explicitly promised.',
    templates: [
      "Subject: Strategic Proposal: Scaling [Client Company Name] by [Metric]\n\nHi [Client Name],\n\nThank you for the incredibly productive discovery session yesterday.\n\nAs discussed, I have fully drafted a highly comprehensive 3-stage consulting proposal explicitly engineered to permanently resolve the [Specific Bottleneck] currently bottlenecking your Q3 revenue.\n\nThe attached brief PDF strictly outlines the exact timeline, required internal resources, and my firm's strategic methodology. If we aggressively execute properly, I am highly confident we can drive an additional [Massive Specific Result] by year-end.\n\nPlease review the high-level scope and let me know if you would like me to adjust any specific deliverables before I draft the formal master agreement.\n\nLooking forward to partnering heavily on this!\n\nBest regards,\n[Your Name]",
      "Subject: Re: Next Steps / [Consulting Retainer] overview\n\nHi [Executive Name],\n\nI thoroughly enjoyed our deep-dive into [Company Name]’s massive growth targets today.\n\nAttached to this thread is the formal retainer proposal for the upcoming 6-month [Service] engagement.\n\nTo ensure we aggressively hit the ground running by the massive September 1st product launch, we would ideally need to officially finalize the paperwork and secure the initial deposit by this Friday.\n\nLet me know if your procurement team requires any immediate clarifications!\n\nCheers,\n[Your Name]",
      "Subject: Executive Summary: [Project Name] Consulting SOW\n\nHi [Client Name],\n\nFollowing up on our fantastic Q2 strategy sync.\n\nI’ve formally outlined the exact Scope of Work (SOW) required to successfully restructure your entire [Department Name] architecture over the next 90 days.\n\nBecause this requires massive cross-functional alignment, I highly recommend we jump on a brief 10-minute calibration call tomorrow to ensure the final mapped deliverables perfectly align with your own CEO’s explicit internal expectations.\n\nDoes [Time] work to review the attached PDF quickly?\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Always include an 'Executive Summary' in the actual email. The CEO will not read page 6 of your PDF.",
      "Pitch the massive future state, not the deliverables. Do not sell '10 hours of meetings.' Sell 'A highly optimized sales funnel generating $100k monthly.'",
      "Establish urgency. Attach an aggressive expiration date to the proposal to force an immediate decision."
    ],
    faq: [
      { question: "Should I include the price in the email body?", answer: "Usually not. Keep the price in the attached PDF so they are forced to read the massive value you are providing before suffering the sticker shock." },
      { question: "What if it takes them 3 weeks to respond?", answer: "Follow up exactly every 7 days using extreme, polite value-add emails (e.g. 'I just saw this article about your competitor, thought you should see it!')." },
      { question: "Do I always need a formal PDF?", answer: "Yes, for any consulting deal over $5,000, a highly designed, brutally professional PDF proposal is legally and culturally expected." }
    ]
  },
  {
    slug: 'freelance-high-ticket-client-pitch-email',
    title: 'Pitching High-Ticket Freelance Clients',
    description: 'Stop working for cheap. Use these templates to successfully cold pitch high-ticket premium freelance services to major brands.',
    intro: 'Transitioning from brutal, low-paying Upwork gigs to closing massive $10,000 monthly freelance retainers requires an entirely distinct cold outreach strategy. You must immediately project the extreme aura of a highly strategic premium business partner, not a desperate cheap laborer searching for gig work.',
    templates: [
      "Subject: Huge fan of [Brand] + Idea for scaling [Specific Metric]\n\nHi [Director/Founder Name],\n\nI actively use [Company Name]'s products daily; the new [Product Line] launch was brilliantly executed.\n\nI am a premium freelance [Your Speciality] who exclusively helps massive [Industry] brands completely dominate their [Specific Channel] strategy. I noticed your team is currently heavily investing in [Channel], but missing a massive opportunity regarding [Highly specific observation].\n\nI recently partnered with [Their Competitor/Peer Branding] and successfully generated a verifiable [Massive ROI Metric] increase over a 3-month strategic sprint.\n\nI’d love to completely handle this massive bottleneck for you. Are you open to a brief 10-minute exploratory chat regarding my methodology next week?\n\nBest regards,\n[Your Name]",
      "Subject: Freelance bandwidth available for [Specific Service]\n\nHi [Name],\n\nI saw [Company Name] recently closed a massive Series B round. Enormous congratulations!\n\nBecause you are undoubtedly aggressively scaling your [Department/Function] team right now, I wanted to quickly introduce myself.\n\nI strictly provide high-end freelance [Your Service] execution for rapidly scaling tech startups. I am highly comfortable embedding deeply within growing enterprise teams to deliver fully polished, senior-level [Deliverable Type] with zero required micromanagement.\n\nIf you have any overflow bandwidth constraints this quarter, here is a quick link to my premium portfolio: [Link]. \n\nLet me know if you’d like to sync!\n\nCheers,\n[Your Name]",
      "Subject: Re-thinking the [Company Name] [Asset Name]\n\nHi [Name],\n\nI love exactly how your brand communicates on [Platform].\n\nHowever, I audited your main landing page funnel this morning and noticed a massive conversion leak directly at the checkout phase. Specifically, the [Specific Form/Copy] is actively preventing sales.\n\nI am a highly specialized conversion optimization freelancer. I’ve completely mapped out a highly precise A/B test I strongly believe will boost your checkout conversions by roughly 12% overnight.\n\nCan I send over my brief strategic outline for you to review internally?\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Specialize violently. Do not pitch yourself as a 'General Marketer'. Pitch yourself as an 'Enterprise SaaS Conversion Copywriter'.",
      "Do the audit for free. Showing them exactly where they are mathematically bleeding money immediately establishes your premium value.",
      "Use premium pricing terms. Never say 'My hourly rate is $50.' Say 'My baseline engagement starts exclusively at $5,000.'"
    ],
    faq: [
      { question: "How many pitches should I send daily?", answer: "Quality massively beats quantity. Sending 5 intensely researched pitches a week will easily yield more high-ticket retainers than blasting 500 automated junk emails." },
      { question: "Who evaluates freelance talent at large companies?", answer: "Target 'Directors' or 'VPs' of a specific department. They natively hold the budget and feel the massive pain of being understaffed." },
      { question: "Should I offer a free trial?", answer: "Never offer free labor for a high-ticket client. Offer a heavily paid 'Discovery Audit Phase' as a low-risk starting point." }
    ]
  },
  {
    slug: 'speaking-fee-negotiation-email',
    title: 'Speaking Fee Negotiation Email Templates',
    description: 'Get paid your full worth. Use these strategic templates to politely negotiate a significantly higher keynote speaking fee for an upcoming conference.',
    intro: 'Event organizers will frequently fiercely attempt to lowball speakers, asking elite professionals to deliver a massive 60-minute keynote strictly "for the exposure." If you have spent years mastering your craft, you must brutally negotiate for your proper monetary compensation.',
    templates: [
      "Subject: Re: Keynote Speaker Invitation - [Event Name]\n\nHi [Organizer Name],\n\nThank you so much for the incredibly kind invitation. I would absolutely love to deliver the premier closing keynote at your massive summit this fall.\n\nRegarding the proposed compensation, my standard speaking fee for a highly customized, heavily researched 60-minute keynote presentation currently sits at [Full Fee Amount], exclusive of travel accommodations.\n\nBecause I massively respect your organization's mission, I am highly willing to completely wave my standard $2,500 travel budget if your team is able to meet my core speaking fee.\n\nDoes this budget comfortably align with your final Q3 allocation for external talent?\n\nBest regards,\n[Your Name]",
      "Subject: Following up on the [Event Name] budget\n\nHi [Organizer Name],\n\nI am incredibly excited about the prospect of addressing your 5,000+ members virtually in November.\n\nWhile I completely understand your strict non-profit budget constraints restricting the proposed $1,000 honorarium, my absolute minimum threshold for public engagements currently starts at $5,000 to cover my intensive 3-week prep time.\n\nTo help bridge this financial gap creatively, would your team be willing to purchase exactly 250 physical copies of my newly published book in bulk directly to be handed out natively to all VIP attendees?\n\nIf we can arrange that massive bulk purchase, I am completely happy to heavily discount the cash speaking fee to perfectly match your budget.\n\nLet me know!\n\nCheers,\n[Your Name]",
      "Subject: Declining the invitation: [Event Name]\n\nHi [Organizer Name],\n\nI deeply appreciate you reaching out regarding the massive panel discussion next month.\n\nUnfortunately, as a strict personal policy, I do not currently accept unpaid speaking engagements or opportunities strictly offering 'exposure'. My bandwidth is entirely maxed out heavily serving my premium retainer clients.\n\nIf your massive corporate sponsorship budget changes significantly closer to the event, please do not hesitate to reach furiously back out!\n\nWishing you an incredibly successful summit,\n[Your Name]"
    ],
    tips: [
      "Always negotiate the 'extras'. If they fiercely refuse to budge on the core fee, demand a massive list of attendee emails, a professionally shot 4K video of your speech for your website, or a massive bulk book order.",
      "Do not apologize for your premium fee. State the massive price confidently, briefly mention it covers your extensive research, and completely stop talking.",
      "Be perfectly willing to aggressively walk away. If they simply cannot pay you, decline profusely and maintain your premium brand positioning."
    ],
    faq: [
      { question: "When should I speak for free?", answer: "Only if the audience consists entirely of 500+ extremely highly-qualified buyers specifically looking to immediately purchase your high-ticket consulting or software." },
      { question: "Do I ask them for their budget first?", answer: "Yes. Reply smoothly: 'I would love to be involved! Before we discuss topics, what is your exact allocated budget for the keynote slot?'" },
      { question: "Are travel expenses typically covered?", answer: "Always. The speaking fee and the travel budget (flights, premium hotel, meals) must be explicitly separated in the initial contract negotiations." }
    ]
  }
];

const out = [...data, ...newTemplates];
fs.writeFileSync(file, JSON.stringify(out, null, 2));
