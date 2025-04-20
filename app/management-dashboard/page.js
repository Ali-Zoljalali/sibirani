import { Button } from "@/components/ui/button";
import LanguageSelect from "@/custom-components/LanguageSelect";
import TranslationManagementSection from "@/custom-components/TranslationManagementSection";
import Link from "next/link";

export default function ManagementDashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center w-[600px] p-4 gap-4">
        <div className="flex items-center justify-between w-full p-2">
          <h1 className="text-2xl font-bold">Translation Management</h1>
          <LanguageSelect />
        </div>
        <TranslationManagementSection />
      </main>
      <Link href="../">
        <Button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer font-bold py-2 px-4 rounded">
          {"<-"} Back
        </Button>
      </Link>
    </div>
  );
}
