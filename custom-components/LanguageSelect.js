"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/providers/LanguageContext";

export default function LanguageSelect() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="fa">Farsi</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ar">Arabic</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
