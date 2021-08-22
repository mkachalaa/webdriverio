describe('my test', () => {
    it('can use Puppeteer as automation fallback',  async () => {
        await browser.url('/')
        let input = $('.form-control')
        input.addValue('alt.h3-bocmb15h@yopmail.com')
        await browser.pause(10000)
        let inputPassword = $('[type="password"]')
        await browser.pause(1000)
        inputPassword.addValue('123123')
        await browser.pause(1000)
        const pictureBox = await $('rc-anchor-container')
        pictureBox.click()
        await browser.pause(1000)
        let buttonSing = await $('.btn btn-primary w-100')
        buttonSing.click()
        await browser.pause(50000)

        let buttonReg = await $('.btn btn-sm btn-link').click()
        
    })
    
    // it('test', async function () {
    //     await browser.url('/')
        
    //     const arrOfElement = await $$('')
              
    //     }

    // })btn btn-sm btn-link

}) 


