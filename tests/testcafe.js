import { Selector } from 'testcafe';

fixture('Getting started').page('http://localhost:4200');

test('sample test', async(t) => {
    const appName = Selector('.container .row > h3');
    await t.expect(appName.innerText).eql('Angular Notepad')
});
