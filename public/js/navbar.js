
    // setTimeout(() => {
    //     const bgModal = document.querySelector('.bg-modal');
    //     let isShowed = bgModal.classList.contains('collapse') && bgModal.classList.contains('show');
    //     bgModal.classList.toggle('collapse');
    //     isShowed ? bgModal.classList.toggle('show') : null;
    //     bgModal.classList.toggle('disappearing');
            
    //     setTimeout(() => {
    //         bgModal.classList.toggle('disappearing');
    //         bgModal.classList.toggle('collapse');
    //         !isShowed ? bgModal.classList.toggle('show') : null;
    //     }, 500);
    // }, 1000);

    // setTimeout(() => {
    //     const bgModal = document.querySelector('.bg-modal');
    //     let isShowed = bgModal.classList.contains('collapse') && bgModal.classList.contains('show');
    //     bgModal.classList.toggle('collapse');
    //     isShowed ? bgModal.classList.toggle('show') : null;
    //     bgModal.classList.toggle('disappearing');
            
    //     setTimeout(() => {
    //         bgModal.classList.toggle('disappearing');
    //         bgModal.classList.toggle('collapse');
    //         !isShowed ? bgModal.classList.toggle('show') : null;
    //     }, 500);
    // }, 5000);


    const navbarDropdownLinks = document.querySelectorAll('#navbar-menu .dropdown .nav-link');
    const navbarDropdownMenuContainers = document.querySelectorAll('#navbar-menu .dropdown .dropdown-menu-container');
    let navbarDropdownLinkDelay = 0;
    let navbarDropdownLinkFocusThreshold = 0;

    function hideAllOtherDropdownMenu(clicked_dropdownlink) {
        navbarDropdownLinks.forEach((ndl) => {
            if (clicked_dropdownlink == ndl) return;
            let ndc = ndl.nextElementSibling;
            let ld = ndl.parentElement;
            if (ld.classList.contains('show')){ 
                ld.classList.remove('show');
                ndc.classList.add('d-none');
            }
        })
    } 
    navbarDropdownLinks.forEach((navbarDropdownLink) => {
        // Dropdown Menu Event (Showing) on Mobile
        navbarDropdownLink.addEventListener('click', function(e){
            e.preventDefault();
            if (window.matchMedia("(min-width: 992px)").matches) return;

            hideAllOtherDropdownMenu(navbarDropdownLink);
            
            let dropdownMenuContainer = this.nextElementSibling;
            let liDropdown = this.parentElement;
            navbarDropdownLinkDelay += 500; // This value is set according to the transition time of the navbar dropdown menu
            dropdownMenuContainer.classList.remove('d-none');
            setTimeout(() => {
                liDropdown.classList.toggle('show');
            }, 1);
            setTimeout(() => {
                navbarDropdownLinkDelay = Math.max(navbarDropdownLinkDelay - 500, 0);
                !liDropdown.classList.contains('show') ? (navbarDropdownLinkDelay == 0 ? dropdownMenuContainer.classList.add('d-none') : null) : null;
            }, 500);
        });

        // Dropdown Menu Event (Showing) on Desktop
        navbarDropdownLink.addEventListener('mouseenter', function(){
            if (!window.matchMedia("(min-width: 992px)").matches) return;

            hideAllOtherDropdownMenu(navbarDropdownLink);
            
            let dropdownMenuContainer = this.nextElementSibling;
            let liDropdown = this.parentElement;
            navbarDropdownLinkDelay += 500; // This value is set according to the transition time of the navbar dropdown menu
            navbarDropdownLinkFocusThreshold += 300;
            dropdownMenuContainer.classList.remove('d-none');
            setTimeout(() => {
                liDropdown.classList.add('show');
            }, 1);
            setTimeout(() => {
                navbarDropdownLinkDelay = Math.max(navbarDropdownLinkDelay - 500, 0);
                !liDropdown.classList.contains('show') ? (navbarDropdownLinkDelay == 0 ? dropdownMenuContainer.classList.add('d-none') : null) : null;
            }, 500);
        });
        navbarDropdownLink.addEventListener('mouseleave', function(){
            if (!window.matchMedia("(min-width: 992px)").matches) return;


            setTimeout(() => {
                navbarDropdownLinkFocusThreshold = Math.max(navbarDropdownLinkFocusThreshold - 300, 0);
                if (navbarDropdownLinkFocusThreshold != 0) return; 

                hideAllOtherDropdownMenu(navbarDropdownLink);
                
                let dropdownMenuContainer = this.nextElementSibling;
                let liDropdown = this.parentElement;
                navbarDropdownLinkDelay += 500; // This value is set according to the transition time of the navbar dropdown menu
                dropdownMenuContainer.classList.remove('d-none');
                setTimeout(() => {
                    liDropdown.classList.remove('show');
                }, 1);
                setTimeout(() => {
                    navbarDropdownLinkDelay = Math.max(navbarDropdownLinkDelay - 500, 0);
                    !liDropdown.classList.contains('show') ? (navbarDropdownLinkDelay == 0 ? dropdownMenuContainer.classList.add('d-none') : null) : null;
                }, 500);
            }, 300);
        });
        navbarDropdownLink.nextElementSibling.addEventListener('mouseenter', function(){
            if (!window.matchMedia("(min-width: 992px)").matches) return;

            navbarDropdownLinkFocusThreshold += 300;
        });
        navbarDropdownLink.nextElementSibling.addEventListener('mouseleave', function(){
            if (!window.matchMedia("(min-width: 992px)").matches) return;


            setTimeout(() => {
                navbarDropdownLinkFocusThreshold = Math.max(navbarDropdownLinkFocusThreshold - 300, 0);
                if (navbarDropdownLinkFocusThreshold != 0) return; 

                hideAllOtherDropdownMenu(navbarDropdownLink);
                
                let dropdownMenuContainer = this;
                let liDropdown = this.parentElement;
                navbarDropdownLinkDelay += 500; // This value is set according to the transition time of the navbar dropdown menu
                dropdownMenuContainer.classList.remove('d-none');
                setTimeout(() => {
                    liDropdown.classList.remove('show');
                }, 1);
                setTimeout(() => {
                    navbarDropdownLinkDelay = Math.max(navbarDropdownLinkDelay - 500, 0);
                    !liDropdown.classList.contains('show') ? (navbarDropdownLinkDelay == 0 ? dropdownMenuContainer.classList.add('d-none') : null) : null;
                }, 500);
            }, 300);    
        });
    });

    const navbarToggler = document.querySelector('.navbar .navbar-toggler');
    navbarToggler.addEventListener('click', function(){
        this.classList.toggle('show');
    });

    // setTimeout(() => {
    //     const bgModal = document.querySelector('.dropdown-menu-container');
    //     bgModal.classList.toggle('d-none');        
    //     setTimeout(() => {
    //         bgModal.classList.toggle('show');
    //     }, 1);
    // }, 1000);
    // setTimeout(() => {
    //     const bgModal = document.querySelector('.dropdown-menu-container');
    //     bgModal.classList.toggle('show');
    //     setTimeout(() => {
    //         bgModal.classList.toggle('d-none');        
    //     }, 500);
    // }, 3000);