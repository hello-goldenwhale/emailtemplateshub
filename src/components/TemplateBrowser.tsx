"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Template {
  slug: string;
  title: string;
  description: string;
  category?: string;
}

export default function TemplateBrowser({ templates }: { templates: Template[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    templates.forEach(t => {
      if (t.category) cats.add(t.category);
    });
    return ["All", ...Array.from(cats).sort()];
  }, [templates]);

  // Filter templates based on search and category selection
  const filteredTemplates = useMemo(() => {
    return templates.filter((tpl) => {
      const matchesSearch = 
        tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tpl.description.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = selectedCategory === "All" || tpl.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [templates, searchQuery, selectedCategory]);

  // Group filtered templates back into categories for display
  const categorizedResults = useMemo(() => {
    const map: Record<string, Template[]> = {};
    filteredTemplates.forEach(tpl => {
      const cat = tpl.category || "Other";
      if (!map[cat]) map[cat] = [];
      map[cat].push(tpl);
    });
    return map;
  }, [filteredTemplates]);

  const activeCategories = Object.keys(categorizedResults).sort();

  const toId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 mb-2">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Search templates</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
              placeholder="Search by keyword, title, or use case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="md:w-64 shrink-0">
          <label htmlFor="category" className="sr-only">Filter by category</label>
          <select
            id="category"
            className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-xl transition-all border bg-white cursor-pointer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {allCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Navigation Pills (only show if not filtering heavily) */}
      {!searchQuery && selectedCategory === "All" && (
        <div className="flex flex-wrap gap-2 pb-2">
          {activeCategories.map((cat) => (
            <a
              key={cat}
              href={`#${toId(cat)}`}
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-900 hover:text-white transition-colors"
            >
              {cat} <span className="ml-2 text-xs opacity-60">({categorizedResults[cat].length})</span>
            </a>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-16">
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">No templates found</h3>
            <p className="mt-1 text-gray-500 max-w-sm mx-auto">We couldn't find any templates matching "{searchQuery}". Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          activeCategories.map((cat) => (
            <section key={cat} id={toId(cat)} className="scroll-mt-8">
              <div className="border-b border-gray-200 pb-3 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{cat}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {categorizedResults[cat].map((tpl) => (
                  <Link 
                    key={tpl.slug} 
                    href={`/templates/${tpl.slug}`} 
                    className="group flex flex-col justify-between border border-gray-200 rounded-xl p-6 transition-all hover:border-gray-300 hover:shadow-sm bg-white"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{tpl.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{tpl.description}</p>
                    </div>
                    <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      View templates &rarr;
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
