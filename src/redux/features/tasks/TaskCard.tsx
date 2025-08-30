import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import type { ITask } from "@/types";
import { toggleCompleteState } from "./taskSlice";
import { selectUsers } from "../Users/UserSlice";

interface IProp {
    task: ITask
}

const TaskCard = ({ task }: IProp) => {
    const { title, description, isComplete, dueDate, priority  } = task;
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers)

    const assignedUser = users.find(user => user.id === task.user )


    // some new features are coming..
    

    return (
        <div>

            <Card>
                <CardHeader className="">
                    <div className="flex justify-between">
                        <CardTitle>{title}</CardTitle>
                        <input onClick={() => dispatch(toggleCompleteState(task.id))} type="checkbox" className="" name="vehicle2" value="Car"></input>
                    </div>
                    <CardDescription>{description}</CardDescription>
                    <CardAction>{isComplete}</CardAction>
                </CardHeader>
                <CardContent>
                    <p>{dueDate}</p>
                </CardContent>
                <p>Assigned To : {assignedUser ? assignedUser.name : "No One"}</p>
        
                <div className="flex items-center">
                    <div className={cn("size-3.5 bg-amber-500 rounded-3xl", {
                        "bg-blue-700": priority === "Low"
                    })
                    }>
                    </div>
                    <CardFooter>
                        <p>{priority}</p>
                    </CardFooter>
                </div>



            </Card>



        </div>
    );
};

export default TaskCard;