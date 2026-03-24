import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Email Templates Hub',
  description: 'Terms of Service and Usage Agreement for Email Templates Hub.',
};

export default function TermsOfServicePage() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        By accessing and using Email Templates Hub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">2. General Usage and Content</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Email Templates Hub provides free, customizable email templates for professional use. You are permitted to copy, modify, and use these templates for your personal or business communication. However, you are strictly prohibited from scraping our database or republishing our templates en masse on competing websites or commercial products.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">3. No Liability Clause</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        The templates provided on Email Templates Hub are for informational and structural purposes only. We make no guarantees regarding the legal compliance, response rates, or success of the emails you send based on our templates. 
        <strong> Under no circumstances shall Email Templates Hub or its developers be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our templates.</strong> You are solely responsible for thoroughly reviewing and adapting the contents before sending them to any recipient.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">4. Third-Party Links</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Our website may contain links to third-party web sites or services that are not owned or controlled by Email Templates Hub. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-10 mb-4">5. Changes to Terms</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of the website following the posting of any changes to these Terms constitutes acceptance of those changes.
      </p>

      <p className="text-gray-700 mt-10">
        If you have any questions about these Terms, please contact us at emailtemplateshub@gmail.com.
      </p>
    </article>
  );
}
