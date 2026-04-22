import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

   
   loading=false;

   
   
    feedbackForm=this.fb.group({
               name:['',Validators.required],
               email:['',[Validators.required,Validators.email]],
               message:['',Validators.required]
   });
   
   constructor(private fb:FormBuilder,private snackBar:MatSnackBar,private feedbackService:FeedbackService)
   {

   }

   onSubmit()
   {
    if(this.feedbackForm.invalid) return;
    this.loading=true;

    this.feedbackService.submitFeedback(this.feedbackForm.value)
       .subscribe({
        next:()=>{
          this.snackBar.open('Feedback Submited Succesfully','Close',{
            duration:3000
          });
          this.feedbackForm.reset();
          this.loading=false;
        },
        error:()=>{
          this.snackBar.open('Something went Wrong','close',{
            duration:3000
          });
          this.loading=false;
        }
       });
    
   }

}
