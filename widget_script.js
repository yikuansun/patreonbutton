var hLink = document.querySelector("a");
var username = (new URLSearchParams(location.search)).get("username");
if (!username) document.body.innerHTML = "Error: no username param";

hLink.href = `https://www.patreon.com/${username}`;