import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit { 
  userForm!: FormGroup; // Using definite assignment assertion
  // userData:any[]=[];

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // this.getUserData();

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userRole: ['', Validators.required],
      branch: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        email: this.userForm.value.email,
        userRole: this.userForm.value.userRole,
        password: this.userForm.value.password,
        branch: '',
        username: ''
      };
      // this.userService.addUser(newUser);
      // this.userForm.reset();
      // alert('User saved successfully!');
    } else {
      alert('Form is invalid');
    }
  // }
  // getUserData(): void {
  //   this.userService.getUserdata().subscribe(
  //     (response: any) => {
       
  //       this.userData = response.data;// Ensure this is an array
  //       console.log('Type of userData:', typeof this.userData);
  //       console.log(this.userData);
  //     },
  //     (error) => {
  //       console.error('Error fetching user data', error);
  //     }
  //   );
  // 
  }

}
