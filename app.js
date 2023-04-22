const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Remove borders from all tabs
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

//Select tab content by item
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border
  this.classList.add("tab-border");
  //Grab item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.ContentItem.classList.add("show");
}
