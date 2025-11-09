import * as HoverCard from "@radix-ui/react-hover-card";
import { FaInstagram, FaFacebook, FaGithub, FaLine} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface HoverProfileProps {
  platform: "ig" | "facebook" | "github" | "line" | "gmail";
  avatar: string;
  name: string;
  username?: string;
  bio?: string;
  followers?: number;
  following?: number;
  link?: string;
}
const platformIcons = {
  ig: <FaInstagram className="text-pink-500 w-14 h-14" />,
  facebook: <FaFacebook className="text-blue-600 w-14 h-14" />,
  github: <FaGithub className="text-black w-14 h-14" />,
  line: <FaLine className="text-green-500 w-14 h-14"/>,
  gmail: <SiGmail className="text-red-500 w-14 h-14" />

};

export default function HoverCardd({
  platform,
  avatar,
  name,
  username,
  bio,
  followers,
  following,
  link,
}: HoverProfileProps) {
  return (
    <HoverCard.Root openDelay={100}>

      <HoverCard.Trigger asChild>
        <div className="z-[999] cursor-pointer hover:scale-110 transition-transform">
          {platformIcons[platform]}
        </div>
      </HoverCard.Trigger>

      <HoverCard.Content
        className="z-[999] w-[300px] p-5 rounded-xl bg-white shadow-2xl border border-gray-200"
        sideOffset={5}
      >
        <div className="flex items-center gap-3 z-[999]">
          <img src={avatar} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            {username && <p className="text-sm text-gray-500">{username}</p>}
          </div>
        </div>

        {bio && <p className="text-sm text-gray-600 mt-2 m-auto w-50">{bio}</p>}

        {(followers || following) && (
          <div className="flex gap-6 text-sm text-gray-700 mt-3">
            {following !== undefined && <span>{following} Following</span>}
            {followers !== undefined && (
              <span className="font-semibold">{followers} Followers</span>
            )}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline block bg-black !text-white text-center py-1.5 mt-4 rounded 
               hover:bg-gray-800 hover:!text-white transition-colors duration-300"
          >
            Visit Profile
          </a>
        )}


        <HoverCard.Arrow className="fill-white z-[999]" />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
