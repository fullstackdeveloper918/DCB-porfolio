import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OurReference } from '../../../core/services/our-reference';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret-key',
  imports: [ReactiveFormsModule],
  templateUrl: './secret-key.html',
  styleUrl: './secret-key.css'
})
export class SecretKey {

  passwordForm! : FormGroup

  constructor(
  private referenceService : OurReference,
  private router : Router){}
  ngOnInit() {
    this.initForm();
  }

  initForm() {
  this.passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required])
  });
}

  onSubmit(){
    if(this.passwordForm.valid){
      this.referenceService.secureForm(this.passwordForm.value.password).subscribe(
        (res: any) => {
          if(res.status){
          const expiry = new Date().getTime() + 60 * 60 * 1000;
          localStorage.setItem('secureSession', JSON.stringify({ expires: expiry }));
          this.router.navigate(['/our-references/1'])
          }
        },
        (err) => {
          alert('Password is incorrect');
        }
      );
    }
  }
}
