import Dashboard from "../views/Dashboard.js";


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: Dashboard}, 
        //{ path: '/posts', view: () => console.log('viewing posts') },
        //{ path: '/settings', view: () => console.log('viewing settings') }
    ];

    //test each route for potential matches

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMath: location.pathname === route.path
        };
   });

   let match = potentialMatches.find(potentialMatch => potentialMatch.isMath);

   if (!match) {
       match = {
           route: routes[0],
           isMath: true
       }
   }

   const view = new match.route.view();

   document.querySelector("#app").innerHTML = await view.getHtml();

   console.log(match.route.view);
};

//prev window in browser
window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
