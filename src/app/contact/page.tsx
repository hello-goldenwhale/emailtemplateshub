import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Email Templates Hub',
  description: 'Get in touch with the Email Templates Hub team for inquiries, suggestions, or business opportunities.',
};

export default function ContactPage() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">Contact Us</h1>
      
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-8 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          For any inquiries, template suggestions, business opportunities, or support regarding our platform, please feel free to reach out to us directly via email.
        </p>
        
        <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-200">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <a href="mailto:emailtemplateshub@gmail.com" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
            emailtemplateshub@gmail.com
          </a>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        We aim to respond to all business and partnership inquiries within 48-72 hours.
      </p>
    </article>
  );
}
