document.querySelector("#button_code").innerHTML = "" + document.querySelector("#button_code").innerHTML.replace(/ +(?= )/g, "");
document.querySelector("#toCopy").value = document.querySelector("#button_code").innerHTML;

document.querySelector("#username").addEventListener("input", function() {
    document.querySelector("#button_code a").href = `https://www.patreon.com/join/${this.value}?`;
    document.querySelector("#toCopy").value = document.querySelector("#button_code").innerHTML;
});