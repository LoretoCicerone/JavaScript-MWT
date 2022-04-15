export function setStyle(element, objProperties) {
    const keys = Object.keys(objProperties);
    keys.forEach(function(key) {
        element.style[key]=objProperties[key];
    });
}