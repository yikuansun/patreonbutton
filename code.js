document.querySelector("#button_code").innerHTML = "" + document.querySelector("#button_code").innerHTML.replace(/ +(?= )/g, "");
document.querySelector("#toCopy").value = document.querySelector("#button_code").innerHTML;

document.querySelector("#username").addEventListener("input", function() {
    document.querySelector("#button_code iframe").src = `https://ulf-frostypaw.github.io/patreon-button-widget/widget.html?uname=${this.value}`;
    document.querySelector("#toCopy").value = document.querySelector("#button_code").innerHTML;
});

document.querySelector("#copybutton").addEventListener("click", function() {
    navigator.clipboard.writeText(document.querySelector("#toCopy").value);
    document.querySelector("#toCopy").select();
    this.innerText = "Copied";
    this.style.color = "grey";
    this.style.textDecoration = "none";
    this.style.cursor = "default";
    setTimeout(function() {
        this.innerText = "Copy to clipboard";
        this.style.color = "";
        this.style.textDecoration = "";
    this.style.cursor = "";
    }.bind(this), 1650);
});