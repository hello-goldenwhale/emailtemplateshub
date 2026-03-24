const fs = require('fs');
const file = 'src/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

const newTemplates = [
  {
    slug: 'follow-up-after-phone-interview',
    title: 'How to Follow Up After a Phone Interview',
    description: 'Ensure you advance to the next round. Use these professional follow-up templates exactly 24 hours after a phone screen.',
    intro: 'The initial phone interview (or HR screening) is the first major hurdle in any corporate hiring process. You typically have 15 to 30 minutes to prove basic competency and culture fit before the recruiter decides whether to pass your resume to the actual hiring manager. Because recruiters conduct dozens of phone screens daily, your name can easily get lost in their pipeline. Following up rapidly with a highly professional email is a critical, proactive step to ensure your file stays at the top of the pile.\n\nA great phone interview follow-up must be incredibly brief. The recruiter does not have time to read a three-paragraph essay regarding your skillset. Send this email exactly within 24 hours of hanging up the phone. Thank them specifically for their time, briefly reiterate your immense excitement for the role, and confirm that you have attached any additional materials (like a portfolio or references) they requested during the call.\n\nUse the tested templates below to send a flawless follow-up. These scripts differentiate you from the 90% of candidates who simply hang up and passively wait for a rejection email.',
    templates: [
      "Subject: Thank you! / [Your Name] for [Job Title]\n\nHi [Recruiter Name],\n\nThank you so much for taking the time to speak with me this morning regarding the [Job Title] role at [Company Name].\n\nLearning more about the team's aggressive Q3 goals only increased my excitement about the opportunity. Given my deep background in [Skill], I am highly confident I could hit the ground running.\n\nPlease let me know if the hiring manager requires any additional references or work samples as they review candidates for the next round!\n\nBest regards,\n[Your Name]",
      "Subject: Follow up: [Job Title] phone screen / [Your Name]\n\nHi [Recruiter Name],\n\nHope you're having a great week!\n\nI just wanted to drop a quick note to say thank you for the fantastic conversation yesterday. Your insights regarding [Company Culture/Remote Work Policy] perfectly align with exactly what I am looking for in my next role.\n\nI remain incredibly passionate about the [Job Title] position and I greatly look forward to hearing about the next steps in the process.\n\nCheers,\n[Your Name]",
      "Subject: Re: Next Steps / [Job Title] position\n\nHi [Recruiter Name],\n\nThank you again for the incredibly smooth phone screen today.\n\nAs promised during our call, I’ve attached the 1-page summary of my previous project driving [Specific Metric] at [Previous Company]. I strongly believe this framework translates directly to the challenges your team is actively facing.\n\nLooking forward to staying in touch!\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Keep it under 4 sentences. Recruiters glance at these on their phones while walking to their next candidate call.",
      "Send it exactly within 12 to 24 hours. The goal is to hit their inbox right before they sit down to write their daily candidate summary reports.",
      "Do not ask aggressive questions about salary or title in a thank-you note if they weren't covered during the actual call."
    ],
    faq: [
      { question: "Who do I send this to?", answer: "Send it directly to the person who dialed you. If an agency recruiter scheduled the call but an internal HR person conducted it, find the internal HR person's email and send it to them." },
      { question: "What if it was just a 10 minute screening?", answer: "Still send it. Professional etiquette scales regardless of the length of the call." },
      { question: "Do I send this if I know I failed the interview?", answer: "Yes! Displaying high professional grace after a tough call leaves a lasting positive impression for future openings." }
    ]
  },
  {
    slug: 'follow-up-after-panel-interview',
    title: 'Thank You Email After a Panel Interview',
    description: 'A panel interview is exhausting. Close the deal by sending these perfectly crafted, individualized follow-up emails to the entire hiring panel.',
    intro: 'Surviving a panel interview—where you are rapidly questioned by three to five stakeholders simultaneously—is a massive accomplishment. This is typically the final stage of an aggressive hiring process. However, the work is not over when the zoom call ends. The panel will meet later that afternoon to vote "Yes" or "No" on your candidacy. Your immediate follow-up strategy can drastically influence that final internal conversation by proving your profound attention to detail.\n\nThe single biggest unforced error candidates make after a panel interview is sending one massive "group email" thanking everyone at once. This appears lazy and automated. You must write a highly individualized email to each single person on the panel. Even if you only spoke to the VP of Marketing primarily, you must email the Junior Designer who sat silently in the back of the room. Reference one specific, unique point they brought up during the cross-examination to prove you value their individual input.\n\nUse the strategic templates below to manage your post-panel outreach. These scripts ensure you leave a flawlessly professional impression on the entire hiring committee simultaneously.',
    templates: [
      "Subject: Great speaking with you today - [Your Name]\n\nHi [Panelist A Name],\n\nThank you so much for taking the time to join the interview panel today for the [Job Title] position.\n\nI truly enjoyed our back-and-forth regarding [Specific Niche Topic the panelist brought up]. Your perspective on how the team plans to scale [Specific Metric] over the next six months was absolutely fascinating.\n\nI am incredibly excited about the opportunity to potentially collaborate closely with you on these initiatives. \n\nBest regards,\n[Your Name]",
      "Subject: Thank you! / [Your Name] for [Job Title]\n\nHi [Panelist B Name],\n\nThank you for chatting with me today during my final round interview.\n\nI specifically loved hearing your insights regarding the cross-departmental collaboration between [Department A] and [Department B]. Having managed that exact dynamic successfully at [Previous Company], I am confident I could be an immense, immediate asset to the team.\n\nI look forward to potentially working together in the future!\n\nCheers,\n[Your Name]",
      "Subject: Re: Next Steps / [Job Title] Interview\n\nHi [Hiring Manager Name],\n\nThank you for inviting me to present to the entire team this morning. \n\nThe rigorous Q&A session only cemented my deep passion for the [Job Title] role. The culture of intense intellectual curiosity your team possesses is exactly what I am looking for.\n\nIf you need any final work samples or references from me as you deliberate over the weekend, please let me know.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Ask the HR recruiter for everyone's email address immediately after the panel concludes.",
      "Send all individual emails within 24 hours of the interview, ideally at the exact same time so they arrive simultaneously.",
      "If you cannot find their individual emails, write a single email to the Hiring Manager explicitly asking them to 'pass my sincere gratitude along to [Name A], [Name B], and [Name C].'"
    ],
    faq: [
      { question: "Is a group email acceptable?", answer: "It is acceptable, but highly suboptimal. A group email gets a group read. Individual emails force a personal 1-to-1 connection." },
      { question: "Should I attach my presentation slides to the thank you note?", answer: "Yes! If you gave a presentation during the panel, always attach the final PDF version to the Hiring Manager's thank you note." },
      { question: "Does the quiet person on the panel actually get a vote?", answer: "Absolutely. Frequently, the quietest person on a panel is the 'culture fit' veto vote. Do not ignore them." }
    ]
  },
  {
    slug: 'follow-up-after-hr-screening',
    title: 'Following Up After an HR Screening Call',
    description: 'Don\'t let HR ghost you. Use these polite follow-up templates to ask a recruiter for an update after an initial screening call.',
    intro: 'The HR screening call went brilliantly. The recruiter told you that you were a "perfect fit" and promised to send your resume directly to the hiring manager for the next round. A week passes, and you hear absolutely nothing. This scenario plays out daily in corporate recruitment. Do not assume you were rejected. The recruiter is likely juggling 50 open requisitions, and the hiring manager has been traveling all week, stalling the internal approval process.\n\nFollowing up after an HR screening requires infinite patience. You are speaking to the gatekeeper; annoying them with aggressive demands for an update guarantees you will be permanently ghosted. Your email must be effortlessly polite, briefly reiterate your passion for the role, and ask for an updated timeline. Never ask "Did I get the job?" Ask "Is there an updated timeline for next steps?"\n\nUse the customized scripts below to gently nudge the HR recruiter without crossing the line into desperation. These templates keep your name relevant and prove your high level of professional persistence.',
    templates: [
      "Subject: Checking in - [Job Title] role / [Your Name]\n\nHi [Recruiter's Name],\n\nHope you're having a great week!\n\nI wanted to gently circle back regarding the [Job Title] position we discussed last Thursday. I completely understand how complex internal scheduling can become, but I remain incredibly excited about the opportunity to join [Company Name].\n\nCould you kindly let me know if there is an updated timeline regarding the hiring manager’s review process?\n\nBest regards,\n[Your Name]",
      "Subject: Update regarding my candidacy: [Job Title]\n\nHi [Recruiter Name],\n\nJust floating this email to the top of your inbox.\n\nSince our great conversation last week, I've spent some time reviewing [Company Name]’s recent blog posts on [Topic] and I am more confident than ever that my background is a perfect cultural fit for the team.\n\nPlease let me know if you need any additional documentation from me to help push the process forward.\n\nLooking forward to hearing from you soon!\n\nCheers,\n[Your Name]",
      "Subject: Re: Next Steps / [Your Name] for [Job Title]\n\nHi [Recruiter Name],\n\nI hope your week is off to a great start.\n\nI know you mentioned during our call that the team was hoping to schedule second-round interviews by early next week. I wanted to quickly check in to ensure my availability aligns heavily with the hiring manager's schedule.\n\nLet me know if there are any updates on your end!\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Wait at least one full week before sending this follow-up if they didn't explicitly give you a deadline.",
      "If they promised an update 'By Friday', send the follow-up the following Tuesday morning.",
      "Always reply to the initial thread where the screening was scheduled so they have full context instantly."
    ],
    faq: [
      { question: "Why do recruiters ghost candidates?", answer: "Usually, it is not malicious. The hiring manager is either stalling, interviewing internal candidates, or facing unexpected budget freezes." },
      { question: "How many times should I follow up with HR?", answer: "Only twice. Send the first check-in after a week, and a final check-in two weeks later. If silence persists, assume rejection." },
      { question: "Should I skip HR and message the hiring manager?", answer: "No. Going over HR's head after they screened you is viewed as highly disrespectful and will backfire." }
    ]
  },
  {
    slug: 'payment-reminder-email-7-days-overdue',
    title: 'Polite Payment Reminder: 7 Days Overdue',
    description: 'Get paid faster without ruining the relationship. Use these polite payment reminder templates when an invoice is 7 days past due.',
    intro: 'Chasing down late invoices is the most universally despised task for freelancers, agency owners, and B2B vendors. When a client misses a payment by a week, anxiety spikes: Are they unhappy with the work? Are they going bankrupt? Are they simply ghosting? However, the reality is almost always mundane. The client’s accounting software failed, their credit card expired, or the invoice email simply went to their spam folder. At the 7-day mark, aggression is entirely unwarranted.\n\nA brilliant 7-day overdue payment reminder must assume extreme positive intent. Your tone should be relentlessly polite and helpful. Do not mention late fees or legal action. Instead, frame the email as a simple administrative check-in. Ask if they received the invoice successfully or if they need you to re-send the secure payment link. By offering the benefit of the doubt, you preserve the client relationship while still explicitly demanding their attention regarding the missing funds.\n\nUtilize the highly professional templates below to elegantly request your money. These scripts naturally prompt the client to respond immediately with a profound apology and an expedited payment.',
    templates: [
      "Subject: Checking in on Invoice #12345\n\nHi [Client Name],\n\nI hope you’re having a fantastic week!\n\nI am doing some quick administrative bookkeeping this morning and noticed that Invoice #12345 for the [Project Name] was due last week.\n\nI completely understand how easily these things can slip through the cracks during a busy quarter. Could you kindly let me know if this was successfully routed to the accounting team for processing?\n\nI’ve attached another copy of the PDF invoice here just in case the original was lost in the shuffle.\n\nBest regards,\n[Your Name]",
      "Subject: Following up on recent invoice\n\nHi [Client Name],\n\nHope all is well with you and the team!\n\nI’m writing to quickly follow up on the outstanding balance of [Total Amount] for Invoice #12345, which was due on [Due Date].\n\nIf the payment is already processing on your end, please completely disregard this email! Otherwise, you can easily settle the balance using the secure payment link below:\n\n[Link: Secure Payment Portal]\n\nLet me know if you need any adjustments or a different format for your internal records.\n\nCheers,\n[Your Name]",
      "Subject: Quick note regarding [Project Name] billing\n\nHi [Client Name],\n\nI wanted to gently touch base regarding the final invoice for the [Project Name] deliverable.\n\nIt currently shows as exactly one week overdue in my system. Since I know your accounts payable team typically processes these quickly, I simply wanted to verify that my email didn't accidentally get caught in your spam filter.\n\nPlease let me know if everything looks correct on your end!\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Always attach the original invoice PDF again. Do not force the client to dig through their inbox to find your original email.",
      "Include a direct payment link via Stripe, PayPal, or Quickbooks right in the email body to remove all friction.",
      "Blame the software ('My system shows...'). This removes the personal attack vector."
    ],
    faq: [
      { question: "Should I apply late fees at 7 days?", answer: "Usually, no. Unless your contract explicitly mandates brutal 7-day late fees, it is vastly better for the long-term relationship to offer a 10-day grace period." },
      { question: "What if it's a massive corporation?", answer: "Massive corporations notoriously pay on Net-30 or Net-60 terms despite what your invoice says. Just politely follow up with the Accounts Payable department directly." },
      { question: "Is it okay if I automate this email?", answer: "Yes! Using software like Freshbooks or Honeybook to automatically send a soft '7-Day Overdue' reminder removes the emotional stress of writing it yourself." }
    ]
  },
  {
    slug: 'payment-reminder-email-30-days-overdue',
    title: 'Firm Payment Reminder: 30 Days Overdue',
    description: 'Time to get firm. Use these strict, professional payment reminder email templates when a client is 30 days past due.',
    intro: 'When an invoice sails past the 30-day overdue mark, the tone of your communication must fundamentally shift. A 7-day delay is an oversight; a 30-day delay is a massive cash flow liability for your business. At this stage, you must stop assuming positive intent and transition into formal, escalated collections mode. You have rendered your professional services, and the client is legally breaching their contract by withholding payment.\n\nA 30-day overdue reminder must strip away the overly pleasant conversational fluff. Keep the email aggressively brief and highly factual. Explicitly state the exact number of days the invoice is delinquent, the exact dollar amount owed, and the immediate consequences of continued non-payment. This is the precise moment to formally document the application of late fees per your signed contract, or to politely inform them that all ongoing project work will be halted immediately until the account is brought current.\n\nDeploy the strict templates below to handle severely delinquent accounts. These scripts maintain a veneer of professionalism while creating the immense urgency required to force a wire transfer today.',
    templates: [
      "Subject: ACTION REQUIRED: Invoice #12345 is 30 Days Overdue\n\nHi [Client Name],\n\nI am writing to formally request an immediate update regarding Invoice #12345, which is now 30 days past due.\n\nI have attached the outstanding invoice for [Total Amount] to this email. As outlined in our signed Services Agreement, any balances exceeding 30 days are subject to an automatic 5% late fee, which has now been applied to the updated balance.\n\nTo avoid any further fees or a disruption in your ongoing service access, please process this payment via the link below by exactly 5:00 PM EST this Friday.\n\n[Link: Secure Payment Portal]\n\nPlease confirm receipt of this email.\n\nBest regards,\n[Your Name]",
      "Subject: URGENT: Outstanding Balance for [Project Name]\n\nHi [Client Name],\n\nFollowing up on my previous three reminders regarding the outstanding balance for the [Project Name] deliverables we completed last month.\n\nBecause Invoice #12345 is now severely delinquent, I am forced to temporarily pause all ongoing work and revoke access to the [Software/Staging Environment] effective immediately.\n\nOnce the total balance of [Total Amount] is settled, my team will instantly resume production. \n\nPlease let me know when the wire transfer has been initiated.\n\nSincerely,\n[Your Name]",
      "Subject: Final Notice: Invoice #12345\n\nHi [Client Name],\n\nOur accounting department has flagged your account because Invoice #12345 for [Total Amount] is now over 30 days delinquent.\n\nWe value our relationship with [Company Name], but maintaining healthy cash flow is critical for our operations. If this balance is not settled via the payment portal by [Date], your account will automatically be forwarded to our external collections agency.\n\nI strongly prefer to resolve this internally with you. Please process the payment today so we can close this out.\n\nThanks,\n[Your Name]"
    ],
    tips: [
      "Use 'ACTION REQUIRED' or 'URGENT' in the subject line to guarantee the email bypasses their mental filters.",
      "Halt all work immediately. Never continue delivering services to a client who is 30 days delinquent; you lose all leverage.",
      "CC their finance or legal team if they continue to ignore your direct emails."
    ],
    faq: [
      { question: "Is threatening collections too aggressive?", answer: "At 30-45 days, it is standard corporate policy. It signals that you run a serious business and will not be taken advantage of." },
      { question: "What if they say they 'haven't been paid by their client yet'?", answer: "A B2B client's internal cash flow issues are not your legal problem. Reply stating: 'I understand, but our contract requires payment within 15 days of delivery, regardless of external factors.'" },
      { question: "Can I legally charge late fees?", answer: "Only if a specific late fee percentage was explicitly agreed upon and signed within the original Master Services Agreement (MSA) or contract." }
    ]
  },
  {
    slug: 'contract-follow-up-email-after-no-response',
    title: 'Following Up When a Contract Gets Ignored',
    description: 'Push the deal across the line. Use these strategic contract follow-up templates when a client suddenly ghosts you after receiving the agreement.',
    intro: 'You successfully pitched your agency, negotiated the price, and the client enthusiastically said, "Send over the contract!" You drafted the Master Services Agreement, sent the Docusign link, and... complete ghosting. When a hot prospect goes brutally silent at the exact moment a legal signature is required, panic ensues. This specific delay is almost always caused by the friction of corporate legal review; their internal counsel is slowly analyzing your indemnification clauses, or the executive with signing authority went on vacation.\n\nFollowing up on an un-signed contract requires a delicate balance of consultative patience and external urgency. You must not aggressively demand a signature. Instead, actively offer to rewrite the contract. Assume the legal jargon is confusing them or that a specific clause scared their legal team. Explicitly ask them if they need any redlines adjusted. Combine this highly accommodating tone with a strict capacity deadline (e.g., "We must begin onboarding by Friday to hit the launch date").\n\nUse the customized templates below to gracefully expedite the legal phase. These scripts unstick stalled contracts by giving the prospect an easy avenue to voice their objections directly.',
    templates: [
      "Subject: Re: Next Steps & Contract for [Project Name]\n\nHi [Client Name],\n\nHope you are having a fantastic week!\n\nI wanted to circle back regarding the Master Services Agreement I sent over on Tuesday. Since I know these standard legal documents can sometimes raise internal questions, I wanted to see if your legal team required any specific redlines or modifications to the clauses?\n\nI am completely happy to jump on a quick 10-minute call with your counsel to iron out any verbiage blocking the signature.\n\nJust let me know how you’d like to proceed!\n\nBest regards,\n[Your Name]",
      "Subject: Action Required: Finalizing the [Project Name] contract\n\nHi [Client Name],\n\nJust floating this thread back to the top of your inbox.\n\nWe are incredibly excited to officially kick off the [Project Name] initiative with your team. To ensure our engineering department holds dedicated bandwidth to hit your highly-requested launch date of [Desired Date], we would ideally need the final contract executed by end of day tomorrow.\n\nIs there anything specific in the scope of work causing hesitation that I can easily adjust or clarify for you today?\n\nCheers,\n[Your Name]",
      "Subject: Re: [Company Name] / [Your Company] Agreement\n\nHi [Client Name],\n\nFollowing up on the Docusign link I sent over earlier this week.\n\nI totally completely understand if this got buried under other priorities! If it is easier, I can quickly send over a summarized 1-page PDF of the exact deliverables rather than navigating the massive 10-page document.\n\nAre we still on track to officially onboard your team next week, or has the timeline shifted internally?\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Use their deadline as leverage. Remind them that delaying the signature causes their own desired launch date to be severely pushed back.",
      "Offer to speak to their lawyer. Usually, the point of contact does not understand the contract; offering to talk directly with their legal team solves the bottleneck instantly.",
      "Give them permission to back out softly. Ask 'Has this initiative been tabled?' to extract the brutal truth."
    ],
    faq: [
      { question: "How long should I wait to follow up on a contract?", answer: "Wait exactly 3 business days. Legal review takes time, but 3 days is enough to prompt them for an update." },
      { question: "What if they want to redline every single clause?", answer: "If you are a small agency, it is often easier to accept their corporate Paper (their standard vendor agreement) rather than spending thousands on lawyers fighting over your own contract." },
      { question: "Should I start the work before they sign?", answer: "Never. Absolutely never begin delivering services or handing over intellectual property until the ink is dry." }
    ]
  }
];

const out = [...data, ...newTemplates];
fs.writeFileSync(file, JSON.stringify(out, null, 2));
