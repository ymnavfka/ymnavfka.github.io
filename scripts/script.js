var currentNavItem;
var pages;

const pagesTypes = {
  MAIN: 0,
  ABOUTME: 1,
  CONTACTS: 2,
  PROJECTS: 3,
};
var currentPageType

var onLoad = function () {
  // Current (selected) menu item ('Main' by default)
  currentNavItem = document.getElementById("navItemMain");

  // Changing text decoration 
  currentNavItem.style.textDecoration = "underline";

  // Array of site's pages
  pages = document.getElementsByClassName("page");

  for (let i = 1; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  //Current (visible) page ('Main' by default)
  currentPageType = pagesTypes.MAIN;
};

var chagePage = function (obj) {
  // Changing text decoration of menu items.
  currentNavItem.style.textDecoration = "none";
  obj.style.textDecoration = "underline";
  currentNavItem = obj;

  switch (obj.id) {
    case "navItemMain":
        pages[currentPageType].style.display = "none";
        pages[pagesTypes.MAIN].style.display = "flex";
        currentPageType = pagesTypes.MAIN;
      break;
    case "navItemAbout":
        pages[currentPageType].style.display = "none";
        pages[pagesTypes.ABOUTME].style.display = "flex";
        currentPageType = pagesTypes.ABOUTME;
      break;
    case "navItemContacts":
        pages[currentPageType].style.display = "none";
        pages[pagesTypes.CONTACTS].style.display = "flex";
        currentPageType = pagesTypes.CONTACTS;
      break;
    case "navItemProjects":
        pages[currentPageType].style.display = "none";
        pages[pagesTypes.PROJECTS].style.display = "flex";
        currentPageType = pagesTypes.PROJECTS;
      break;
  }
};
