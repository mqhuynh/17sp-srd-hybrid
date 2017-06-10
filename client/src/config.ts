/**
 * The custom configuration file. Feel free to experiment with these variables
 *
 * Note: All images MUST be inside assets/ directory. After doing that, place only the file name in fields below.
 */
const C = {
  'server_url': "http://student-services.srdapp.com/api.php", // The URL of the server. Don't forget the /api.php on the end
  "header": {
    "text": "Southeastern Louisiana University"
  },
  "footer": {
    "text": "© CDCS 2016",
    "image": "" //file name
  },
  "search_page":{
    "background_image": "bgA.png", //file name
  },

  "colors":{
    "color_accent": "", // this is like text_light but just a bit darker
    "page_theme": "#1c7543", // the main theme color
    "text_light": "#eeeeee", // light text color. potentially white
    "text_dark": "#222", // dark text color. potentially black

    "link_text": "#009245", // link colors
    "link_text_visited": "#005e2c", // color for links that the user has already visited

    // page specific colors
    "search_page": {
      "big_box_background": "#47d147"
    }
  }
};

export default C;
