import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";

export class NewUserData {
    userName: string = '';
    emailId: string = '';
    password: string = '';
    contactNo: string = '';
    gender: string = '';
    age: number = 0;
    city:string="";
    roleId: number = 2;
    formUserGroup:FormGroup;
    constructor() {
        var _builder=new FormBuilder();
        this.formUserGroup=_builder.group({});
 
        //Control==>validation
        this.formUserGroup.addControl("UserNameControl",new FormControl('',Validators.required)); 
        this.formUserGroup.addControl("UserMailControl",new FormControl('',Validators.required));
        this.formUserGroup.addControl("UserPasswordControl",new FormControl('',Validators.required));
     }
}