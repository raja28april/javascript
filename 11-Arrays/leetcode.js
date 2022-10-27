'use strict'

//////////////////////////////////////////
//Two pointers
/*
Two-pointers is an extremely common technique used to solve array and string problems. It involves having two integer variables that both move along an iterable. In this article, we are focusing on arrays and strings. This means we will have two integers, usually named something like i and j, or left and right which each represent an index of the array or string.

There are several ways to implement two-pointers. To start, let's look at the following method:

Start one pointer at the first index 0 and the other pointer at the last index input.length - 1.
Use a while loop until the pointers are equal to each other.
At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index, or both. Deciding which pointers to move will depend on the problem we are trying to solve.
*/



/*
Example 1: Return true if a given string is a palindrome, false otherwise.

A string is a palindrome if it reads the same forwards as backwards. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

*/
const checkIfPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }

        left++;//1//2
        right--;//2//1
    }

    return true;
}
console.log(checkIfPalindrome('raar'));

/*Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

The complexity of below solution is O(n).
*/
const checkForTarget = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true;
        }

        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

const nums = [1, 2, 4, 6, 8, 9, 14, 15];
const target = 13;
console.log(checkForTarget(nums, target));

//Another approach for example 2
/*This method where we start the pointers at the first and last indices and move them towards each other is only one way to implement two pointers. Algorithms are beautiful because of how abstract they are - two-pointers can be implemented in many ways. Let's look at another method. The following method is applicable when the problem has two iterables in the input, for example, two arrays.

Create two pointers, one for each iterable. Each pointer should start at the first index.
Use a while loop until one of the pointers reaches the end of its iterable.
At each iteration of the loop, move the pointers forwards. This means incrementing either one of the pointers or both of the pointers. Deciding which pointers to move will depend on the problem we are trying to solve.
Because our while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end when the loop finishes. Sometimes, we need to iterate through all elements - if this is the case, you will need to write extra code here to make sure both iterables are exhausted.
*/

//Example 3: Given two sorted integer arrays, return an array that combines both of them and is also sorted.

const arrCom = [];
const combine = function (arr1, arr2) {
    let fir = 0, sec = 0;

    while (fir < arr1.length && sec < arr2.length) {
        if (arr1[fir] <= arr1[sec]) {//3&2
            arrCom.push(arr1[fir]);
            fir++;
        } else {
            arrCom.push(arr2[sec]);
            sec++;
        }
    }

    while (fir < arr1.length) {
        arrCom.push(arr1[fir]);
        fir++;
    }
    while (sec < arr2.length) {
        arrCom.push(arr2[sec]);
        sec++;
    }
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

combine(arr1, arr2);
console.log(arrCom);


/*
Example 4: 392. Is Subsequence.

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

const subsequence = function (s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}
const s = 'abc', t = 'abcde';
console.log(subsequence(s, t));