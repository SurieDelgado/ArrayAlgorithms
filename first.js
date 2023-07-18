export class FirstProblem{

    getNotApearing(list){
        list = list.sort((a,b) => a-b);
        
        for(let i=0; i<list.length; i++){
            if(list[i] > list.length){
                list[i] = 0;
            }

            list[list[i] - 1] = list[i];
        }

        let auxiliarArray = Array.from({length: list.length}, (x, i) => i+1);
        list = auxiliarArray.map((a, i) => a - list[i]);
        
        let notInList = [];
        for(let i=0;i<list.length;i++){
            if(list[i] != 0){
                notInList.push(i+1);
            }
        }

        return notInList
    }
}

    /* 
    Assuming all the numbers as positive integers, the algorithm time complexity is
        O(n(log(n)+4))

    Algorithm space complexity is
        O(n)
    */