"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/custom-components/Card";
import WordsTranslation from "@/custom-components/WordsTranslation";
import { useLanguage } from "@/providers/LanguageContext";
import AddWordModal from "./AddWordModal";

export default function TranslatedWordsSection() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});
  const [addWordModalOpen, setAddWordModalOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("translations");
    if (stored) {
      try {
        setTranslations(JSON.parse(stored));
      } catch (err) {
        console.error("Error parsing stored translations:", err);
      }
    }
  }, []);

  // Save to localStorage when translations change
  useEffect(() => {
    localStorage.setItem("translations", JSON.stringify(translations));
  }, [translations]);

  // Add or update word
  const addOrEditWord = ({ word, translation }) => {
    setTranslations((prev) => ({
      ...prev,
      [word]: {
        ...prev[word], // preserve other languages if they exist
        [language]: translation,
      },
    }));
    setAddWordModalOpen(false);
  };

  return (
    <>
      <Card>
        <WordsTranslation
          translations={translations}
          language={language}
          onTranslationChange={addOrEditWord}
        />
      </Card>

      <Button
        className="w-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer"
        onClick={() => setAddWordModalOpen(true)}
      >
        <Plus /> Add Keyword
      </Button>

      {addWordModalOpen && (
        <AddWordModal
          open={addWordModalOpen}
          onClose={() => setAddWordModalOpen(false)}
          language={language}
          onWordTranslationChange={addOrEditWord}
        />
      )}
    </>
  );
}
