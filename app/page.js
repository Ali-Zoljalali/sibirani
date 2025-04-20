import { Button } from "@/components/ui/button";
import Card from "@/custom-components/Card";
import LanguageSelect from "@/custom-components/LanguageSelect";
import TranslatedWordsSection from "@/custom-components/TranslatedWordsSection";
import Link from "next/link";

const fadeIn = "animate-fade-in";
const slideUp = "animate-slide-up";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main
        className={`${fadeIn} ${slideUp} transition-opacity duration-700 ease-out`}
      >
        <Card className="animate-fade-in-fast">
          <div className="flex items-center justify-evenly p-4 gap-4">
            <h1 className="text-2xl font-bold">Word Translation</h1>
            <LanguageSelect />
          </div>
          <TranslatedWordsSection />
        </Card>
      </main>
      <Link href="/management-dashboard">
        <Button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer transition-transform duration-300 hover:scale-105 font-bold py-2 px-4 rounded">
          Go to management {"->"}
        </Button>
      </Link>
    </div>
  );
}
