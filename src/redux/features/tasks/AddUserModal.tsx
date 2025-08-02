import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/redux/app/hooks"
import { useForm } from "react-hook-form"
import { addUser } from "../Users/UserSlice"


export default function AddUserModal() {

    const form = useForm()
    const dispatch = useAppDispatch()
    const onSubmit = (data) => {

        console.log(data)
        dispatch(addUser(data))

    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Save User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Users</DialogTitle>

                    </DialogHeader>
                    {/* <Form> */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>User Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value || ""}></Input>
                                        </FormControl>

                                    </FormItem>

                                )

                                }


                            />


                            <DialogFooter>

                                <Button className="mt-2.5" type="submit">Save</Button>




                            </DialogFooter>


                        </form>
                    </Form>


                </DialogContent>

            </form>
        </Dialog>
    )
}
