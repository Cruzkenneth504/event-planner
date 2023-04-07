#  Event Planner


## **Description**

* This project aimed to use the library of [Bootstrap](https://getbootstrap.com/) to manipulate HTML CSS content And the library of [JQuery](https://learn.jquery.com/) to manioulate javascript content. This website serves the purpose of helpt the user keep track of planned events. Future events will show the color green. Present events will show  color red. Past events will show color gray.
All events will be saved inside the local storage and can be cleared by simply deleting the event row and saving it again.


* Documentation

[Documentation JQuery](https://getbootstrap.com/docs/5.3/customize/overview/)
[Documentation Bootstrap](https://api.jquery.com/)


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
 |  JQuery |[ttps://learn.jquery.com/](ttps://learn.jquery.com/)     | 
  |  Bootstrap  | [https://getbootstrap.com/](https://getbootstrap.com/)  | 

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

[Link to Website](https://cruzkenneth504.github.io/event-planner/)

## **Built With**

* [HTML Dev](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [HTML W3](https://www.w3schools.com/html/default.asp)   
* [CSS Dev](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [CSS W3](https://www.w3schools.com/css/default.asp)
* [Jquery](https://learn.jquery.com/)
* [Bootstrap](https://getbootstrap.com/)

## **Visual**

* Click the image below 

[![Image](./assets/imgs/screen1.png)](https://cruzkenneth504.github.io/event-planner/)


## **Author**

* **Kenneth Cruz** 


- [Link to Code Quiz Site](https://github.com/Cruzkenneth504.io/event-planner)
- [Link to Github Repo](https://github.com/Cruzkenneth504/event-planner)
- [Link to Github](https://github.com/cruzkenneth504)
- [Link to LinkedIn](linkedin.com/in/cruzkenneth504)

       
## **License**

This project is licensed under the MIT License

## **Acknowledgments**

* [UCB BootCamp](https://bootcamp.berkeley.edu/)
* [DevTools](https://dev.to/)
* [Youtube](https://www.youtube.com/)
* [Jquery](https://cssgradient.io/)


## **Test 1**
<!---Unable to provide video testing due to computer version not meeting the github large files standards --->
![Site test test 1](./assets/imgs/screen3.png)
## **Test 2**
![Site test test 2](./assets/imgs/screen4.png)
