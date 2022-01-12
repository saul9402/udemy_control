import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { PageImpl } from 'src/app/models/page-impl.model';
import { Page } from 'src/app/models/page.model';
import { CoursesService } from 'src/app/services/courses.service';


interface PageInfo {
  offset: number;
  pageSize: number;
  limit: number;
  count: number;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  /**
   * https://www.wrappixel.com/templates/adminpro-angular-dashboard/ -> docs
   * https://swimlane.github.io/ngx-datatable/#server-paging
   * https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-server.component.ts
   * https://swimlane.gitbook.io/ngx-datatable/api/column/inputs
   * https://demos.wrappixel.com/premium-admin-templates/angular/adminpro-angular/docs/docs-custom-datatable.html
   */

  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  page = new Page();

  rows: any[] = [{
    name: "Saul",
    gender: "Masc",
    company: "Serviap"
  }];

  totalElements: number;
  pageNumber: number;
  cache: any = {};

  ColumnMode = ColumnMode;

  isLoading = 0;

  constructor(private coursesService: CoursesService) {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit(): void {
    this.setPage({ offset: 1 });
  }

  setPage(pageInfo) {

    this.page.pageNumber = pageInfo.offset;
    /* this.serverResultsService.getResults(this.page).subscribe(pagedData => { */
    this.page = { size: 1, totalElements: 2, totalPages: 2, pageNumber: 1 };
    this.rows = this.rows;
    /* }); */
    // Current page number is determined by last call to setPage
  }

}
