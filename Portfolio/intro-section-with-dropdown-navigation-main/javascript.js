
(function navigationHandler() {

    const navigation = document.querySelector('.nav')
    const closeButton = navigation.querySelector('.nav-close-button')
    const dropdownLists = navigation.querySelectorAll('.nav-list-item-dropdown')
    const openButton = document.querySelector('.nav-open-button')
    let isNavigationOpen = false;

    window.addEventListener('resize', () => {
        

        if(isNavigationOpen) {
            const filter = document.querySelector('.filter')
            filter.style.width = (document.body.scrollWidth - navigation.scrollWidth) + 'px'
            filter.style.height = window.innerHeight + 'px'
            navigation.style.height = window.innerHeight + 'px'
        }


    })

    openButton.addEventListener('click', () => {
        isNavigationOpen = true;
        navigation.style.height = document.body.scrollHeight + 'px'
        navigation.style.display = 'flex'
        navigation.style.height = window.innerHeight + 'px'
        const filter = document.createElement('div')
        filter.classList.add('filter');
        filter.style.height = window.innerHeight + 'px'
        filter.style.width = (document.body.scrollWidth - navigation.scrollWidth) + 'px'
        document.body.appendChild(filter)
    })

    closeButton.addEventListener('click', () => {
        isNavigationOpen = false;
        navigation.style.display = 'none'
        document.querySelector('.filter').remove()
    })


    for(list of dropdownLists) {
        const toggleButton = list.querySelector('.nav-dropdown-button')
        const dropdownList = list.querySelector('.nav-dropdown-list')
        const dropdownIcon = list.querySelector('.nav-dropdown-icon')

        toggleButton.addEventListener('click', () => {
            if(dropdownList.style.display === '') {
                iconCollapsible(dropdownIcon)
                dropdownList.style.display = 'block';
            } else {
                iconExpandible(dropdownIcon)
                dropdownList.style.display = '';
            }
        })
    }


    function iconCollapsible(svgElement) {
        svgElement.innerHTML = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>'
    }

    function iconExpandible(svgElement) {
        svgElement.innerHTML = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>'
    }


})()