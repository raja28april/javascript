# Mutator Methods

1. push() - 0(1) - Add a new element to the end of the array.
2. pop() - 0(1) - Delete the last element of the array
3. shift() - 0(n) - Delete the first element of the array
4. unshift() - 0(n) - Add one or more elements in the beginning of the array
5. splice() - 0(n) - Remove, add or replace a new element indicate by index.
6. sort() - 0(n log(n)) - Modify the array, ordered by a compare Function, or if this compare function is not provided the default order is by the position of the Unicode values in the array.

# Accessor methods

1. concat() - 0(n) - Create a new array with the union of two or more arrays.
2. slice() - 0(n) - Return a shallow copy of array between two index, start and end.
   Important Note: a sliced array is a shallow copy and changing the original array won't modify
3. indexOf() - 0(n) - Return the first index of the element that exists in the array, and if not exists return-1.

# Iteration methods

1. forEach() - 0(n) - Just execute a function for each element in the array.
2. map() - 0(n) - Create a new array with the result of the callback function (this function is executed for each item same as forEach)
3. filter() - 0(n) - Create a new array with the elements that apply the given filter condition as true.
4. reduce() - 0(n) - Return a single value after applying the reduction function for each element.
5. some() - 0(n) - Return a boolean value as true if found one or more item that apply the given condition, and return false if not (also if the array is empty).
6. every() - 0(n) - This function Return a boolean value as true if all the items apply the given condition, and false if not.
7. flat()
8. flatMap()
9. find()
10. findIndex()
11. reduce() with ... becomes O(n^2)

# other methods to add

1. includes()
