
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseAPI";
import { useAppDispatch, } from "@/redux/app/hooks";
import AddTaskModal from "@/redux/features/tasks/AddTaskModal";
import TaskCard from "@/redux/features/tasks/TaskCard";
import { filterState, } from "@/redux/features/tasks/taskSlice";
import type { ITask } from "@/types";

const Tasks = () => {
    const { data, isLoading } = useGetTasksQuery(undefined)
    // const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()

    if (isLoading) {
        return <p>hello working</p>

    }

    return (
        <div>
            <div className="flex justify-end items-center gap-2.5">
                <h1 className="mr-auto">It is Tasks Page</h1>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(filterState('all'))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(filterState('high'))} value="high">High</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(filterState('medium'))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(filterState('low'))} value="low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>

            {
               !isLoading &&  data.tasks.map((task : ITask) => <TaskCard key={task.id} task={task}></TaskCard>)
            }
        </div>
    );
};

export default Tasks;