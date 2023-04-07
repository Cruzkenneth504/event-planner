#  Event Planner


## **Description**

* This project aimed to use the library of [Bootstrap](https://getbootstrap.com/) to manipulate HTML CSS content And the library of [JQuery](https://learn.jquery.com/) to manioulate javascript content. 


## **Code Learning Points**

- * Learning point comments have been added to javascrip documents. Example below:  

### 

```Js
//$(document).ready(function () {}; allows us to invoke DOM manipulation//
$(document).ready(function () {
  //#ID has properly been added to HTML file to set date format//
  //.Claas Event listener has been added//
  $("#currentDay").html(moment().format("MMMM Do YYYY")); 

  $(".saveBtn").on("click", function () {
    
      console.log(this);
      var text = $(this).siblings(".description").val();//links to html sheet //
      var time = $(this).parent().attr("id");//links to changes inside style sheet// 
     
      localStorage.setItem(time, text);//local storage will save event moments// 
      
  })
});
```

## **Technology Used**

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)|  
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Js  | [https://developer.mozilla.org/en-US/docs/Web/JavaScript]  | 

## **Prerequisites**

**Install or open the internet browser of your choice.**

*  **Examples Below:**

- Google Chrome
- Safari
- OPera
- Mozilla Firefox
- Internet Explorer

### **Installing**

**Click the link below:** 

[Link to Website](https://cruzkenneth504.github.io/code-quiz/)

## **Built With**

* [HTML Dev](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [HTML W3](https://www.w3schools.com/html/default.asp)   
* [CSS Dev](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [CSS W3](https://www.w3schools.com/css/default.asp)
* [Flexiple](https://flexiple.com/javascript/javascript-clock/)

## **Visual**

* Click the image below 

[![Image](./assets/imgs/screen1.png)](https://cruzkenneth504.github.io/code-quiz/)


## **Author**

* **Kenneth Cruz** 


- [Link to Code Quiz Site](https://github.com/Cruzkenneth504.io/code-quiz)
- [Link to Github Repo](https://cruzkenneth504.github/code-quiz/)
- [Link to Github](https://github.com/cruzkenneth504)
- [Link to LinkedIn](linkedin.com/in/cruzkenneth504)

       
## **License**

This project is licensed under the MIT License

## **Acknowledgments**

* [UCB BootCamp](https://bootcamp.berkeley.edu/)
* [DevTools](https://dev.to/)
* [Youtube](https://www.youtube.com/)
* [CssGradient](https://cssgradient.io/)
* [CssTricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [MozzilaBoxShadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

## **Test 1**
<!---Unable to provide video testing due to computer version not meeting the github large files standards --->
![Site test test 1](./assets/imgs/screen3.png)
## **Test 2**
![Site test test 2](./assets/imgs/screen4.png)
