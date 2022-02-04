window.addEventListener('load', (event) => {

    document.getElementById("inputText").addEventListener("change", event =>{
        const color = event.target.value;
        document.getElementById("headingText").innerHTML = color;

        //Send color to web page in tab.
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, color);
        });
    });

});