export interface UserInterface {
    username:string;
    password:string;
    roleName:"ADMIN" | "CLIENT" | "SELLER";
    firstName:string;
    lastName:string;
    address:string;
}


export type loginInterface = Pick<UserInterface, "username" | "password">

//o Omit<UserInterface, "address" | "firstName" | "lastName" etc...>

/*export interface loginInterface3 extends UserInterface{
    email:string;
}*/