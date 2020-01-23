import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Code} from "./model/Code";
import {Token} from "./model/Token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService, private modalService: NgbModal) {
  }

  examples: Code[];
  selectedCode: Code;
  tokenList: Token[];
  closeResult: string;

  async open(content) {
    await this.analyze();
    await this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  analyze() {
    this.apiService.analyze(this.selectedCode).subscribe(resp => this.tokenList = resp.body);
  }

  ngOnInit() {
    this.findAllExamples()
  }

  private findAllExamples() {
    this.apiService.findAllExamples().subscribe(resp => this.examples = resp.body);
  }

}

