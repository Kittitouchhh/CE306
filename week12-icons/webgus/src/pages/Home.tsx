import HoverCardd from "../components/HoverCard"
export default function Home() {
    return (
        <div className="flex gap-3">
            <HoverCardd
                platform="ig"
                avatar="/photo/gus.jpg"
                name="Gus"
                username="@gus.ig"
                bio="สายกิน สายเที่ยว 🍜✈️"
                followers={2400}
                following={300}
                link="https://instagram.com/gus.ig"
            />

            <HoverCardd
                platform="facebook"
                avatar="/photo/gus.jpg"
                name="Gus Supa Dev"
                bio="ไม่ค่อยเล่นเฟซ แต่มีไว้นับญาติ 🤣"
                link="https://facebook.com/gus.fb"
            />

            <HoverCardd
                platform="github"
                avatar="https://github.com/yourname.png"
                name="Gus Dev"
                username="@gusdev"
                bio="Fullstack & UI Developer"
                followers={120}
                link="https://github.com/gusdev"
            />
        </div>

    )
}