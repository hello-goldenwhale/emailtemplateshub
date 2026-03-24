const fs = require('fs');
const file = 'src/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

const newTemplates = [
  {
    slug: 'employee-termination-email-template',
    title: 'Employee Termination Email & Letters',
    description: 'Avoid massive HR lawsuits. Use these strictly compliant termination email templates to professionally and legally terminate an employee.',
    intro: 'Terminating an employee is the single most terrifying and legally fraught responsibility of management. Handled poorly, a termination can result in a devastating wrongful termination lawsuit, brutal Glassdoor reviews, and irreparably damaged internal team morale. The written documentation surrounding a termination must be handled with absolute, robotic perfection.\n\nA masterclass termination email strictly removes all emotion, conversational fluff, and apologies. You must not say "I am so sorry this didn\'t work out." Apologizing implies corporate guilt. You must clearly state exactly when the termination is effective (date and time), precisely how final payroll and accrued PTO will be legally handled, and explicit instructions regarding the immediate return of proprietary corporate equipment. The email serves exclusively as a rigid liability shield for the company.\n\nDeploy the highly vetted HR templates below to execute formal terminations. These scripts are engineered to fiercely protect the organization while delivering the harsh news with brief, operational clarity.',
    templates: [
      "Subject: Notice of Termination of Employment\n\nDear [Employee Name],\n\nThis letter formally confirms that your employment with [Company Name] is terminated, effective immediately, as of [Date].\n\nYour final paycheck, including [Number] hours of strictly accrued PTO, will be processed and direct-deposited into your primary account on [Date] in accordance with state law.\n\nYou will receive a separate, highly detailed email from the HR department by end of day today outlining exactly how your COBRA healthcare benefits and 401(k) rollover options will be administered.\n\nPlease entirely pack your personal belongings and return your corporate laptop, security badge, and company phone to [Manager/HR Name] before exiting the building today.\n\nSincerely,\n[Your Name/HR Manager]",
      "Subject: Formal Termination due to Policy Violation\n\nDear [Employee Name],\n\nThis email serves as formal written notice that your employment as a [Job Title] at [Company Name] is terminated for cause, effective immediately.\n\nAs explicitly discussed during our meeting on [Date], this termination is the direct result of a severe violation of the [Specific Policy Name], specifically regarding [Brief description of violation].\n\nYour corporate email access has been instantly revoked. A finalized copy of your signed severance agreement and specific COBRA health insurance enrollment documents have been mailed directly to your permanent address on file.\n\nWe request the immediate FedEx return of your company-issued hardware using the prepaid shipping label we securely generated for you today.\n\nRegards,\n[Your Name]",
      "Subject: Termination due to Company Restructuring\n\nDear [Employee Name],\n\nThis document formally confirms the difficult organizational decision to eliminate your position as [Job Title], effective [Date].\n\nPlease heavily note that this termination is strictly a result of the ongoing macro-economic restructuring of the [Department Name] team, and is not a reflection of your individual professional performance.\n\nTo officially assist with your transition, [Company Name] is offering a comprehensive severance package of [Severance Amount] and 3 months of outplacement career coaching. The formal severance agreement is securely attached for your lawyer's immediate review.\n\nThank you for your valuable contributions to the company over the last [Time Period].\n\nSincerely,\n[Your Name]"
    ],
    tips: [
      "Never email this entirely out of the blue. An employee should always be formally terminated in a brief, face-to-face (or Zoom) meeting first. The email strictly serves as the formal legal paper trail immediately following the meeting.",
      "Bring a witness. Always have a dedicated HR representative or secondary manager CC'd on the email and present in the room to document exactly what was said.",
      "Revoke access aggressively. The exact second the termination email is sent, the IT department must instantly disable their Slack, Email, and internal CRM capabilities to prevent corporate data theft."
    ],
    faq: [
      { question: "Can I explain exactly why they were fired in the email?", answer: "Keep it extremely brief unless it is a 'For Cause' termination. If it is an At-Will termination for poor performance, explicitly detailing 50 reasons invites massive legal debate." },
      { question: "Should I offer to act as a reference?", answer: "Generally, no. Promising to be a reference for someone you just fired sends highly conflicting signals. Instruct them to use the formal HR department to verify employment dates." },
      { question: "Do I have to pay them for unused vacation days?", answer: "This is heavily dependent on specific state labor laws (e.g., California strictly requires it). Always defer to your formal legal counsel." }
    ]
  },
  {
    slug: 'job-offer-email-hr-template',
    title: 'Formal Job Offer Email Templates',
    description: 'Close top talent fast. Use these enthusiastic, highly professional job offer email templates to officially hire top candidates.',
    intro: 'You finally found the absolute perfect candidate after 4 months of grueling interviews. Extending the formal job offer is a highly delicate psychological transition. You must shift instantly from being a rigid evaluator to an incredibly enthusiastic, welcoming leader. If the offer email is a cold, robotic wall of text simply attaching a poorly formatted PDF, the candidate will instinctively lose all their emotional excitement and suddenly heavily second-guess joining your team.\n\nA masterclass job offer email perfectly balances massive enthusiasm with strict legal clarity. The first sentence must unequivocally celebrate their successful interview specifically by name. Then, clearly outline the exact mechanical details of the offer: base salary, aggressive target start date, and a specific deadline by which they must officially sign the contract. Remove all friction by including a clickable DocuSign link right in the body of the email.\n\nDeploy the premium HR templates below to extend highly converting formal offers. These scripts establish immense immediate loyalty and make rejecting the offer emotionally incredibly difficult for the candidate.',
    templates: [
      "Subject: Formal Job Offer from [Company Name]! 🎉\n\nHi [Candidate Name],\n\nWe are absolutely thrilled to officially offer you the position of [Job Title] here at [Company Name]!\n\nThe entire hiring panel was incredibly blown away by your massive strategic insights regarding [Specific topic from interview]. We are highly confident you will be a profoundly transformative asset to the [Department] team.\n\nHere are the core details of your official offer:\n- Base Salary: [Salary Amount] annually\n- Equity: [Equity Amount] stock options\n- Target Start Date: [Date]\n\nPlease heavily review the entire comprehensive benefits package and the formal employment agreement securely attached here: [DocuSign Link].\n\nTo lock in your start date, please sign the agreement by end of day this Friday. If you have any immediate questions regarding the benefits, I am completely available for a brief call tomorrow.\n\nWe cannot wait to officially welcome you to the team!\n\nCheers,\n[Your Name]",
      "Subject: Welcome to [Company Name]! (Offer Inside)\n\nHi [Candidate Name],\n\nIt is my absolute pleasure to formally extend an offer for you to join [Company Name] as our new [Job Title].\n\nYour deep technical expertise in [Skill] is exactly what we desperately need to aggressively scale the upcoming Q3 product initiatives.\n\nYour formal offer letter, detailing your [Salary] base compensation and comprehensive health benefits, is securely linked below for your signature.\n\n[Link to Offer Document]\n\nOur CEO, [CEO Name], asked me to personally pass along their massive excitement. Let me know exactly when you are available this week so we can officially celebrate!\n\nBest regards,\n[Your Name]",
      "Subject: Re: Next Steps / Your Offer from [Company Name]\n\nHi [Candidate Name],\n\nFollowing our fantastic sync yesterday, I am excited to officially send over your formal employment offer for the [Job Title] role.\n\nBecause we know you are currently wrapping up massive projects at your current firm, we have specifically set your target start date for [Date] to give you ample transition time.\n\nPlease review the attached official document highlighting your [Salary] base salary and immediate 401k match program. We kindly request a formal decision by [Deadline Date].\n\nWe are incredibly eager to get you completely onboarded!\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Call them before you email them. Always verbally deliver the 'You got the job!' news on a quick 3-minute phone call to capture their raw excitement, then instantly send the formal email document while they are still hyped.",
      "Give a strict deadline. Giving a candidate 2 full weeks to decide allows them to leverage your offer to aggressively negotiate a steep raise with their current employer. Demand a signature within 48 to 72 hours.",
      "Send a team welcome. Once they officially sign, have 3 of their new direct teammates individually email them a 1-sentence 'Welcome to the team!' email to solidify their commitment."
    ],
    faq: [
      { question: "Is the email itself a legally binding contract?", answer: "No. The email strictly serves as the friendly cover letter. The legally binding terms must be housed entirely inside the formally attached PDF or DocuSign agreement." },
      { question: "What if they counter-offer?", answer: "Expect it! Assume 80% of top-tier talent will aggressively counter the initial base salary. Prepare a strict maximum budget buffer during the planning phase." },
      { question: "Can I rescind an offer?", answer: "Yes, in At-Will states, an offer can be legally rescinded before the start date (e.g., if a background check heavily fails), but it causes massive reputational damage." }
    ]
  },
  {
    slug: 'onboarding-email-hr-process',
    title: 'New Employee Onboarding Email Templates',
    description: 'Ensure a perfect Day 1. Use these highly structured HR onboarding emails to welcome new hires and eliminate early churn.',
    intro: 'The first week of a new job is incredibly intimidating. If a new hire logs in on their first morning and has zero emails, no laptop access, and no clear schedule, they will instantly regret accepting the offer. A flawless remote onboarding email process eliminates all Day 1 anxiety by providing radical, hyper-organized clarity.',
    templates: [
      "Subject: Welcome to [Company Name]! Your Day 1 Itinerary\n\nHi [Employee Name],\n\nWe are incredibly thrilled you are officially joining the team tomorrow!\n\nTo ensure your absolute perfect first day, I have outlined your exact schedule below. Your new corporate Macbook was successfully delivered to your home address yesterday.\n\nYour Day 1 Schedule:\n- 9:00 AM: IT Setup Sync (Use this temporary Zoom Link: [Link])\n- 10:00 AM: HR Benefits Overview with [HR Name]\n- 11:30 AM: Brief Welcome Lunch (DoorDash gift card heavily incoming!)\n- 1:00 PM: 1-on-1 with Your Manager, [Manager Name]\n\nPlease log in using the temporary credentials I securely texted to your phone this morning. \n\nSee you perfectly at 9 AM!\n\nBest,\n[Your Name]",
      "Subject: Action Required: Pre-Onboarding Checklist\n\nHi [Employee Name],\n\nWe are exactly one week away from your official start date at [Company Name] and we cannot wait!\n\nBefore you formally begin next Monday, we absolutely need you to complete three brief administrative tasks so our IT team can provision your licenses:\n1. Fill out the direct deposit payroll form attached here.\n2. Upload a brief headshot for our internal Slack directory.\n3. Reply to this email explicitly confirming your current physical shipping address for your equipment.\n\nIf you have any questions, I am completely available.\n\nCheers,\n[Your Name]",
      "Subject: Intro: Meet [Employee Name], our new [Job Title]\n\nHi Team,\n\nPlease join me in aggressively welcoming [Employee Name] as the newest [Job Title] on the [Department Name] team!\n\n[Employee Name] joins us directly from [Previous Company], where they heavily scaled their [Specific Achievement]. When they aren't completely destroying coding sprint targets, they are an avid [Hobby] and massive fan of [Sports Team].\n\nThey officially start today, so please feel free to drop a quick 'Hello' in their Slack DMs!\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Gamify the first week. Give them exactly 3 highly achievable, tiny tasks to complete by Friday so they feel immediately highly productive.",
      "Assign an 'Onboarding Buddy'. A peer (not their manager) who they can legally annoy with 50 minor questions about how to use the specific corporate printer.",
      "Send the swag early. Sending a massive box of branded hoodies and coffee mugs to their house before Day 1 builds immense family buy-in."
    ],
    faq: [
      { question: "How long should onboarding last?", answer: "Administrative onboarding is 1 week. Strategic ramp-up onboarding should strictly last 30 to 90 days." },
      { question: "Should I overload them with manuals?", answer: "No. Filter the massive corporate wiki. Give them exactly one page describing their specific 30-day goals." },
      { question: "What if their laptop doesn't arrive in time?", answer: "Heavily apologize, push their official start date back 2 days, and strictly ensure they are fully paid for those days anyway." }
    ]
  },
  {
    slug: 'internal-promotion-announcement-email',
    title: 'Internal Promotion Announcement Emails',
    description: 'Boost team morale. Announce massive internal employee promotions across the company with these highly professional announcement templates.',
    intro: 'Publicly recognizing internal talent is the cheapest and most effective employee retention strategy in corporate management. Writing a massive, company-wide email announcing a promotion validates the promoted employee\'s brutal hard work and signals to the entire organization that upward mobility actually exists. You must explicitly highlight exactly what massive metric or project they crushed to earn the new title.',
    templates: [
      "Subject: Exciting Annoucement - [Employee Name]'s Promotion!\n\nHi Team,\n\nI am absolutely thrilled to officially announce that [Employee Name] has been heavily promoted to the new role of [New Job Title], effective immediately.\n\nSince joining us in [Year], [Employee Name] has been entirely instrumental in scaling the [Department Name]. Their recent massive success heavily driving the [Specific Project Name] launch resulted in a verifiable 30% increase in Q2 revenue.\n\nIn their new role, they will be explicitly leading the entire [New Division] strategy and directly mentoring our junior cohorts.\n\nPlease entirely flood their inbox and Slack with massive congratulations today!\n\nBest regards,\n[Your Name/CEO]",
      "Subject: Promotion Announcement: [Employee Name] to [New Title]\n\nHi Everyone,\n\nPlease join the leadership team in aggressively congratulating [Employee Name] on their incredibly well-deserved promotion to [New Job Title]!\n\n[Employee Name] has consistently displayed a profound, relentless dedication to our core corporate values. When the [Massive Crisis] hit earlier this year, they immediately stepped up entirely outside their job description to resolve the bottleneck flawlessly.\n\nWe are incredibly lucky to heavily benefit from their continuing leadership.\n\nCheers,\n[Your Name]",
      "Subject: Leadership Update: [Employee Name]\n\nHi Team,\n\nAs we aggressively expand operations heading into Q4, I am excited to announce that [Employee Name] will strictly be taking over as our new [New Executive Title].\n\n[Employee Name]’s deep strategic mastery of the [Specific] market over the last 3 years has been practically unmatched. They will deeply expand their portfolio to oversee the entire [Region/Department] effective Monday.\n\nPlease join me in deeply wishing them massive success in their new expanded role.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Highlight specific, verifiable metrics. Prove they earned it with raw math. Do not just say 'They are a hard worker.'",
      "Mention their new specific responsibilities so the rest of the company knows exactly who to email for specific project approvals moving forward.",
      "Send it company-wide. Do not relegate massive promotions to a hidden Slack channel. Send a formal, massive email blast."
    ],
    faq: [
      { question: "What if someone else wanted the job?", answer: "Before sending the massive public blast, the manager must explicitly, privately call the employee who was passed over to heavily explain the specific feedback gracefully." },
      { question: "Should they write a 'Thank You' reply-all?", answer: "No. Reply-all storms are a massive corporate nuisance. Instruct people to strictly congratulate them natively via direct Slack message." },
      { question: "Is this required for tiny promotions?", answer: "Moving from Junior Level 1 to Junior Level 2 does not require a massive CEO blast. Save these templates for true management transitions." }
    ]
  },
  {
    slug: 'executive-resignation-announcement-email',
    title: 'Executive Resignation Announcement Templates',
    description: 'Control the narrative. Use these highly professional PR templates to smoothly announce the sudden resignation or transition of a massive corporate executive.',
    intro: 'When a massive C-Suite executive or founder suddenly resigns, the entire corporate workforce instantly panics. Rumors emerge regarding impending bankruptcy, massive internal scandals, or brutal imminent layoffs. A flawlessly executed executive resignation announcement must immediately aggressively completely control the transition narrative.',
    templates: [
      "Subject: Important Leadership Update at [Company Name]\n\nHi Team,\n\nI am writing to share some massive leadership news today. After 5 incredible years intimately building [Company Name], [Executive Name] will be officially stepping down from their role as [Job Title] at the end of next month to entirely pursue a new venture.\n\n[Executive Name] has been an absolutely transformative force here, violently scaling our [Department] from 5 people to over 200. We simply would not be here without their relentless grit.\n\nWe have already actively initiated a massive search for a replacement. During the 30-day transition, [Interim Leader Name] will strictly step in as the Interim [Job Title] to ensure absolutely zero disruption to our Q3 product roadmap.\n\nPlease join me in aggressively thanking [Executive Name] for their massive impact.\n\nBest,\n[CEO Name]",
      "Subject: Transitioning to the Board: [Founder Name]\n\nHi Everyone,\n\nToday marks an incredibly massive milestone in the [Company Name] journey.\n\nEffectively next Monday, our brilliant co-founder [Founder Name] will be officially transitioning out of the day-to-day operations as CTO and elevating up to join our Board of Directors permanently.\n\nThis heavily planned transition enables [Founder Name] to focus purely on high-level macro strategy while our highly capable VP of Engineering seamlessly takes over daily sprint execution.\n\nNothing strategically changes regarding our massive product mandate this year.\n\nCheers,\n[Your Name]",
      "Subject: Departure Announcement: [Executive Name]\n\nHi Team,\n\nI am writing to officially announce that [Executive Name] will be departing [Company Name] next Friday to entirely spend more intensive time with their immediate family.\n\nWe deeply respect their highly personal decision and heavily thank them for their fierce, unyielding dedication to our massive launch last quarter.\n\nAll immediate departmental approvals will instantly route heavily through [Manager Name] effective tomorrow.\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Never show internal friction. Even if the executive was aggressively fired, publicly frame it incredibly politely as 'pursuing other incredible opportunities.'",
      "Specify the interim leader immediately. A power vacuum creates mass panic. Tell them exactly who is running the ship today.",
      "Give a generous timeline if possible. A 30-day planned transition is heavily calming; a 'departed effectively immediately today' implies a massive lawsuit or scandal."
    ],
    faq: [
      { question: "Can the departing executive send the email?", answer: "Usually, the CEO sends the massive administrative email, and the departing executive sends a completely separate, heavily nostalgic 'Goodbye and Thank You' email to their specific team." },
      { question: "What if it leaks to the press?", answer: "Ensure your massive PR team has an incredibly brief, highly sanitized 3-sentence statement strictly prepared before the internal email goes out." },
      { question: "Should we host a goodbye party?", answer: "Yes, publicly celebrating their departure explicitly proves there is absolutely zero bad blood, heavily calming the remaining nervous staff." }
    ]
  }
];

const out = [...data, ...newTemplates];
fs.writeFileSync(file, JSON.stringify(out, null, 2));
