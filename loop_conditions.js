var num1 = 1;

while(num1<=10)
    {
        console.log(num1);
        num1 =  num1 + 1;
    }
    console.log("Wh9ile loop is completed");


    var num2 = 1;
    while(num2<=20)
        {
            console.log(num2);
            num2 = num2 + 2;
        }
        console.log("Above is the list of odd numbers from 1 to 20");


        var num3 = 2;
        while(num3<=20)
            {
                console.log(num3);
                num3 = num3 + 2;
            }
            console.log("Above is the list of even numbers from 1 to 20");

            console.log("Print numbers from 1 to 10 by using for loop");
            for(var num4 =1; num4<=10; num4++)
                {
                    console.log(num4);
                }


                console.log("Print all the numbers in array using for each loop");
                var arr1 = [1,2,4,5,5,6];
                for(var num of arr1)
                    {
                        console.log(num);
                    }

                    console.log("Print all the numbers in array using normal for loop");
                for(var i=0; i<arr1.length; i++)
                    {
                        console.log(arr1[i]);
                    }



