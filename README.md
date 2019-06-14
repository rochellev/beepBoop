# BeepBoop A Numbers Game
### By Rochelle Roberts

## Description 
* This program takes in a user's number input and displays numbers from 0 to the given number.
* Special rules are set for numbers containing "1", "2", and "3". More detail about this behavior can be found in the Specs Section below.
* The primary purpose of this program is to practice implementing logic rules and to practice using arrays and loops in JavaScript.


## Technologies Used
* JavaScript
* JQuery
* HTML5
* CSS
* Bootsrap

## BeepBoop Specs

| Behaviors       | Input          | Output      |
| ---------------- |:------------:| :--------------:|
| The program returns a range of numbers from 0 to the users inputted number, with some exeptions | 4 | 0, Beep! , Boop! , I'm sorry , Dave. I'm afraid I can't do that. ,4  |
| For numbers containing "1", the program replaces all digits with "Beep!" | 1 | 0 , Beep! |
| For numbers containing "2", the program replaces all digits with "Boop!" | 2 | 0 , Beep! , Boop! |
| For numbers containing "3", the program replaces all digits with "I'm sorry, Dave. I'm afraid I can't do that." | 3 | 0, Beep! , Boop! , I'm sorry, Dave. I'm afraid I can't do that. |
| The rule for "3" will appear over rule "2" and "1" | 123 | 0 , ... , I'm sorry, Dave. I'm afraid I can't do that. |
| The rule for "2" will appear over rule "1", but not rule "3" | 21 | 0 , ... , Boop! |
| The rule for "1" will only appear when "2" and "3" are not in the digit | 17 | 0 , ... , Beep! |
| When "Normal Mode" is selected, the numbers will display from 0 to the largest numer | 5 | 0 , Beep! , Boop! , I'm sorry , Dave. I'm afraid I can't do that. , 4, 5 |
| When "Spooky Mode" is selected, the numbers will display from the largest numer to 0 | 5 | 5, 4, I'm sorry , Dave. I'm afraid I can't do that., Boop! , Beep! , 0 |

## Additional Features
* When the user selects "Spooky Mode," the color shceme becomes dark.

