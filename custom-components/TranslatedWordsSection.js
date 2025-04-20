"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/providers/LanguageContext";

export default function WordsTranslation() {
  const { language } = useLanguage();
  const [storedTranslations, setStoredTranslations] = useState({});

  useEffect(() => {
    try {
      const data = localStorage.getItem("translations");
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed && typeof parsed === "object") {
          setStoredTranslations(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to parse translations from localStorage:", err);
    }
  }, []);

  const hasTranslations =
    storedTranslations && Object.keys(storedTranslations).length > 0;

  if (!hasTranslations) {
    return (
      <p className="text-center text-gray-500 py-6">No translations yet.</p>
    );
  }

  return (
    <>
      {Object.entries(storedTranslations).map(([word, langs]) => (
        <div
          key={word}
          className="flex flex-col p-3 items-start border border-gray-300 rounded-lg mb-4 w-full"
        >
          <h3 className="text-xl font-bold">{word}</h3>
          <h4 className="text-xl text-gray-500">
            {langs?.[language] || (
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
