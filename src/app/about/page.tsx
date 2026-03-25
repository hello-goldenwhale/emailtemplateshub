import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Email Templates Hub',
  description: 'Learn more about Email Templates Hub and our mission to help professionals communicate effectively.',
};

export default function AboutPage() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">About Us</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <strong>Email Templates Hub</strong>, your ultimate resource for professional, ready-to-use email templates.
        Whether you are a job seeker, a SaaS founder, a sales professional, or an HR executive, our platform is designed to save you critical time
        and help you communicate with maximum effectiveness.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">Our Mission</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Drafting the perfect email from scratch is time-consuming and often stressful. Our mission is to eliminate the friction from
        professional communication by providing high-quality, proven templates that you can customize in seconds. We believe that
        clear, professional communication should be accessible to everyone without the anxiety of staring at a blank screen.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">Who Is This For?</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        <li><strong>Job Seekers:</strong> Secure interviews and follow up professionally without second-guessing your tone.</li>
        <li><strong>Sales & Marketing:</strong> Send high-converting cold pitches and effective follow-ups.</li>
        <li><strong>SaaS Founders:</strong> Manage onboarding, pricing disputes, and churn recovery with polished messaging.</li>
        <li><strong>HR & Management:</strong> Handle internal announcements, onboarding, and difficult conversations smoothly.</li>
      </ul>

      <p className="text-gray-700 leading-relaxed">
        We constantly update our database with new, relevant templates based on modern business practices.
        Thank you for trusting Email Templates Hub to handle your communication needs!
      </p>
    </article>
  );
}
<h1>TEST DEPLOY</h1>