import { FirstProblem } from "../first.js";

describe("Find numbers that do not appear in list",function(){

    it("The function should return a list of numbers that are not in the range 1...N", function() {

        const testCases = [
            { list: [4,3,2,7,8,2,3,1], result: [5,6]},
            { list: [1,1], result: [2]},
            { list: [1,1,1], result: [2,3]}
        ];

        testCases.forEach(test => {
            var value = new FirstProblem().getNotApearing(test.list);
            expect(value).toEqual(jasmine.arrayWithExactContents(test.result))
        });
    });
    
});