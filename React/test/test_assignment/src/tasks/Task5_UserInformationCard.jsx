
import UserCard from '../components/UserCard';

export default function Task5_UserInformationCard() {
  const userData = {
    Name: "Jane Doe",
    Email: "janedoe@example.com",
    Phone: "+1 (555) 019-2834",
    City: "San Francisco"
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Task 5 - User Information Card</h2>
      <p className="text-slate-500 mb-6">Pass objects downstream and parse values via object restructuring mechanisms.</p>
      <UserCard userObj={userData} />
    </div>
  );
}