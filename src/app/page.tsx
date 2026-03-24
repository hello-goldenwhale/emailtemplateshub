import fs from "fs";
import path from "path";
import TemplateBrowser from "@/components/TemplateBrowser";

export const metadata = {
  title: "Email Templates Hub | Free Professional Templates",
  description: "Browse our collection of professional email templates for sales, networking, job applications, and more.",
};

async function getTemplates() {
  const filePath = path.join(process.cwd(), "src/data/templates.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default async function Home() {
  const templates = await getTemplates();

  return (
    <div className="flex flex-col gap-8 pb-20">
      <header className="mb-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">Professional Email Templates</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          Discover a curated collection of effective, ready-to-use email templates to boost your communication, network efficiently, and save critical time.
        </p>
      </header>
      
      <TemplateBrowser templates={templates} />
    </div>
  );
}
