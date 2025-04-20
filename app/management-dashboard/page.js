import { Button } from "@/components/ui/button";
import LanguageSelect from "@/custom-components/LanguageSelect";
import TranslationManagementSection from "@/custom-components/TranslationManagementSection";
import Link from "next/link";

export default function ManagementDashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 py-10">
      <main className="flex flex-col items-center justify-center w-full max-w-xl gap-6">
        <div className="flex items-center sm:justify-between w-full gap-4">
          <h1 className="text-2xl font-bold text-center sm:text-left">
            Translation Management
          </h1>
          <LanguageSelect />
        </div>
        <TranslationManagementSection />
      </main>
      <Link href="../">
        <Button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          {"<-"} Back
        </Button>
      </Link>
    </div>
  );
}
