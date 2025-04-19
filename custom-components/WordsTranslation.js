import { Input } from "@/components/ui/input";

export default function WordsTranslation({
  translations,
  language,
  onTranslationChange,
}) {
  if (!translations || Object.keys(translations).length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No translations added yet.
      </p>
    );
  }

  return (
    <>
      {Object.entries(translations).map(([word, langs]) => (
        <div
          key={word}
          className="grid grid-cols-12 gap-4 p-3 items-start border-b border-gray-300"
        >
          <h3 className="col-span-6 text-xl font-bold">{word}</h3>
          <div className="col-span-6 justify-self-end w-full">
            <Input
              value={langs[language] || ""}
              onChange={(e) =>
                onTranslationChange({ word, translation: e.target.value })
              }
            />
          </div>
        </div>
      ))}
    </>
  );
}
