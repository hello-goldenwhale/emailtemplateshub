import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Email Templates Hub',
  description: 'Privacy Policy for Email Templates Hub, outlining our use of cookies, third-party vendors, and data collection.',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        At Email Templates Hub, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information that is received and collected by Email Templates Hub and how it is used.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">1. Data Collection (Non-Personal)</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Like many other websites, Email Templates Hub utilizes log files and analytics. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather broad demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">2. Use of Cookies</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Email Templates Hub uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">3. Google AdSense & Third-Party Vendors</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
        <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
        <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
        <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
        <li>Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
      </ul>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">4. User Consent</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        By using our website, you hereby consent to our privacy policy and agree to its terms. If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at emailtemplateshub@gmail.com.
      </p>
    </article>
  );
}
