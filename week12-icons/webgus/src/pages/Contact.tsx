import Header from "../components/header"
import HoverCardd from "../components/HoverCard"

export default function Contact() {
    return (
        <div className="w-full  flex flex-col items-center justify-center">

            <div className="fixed top-20 left-0 w-full flex justify-center z-50">
                <div className="bg-[#181818]/95 backdrop-blur-md px-10 py-3 rounded-b-lg shadow-lg">
                    <Header />
                </div>
            </div>
            <div className="flex gap-12 ">
                <HoverCardd
                    platform="ig"
                    avatar="/photo/pfig.jpg"
                    name="gussuke_76"
                    username="@gussuke_76"
                    bio="5 โพสต์ • ผู้ติดตาม 747 คน • กำลังติดตาม 702 คน"
                    followers={747}
                    following={702}
                    link="https://www.instagram.com/gussuke_76/"
                />
                <HoverCardd
                    platform="facebook"
                    avatar="/photo/pffb.png"
                    name="Kittitouch Gus Sakulsakpinit "
                    bio="เพื่อน 595 คน"
                    link="https://www.facebook.com/kittitouch.gus.sakulsakpinit/?locale=th_TH"
                />

                <HoverCardd
                    platform="github"
                    avatar="/photo/pfgh.png"
                    name="Kittitouchhh"
                    username="@Kittitouchhh"
                    bio="Fullstack & UI Developer Repositories(16)"
                    link="https://github.com/Kittitouchhh"
                />
                <HoverCardd
                    platform="line"
                    avatar="/photo/linepf.png"
                    name="Guss Line"
                    username="@guss_1234"
                    link="https://line.me/ti/p/xxxx"
                />
                <HoverCardd
                    platform="gmail"
                    avatar="/photo/pfig.jpg"
                    name="Email Me"
                    username="guss@gmail.com"
                    link="mailto:guss@gmail.com"
                />


            </div>

        </div>
    );
}

