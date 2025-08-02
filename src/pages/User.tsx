

import { useAppSelector } from "@/redux/app/hooks";
import AddUserModal from "@/redux/features/tasks/AddUserModal";
import UsersCard from "@/redux/features/Users/UsersCard";
import { selectUsers } from "@/redux/features/Users/UserSlice";




const User = () => {
    const users = useAppSelector(selectUsers)
    console.log(users)
    return (
        <div>
            <div className="flex justify-end items-center gap-2.5">
                <h1 className="mr-auto">It is Users Page</h1>
                <AddUserModal/>
            </div>
            {
                users.map((user ) => <UsersCard  user={user}></UsersCard>)
            }
        </div>
    );
};

export default User;