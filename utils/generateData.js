export class GenerateData {
  BNW = 4;
  _fnames = ['Gary', 'Peter', 'Nick', 'John', 'Henry', 'Lucy', 'Natalia', 'Betty', 'Anne', 'Elizabeth', 'Steve', 'Brad', 'Mick', 'Jack', 'Mary', 'Jane', 'Shirley', 'Maddy', 'Aurora']
  _lnames = ['Smith', 'Jones', 'Percy', 'Hendrix', 'Waters', 'Dawltrey', 'Low', 'Idol', 'Mangrove', 'Shepard', 'Armstrong', 'Bean']
  constructor(amt, arr) {
    for(let i = 0; i < amt; i++) {
      arr.push({
        fname: this.randomName(),
        lname: this.randomName(true),
        branchNumber: this.randomBranchNumber()
      })
    }
    return arr;
  }

  randomName(first=false) {
    if(first) {
      // Generate last name
      return this._lnames[Math.floor(Math.random() * this._lnames.length)]
    } else {
      return this._fnames[Math.floor(Math.random() * this._fnames.length)]
    }
  }

  randomBranchNumber() {
    let num = Math.floor(Math.random() * 5000)
    let tmp = num.toString()
    tmp = this.padZeros(tmp, this.BNW);
    return tmp 
  }

  padZeros(str, n) {
    if(str.length < this.BNW) {
      for(let i = 0; i < this.BNW - str.length; i++) {
        str = `0${str}`
      }
    }
    return str
  }
}