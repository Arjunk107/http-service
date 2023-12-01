import { Component } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public userForm: any = {
    name: '',
    username: '',
    email: '',
    website: '',
    phnumber: '',
  }

  constructor(private data: UserdetailsService) { }
  onSubmit(form: any, formdata: any) {
    this.data.postDetails(formdata).subscribe((Response: any) => {
      console.log(Response);
      alert("Successfully Registered");
    })
  }

}
