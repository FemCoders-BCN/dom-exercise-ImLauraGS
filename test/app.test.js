import {describe, expect, it, beforeAll} from 'vitest'
import {JSOM} from 'jsdom'

describe('APP', ()=>{
    let dom;
    beforeAll(async () =>{
        dom = await JSDOM.fromFile("index.html", {
            resources: "usable",
            runScripts: "dangerously",
        });
    });
    it('should render css')
})