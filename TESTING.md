# Testing Page Table of Contents
* [**During Development Testing**](#during-development-testing)
    * [*Manual Testing*](#manual-testing)
    * [*Bugs and Fixes*](#bugs-and-fixes)
* [**Post Development Testing**](#post-development-testing)
  * [**Validators**](#validators)
      * [*HTML*](#html---httpsvalidatorw3orgnu)
      * [*CSS*](#css---httpsjigsaww3orgcss-validator)
      * [*JS*](#JS---https://jshint.com)
  * [**Lighthouse Scores**](#lighthouse-scores)
      * [*Mobile Version*](#mobile-version)
      * [*Desktop Version:*](#desktop-version)
  * [**Accessability**](#accessability)
  * [**Unfixed Bug**](#unfixed-bug)


## **During Development Testing**
During the development process, I was manually testing in the following ways:-

1. Manually testing each element for appearance and responsiveness,I used Chrome developer tools extensively during development to troubleshoot issues.
    
2. Published the page via GitHub pages and shared with my friends.

### ***Manual Testing:***
* During testing, I used four different browsers to ensure cross-compatibility. The desktop browsers used by myself were:

  1. Chrome
  2. Firefox  
  3. Opera
  4. Edge

* I then used the devtools to simulate different screen sizes from 280px up to 1920px in width. 
* In addition to this, I also tested it on my smartphone.

### ***Bugs and Fixes:***
* No bugs found during development

## **Post Development Testing**
### **Validators**

#### ***HTML*** - https://validator.w3.org/nu/

* No errors found

![HTML validator](/assets/images/readme-images/html-val.png)

#### ***CSS*** - https://jigsaw.w3.org/css-validator/

* No errors found

![CSS validator](/assets/images/readme-images/css-val.png)

#### ***JS*** - https://jshint.com//
* Few missing semicolons, fixed
* One undefined variable on line 28 "game", fixed it by moving variable definition to global scope

### **Lighthouse Scores**
* I did all lighthouse tests in incognito mode to avoid interference from browser extensions. 
* I ran the tests for both mobile and desktop. 
- No errors found
- Got bad scores on lighthouse with the main issue being **Largest Contentful Paint element 13,430 ms**

![Mobile lighthouse](/assets/images/readme-images/lighthouse-mobile.png)
![Lighthouse](/assets/images/readme-images/lighthouse.png)

  - Asked help on slack

[return to README.md](README.md)