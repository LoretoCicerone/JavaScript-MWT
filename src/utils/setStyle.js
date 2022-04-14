export function setStyle(element, objProperties) {
    const keys = Object.keys(objProperties);
    keys.forEach(function(key){
        element.setStyle[key]=objProperties[key];
    });
}