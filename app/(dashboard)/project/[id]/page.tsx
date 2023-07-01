import TaskCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth"
import { db } from "@/lib/db";
import { cookies } from "next/headers"

const getData = async (id : string) =>{
    const user = await getUserFromCookie(cookies())
    if(!user) return;
    const project = await db.project.findFirst({
        where: { id, ownerId : user?.id},
        include:{
            tasks: true
        }
    })
    return project;
}

const page = async ({params : {id}} : {params: {id : string}}) => {
    const project = await getData(id);
    return (
        <div className="h-full overflow-y-auto pr-6 w-1/1">
          {project && <TaskCard tasks={project.tasks} title={project.name} />}
        </div>
    )
}
export default page