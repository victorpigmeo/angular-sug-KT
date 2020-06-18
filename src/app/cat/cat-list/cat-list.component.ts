import { Component, OnInit } from '@angular/core';
import {CatService} from '../../services/cat.service';
import {Cat} from '../../model/cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  public catList: Array<Cat>;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.listCats()
      .then((catListFromDb: Array<Cat>) => {
        this.catList = catListFromDb;
      })
      .catch(e => console.error(e));
  }

}
