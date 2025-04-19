"use client";
import { useLanguage } from "@/providers/LanguageContext";

export default function WordsTranslation() {
  const { language } = useLanguage();
  const stored = JSON.parse(localStorage.getItem("translations"));

  if (!stored || Object.keys(stored).length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">No translations yet.</p>
    );
  }

  return (
    <>
      {Object.entries(stored).map(([word, langs]) => (
        <div
          key={word}
          className="flex flex-col p-3 items-start border border-gray-300 rounded-lg mb-4 w-full"
        >
          <h3 className="text-xl font-bold">{word}</h3>
          <h4 className="text-xl text-gray-500">
            {langs[language] || (
              <span className="italic text-sm text-red-400">
                Not translated
              </span>
            )}
          </h4>
        </div>
      ))}
    </>
  );
}
