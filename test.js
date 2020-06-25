import { GenerateData } from './utils/generateData.js'
import { Member } from './models/member.js'
let dataArr = []
const gd = new GenerateData(10, dataArr)

let members = gd.map(x => {
  let tmpMember = new Member(x.fname, x.lname, x.branchNumber)
  return tmpMember
})

members.forEach(x => {
  console.log(x);
})
