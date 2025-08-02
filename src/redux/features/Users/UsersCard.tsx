import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch } from "@/redux/app/hooks";
import type { IUser } from "@/types";
import { removeUser } from "./UserSlice";
interface IProp {
    user: IUser
}

const UsersCard = ({ user }: IProp) => {
    const { name } = user
    console.log(user)
    const dispatch = useAppDispatch()

    return (
        <div>
            <Card>
                <CardHeader className="">
                    <div className="flex justify-between">
                        <div className="">
                            <CardTitle>{name}</CardTitle>
                        </div>
                        {/* <h1>Hello</h1> */}
                        {/* <input type="checkbox" className="" name="vehicle2" value="Car"></input> */}
                        <button onClick={()=>dispatch(removeUser(user.id))} className="bg-amber-600 rounded">Delete</button>
                    </div>

                </CardHeader>



            </Card>


        </div>
    );
};

export default UsersCard;