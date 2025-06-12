import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section id="contact" className="py-12 px-4 bg-white flex flex-col items-center">
      <h2 className="text-3xl mb-8">Contact Us</h2>
      <form
        action="https://formspree.io/f/yourformid"
        method="POST"
        className="w-full max-w-lg space-y-4"
      >
        <input type="text" name="name" placeholder="Name" required className="w-full p-3 border rounded-2xl" />
        <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border rounded-2xl" />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded-2xl" />
        <textarea name="description" placeholder="Describe your job..." required className="w-full p-3 border rounded-2xl min-h-[150px]" />
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </section>
  );
}
