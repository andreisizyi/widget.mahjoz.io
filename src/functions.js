export { get_parameters, add_button, add_onlick_event }

function get_parameters() {
    var scripts = document.getElementsByTagName('script');
    var myScript;
    for (var i = 0; i < scripts.length; i++) {
        var url = new URL(scripts[i].src);
        var params = new URLSearchParams(url.search);

        if (params.has('button_text')) {
            myScript = scripts[i];
            break;
        }
    }

    if (myScript) {
        var scriptSrc = myScript.src;

        var url = new URL(scriptSrc);

        var params = new URLSearchParams(url.search);

        var urlParam = params.get('url'); // "https://albaher.mahjoz.net"
        var buttonText = params.get('button_text'); // "BookMe"
        var buttonTextColor = params.get('button_text_color'); // "fff"
        var buttonBackgroundColor = params.get('button_backgroud_color');
        var embed_type = params.get('embed_type');
        var embeded = params.get('embeded');

        buttonTextColor = decodeURIComponent(buttonTextColor); // "#ffff"
        buttonBackgroundColor = decodeURIComponent(buttonBackgroundColor); // "#0000"
    }

    return {
        'url': urlParam,
        'button_text': buttonText,
        'button_text_color': buttonTextColor,
        'button_backgroud_color': buttonBackgroundColor,
        'embed_type' : embed_type,
        'embeded' : embeded
    }
}

function add_button(buttonText, buttonTextColor, buttonBackgroundColor) {
    var newDiv = document.createElement("div");
    newDiv.className = "mahjoz-badge-content";
    newDiv.style.backgroundColor = '#' + buttonBackgroundColor;
    newDiv.style.color = '#' + buttonTextColor;
    newDiv.textContent = buttonText;

    document.body.appendChild(newDiv);

    return newDiv;
}

function add_onlick_event(button, params) {
    button.addEventListener('click', event => {
        document.body.style.overflow = 'hidden';

        var overlay = document.createElement('div');
        var closeOverlay = document.createElement('div');
        var popup = document.createElement('div');
        var popupContent = document.createElement('div');
        var spinner = document.createElement('div');
        var bounce1 = document.createElement('div');
        var bounce2 = document.createElement('div');
        var bounce3 = document.createElement('div');
        var iframe = document.createElement('iframe');
        var popupClose = document.createElement('div');

        overlay.className = "mahjoz-overlay";
        closeOverlay.className = "mahjoz-close-overlay";
        popup.className = "mahjoz-popup";
        popupContent.className = "mahjoz-popup-content";
        popupContent.dataset.url = params.url;
        spinner.className = "mahjoz-spinner";
        bounce1.className = "mahjoz-bounce1";
        bounce2.className = "mahjoz-bounce2";
        bounce3.className = "mahjoz-bounce3";
        iframe.src = `${params.url}/?embeded=${params.embeded ?? 1}`;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        popupClose.className = "mahjoz-popup-close";
        popupClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>';

        spinner.appendChild(bounce1);
        spinner.appendChild(bounce2);
        spinner.appendChild(bounce3);
        popupContent.appendChild(spinner);
        popupContent.appendChild(iframe);
        popup.appendChild(popupContent);
        overlay.appendChild(closeOverlay);
        overlay.appendChild(popup);
        overlay.appendChild(popupClose);

        document.body.appendChild(overlay);

        // Add close action
        var removeOverlay = function() {
            overlay.remove();
            document.body.style.overflow = '';
        };
        popupClose.addEventListener('click', removeOverlay);
        closeOverlay.addEventListener('click', removeOverlay);
    });
}