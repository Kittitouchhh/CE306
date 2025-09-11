export type SkillTagProps = {
  skillname: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | string ;

};

export default function SkillTag ({skillname, level}: SkillTagProps){

  const unknownlevel = [ "Beginner" , "Intermediate" , "Advanced"]

  const displaylevel = unknownlevel?.includes(level || "")? level: "Unknown"

  const backgroundColor =   level === "Beginner" ? "#7fff7f"
    :  level ===  "Intermediate" ?  "#ffe135"
    : level ===  "Advanced" ? "#f4c2c2"
    : "#808080";

  return(
    <span style= {{ backgroundColor,color:"black",padding:"5px",margin:"5px",borderRadius:"10px",}} >
      {skillname} ({ displaylevel || "UnKnown"})
    </span>

  );
}
