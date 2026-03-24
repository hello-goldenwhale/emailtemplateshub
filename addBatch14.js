const fs = require('fs');
const file = 'src/data/templates.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

const newTemplates = [
  {
    slug: 'third-follow-up-after-sales-call',
    title: 'The Third Follow-Up After a Sales Pitch',
    description: 'Don\'t let the lead die. Use these strategic third follow-up emails to clarify a prospect\'s intent after a great sales call goes quiet.',
    intro: 'You had a fantastic 45-minute discovery call. The prospect was highly engaged, repeatedly nodded at your demo, and verbally promised to "review things internally and email you by Friday." And then... absolute silence. You followed up once; nothing. You followed up again; crickets. Sending a third follow-up email after a sales call often feels uncomfortable. You worry about appearing desperate or damaging the rapport you built during the meeting. However, professional persistence is a mandate in B2B sales.\n\nThe strategic purpose of the third post-call follow-up is achieving absolute clarity. At this stage, your fundamental goal shifts from "closing the deal" to simply generating a definitive "Yes, we are moving forward" or "No, we are passing for now." A drawn-out "Maybe" drains your pipeline velocity. Employ the "Permission to Close" framework. Explicitly ask them if the initiative has been canceled or deprioritized. By gracefully giving them the professional cover to reject you, you ironically remove the anxiety preventing them from hitting reply.\n\nUse the highly effective templates below to execute your third follow-up. These scripts strip away all pressure, forcing the prospect to provide the clarity you need to efficiently manage your sales pipeline.',
    templates: [
      "Subject: Re: Next Steps / [Company Name]\n\nHi [Prospect Name],\n\nI want to respect your time, so I will be incredibly brief.\n\nTypically, when a timeline extends like this after such a great initial conversation, it means that implementing a new [Software/Service] has either been deprioritized by the board, or your team simply doesn't have the bandwidth to tackle the setup phase right now.\n\nIf that is the case, please let me know! I will happily stop cluttering your inbox and reach back out in Q4 when timing is better.\n\nBest regards,\n[Your Name]",
      "Subject: Re: Recap of our call last Tuesday\n\nHi [Name],\n\nSince I haven't heard back regarding the proposal we discussed on our call, I’m going to assume this project has been tabled for the time being.\n\nI will go ahead and close out your file on my end so I stop bothering you. If things change and you’d like to revisit how we can automate the [Specific Process] for your team, please feel free to reach out anytime!\n\nWishing you and the team a great rest of the quarter.\n\nCheers,\n[Your Name]",
      "Subject: Re: [Company Name] & [Your Company]\n\nHi [Name],\n\nJust floating this to the top of your inbox one last time.\n\nI know how chaotic things get during the end of the month. Are you still actively trying to secure budget approval for the [Platform/Service], or should I hold off on reaching out until next year?\n\nA quick 'Yes' or 'No' is absolutely all I need—no hard feelings either way!\n\nBest,\n[Your Name]",
      "Subject: Re: Follow up from our demo\n\nHi [Name],\n\nI’m guessing you’ve been completely swamped since our fantastic demo a few weeks ago.\n\nTo ensure I’m not dropping the ball on my end, I just wanted to check if you needed me to draft a custom ROI summary for you to share with [Executive Sponsor's Name/The Board] to help finalize the decision?\n\nIf not and the project is just on hold, totally understood. Just let me know!\n\nThanks,\n[Your Name]"
    ],
    tips: [
      "Use the 'Takeaway'. By stating 'I am going to close your file', you trigger human loss aversion. If they are actually interested, they will panic and reply instantly to stop you from leaving.",
      "Be radically detached from the outcome. The tone must be entirely devoid of emotion, guilt, or frustration.",
      "Keep it painfully short. Long, rambling emails at this stage guarantee they will quickly click away without replying."
    ],
    faq: [
      { question: "Is this the last email I should send?", answer: "Usually, yes. The third or fourth follow-up Post-Call is typically the 'Break Up' email. If they ignore this, put them in a passive 6-month nurture sequence and move on." },
      { question: "Why give them permission to say no?", answer: "People hate awkward confrontations. By telling them 'It is okay to say no', you remove the psychological friction of rejecting you, resulting in a much-needed clear answer." },
      { question: "What if they reply saying they need more time?", answer: "Great! Clarify the timeline. Reply strictly with: 'Understood. Mind if I check back in on October 15th?'" }
    ]
  },
  {
    slug: 'follow-up-after-no-reply-3-days',
    title: 'The "3 Days Later" Follow-Up Email',
    description: 'Strike while the iron is hot. Use these brief, professional follow-up templates when someone ghosts you for 72 hours.',
    intro: 'You sent an important email on Monday, and by Thursday morning, your inbox is still empty. The 3-day window is the professional sweet spot for the first follow-up. Waiting only 24 hours makes you look frantic, aggressive, and disrespectful of the recipient\'s busy schedule. Waiting two full weeks allows your original email to be completely forgotten, buried under hundreds of new messages. Following up precisely 3 to 4 business days later demonstrates persistence while maintaining a respectful, professional boundary.\n\nThe anatomy of a 3-day follow-up must be effortlessly light and low-friction. The recipient almost certainly saw your original email, mentally flagged it to handle later, and simply got caught up in back-to-back meetings. Your goal is simply to bring the thread back to the top of their inbox. Do not resend your entire original pitch or complain that they ignored you. Instead, acknowledge how busy they are, reiterate your primary point in a single sentence, and ask a highly focused, low-effort question.\n\nUse the templates below to perfectly execute the 3-day bump. Whether you are following up on a networking request, a data request from a colleague, or an initial sales outreach, these templates trigger prompt replies.',
    templates: [
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nI know how busy things are over in the [Department], so I just wanted to quickly bump this thread back to the top of your inbox.\n\nDid you have a brief moment to review the [Attachment/Request] I sent over on Tuesday? Let me know if you need any points clarified on my end!\n\nBest regards,\n[Your Name]",
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nHope your week is going great!\n\nJust bubbling this up in case it accidentally got buried in the shuffle. Are we still on track to execute the [Specific Task/Meeting] by Friday?\n\nLet me know if you need to adjust the timeline!\n\nCheers,\n[Your Name]",
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nI’m sure you’re completely swamped right now, so I’ll be super quick.\n\nI just wanted to follow up on my previous note regarding [Specific Topic]. If you have 2 minutes to quickly confirm the [Data Point/Decision], I can get started on the deployment immediately.\n\nThanks so much,\n[Your Name]",
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nJust a quick follow-up to my note from earlier this week.\n\nIf you are too slammed to review this right now, completely understood. Should I follow up with [Alternative Contact Name] regarding the [Project] instead, or hold off until next week?\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Keep it under 3 sentences. The heavy lifting was done in your first email. The follow-up is merely a gentle nudge.",
      "Always use 'Reply' on your original sent email. This keeps the 'Re:' in the subject line, proving this is an ongoing conversation and keeping the original context visible below.",
      "Give an 'opt-out'. Saying 'If you are too slammed right now, no worries' reduces their stress and often prompts a fast 'Sorry, I will look at it tomorrow!' response."
    ],
    faq: [
      { question: "Is 3 days too soon to follow up after a job interview?", answer: "Yes. For job interviews, always wait at least 7 to 10 days, or exactly 1 day after their explicitly promised deadline." },
      { question: "Should I change the subject line?", answer: "Never. Changing the subject line breaks the email thread in their client (like Gmail or Outlook), forcing them to hunt for your original context." },
      { question: "What if it was a Friday email?", answer: "Do not count weekends. If you emailed Friday, your 3-business-day follow-up lands on Wednesday morning." }
    ]
  },
  {
    slug: 'follow-up-after-no-reply-1-week',
    title: 'How to Follow Up After 1 Week of No Reply',
    description: 'Get an answer safely. Learn exactly how to follow up when a client or colleague has ignored your message for a full week.',
    intro: 'One week of absolute radio silence presents a unique professional challenge. When someone ignores your message for seven full days, the situation has escalated beyond a simple "I got busy and forgot." Typically, a 1-week delay implies that your request requires a significant amount of mental labor, forces them to make a difficult decision they want to avoid, or relies on input from an external stakeholder who is currently stalling them. Sending a basic "just checking in" after a week of silence is ineffective; you must actively lower the difficulty of replying.\n\nTo successfully elicit a response after a week of being ghosted, your follow-up email must proactively remove friction. If you initially asked them to review a massive 40-page document, pivot. Ask them purely for a high-level vibe check on page one. If you asked for a complex strategic decision, offer them a pre-packaged "Option A vs. Option B" to easily choose from. Address the delay gracefully without a hint of guilt-tripping, assuming extreme positive intent regarding their massive workload.\n\nImplement the customized 1-week follow-up scripts below to reignite frozen conversations. These templates minimize cognitive load for the recipient, allowing them to rapidly fire off a reply and unblock your workflow.',
    templates: [
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nHope you've had a great week!\n\nI’m sure things remain incredibly busy on your end, so I wanted to circle back on the [Project/Document] I sent over last week.\n\nTo save you time, the most critical item we need approval on is simply the [Specific Narrow Factor, e.g., Q3 budget outline on page 2]. If everything looks roughly acceptable there, I can move forward with the rest of the draft.\n\nLet me know your thoughts when you have a spare moment!\n\nBest regards,\n[Your Name]",
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nJust a quick note to bump this thread back up. \n\nI completely understand if this initiative has temporarily fallen down the priority list! To ensure we stay aligned on timelines, could you let me know if we are still targeting a [Month] launch for the [Project]?\n\nIf you need me to adjust deadlines on my end, just say the word.\n\nCheers,\n[Your Name]",
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nFollowing up on my note from last week regarding [Topic].\n\nSince this decision clearly requires a bit of internal maneuvering, I’ve actually gone ahead and mocked up two distinct options to make things easier:\n\nOption A: [Fast, low effort path]\nOption B: [Slower, more comprehensive path]\n\nDo either of these directions sound better to you, or should we table this entirely for now?\n\nBest,\n[Your Name]",
      "Subject: Re: [Original Subject Line]\n\nHi [Name],\n\nI know how quickly a week flies by, so I wanted to gently bump my previous email.\n\nDo you still need me to execute the [Task/Delivery] by Friday? If you are waiting on internal approval from [Department/Person], I am completely happy to hold my position until you get the green light.\n\nLooking forward to an update!\n\nThanks,\n[Your Name]"
    ],
    tips: [
      "Condense the 'Ask'. If your first email had 5 questions, the 1-week follow-up should politely ask only the single most important question.",
      "Blame the complexity, not them. Acknowledge that your request was heavy ('I know this requires a lot of maneuvering'). This removes their guilt for delaying.",
      "Provide multiple-choice options. Forcing them to write out a long strategy response causes delays. Let them reply with simply 'Option A works perfectly!'"
    ],
    faq: [
      { question: "If they ignore the 1-week follow-up, what's next?", answer: "Wait another 10 to 14 days. Send one final, extremely polite 'closing the loop / assuming this is dead' email, and put the ball entirely in their court." },
      { question: "Should I call them instead of emailing?", answer: "If it is an urgent internal project blocking your work, yes, follow up quickly via Slack or phone. If it is an external client or sales prospect, stick to email to avoid being overly aggressive." },
      { question: "Is it okay to show frustration?", answer: "Absolutely never. Always maintain a tone of extreme grace and patience. Professionalism during delays is exactly how you build long-term trust." }
    ]
  },
  {
    slug: 'thank-you-email-after-internship-interview',
    title: 'Thank You Email After an Internship Interview',
    description: 'Land the internship. Differentiate yourself with these highly professional, polished thank you emails after an internship interview.',
    intro: 'Securing a highly competitive corporate internship requires more than a strong GPA and relevant coursework. Because most college students applying for internships possess virtually identical resumes and zero real-world experience, hiring managers rely heavily on "soft skills" to make their final selection. They are searching for candidates who demonstrate flawless professional communication, eager enthusiasm, and reliability. Sending a polished thank-you email within 24 hours of your internship interview is the ultimate indicator that you possess these massive corporate differentiators.\n\nA great internship thank-you email is not a desperate plea for the job. Instead, it is a confident, concise note of appreciation. You must accomplish three things in this brief email: genuinely compliment the interviewer\'s time, specifically reference one unique insight you gained directly from the conversation, and reaffirm your intense excitement for the specific role. Referencing a unique moment from the interview (e.g., "I loved learning about your team\'s pivot to React") proves you were actively, intensely listening.\n\nUse the tested student templates below to send a flawless follow-up. These scripts strike the perfect balance between youthful enthusiasm and refined business professionalism, ensuring you stand out as the safest, smartest hire.',
    templates: [
      "Subject: Thank you! / [Your Name] - [Job Title] Internship\n\nHi [Interviewer's Name],\n\nThank you so much for taking the time to speak with me this afternoon regarding the [Job Title] Internship.\n\nI really enjoyed learning more about your personal career trajectory at [Company Name]. Your insights regarding how the team is currently tackling [Specific Challenge or Project discussed] were absolutely fascinating, and it completely solidified my desire to contribute to that initiative this summer.\n\nI am incredibly excited about the opportunity to bring my coursework in [Relevant Subject] into a real-world setting with your team.\n\nPlease let me know if you need any additional transcripts, writing samples, or references as you finalize your decision.\n\nBest regards,\n[Your Name]",
      "Subject: Great speaking with you - [Your Name]\n\nHi [Interviewer's Name],\n\nThank you for the fantastic conversation today!\n\nIt was wonderful to learn more about the incredible culture within the [Department Name] department. I especially appreciated your advice on [Specific Piece of Advice they gave you]—I will definitely be taking that to heart as I begin my career.\n\nMy background in [Skill/Coursework] paired with my intense eagerness to learn makes me highly confident I could hit the ground running as an incredibly useful asset for your team this summer.\n\nI look forward to hearing about next steps!\n\nSincerely,\n[Your Name]",
      "Subject: Thank you / [Job Title] Intern Candidate\n\nHi [Recruiter/Interviewer Name],\n\nThank you for taking the time out of your busy schedule to interview me today.\n\nLearning about [Company Name]'s upcoming launch of the [Specific Product/Initiative] was incredibly exciting. The fast-paced, deeply analytical culture you described is exactly the environment I am searching for to launch my career in [Industry].\n\nI’ve attached a copy of the [Portfolio/Project/Paper] we discussed during the call for your reference.\n\nThank you again for your time and guidance!\n\nBest,\n[Your Name]"
    ],
    tips: [
      "Send it exactly 12 to 24 hours after your interview concludes. Too fast (within 5 minutes) looks automated; too slow (3 days) makes you look disorganized.",
      "Personalize it highly. If you interviewed with a panel of three people, you absolutely must send three separate, slightly distinct emails. Do not blindly copy-paste.",
      "Double-check spelling. Misspelling the interviewer's name or the company name in a thank you note is an instant, fatal rejection."
    ],
    faq: [
      { question: "What if the interviewer didn't give me their email?", answer: "Look them up on LinkedIn to verify the spelling of their name, then ask the HR Recruiter you have been communicating with: 'Could you please forward this thank you note to [Name] for me?'" },
      { question: "Should I include my resume again?", answer: "Usually unnecessary unless they specifically requested an updated version or a portfolio piece during the interview." },
      { question: "Do professionals really care about thank you notes?", answer: "Yes. When choosing between two equally unqualified 20-year-olds, the manager will 100% select the one who demonstrated the emotional intelligence to graciously say 'Thank You'." }
    ]
  }
];

const out = [...data, ...newTemplates];
fs.writeFileSync(file, JSON.stringify(out, null, 2));
