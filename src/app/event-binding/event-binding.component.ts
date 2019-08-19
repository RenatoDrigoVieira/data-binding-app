import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button"
  i = 0;
  spinnerMode = "determinate";
  btnEnable = true;
  percent = 0
  SelectDisabled = false;
  SelectedOption = 1;
  inputName = "john"

  save(){
    console.log("Click");
  }
  inc(){
    this.i++
    this.buttonName = `It was clicked ${this.i} times`
    this.percent = this.percent + this.i
  }
  constructor() { }

  ngOnInit() {
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(()=>{
      this.btnEnable = true;
      this.spinnerMode = "determinate"
    },3000);
  }
  cbChange(event){
    if(event.checked === true){
      this.SelectDisabled = false;
    }else{
      this.SelectDisabled = true;
    }
  }
  selectionChange(event){
    this.SelectedOption = event.value
  }
  
}
