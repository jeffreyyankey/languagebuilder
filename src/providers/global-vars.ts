import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {

  myGlobalVar: string;
  
  constructor() {
    this.myGlobalVar = "lisa";
  }

  setMyGlobalVar(value) {
    this.myGlobalVar = value;
  }

  getMyGlobalVar() {
    return this.myGlobalVar;
  }

}