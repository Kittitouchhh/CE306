import UserCard from "./components/UserProfileCard";
import "./App.css";
const users = [
  {
    id: 1,
    name: "Kittitouch Sakulsakpinit",
    avatarUrl: "/images/gus.png",
    email: "66111596@dpu.ac.th",
    isOnline: true,
    skills: [
      { skillname: "React", level: "Advanced" },
      { skillname: "TypeScript", level: "Advanced" },
      { skillname: "Goodperson", level: "Intermediate" }
    ],
  },
  {
    id: 2,
    name: "Boss Sikayeejai",
    avatarUrl: "/images/boss.jpeg",
    email: "Bosssikayeejai@gmail.com",
    isOnline: true,
    skills: [
      { skillname: "React", level: "Advanced" },
      { skillname: "TypeScript", level: "Advanced" },
      { skillname: "Python", level: "Intermediate" }
    ],
  },
  {
    id: 3,
    name: "TiTle SonofTum",
    avatarUrl: "/images/tum.jpeg",
    email: "TiTleSonofTum@gmail.com",
    isOnline: false,
    skills: [
      { skillname: "React", level: "Beginner" },
      { skillname: "TypeScript", level: "Beginner" },
      { skillname: "Brain", level: "" }
    ],
  },
  {
    id: 4,
    name: "MangKod Folk",
    avatarUrl: "/images/folk.jpg",
    email: "MangkodFolk@gmail.com",
    isOnline: false,
    skills: [
      { skillname: "React", level: "Intermediate" },
      { skillname: "TypeScript", level: "Advanced" },
      { skillname: "Brain", level: "" },
      { skillname: "Goodness", level: "" }
    ],
  },
  {
    id: 5,
    name: "Em threemonth",
    avatarUrl: "/images/m.png",
    email: "Emthreemonth@gmail.com",
    isOnline: true,
    skills: [
      { skillname: "Lua", level: "Intermediate" },
      { skillname: "Python", level: "Intermediate" },
      { skillname: "Brain", level: "Beginner" },
      { skillname: "Goodness", level: "Beginner" }
    ],
  }
];

export default function App() {
  const handleViewDetails = (id: string | number) => {
    alert(`View details for user ID: ${id}`);
  };

  return (
    <div className="Content">
      <h1 className="HEADDD">User Profile Card</h1>
      <div className="MainContent">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
}