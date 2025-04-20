"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/custom-components/Card";
import WordsTranslation from "@/custom-components/WordsTranslation";
import { useLanguage } from "@/providers/LanguageContext";
import dynamic from "next/dynamic";

//** The data structure is a hash map which the key is the word itself and
//* the value will be set for each language
//* if for example the data for key hello has not yet been translated then we show "..." and
//* local storage would be empty string
//
// ** the reason why i chose this data structure is because of the simplicity to implement for this use and the time consumption for search and find  */

const AddWordModal = dynamic(() => import("./AddWordModal"), {
  ssr: false,
  loading: () => (
    <p className="text-center py-4 text-gray-400">Loading modal...</p>
  ),
});

export default function TranslationManagementSection() {
  const { language } = useLanguage();
  const [translations, setTranslations] = useState({});
  const [addWordModalOpen, setAddWordModalOpen] = useState(false);

  // read data from localStorage
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

  // Save to localStorage
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

  // Delete word
  const deleteWord = (word) => {
    setTranslations((prev) => {
      const updated = { ...prev };
      delete updated[word];
      return updated;
    });
  };

  return (
    <>
      <Card>
        <WordsTranslation
          translations={translations}
          language={language}
          onTranslationChange={addOrEditWord}
          onWordDelete={deleteWord}
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
