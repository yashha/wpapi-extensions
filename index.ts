import WPApi from "wpapi";

/* Wuxt extension */
/* Initialy created by Daniel Auener https://github.com/northosts/wuxt */
/* Wordpress extension: https://github.com/northosts/wuxt/tree/master/wp-content/mu-plugins/wuxt-headless-wp-api-extensions */
function checkWpApi(wp: WPApi) {
  if (!wp && typeof wp.registerRoute !== "function") {
    console.log("Please provide a wpapi instance.");
  }
}
function registerCpt(wp: WPApi) {
  checkWpApi(wp);
  wp.cpt = postType => {
    wp[postType] = wp.registerRoute("wp/v2", "/" + postType + "/(?P<id>)", {
      params: ["embed", "before", "after", "author", "parent", "post"]
    });
    return wp[postType]();
  };
}
function registerFrontPage(wp: WPApi) {
  checkWpApi(wp);
  wp.frontPage = wp.registerRoute("wuxt/v1", "/front-page", {
    params: ["embed"]
  });
}
function registerMenu(wp: WPApi) {
  checkWpApi(wp);
  wp.menu = wp.registerRoute("wuxt/v1", "/menu", {
    params: ["location"]
  });
}
function registerSlug(wp: WPApi) {
  checkWpApi(wp);
  wp.slug = wp.registerRoute("wuxt/v1", "/slug/(?P<name>)", {
    params: ["embed"]
  });
}

function registerWuxt(wp: WPApi) {
  checkWpApi(wp);
  registerFrontPage(wp);
  registerMenu(wp);
  registerSlug(wp);
  registerCpt(wp);
}

export {
  registerWuxt,
  registerCpt,
  registerFrontPage,
  registerSlug,
  registerMenu
};
