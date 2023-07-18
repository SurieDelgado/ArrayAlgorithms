import { FirstProblem } from "./first.js";
import { SecondProblem } from "./second.js";

var target = 9;
var list = [2,7,11,15];

var indexes = new SecondProblem().getAddUpIndexes(list,target);
console.log(indexes);

var secList = [1,1,1];
var notApearing = new FirstProblem().getNotApearing(secList);

console.log(notApearing);