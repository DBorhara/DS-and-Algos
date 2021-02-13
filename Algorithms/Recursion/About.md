# Recursion

## Definition

A function that calls itself and runs it

It should have a base case and a recursive case

Base Case - You have reached your final case, stop recursive case call.

Recurisive Case - Call the function again and run it

## Rule 1 - Rules of Recursion/Recursive Calls

1. Identify the base case
2. Identify the recursive case
3. Get close and closer and return when needed.
4. Usually you have 2 returns one for base case and the recursive call

```JS
let counter = 0
function inception(){
   if(counter > 3){
      return 'done'
   }
   counter++
   return inception()
}
```

## Rule 2 - When to think about using recursion

Every time you are using a tree or converting something into a tree consider recursion

1. Divided into a number of subproblems that are smaller instances of the same problem
2. Each instance of the subproblem is identical in nature
3. The solutions of each subproblem can be combined to solve the problem at hand
   **Divide and Conquer using Recursion**
