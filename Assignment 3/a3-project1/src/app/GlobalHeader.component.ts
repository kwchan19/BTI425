import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-GlobalHeader',
  templateUrl: './GlobalHeader.component.html',
  styleUrls: ['./GlobalHeader.component.css']
})
export class GlobalPageHeaderComponent implements OnInit {
  @Input() title: String;
  @Input() active: String;
  constructor() { }

  ngOnInit() {
  }

}
