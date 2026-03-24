const fs = require('fs');
const file = './src/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

// 1. Remove duplicates (any slug ending in -pro since they were exact duplicates I added earlier)
let cleanedData = data.filter(d => !d.slug.endsWith('-pro'));

// Ensure no other exact slug duplicates exist
const uniqueSlugs = new Set();
cleanedData = cleanedData.filter(d => {
  if (uniqueSlugs.has(d.slug)) return false;
  uniqueSlugs.add(d.slug);
  return true;
});

// 2. Add Category System
const categorize = (slug, title) => {
  const t = (slug + ' ' + title).toLowerCase();
  if (t.includes('job') || t.includes('career') || t.includes('interview') || t.includes('resume') || t.includes('recruiter') || t.includes('candidate')) return 'Job & Career';
  if (t.includes('saas') || t.includes('startup') || t.includes('founder') || t.includes('investor') || t.includes('vc') || t.includes('angel')) return 'SaaS & Startup';
  if (t.includes('finance') || t.includes('payment') || t.includes('invoice') || t.includes('refund') || t.includes('discount') || t.includes('accounting')) return 'Finance & Payments';
  if (t.includes('hr') || t.includes('employee') || t.includes('termination') || t.includes('onboarding') || t.includes('promotion') || t.includes('resignation') || t.includes('office')) return 'HR & Internal';
  if (t.includes('linkedin') || t.includes('connection') || t.includes('network') || t.includes('conference') || t.includes('coffee')) return 'Networking & LinkedIn';
  return 'Sales & Marketing'; // default
};

cleanedData.forEach(d => {
  d.category = categorize(d.slug, d.title);
});

// 3. Fix Content Quality
cleanedData.forEach(d => {
  if (d.slug === 'saas-churn-survey-email') {
    d.description = 'Learn exactly why users leave. Use these brief exit survey emails to gather valuable churn data and win back lost customers.';
    d.intro = 'When a user cancels their subscription, sending a targeted exit survey is crucial. It helps you understand exactly what went wrong and how to improve your product. The key is to keep it incredibly brief and friction-free so they actually fill it out.';
    d.templates = [
      "Subject: Sorry to see you go! Quick question?\n\nHi [Name],\n\nI noticed you recently canceled your [Product Name] subscription. We are always trying to improve, and your feedback is incredibly valuable to us.\n\nCould you take 30 seconds to answer one quick question? \n\n[Link to 1-question survey]\n\nThank you for giving us a try, and we hope to serve you again in the future!\n\nBest,\n[Your Name]",
      "Subject: Your [Product Name] Account Cancellation\n\nHi [Name],\n\nYour account has been successfully canceled. Before you go, would you mind sharing the primary reason you decided to leave?\n\n1. Too expensive\n2. Missing features\n3. Too hard to use\n4. Switched to a competitor\n\nReply with a number, or share any direct feedback. We'd love to learn how we can do better.\n\nCheers,\n[Your Name]",
      "Subject: Can we do anything better?\n\nHi [Name],\n\nI saw that you chose not to renew your subscription. I completely understand, but I'd love to hear your thoughts on what we could improve.\n\nIf you have 60 seconds, please fill out this brief feedback form: [Link].\n\nThanks again for your time with us!\n\nBest,\n[Your Name]"
    ];
    d.tips = [
      "Keep it brief. Don't ask 10 questions. Ask 1 multiple choice question with an optional text field.",
      "Offer an incentive if necessary. Sometimes offering a $5 gift card or an extended free month can yield high-quality feedback from enterprise churns."
    ];
    d.faq = [
      { question: "Should I offer a discount when they churn?", answer: "Yes, you can offer a 'Win-Back' discount on the final screen of the survey to capture price-sensitive churns." },
      { question: "When should I send the email?", answer: "Immediately upon cancellation. If you wait 7 days, they will completely forget about your product." }
    ];
  }
  if (d.slug === 'channel-partner-recruitment-email') {
    d.description = 'Build a reseller army. Use these templates to recruit enterprise channel partners to sell your SaaS.';
    d.intro = 'Building a channel partner program allows you to leverage other companies’ established sales teams to sell your software. The pitch must focus purely on the lucrative revenue share and the value it adds to their existing clients.';
    d.templates = [
      "Subject: Joint Revenue wildly scaling [Industry] clients\n\nHi [Name],\n\nYour agency clearly owns the mid-market [Niche] sector.\n\nAt [Your Company], we built a premium [Topic] platform. We just launched our VIP reseller program. If your team actively pitches our software into your retainer packages, we offer a 40% recurring margin to your bottom line.\n\nCan we chat tomorrow briefly?",
      "Subject: Channel Partner Request\n\nHi [Name],\n\nBecause your team aggressively sells into the [Industry] sector, we want to partner with you.\n\nWe offer an exclusive 50% margin for our top partners.\n\nAre you available for a quick sync this week?",
      "Subject: Reselling [Your Platform]\n\nHi [Name],\n\nOur platform integrates natively with the tools you already offer your clients. By reselling [Your Product], you can increase your ACV by 20% without adding overhead.\n\nLet me know if you are open to discussing this.\n\nBest,\n[Your Name]"
    ];
    d.tips = [
      "Keep it clear and focus on their margin.",
      "Offer at least 30-40% recurring commission.",
      "Do not make the onboarding process complicated."
    ];
    d.faq = [
      { question: "What is a good channel partner margin?", answer: "Typically 20% to 40% recurring for the lifetime of the customer." },
      { question: "Do I provide the marketing materials?", answer: "Yes, you must provide a fully white-labeled sales deck for them to use." }
    ];
  }
});

// Remove any other AI-repeated adverbs globally in intros or descriptions
cleanedData.forEach(d => {
  ['description', 'intro'].forEach(key => {
    if (d[key]) {
      d[key] = d[key]
        .replace(/(completely |absolutely |entirely |perfectly |exactly |purely |heavily |massively |aggressively |fiercely |violently |uniquely |strictly |explicitly ){2,}/g, '$1')
        .replace(/ ,/g, ',')
        .replace(/ \./g, '.');
    }
  });
});

fs.writeFileSync(file, JSON.stringify(cleanedData, null, 2));
console.log('Cleaned templates length:', cleanedData.length);
