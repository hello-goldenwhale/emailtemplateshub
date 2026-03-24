import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import TemplateCard from "@/components/TemplateCard";
import AdPlaceholder from "@/components/AdPlaceholder";

interface TemplateData {
  slug: string;
  title: string;
  description: string;
  intro: string;
  category?: string;
  templates: string[];
  tips: string[];
  faq: { question: string; answer: string }[];
  whenToUse?: string;
  commonMistakes?: string[];
}

async function getTemplates(): Promise<TemplateData[]> {
  const filePath = path.join(process.cwd(), "src/data/templates.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export async function generateStaticParams() {
  const templates = await getTemplates();
  return templates.map((tpl) => ({
    slug: tpl.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const templates = await getTemplates();
  const template = templates.find((t) => t.slug === resolvedParams.slug);

  if (!template) {
    return { title: "Template Not Found" };
  }

  return {
    title: `${template.title} | Email Templates Hub`,
    description: template.description,
  };
}

const toId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Logic to derive the user's natural "Next Step" in their journey
function getNextStepTemplates(currentSlug: string, category: string | undefined, allTemplates: TemplateData[]) {
  let keywords = ["follow-up"]; // Default
  
  if (currentSlug.includes("cold") || currentSlug.includes("sales") || currentSlug.includes("pitch")) {
    keywords = ["follow", "meeting", "no-response"];
  } else if (currentSlug.includes("job") || currentSlug.includes("application") || category === "Job & Career") {
    keywords = ["interview", "thank-you", "offer"];
  } else if (currentSlug.includes("interview")) {
    keywords = ["follow-up", "negotiation", "offer"];
  } else if (currentSlug.includes("saas") || currentSlug.includes("software") || category === "SaaS & Startup") {
    keywords = ["renewal", "churn", "onboarding", "survey"];
  } else if (currentSlug.includes("invoice") || currentSlug.includes("payment")) {
    keywords = ["dispute", "reminder", "legal"];
  } else if (currentSlug.includes("linkedin") || currentSlug.includes("network")) {
    keywords = ["meeting", "coffee", "connection"];
  }

  return allTemplates
    .filter(t => t.slug !== currentSlug && keywords.some(k => t.slug.includes(k)))
    .slice(0, 3);
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const templatesList = await getTemplates();
  const template = templatesList.find((t) => t.slug === resolvedParams.slug);

  if (!template) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900">Template not found</h1>
        <p className="mt-4 text-gray-600">The email template you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          &larr; Return to Home
        </Link>
      </div>
    );
  }

  // 1. Related Templates (Same Category)
  const relatedTemplates = templatesList
    .filter((t) => t.category === template.category && t.slug !== template.slug)
    .slice(0, 4);

  // 2. Popular Templates (Global)
  const popularSlugs = [
    "cold-email-template-for-sales",
    "linkedin-connection-message",
    "saas-contract-renewal-email",
    "job-application-email-template"
  ];
  const popularTemplates = templatesList.filter(t => popularSlugs.includes(t.slug) && t.slug !== template.slug).slice(0, 3);

  // 3. Flow-Based Next Steps
  const nextStepTemplates = getNextStepTemplates(template.slug, template.category, templatesList);

  return (
    <article className="flex flex-col gap-12 sm:gap-16 pb-10">
      
      {/* 1. Header & Full Breadcrumbs */}
      <header className="border-b border-gray-100 pb-8">
        <nav className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 gap-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          {template.category ? (
            <>
              <Link href={`/#${toId(template.category)}`} className="hover:text-blue-600 transition-colors">
                {template.category}
              </Link>
              <span>&gt;</span>
            </>
          ) : null}
          <span className="text-gray-900 truncate">{template.title}</span>
        </nav>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
          {template.title}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
          {template.intro.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </header>

      {/* When to use this email (Dynamic SEO Section) */}
      <section className="bg-blue-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100">
        <h2 className="text-2xl font-bold tracking-tight mb-4 text-gray-900">
          When to use these emails
        </h2>
        {template.whenToUse ? (
          <p className="text-gray-700 leading-relaxed text-lg">{template.whenToUse}</p>
        ) : (
          <p className="text-gray-700 leading-relaxed text-lg">
            Knowing exactly when to send a <strong>{template.title.toLowerCase()}</strong> is critical for getting a positive response. 
            You should deploy these templates when you need to communicate clearly and professionally within the {template.category || "business"} sector. 
            Timing is everything—ensure you send these during appropriate business hours and tailor the variables perfectly to your recipient's current context.
          </p>
        )}
      </section>

      {/* The Email Templates */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-gray-900">
          Ready-to-Use Email Templates
        </h2>
        <div className="flex flex-col gap-8 sm:gap-10">
          {template.templates.map((content, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-4 top-0 bottom-0 border-l-4 border-blue-500 rounded-l hidden sm:block"></div>
              <TemplateCard content={content} />
              
              {idx === 1 && template.templates.length > 2 && (
                <div className="mt-8 mb-4">
                  <AdPlaceholder />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Flow-Based Internal Linking (Next Steps) */}
      {nextStepTemplates.length > 0 && (
        <section className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h2 className="text-xl font-bold tracking-tight mb-4 text-gray-900">
            Next Steps in Your Journey
          </h2>
          <p className="text-gray-600 mb-6">After sending this email, you will likely need to send one of the following:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {nextStepTemplates.map((t) => (
              <Link
                key={t.slug}
                href={`/templates/${t.slug}`}
                className="flex-1 bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <h3 className="text-md font-bold text-gray-900 mb-1 group-hover:text-blue-600 line-clamp-2">{t.title}</h3>
                <span className="text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Prepare next &rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Best Practices & Tips */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6 text-gray-900">
          Best Practices & Tips
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
          {template.tips.map((tip, idx) => (
            <li key={idx} className="pl-2">{tip}</li>
          ))}
        </ul>
      </section>

      {/* Common Mistakes */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-5 text-red-600">
          Common Mistakes to Avoid
        </h2>
        {template.commonMistakes ? (
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            {template.commonMistakes.map((mistake, idx) => (
              <li key={idx}>{mistake}</li>
            ))}
          </ul>
        ) : (
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>When drafting this type of email, many professionals make critical formatting and psychological errors. Avoid these common pitfalls:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Being overly verbose:</strong> Do not write a five-paragraph essay. Keep your request strictly focused and visually scannable.</li>
              <li><strong>Assuming context:</strong> Always provide a brief sentence reminding the recipient who you are or why you are reaching out.</li>
              <li><strong>Weak Call-to-Actions (CTAs):</strong> Never end with "Let me know what you think." Give them a specific, frictionless next step.</li>
            </ul>
          </div>
        )}
      </section>

      {/* Frequently Asked Questions */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6">
          {template.faq.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <AdPlaceholder />

      {/* Mega Internal Linking Footer */}
      <div className="pt-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Related Templates (Same Category) */}
        {relatedTemplates.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight mb-6 text-gray-900">
              More in {template.category}
            </h2>
            <div className="flex flex-col gap-3">
              {relatedTemplates.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/templates/${rel.slug}`}
                  className="group block border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-md font-semibold text-gray-900 group-hover:text-blue-600">{rel.title}</h3>
                </Link>
              ))}
              {template.category && (
                <Link href={`/#${toId(template.category)}`} className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline">
                  View all {template.category} templates &rarr;
                </Link>
              )}
            </div>
          </section>
        )}

        {/* Popular Templates Array */}
        {popularTemplates.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight mb-6 text-gray-900">
              Popular Templates
            </h2>
            <div className="flex flex-col gap-3">
              {popularTemplates.map((pop) => (
                <Link
                  key={pop.slug}
                  href={`/templates/${pop.slug}`}
                  className="group block border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-md font-semibold text-gray-900 group-hover:text-blue-600">{pop.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

    </article>
  );
}
