export default function Footer() {
  return (
    <footer className="mt-8 text-slate-400 text-center py-4 text-xs border-t border-slate-200">
      &copy; {new Date().getFullYear()} School Management System. All rights reserved.
    </footer>
  );
}