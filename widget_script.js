var hLink = document.querySelector("a");
var uname = (new URLSearchParams(location.search)).get("uname");
if (!uname) document.body.innerHTML = "Error: no uname param";

hLink.href = `https://www.patreon.com/join/${uname}?`;