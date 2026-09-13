// ============================================================
// JAVASCRIPT DOM MASTERY PLAYGROUND
// ============================================================
//
// Practice topics:
//
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()
// 6. textContent
// 7. innerHTML
// 8. getAttribute()
// 9. setAttribute()
// 10. removeAttribute()
// 11. style
// 12. classList.add()
// 13. classList.remove()
// 14. classList.toggle()
// 15. classList.contains()
// 16. parentElement
// 17. children
// 18. firstElementChild
// 19. lastElementChild
// 20. nextElementSibling
// 21. previousElementSibling
// 22. createElement()
// 23. append()
// 24. appendChild()
// 25. remove()
//
// ============================================================

// ============================================================
// PART 1 — SELECTING BY ID
// ============================================================

// const mainTitle = document.getElementById('mainTitle');
// console.log(mainTitle);

// ============================================================
// PART 2 — SELECTING BY CLASS NAME
// ============================================================

// const textItems = document.getElementsByClassName('text-item');
// console.log(textItems);

// ============================================================
// PART 3 — SELECTING BY TAG NAME
// ============================================================

// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// ============================================================
// PART 4 — querySelector()
// ============================================================

// const firstCardTitle = document.querySelector('.card-title');
// console.log(firstCardTitle);

// ============================================================
// PART 5 — querySelectorAll()
// ============================================================

// const cardTitles = document.querySelectorAll('.card-title');
// console.log(cardTitles);

// ============================================================
// PART 6 — textContent
// ============================================================

// const mainTitle = document.getElementById('mainTitle');
// mainTitle.textContent = 'JavaScript DOM Playground';

// ============================================================
// PART 7 — innerHTML
// ============================================================

// const textDescription = document.getElementById('textDescription');
// textDescription.innerHTML = `<strong>DOM Practice:</strong> I am learning JavaScript.`;

// ============================================================
// PART 8 — getAttribute()
// ============================================================

// const googleLink = document.getElementById('googleLink');
// const googleURL = googleLink.getAttribute('href');
// console.log(googleURL);

// ============================================================
// PART 9 — setAttribute()
// ============================================================

// const youtubeLink = document.getElementById('youtubeLink');
// youtubeLink.setAttribute('href', 'https://www.youtube.com/');

// ============================================================
// PART 10 — removeAttribute()
// ============================================================

// const githubLink = document.getElementById('githubLink');
// githubLink.removeAttribute('title');

// ============================================================
// PART 11 — style manipulation
// ============================================================

// const profileName = document.getElementById('profileName');
// profileName.style.color = 'blue';
// profileName.style.fontSize = '30px';

// ============================================================
// PART 12 — classList.add()
// ============================================================

// const classBox = document.getElementById('classBox');
// classBox.classList.add('active');

// ============================================================
// PART 13 — classList.remove()
// ============================================================

// const classBox = document.getElementById('classBox');
// classBox.classList.remove('active');

// ============================================================
// PART 14 — classList.toggle()
// ============================================================

// const classBox = document.getElementById('classBox');
// classBox.classList.toggle('active');

// ============================================================
// PART 15 — classList.contains()
// ============================================================

// const classBox = document.getElementById('classBox');
// const hasActiveClass = classBox.classList.contains('active');

// ============================================================
// PART 16 — parentElement
// ============================================================

// const innerParagraph = document.getElementById('innerParagraph');
// const parent = innerParagraph.parentElement;
// console.log(parent);

// ============================================================
// PART 17 — children
// ============================================================

// const navigationParent = document.getElementById('navigationParent');
// const childElements = navigationParent.children;
// console.log(childElements);

// ============================================================
// PART 18 — firstElementChild
// ============================================================

// const navigationParent = document.getElementById('navigationParent');
// const firstChild = navigationParent.firstElementChild;
// console.log(firstChild);

// ============================================================
// PART 19 — lastElementChild
// ============================================================

// const navigationParent = document.getElementById('navigationParent');
// const lastChild = navigationParent.lastElementChild;
// console.log(lastChild);

// ============================================================
// PART 20 — nextElementSibling
// ============================================================

// const navigationParagraph1 = document.getElementById('navigationParagraph1');
// const nextElement = navigationParagraph1.nextElementSibling;
// console.log(nextElement);

// ============================================================
// PART 21 — previousElementSibling
// ============================================================

// const navigationParagraph3 = document.getElementById('navigationParagraph3');
// const previousElement = navigationParagraph3.previousElementSibling;
// console.log(previousElement);

// ============================================================
// PART 22 — createElement()
// ============================================================

// const newParagraph = document.createElement('p');
// console.log(newParagraph);

// ============================================================
// PART 23 — append()
// ============================================================

// const h3 = document.createElement('h3');
// h3.textContent = 'Dynamically Created Heading';

// const dynamicContainer = document.querySelector('#dynamicContainer');
// dynamicContainer.append(h3);

// ============================================================
// PART 24 — appendChild()
// ============================================================

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This paragraph was created with JavaScript.';

// const dynamicContainer = document.querySelector('#dynamicContainer');
// dynamicContainer.appendChild(newParagraph);

// ============================================================
// PART 25 — remove()
// ============================================================

// const item = document.querySelector('#removeItem2');
// item.remove();

// ============================================================
// PART 26 — MIX EVERYTHING (1)
// ============================================================

// const cardTitles = document.querySelectorAll('.card-title');
// cardTitles[0].textContent = 'Frontend Development';
// cardTitles[1].textContent = 'Styling & Design';
// cardTitles[2].textContent = 'JavaScript Programming';

// (2)
// const items = document.getElementsByClassName('item');
// const itemTitle = document.getElementsByClassName('item-title');

// itemTitle[0].textContent = 'HTML Basics';
// itemTitle[1].textContent = 'CSS Basics';
