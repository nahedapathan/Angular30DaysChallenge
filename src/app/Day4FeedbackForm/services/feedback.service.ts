import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  submitFeedback(data:any):Observable<any>
  {
    console.log("Sending to server",data);
    
    return of({success:true})
  }
}
