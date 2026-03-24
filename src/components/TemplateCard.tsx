"use client";

import { useState, useMemo } from "react";

interface TemplateCardProps {
  content: string;
}

export default function TemplateCard({ content }: TemplateCardProps) {
  const [copied, setCopied] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const variables = useMemo(() => {
    const matches = content.match(/\[(.*?)\]/g) || [];
    return Array.from(new Set(matches));
  }, [content]);

  const renderedContent = useMemo(() => {
    return content.replace(/\[(.*?)\]/g, (match) => values[match] || match);
  }, [content, values]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(renderedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 my-4 shadow-sm hover:shadow-md transition-shadow">
      {variables.length > 0 && (
        <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-800 mb-3">Fill in details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {variables.map((v) => {
              const label = v.replace(/[\[\]]/g, "");
              return (
                <div key={v}>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1 truncate">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    placeholder={label}
                    value={values[v] || ""}
                    onChange={(e) => setValues({ ...values, [v]: e.target.value })}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      <pre className="whitespace-pre-wrap font-sans text-gray-800 text-sm sm:text-base leading-relaxed mb-6 bg-gray-50 p-4 border border-gray-100 rounded-lg">
        {renderedContent}
      </pre>

      <div className="flex justify-end">
        <button
          onClick={handleCopy}
          className={`px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-bold rounded-lg transition-colors shadow-sm w-full sm:w-auto ${
            copied
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {copied ? "Copied!" : "Copy Email Now"}
        </button>
      </div>
    </div>
  );
}
