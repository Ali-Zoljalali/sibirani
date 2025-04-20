import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

export default function WordsTranslation({
  translations,
  language,
  onTranslationChange,
  onWordDelete,
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
          <div className="col-span-5 justify-self-end w-full">
            <Input
              placeholder="..."
              className={cn(
                "text-center",
                !langs[language] && "bg-red-100",
                !langs[language] && "text-red-300"
              )}
              value={langs[language] || ""}
              onChange={(e) =>
                onTranslationChange({ word, translation: e.target.value })
              }
            />
          </div>
          <Button
            className="col-span-1 hover:cursor-pointer"
            variant="outline"
            size="icon"
            onClick={() => onWordDelete(word)}
          >
            <Trash2 />
          </Button>
        </div>
      ))}
    </>
  );
}
