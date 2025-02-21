function debug() {
    const text = document.getElementById('text');
    const steps = parseInt(document.getElementById('steps').value, 10);
    const output = document.getElementById('output');

    const PROHIBITION_SYMBOLS = ["<", ">", "/", "script", "alert", "prompt", "confirm", "console", "log", "debugger", "eval", "function", "window", "document", "location", "history", "localStorage", "sessionStorage", "cookie", "fetch", "XMLHttpRequest", "setTimeout", "setInterval", "clearTimeout", "clearInterval", "addEventListener", "removeEventListener", "onload", "onunload", "onbeforeunload", "onerror", "onabort", "onresize", "onscroll", "onfocus", "onblur", "onchange", "onsubmit", "onreset", "onselect", "oninput", "onkeydown", "onkeypress", "onkeyup", "onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "onmouseenter", "onmouseleave", "oncontextmenu", "onwheel", "ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel", "onpointerover", "onpointerenter", "onpointerdown", "onpointermove", "onpointerup", "onpointercancel", "onpointerout", "onpointerleave", "onpointerlockchange", "onpointerlockerror", "onfullscreenchange", "onfullscreenerror", "onreadystatechange", "onloadstart", "onprogress", "onabort", "onerror", "onload", "onloadend", "oncanplay", "oncanplaythrough", "onplay", "onplaying", "onpause", "onended", "onvolumechange", "onratechange", "onseeked", "onseeking", "onstalled", "onsuspend", "ontimeupdate", "onwaiting", "onmessage", "onopen", "onerror", "onclose"];

    if (text.value.length === 0) {
        output.innerHTML = 'Please enter a text.';
        return;
    } else if (steps < 1) {
        output.innerHTML = 'Minimum steps is 1.';
        return;
    } else if (steps > 100) {
        output.innerHTML = 'Maximum steps is 100.';
        return;
    } else if (PROHIBITION_SYMBOLS.some(symbol => text.value.includes(symbol))) {
        output.innerHTML = `You can't create a html element.`;
        return;
    } else {
        output.innerHTML = 'Starting debug...\n';
        debugger;
        for (let i = 0; i < steps; i++) {
            output.innerHTML += `Step ${i + 1}: ${text.value}\n`;
            debugger;
        }
        output.innerHTML += 'Debug complete.\n';
    }
}