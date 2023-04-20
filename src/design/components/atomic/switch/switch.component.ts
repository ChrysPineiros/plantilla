import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() textYes: string = 'yes';
  @Input() textNo: string = 'no';
  @Output() onChange = new EventEmitter<string>();
  defaultChoice: boolean = true;
  choice: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  switched(value: any) {
    this.onChange.emit(value);
  }


}
