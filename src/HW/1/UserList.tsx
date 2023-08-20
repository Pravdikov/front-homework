import {HW1} from "./HW1";

type AddressType = {
    street: string // ПОДПРАВЛЯЕМ any
    city: string // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
};

type UserListPropsType = {
    users: Array<UserType>;    //что-то не хватает
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

          {  <ul>
                {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={user.id} id={`hw01-user-${user.id}`}>
                        {user.name} (Age: {user.age}) Address:
                        {user.address.street}, {user.address.city}
                    </li>
                ))}
            </ul>}
        </div>
    );
};
