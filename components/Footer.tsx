export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Venkata Vivek Varma Alluru. All rights reserved.</p>
      <p className="text-sm mt-2">Built with ❤️ using Next.js & TailwindCSS</p>
    </footer>
  );
}
