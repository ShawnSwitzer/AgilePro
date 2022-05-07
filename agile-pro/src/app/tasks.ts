import { MemberInputComponent } from "./member-input/member-input.component";

export interface Tasks{
    id: number;
    title: string;
    description: string;
    dueDate: string;
    memberAssign: string;
}
//https://tasks-ed88e-default-rtdb.firebaseio.com/