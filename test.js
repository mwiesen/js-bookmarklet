document.getElementById("clickMe").onclick = function() {
    if (window.getSelection().anchorNode != null) {
        var elem = window.getSelection().anchorNode.parentElement;

        if (elem.tagName != "A") elem = elem.getElementsByTagName('a')[0];

        if (elem != null) {
            var textArea = document.createElement("textarea");
            textArea.value = "[" + elem.innerHTML + "](" + elem.href + ")";
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            console.log("Markdown link " + textArea.value + " copied to your clipboard!");
            textArea.remove();

            var range = document.createRange();
            range.selectNode(elem);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        } else console.log("No hyperlink selected.");

    } else console.log("Nothing selected!");
}
