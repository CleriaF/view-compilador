import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CodeModel } from '@ngstack/code-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private servico: ApiService, private modalService: NgbModal){}

  theme = 'vs-dark';
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;

  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }

  onCodeChanged() {
    let value = {"code": "public static void main(String[] args) {}"};
    this.servico.analyzer(value).subscribe(resp => {
      console.log(resp)
    });
  }

  ngOnInit(){

  }

}

