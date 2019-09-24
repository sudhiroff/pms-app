import { Validators } from '@angular/forms';

export const ctrls=[
    {
        label:"First Name",
        placeholder:"First name",
        name:"firstName",
        validator:[Validators.required]
    },
    {
        label:"Last Name",
        placeholder:"First name",
        name:"lastName",
        validator:[Validators.required]
    },
    {
        label:"Email id",
        placeholder:"First name",
        name:"email",
        validator:[Validators.required,Validators.email]
    },
    {
        label:"Mobile No",
        placeholder:"First name",
        name:"mobileNo",
        validator:[Validators.required,Validators.pattern("^[0-9]*$")]
    },
    {
        label:"Address",
        placeholder:"First name",
        name:"address",
        validator:[]
    },
    {
        label:"City",
        placeholder:"First name",
        name:"city",
        validator:[]
    },
    {
        label:"State",
        placeholder:"First name",
        name:"state",
        validator:[]
    }
]