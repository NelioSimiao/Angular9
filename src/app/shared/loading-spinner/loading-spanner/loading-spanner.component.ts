import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spanner',
  template: `<div class="lds-spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
`,
  styleUrls: ['./loading-spanner.component.css']
})
export class LoadingSpannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
