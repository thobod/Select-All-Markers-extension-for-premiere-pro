const csInterface = new CSInterface();

document.getElementById("selectMarkersBtn").addEventListener("click", () => {
    csInterface.evalScript('selectAllMarkersInSelectedClip(4)', result => {
        console.log(result);
    });
});