import { GenerateData } from '../utils/generateData.js'

export class Member {
  _fname
  _lname
  _branchNumber
  
  constructor(fname, lname, branchNumber) {
    this._fname         = fname
    this._lname         = lname
    this._branchNumber  = branchNumber
  }

  displayAllInfo() {
    console.log(`fname:\t\t ${this._fname}
lname:\t\t ${this._lname} 
branch #:\t ${this._branchNumber}`);
  }
}