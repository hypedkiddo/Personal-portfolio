import { ArrowUp, HeartIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="w-full flex items-center justify-center text-sm text-muted-foreground text-center">
        Developed with{" "}
        <HeartIcon color="red" fill="red" className="mx-1" /> by Naren
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};