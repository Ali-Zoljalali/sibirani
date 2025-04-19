import Card from "@/custom-components/Card";
import LanguageSelect from "@/custom-components/LanguageSelect";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Card>
          <div className="flex items-center justify-evenly p-4 gap-4">
            <h1 className="text-2xl font-bold">Word Translation</h1>
            <LanguageSelect />
          </div>
          <div className="flex flex-col p-3 items-start border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold">Hello</h3>
            <h4 className="text-xl text-gray-500">سلام</h4>
          </div>
          <div className="flex flex-col p-3 items-start border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold">Hello</h3>
            <h4 className="text-xl text-gray-500">سلام</h4>
          </div>
          <div className="flex flex-col p-3 items-start border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold">Hello</h3>
            <h4 className="text-xl text-gray-500">سلام</h4>
          </div>
          <div className="flex flex-col p-3 items-start border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold">Hello</h3>
            <h4 className="text-xl text-gray-500">سلام</h4>
          </div>
        </Card>
      </main>
    </div>
  );
}
