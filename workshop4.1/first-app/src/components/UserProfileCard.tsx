import SkillTag, { type SkillTagProps } from "./SkillTag"
import "./UserProfile.css"; 

export type UserData = {
  id: string | number ;
  name: string ;
  avatarUrl?: string ;
  email: string ;
  isOnline: boolean ;
  skills: SkillTagProps[];
};

type UserCardProps= {
  user : UserData;
  onViewDetails : (id: string | number ) => void;
};

function UserCard({user, onViewDetails}: UserCardProps){
  return(
    <div className="user-card">
      <div className = " info">
        <div className = "image">
          <img src= {user.avatarUrl} alt={user.name} />
        </div>
        <div className = "Name">
          <h3>{ user.name}</h3>
          <span>{ user.email}</span>
          <div className="status">
            <span
              className={`status-dot ${user.isOnline ? "online" : "offline"}`}
            ></span>
            <span>{user.isOnline ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3>Skills:</h3>
        {user.skills.map((skill, i) => (
          <SkillTag key={i} skillname={skill.skillname} level={skill.level} />
        ))}
      </div>
      <div className = "button-contain">
        <div className = "button">
          <button onClick={() => onViewDetails(user.id)}>View Deatails</button>
        </div>
      </div>
    </div>
  )
}
export default UserCard;

