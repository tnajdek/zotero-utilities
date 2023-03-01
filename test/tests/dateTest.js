const Utilities_Date = require('../../date');
const dateFormats = require('../../resource/dateFormats.json');

describe("Date object without global 'Zotero'", () => {
    let globalZotero;
    before(() => {
        globalZotero = globalThis.Zotero;
        delete globalThis.Zotero;
        Utilities_Date.init(dateFormats);
    });

    after(() => {
        globalThis.Zotero = globalZotero;
    });

    it('should parse date as mdy by default', () => {
        assert.equal(Utilities_Date.strToDate('04/10/21').month, 3);
        assert.equal(Utilities_Date.strToDate('04/10/21').day, 10);
        assert.equal(Utilities_Date.strToDate('04/10/21').year, 2021);
    });

    it('should parse date as dmy in UK', () => {
        globalThis.navigator = { language: 'en-GB' };
        assert.equal(Utilities_Date.strToDate('04/10/21').month, 9);
        assert.equal(Utilities_Date.strToDate('04/10/21').day, 4);
        assert.equal(Utilities_Date.strToDate('04/10/21').year, 2021);
    });

    it('should prefer Zotero.locale over globalThis.navigator', () => {
        Zotero = { locale: 'en-GB' };
        globalThis.navigator = { language: 'en-US' };
        assert.equal(Utilities_Date.strToDate('04/10/21').month, 9);
        assert.equal(Utilities_Date.strToDate('04/10/21').day, 4);
        assert.equal(Utilities_Date.strToDate('04/10/21').year, 2021);
    });
});