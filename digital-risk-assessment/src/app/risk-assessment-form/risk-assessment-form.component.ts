import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-risk-assessment-form',
  templateUrl: './risk-assessment-form.component.html',
  styleUrls: ['./risk-assessment-form.component.css']
})
export class RiskAssessmentFormComponent {

  myForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: '',


    })

    this.myForm.valueChanges.subscribe(console.log)
  }


}
