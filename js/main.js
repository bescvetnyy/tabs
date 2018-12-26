var	tabsNavArea = document.querySelector('.tabs-nav'),
	tabsSortArea = document.querySelector('.tabs-sort');

var	tabsNavList = document.querySelectorAll('.tabs-nav__item'),
	tabsSortList = document.querySelectorAll('.tabs-sort__item'),
	contList = document.querySelectorAll('.cont__item');

var	videoSort = document.querySelector('.cont-video'),
	reviewSort = document.querySelector('.cont-review');

var	vSortItem = videoSort.querySelectorAll('.sort-by__item'),
	rSortItem = reviewSort.querySelectorAll('.sort-by__item');

for (var i = 0; i < tabsNavList.length; i++) {
	tabsNavList[i].addEventListener('click', function() {
		for (var i = 0; i < tabsNavList.length; i++) {
			tabsNavList[i].classList.remove('active');
		}
		for (var i = 0; i < tabsSortList.length; i++) {
			tabsSortList[i].classList.remove('active');
		}

		for (var i = 0; i < contList.length; i++) {
			contList[i].classList.remove('active');
		}

		this.classList.add('active');

		var	currentTab = this.getAttribute('data-tab'),
			currentTabList = document.querySelectorAll('.' + currentTab);

		for (var i = 0; i < currentTabList.length; i++) {
			currentTabList[i].classList.add('active');
		}

		if (reviewSort.classList.contains('active')) {
			for (var i = 0; i < rSortItem.length; i++) {
				rSortItem[i].addEventListener('click', function() {
					for (var i = 0; i < rSortItem.length; i++) {
						rSortItem[i].classList.remove('active');
					}
					this.classList.add('active');
				});
			}
		}
	});
}

if (videoSort.classList.contains('active')) {
	for (var i = 0; i < vSortItem.length; i++) {
		vSortItem[i].addEventListener('click', function() {
			for (var i = 0; i < vSortItem.length; i++) {
				vSortItem[i].classList.remove('active');
			}
			this.classList.add('active');
		});
	}
}