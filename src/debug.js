if (typeof Zotero !== 'undefined') {
    module.exports = Zotero.debug;
} else if(console) {
    module.exports = console.log;
}
