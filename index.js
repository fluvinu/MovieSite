
// nav bar color change 

function changeNavbarColor(){
    let navbar= document.getElementById('navbar');
    if(document.documentElement.scrollTop > 20|| document.body.scrollTop > 20){
        navbar.classList.add("nav__black")
    }else{
        navbar.classList.remove("nav__black")
    }
}








// // scroll fuction 

// const rowPostersList = document.getElementsByClassName('row__posters');

// Array.from(rowPostersList).forEach(rowPosters => {
//   let lastScrollTop = 0;

//   rowPosters.addEventListener('mouseenter', () => {
//     rowPosters.classList.add('scrolling');
//   });

//   rowPosters.addEventListener('mouseleave', () => {
//     rowPosters.classList.remove('scrolling');
//   });

//   rowPosters.addEventListener('wheel', (event) => {
//     if (rowPosters.classList.contains('scrolling')) {
//       event.preventDefault();

//       // Determine scroll direction
//       const currentScrollTop = rowPosters.scrollTop;
//       const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
//       lastScrollTop = currentScrollTop;

//       // Scroll left for scroll up, scroll right for scroll down
//       rowPosters.scrollLeft += event.deltaY * (scrollDirection === 'down' ? 1 : -1);
//     }
//   });
// });


























// ==============just try==============

// const rowPosters = document.querySelector('.row__posters');

// rowPosters.addEventListener('mouseenter', () => {
//   rowPosters.classList.add('scrolling');
// });

// rowPosters.addEventListener('mouseleave', () => {
//   rowPosters.classList.remove('scrolling');
// });

// rowPosters.addEventListener('wheel', (event) => {
//   if (rowPosters.classList.contains('scrolling')) {
//     event.preventDefault();
//     rowPosters.scrollLeft += 50;
//   }
// });


//===================================== for both direction------------------------------------------------------------------------------------------------

// const rowPosters = document.querySelector('.row__posters');
// let lastScrollTop = 0;

// rowPosters.addEventListener('mouseenter', () => {
//   rowPosters.classList.add('scrolling');
// });

// rowPosters.addEventListener('mouseleave', () => {
//   rowPosters.classList.remove('scrolling');
// });

// rowPosters.addEventListener('wheel', (event) => {
//   if (rowPosters.classList.contains('scrolling')) {
//     event.preventDefault();

//     // Determine scroll direction
//     const currentScrollTop = rowPosters.scrollTop;
//     const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
//     lastScrollTop = currentScrollTop;

//     // Scroll left for scroll up, scroll right for scroll down
//     rowPosters.scrollLeft += event.deltaY * (scrollDirection === 'down' ? 1 : -1);
//   }
// });





// for all the row 









// smooth 


// const rowPostersList = document.getElementsByClassName('row__posters');

// Array.from(rowPostersList).forEach(rowPosters => {
//   let isScrolling = false;
//   let scrollDirection = 0;

//   rowPosters.addEventListener('mouseenter', () => {
//     rowPosters.classList.add('scrolling');
//   });

//   rowPosters.addEventListener('mouseleave', () => {
//     rowPosters.classList.remove('scrolling');
//   });

//   rowPosters.addEventListener('wheel', (event) => {
//     if (rowPosters.classList.contains('scrolling')) {
//       event.preventDefault();

//       // Determine scroll direction
//       scrollDirection = event.deltaY > 0 ? 1 : -1;

//       if (!isScrolling) {
//         requestAnimationFrame(scrollContent);
//       }
//     }
//   });

//   function scrollContent() {
//     isScrolling = true;

//     // Calculate the amount to scroll
//     const scrollAmount = 0.2 * scrollDirection; // Adjust this value for smoother or faster scrolling

//     // Scroll left
//     rowPosters.scrollLeft += scrollAmount;

//     if (Math.abs(scrollAmount) > 1) {
//       requestAnimationFrame(scrollContent);
//     } else {
//       isScrolling = false;
//     }
//   }
// });

