"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AddWordModal({
  open,
  onClose,
  language,
  onWordTranslationChange,
}) {
  const [newWord, setNewWord] = useState({ word: "", translation: "" });
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Translate Word</DialogTitle>
          <DialogDescription>
            Add a new translation entry to your{" "}
            {language === "en"
              ? "English"
              : language === "fa"
              ? "Farsi"
              : "Arabic"}{" "}
            list.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4">
          <Input
            placeholder="word"
            value={newWord.word}
            onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
          />
          <Input
            placeholder="translation"
            value={newWord.translation}
            onChange={(e) =>
              setNewWord({ ...newWord, translation: e.target.value })
            }
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-red-50 hover:bg-red-200 hover:cursor-pointer"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer"
            onClick={() => {
              onWordTranslationChange(newWord);
              onClose();
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
