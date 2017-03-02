# Copy Markdown-Link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Markdown-Link bookmarklet](javascript:%28function%28%29%7Bif%20%28window.getSelection%28%29.anchorNode%20!%3D%20null%29%20%7Bvar%20elem%20%3D%20window.getSelection%28%29.anchorNode.parentElement%3Bif%20%28elem.tagName%20!%3D%20%22A%22%29%20elem%20%3D%20elem.getElementsByTagName%28'a'%29%5B0%5D%3Bif%20%28elem%20!%3D%20null%29%20%7Bvar%20textArea%20%3D%20document.createElement%28%22textarea%22%29%3BtextArea.value%20%3D%20%22%5B%22%20%2B%20elem.innerHTML%20%2B%20%22%5D%28%22%20%2B%20elem.href%20%2B%20%22%29%22%3Bdocument.body.appendChild%28textArea%29%3BtextArea.select%28%29%3Bdocument.execCommand%28%22copy%22%29%3Bconsole.log%28%22Markdown%20link%20%22%20%2B%20textArea.value%20%2B%20%22%20copied%20to%20your%20clipboard!%22%29%3BtextArea.remove%28%29%3Bvar%20range%20%3D%20document.createRange%28%29%3Brange.selectNode%28elem%29%3Bwindow.getSelection%28%29.removeAllRanges%28%29%3Bwindow.getSelection%28%29.addRange%28range%29%3B%7D%20else%20console.log%28%22No%20hyperlink%20selected.%22%29%3B%7D%20else%20console.log%28%22Nothing%20selected!%22%29%7D%29%28%29)

See [github.com/lowply/copy-zendesk-link-bookmarklet](https://github.com/lowply/copy-zendesk-link-bookmarklet) for more information.
