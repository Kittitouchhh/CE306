import HoverCardd from "../components/HoverCard";

export default function Home() {
    return (
        <div>
            <div>
                <div className=" fixed top-0 left-0 w-full bg-white flex h-85 p-5 gap-5">

                    {/* รูป */}
                    <div className="bg-black w-1/3 h-70 m-5 flex justify-center items-center ">
                        <img
                            src="/photo/gussunobg.png"
                            alt=""
                            className="min-w-[380px] w-full h-80 object-contain transition ease-out duration-300 hover:scale-110 hover:drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                        />
                    </div>
                    <div >
                        {/* ชื่อ */}
                        <div className="flex flex-col gap-3">
                            <div>
                                <h2 className="text-[50px] font-semibold  text-black whitespace-nowrap">
                                    KITTITOUCH SAKULSAKPINIT Guss
                                </h2>
                                <h2 className="text-[40px] font-semibold  text-black whitespace-nowrap">
                                    KITTITOUCH SAKULSAKPINIT Guss
                                </h2>
                                <h2 className="text-[30px] font-semibold  text-black whitespace-nowrap">
                                    KITTITOUCH SAKULSAKPINIT Guss
                                </h2>
                                <h2 className="text-[20px] font-semibold  text-black whitespace-nowrap">
                                    KITTITOUCH SAKULSAKPINIT Guss
                                </h2>
                                
                                <h2 className="font-semibold text-black">
                                    KITTITOUCH SAKULSAKPINIT Guss
                                </h2>
                            </div>
                        </div>

                        {/* Hover cards */}
                        <div className="flex  gap-8 mt-5">
                            <HoverCardd
                                platform="ig"
                                avatar="/photo/pfig.jpg" // (เดี๋ยวผมหา URL ให้ได้)
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-100 h-100 mt-50 "></div>

        </div>
    );
}
