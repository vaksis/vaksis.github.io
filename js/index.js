function taikanappi() {
    var code = prompt('Insert the 6-digit code:');
    if (code > 100 && code < 400000){
        open("https://nhentai.net/g/" + code,);
    } else {
        location.reload(true);
    }
};
function adbutton() {
    open("./ads/" + (Math.floor(Math.random() * 32)) + ".webp");
};