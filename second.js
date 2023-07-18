export class SecondProblem{

    getAddUpIndexes(list, target){
        var firstNumber = target;
        var secondNumber = 0;
    
        var firstIndex = -1;
        var secondIndex = -1;
    
        while(firstIndex == -1 && secondIndex == -1){
    
            firstIndex = -1;
            secondIndex = -1;
            
            for( let i=0; i<list.length; i++ ){
                if(list[i] == firstNumber && firstIndex == -1 && secondIndex != i){
                    firstIndex = i;
                }
    
                if(list[i] == secondNumber && secondIndex == -1 && firstIndex != i){
                    secondIndex = i;
                }
            }
    
            firstNumber--;
            secondNumber++;
        }

        return [firstIndex, secondIndex];
    }

    /* 
    Assuming all the numbers as positive integers, the algorithm time complexity is
        O((kn)/2)
        where k = target

    Algorithm space complexity is
        O(n)
    */
}