function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  //Tabs START
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = tabsParent.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add();
  }

  hideTabsContent();
  showTabsContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.matches(tabsSelector.slice(1))) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
}

// module.exports = tabs;
export default tabs;
