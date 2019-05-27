import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  isEdit: boolean = false;
  id:number;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id= +params["id"];
      this.isEdit = params["id"] != null;
    })
  }

}
