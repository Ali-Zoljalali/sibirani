import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/custom-components/Card";
import LanguageSelect from "@/custom-components/LanguageSelect";

export default function ManagementDashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center w-[600px] p-4 gap-4">
        <div className="flex items-center justify-between w-full p-2">
          <h1 className="text-2xl font-bold">Translation Management</h1>
          <LanguageSelect />
        </div>
        <Card>
          <div className="grid grid-cols-12 gap-4 p-3 items-start border-b border-gray-300">
            <h3 className="col-span-6 text-xl font-bold">Hello</h3>
            <div className="col-span-6 justify-self-end">
              <Input />
            </div>
          </div>
          <di className="grid grid-cols-12 gap-4 p-3 items-start border-b border-gray-300">
            <h3 className="col-span-6 text-xl font-bold">Hello</h3>
            <div className="col-span-6 justify-self-end">
              <Input />
            </div>
          </di>
          <div className="grid grid-cols-12 gap-4 p-3 items-start border-b border-gray-300">
            <h3 className="col-span-6 text-xl font-bold">Hello</h3>
            <div className="col-span-6 justify-self-end">
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 p-3 items-start border-b border-gray-300">
            <h3 className="col-span-6 text-xl font-bold">Hello</h3>
            <div className="col-span-6 justify-self-end">
              <Input />
            </div>
          </div>
        </Card>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer">
          <Plus /> Add Keyword
        </Button>
      </main>
    </div>
  );
}
