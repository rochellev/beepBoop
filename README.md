# BeepBoop A Numbers Game
### By Rochelle Roberts


## Technologies Used
* JavaScript
* JQuery
* HTML5
* CSS
* Bootsrap

## BeepBoop Specs

| Behaviors       | Input           | Output      |
| ------------- |:-----------------:| -----------:|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.     | 3     | 3     |
| The program adds "ay" to single-letter words beginning with a vowel.     | i    | iay   |
| For a single consonant, treat as one or more consonants.     | p    | pay      |
| For words beginning with a vowel, add "way" to the end.     | apple    | appleway      |
| For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".      | schedule    | eduleschay      |
| If the first consonants include "qu", move the "u" along with the "q" and add "ay".     | question    | estionquay       |
| If word starts with consonant followed by "qu"  like "squeal", treat this as  one or more consonants     | squeal    | ealsquay       |
| For words beginning with "y", treat "y" as a consonant.     | year    | earyay      |
| Capitalization will be kept.    | HeLlo    | eLloHay      |
