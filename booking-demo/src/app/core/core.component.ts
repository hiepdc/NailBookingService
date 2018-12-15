import { Component, OnInit } from '@angular/core';
import { Compiler } from '@angular/core';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private compiler:Compiler) { 
    this.compiler.clearCache();
  }

  ngOnInit() {
  }

}
