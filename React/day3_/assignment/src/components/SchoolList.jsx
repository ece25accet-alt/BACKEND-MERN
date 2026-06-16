import { schools } from "../data/schools";
import SchoolCard3 from "./SchoolCard3";
export default function SchoolList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {schools.map((school) => (
        <SchoolCard3 key={school.id} {...school} />
      ))}
    </div>
  );
}
