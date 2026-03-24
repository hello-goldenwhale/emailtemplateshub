const fs = require('fs');
const file = 'src/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

const newTemplates = [
  {
    slug: 'final-payment-reminder-email-legal-tone',
    title: 'Final Payment Reminder Email (Legal Tone)',
    description: 'When nice doesn\'t work, escalate legally. Use these final notice templates to aggressively demand payment before sending an invoice to collections.',
    intro: 'Sometimes polite follow-ups fail. When an invoice is severely overdue and the client is ignoring you, you must send a final notice with a strict legal tone.',
    templates: [
      "Subject: FINAL NOTICE: Urgent Unpaid Invoice #1234\n\nHi [Name],\n\nThis is our final attempt to collect the outstanding balance of [Amount] for Invoice #1234, currently [Days] overdue.\n\nIf payment is not received by [Date], your account will be turned over to our collections agency.\n\n[Link]\n\nRegards,\n[Your Name]",
      "Subject: URGENT: Intent to send to collections\n\nHi [Name],\n\nYour account is severely delinquent. We must receive payment of [Amount] by 5 PM tomorrow to avoid legal escalation.\n\nRegards,\n[Your Name]",
      "Subject: Notice of Default: [Project Name]\n\nHi [Name],\n\nYou are in breach of our MSA. Please settle the total balance immediately to avoid further action.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Always state an exact deadline.",
      "Remove all friendly emojis and conversational fluff.",
      "Follow through if they do not pay."
    ],
    faq: [
      { question: "Is this too aggressive?", answer: "No, at 60+ days, it is required." },
      { question: "What if they beg for more time?", answer: "You can offer a minor extension with a signed payment plan." },
      { question: "Can I mention my lawyer?", answer: "Yes, if you truly intend to use them." }
    ]
  },
  {
    slug: 'invoice-overdue-60-days-email',
    title: '60 Days Overdue Invoice Reminder',
    description: 'Demand payment for a 60-day overdue invoice. Use these strict email templates for severely late accounts.',
    intro: 'At 60 days, you must halt all active work and firmly demand your money.',
    templates: [
      "Subject: ACTION REQUIRED: Invoice 60 Days Past Due\n\nHi [Name],\n\nInvoice #1234 is now 60 days past due. We have paused all active development until this is settled.\n\nBest,\n[Your Name]",
      "Subject: 60 Day Overdue Notice\n\nHi [Name],\n\nPlease urgently review the attached invoice. It is severely overdue.\n\nThanks,\n[Your Name]",
      "Subject: Account Hold: Overdue Balance\n\nHi [Name],\n\nYour account has been placed on hold due to a 60-day unpaid balance.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Pause their ongoing service immediately.",
      "Forward the email thread back to their accounting department.",
      "Attach a statement of account."
    ],
    faq: [
      { question: "Do I add late fees?", answer: "If your contract specifies them, yes." },
      { question: "Should I call them?", answer: "Yes, emails are easily ignored." },
      { question: "What if they dispute the work now?", answer: "Refer them to the signed acceptance forms." }
    ]
  },
  {
    slug: 'refund-request-business-email',
    title: 'How to Request a Business Refund Professionally',
    description: 'Get your money back. Use these polite but firm business refund request templates when a B2B product fundamentally fails.',
    intro: 'Requesting a massive B2B refund requires documenting exactly how the vendor breached the contract without sounding aggressively hostile.',
    templates: [
      "Subject: Refund Request: [Product Name] Account\n\nHi [Name],\n\nI am requesting a formal refund for our recent [Product] purchase, as the software failed to deliver the promised feature integration.\n\nBest,\n[Your Name]",
      "Subject: Prorated Cancellation & Refund\n\nHi [Name],\n\nDue to significant downtime, we are canceling our annual contract and requesting a prorated refund for the remaining 6 months.\n\nBest,\n[Your Name]",
      "Subject: Dispute: [Invoice Number]\n\nHi [Name],\n\nThe deliverables provided do not match the Statement of Work. I am requesting an immediate refund.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Be highly specific about the failure.",
      "Reference their official refund policy.",
      "Remain calm to get the support rep on your side."
    ],
    faq: [
      { question: "Can I do a chargeback?", answer: "Only if they ignore your formal requests for weeks." },
      { question: "Should I threaten to leave a bad review?", answer: "No, that is extortion and often violates TOS." },
      { question: "How long is a refund window?", answer: "Usually 14 to 30 days in B2B SaaS." }
    ]
  },
  {
    slug: 'payment-dispute-email-template',
    title: 'Payment Dispute Email Templates',
    description: 'Resolve vendor billing errors fast. Use these templates to professionally dispute a massive incorrect invoice.',
    intro: 'If a vendor accidentally bills you $10k instead of $1k, clearly dispute the charge in writing immediately to freeze the payment process.',
    templates: [
      "Subject: Urgent Dispute regarding Invoice #[Number]\n\nHi [Name],\n\nI am writing to formally dispute Invoice #[Number]. We were billed for exactly 50 seats, but we only have 10 active provisioned users.\n\nBest,\n[Your Name]",
      "Subject: Invoice Correction Required\n\nHi [Name],\n\nPlease reissue the attached invoice. The hourly total is completely incorrect.\n\nThanks,\n[Your Name]",
      "Subject: Hold Payment: Billing Error\n\nHi [Name],\n\nDo not process the auto-draft on our account tomorrow. The sum listed is wildly inaccurate based on our signed MSA.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Provide the exact math.",
      "Send it to the Billing department directly.",
      "Request a revised invoice rather than simply complaining."
    ],
    faq: [
      { question: "Should I pay the correct portion?", answer: "Yes, paying the undisputed portion demonstrates good faith." },
      { question: "What if it was auto-drafted?", answer: "Request an immediate refund or credit to the next billing cycle." },
      { question: "Do I cc my lawyer?", answer: "Only if the dispute is massive (e.g. $100k+)." }
    ]
  },
  {
    slug: 'early-payment-discount-offer-email',
    title: 'Early Payment Discount Offer Emails',
    description: 'Improve your cash flow instantly. Use these templates to offer clients an early payment discount for clearing their invoices early.',
    intro: 'Offering a 2% discount for Net-10 payment incentivizes massive corporate clients to pay you faster, boosting your operational cash flow.',
    templates: [
      "Subject: Option for 2% Discount on Invoice #1234\n\nHi [Name],\n\nWe recently rolled out an early-payment discount program. If you settle the attached invoice within 10 days, you can deduct a full 2% off the top.\n\nBest,\n[Your Name]",
      "Subject: Upfront payment discount for [Project]\n\nHi [Name],\n\nJust a reminder that if you pay the annual total entirely upfront instead of quarterly, we will apply an automatic 10% cash discount.\n\nBest,\n[Your Name]",
      "Subject: Special Cash Flow Offer\n\nHi [Name],\n\nIf your finance team wishes to clear this outstanding balance by Friday, we are happy to knock 5% off the total sum.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Ensure the math is highly clear in the email.",
      "Only offer this if your business desperately needs the immediate cash flow.",
      "Make sure your accounting software supports discount line items."
    ],
    faq: [
      { question: "Is 2% really enough?", answer: "Yes, massive corporations will jump on a 2% discount." },
      { question: "Can I offer a 10% discount?", answer: "Yes, but it heavily tanks your margins." },
      { question: "What if they pay late and still take the discount?", answer: "Firmly reject it and demand the remaining 2%." }
    ]
  }
];

const out = [...data, ...newTemplates];
fs.writeFileSync(file, JSON.stringify(out, null, 2));
