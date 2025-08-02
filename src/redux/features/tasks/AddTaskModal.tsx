import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Dialog,

    DialogContent,
    DialogDescription,

    DialogFooter,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/redux/app/hooks"
import { Popover } from "@radix-ui/react-popover"
import { format } from "date-fns"
import { CalendarIcon, } from "lucide-react"
import { useForm } from "react-hook-form"
// import { addTask } from "./taskSlice"
import { selectUsers } from "../Users/UserSlice"
import { useState } from "react"
import { useCreateTasksMutation } from "@/redux/api/baseAPI"


export default function AddTaskModal() {

    const users = useAppSelector(selectUsers)
    const [open, setOpen] = useState(false)

    const [createTask, { isError, data, isLoading }] = useCreateTasksMutation()

    const form = useForm()
    // const dispatch = useAppDispatch()
    const onSubmit = async (data) => {
        const res = await createTask(data).unwrap();

        console.log(res)
        // dispatch(addTask(data))
        setOpen(false)
        form.reset()

    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Save Tasks</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Tasks</DialogTitle>
                        <DialogDescription className="sr-only">
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    {/* <Form> */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value || ""}></Input>
                                        </FormControl>

                                    </FormItem>

                                )

                                }


                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} placeholder="Give Your Description"></Textarea>
                                        </FormControl>

                                    </FormItem>

                                )

                                }


                            />

                            <FormField
                                control={form.control}
                                name="priority"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Priority</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a Priority" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="low">Low</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="high">High</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            You can manage your priorities
                                            {/* <Link href="/examples/forms">email settings</Link>. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="user"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Users</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an user" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    users.map(user => <SelectItem value={user.id}>{user.name}</SelectItem>)
                                                }


                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            You can manage your priorities
                                            {/* <Link href="/examples/forms">email settings</Link>. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />




                            <FormField
                                control={form.control}
                                name="due date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Due Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    captionLayout="dropdown"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription>
                                            Your due date will be used in proper ways
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <DialogFooter>

                                <Button className="mt-2.5" type="submit">Save changes</Button>




                            </DialogFooter>


                        </form>
                    </Form>


                </DialogContent>

            </form>
        </Dialog>
    )
}
