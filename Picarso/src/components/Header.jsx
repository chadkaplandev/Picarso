import { Button } from "@/components/ui/button";

export default function Header({ onNavClick }) {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-around p-4">
        <Button variant="ghost" onClick={() => onNavClick("home")}>Home</Button>
        <Button variant="ghost" onClick={() => onNavClick("gallery")}>Gallery</Button>
        <Button variant="ghost" onClick={() => onNavClick("contact")}>Contact</Button>
      </nav>
    </header>
  );
}
