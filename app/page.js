import Card from "@/custom-components/Card";
import LanguageSelect from "@/custom-components/LanguageSelect";
import TranslatedWordsSection from "@/custom-components/TranslatedWordsSection";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Card>
          <div className="flex items-center justify-evenly p-4 gap-4">
            <h1 className="text-2xl font-bold">Word Translation</h1>
            <LanguageSelect />
          </div>
          <TranslatedWordsSection />
        </Card>
      </main>
    </div>
  );
}
