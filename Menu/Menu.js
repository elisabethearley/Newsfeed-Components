/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menu = (array) => {

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const menuList = document.createElement('ul');
  menuDiv.appendChild(menuList);

  array.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
  })

  return menuDiv;
}

const header = document.querySelector('.header');
header.appendChild(menu(menuItems));

/*
const itemOne = document.createElement('li');
  itemOne.textContent = 'Students';
  menuList.appendChild(itemOne);

  const itemTwo = document.createElement('li');
  itemTwo.texContent = 'Faculty';
  menuList.appendChild(itemTwo);

  const itemThree = document.createElement('li');
  itemThree.textContent = "What's New";
  menuList.appendChild(itemThree);

  const itemFour = document.createElement('li');
  itemFour.textContent = 'Tech Trends';
  menuList.appendChild(itemFour);

  const itemFive = document.createElement('li');
  itemFive.textConten = 'Music';
  menuList.appendChild(itemFive);

  const itemSix = document.createElement('li');
  itemSix.textContent = 'Log Out';
  menuList.appendChild(itemSix);
}
*/