import { SecondProblem } from "../second.js";

describe("Number add up adition to target",function(){

    it("The function should return indexes that add up the target", function() {

        const testCases = [
            { target: 9, list: [2,7,11,15], result: [0,1]},
            { target: 6, list: [3,2,4], result: [1,2]},
            { target: 6, list: [3,3], result: [0,1]}
        ];

        testCases.forEach(test => {
            var value = new SecondProblem().getAddUpIndexes(test.list, test.target);
            expect(value).toEqual(jasmine.arrayWithExactContents(test.result))
        });
    });
    
});