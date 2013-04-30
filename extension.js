const Main = imports.ui.main;

function init() {
}

function disableAllHotCorners() {
    Main.layoutManager.hotCorners.forEach(function(hotCorner) {
        hotCorner.destroy();
    });
    Main.layoutManager.hotCorners = [];
}

let signalId
function enable() { 
    disableAllHotCorners();
    signalId = Main.layoutManager.connect('hot-corners-changed', disableAllHotCorners);
} 

function disable() {
    Main.layoutManager.disconnect(signalId);
    Main.layoutManager._updateHotCorners();
}

