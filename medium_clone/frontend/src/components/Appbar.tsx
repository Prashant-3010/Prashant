import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex justify-center flex-col font-extrabold text-xl">
            Medium
        </div>
        <div>
           <Avatar size={"big"} name="Prashant"/> 
        </div>
    </div>
}