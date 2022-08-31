import {test, expect} from '@playwright/test'

test('Text selector: кнопка Fish -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const fishButton = page.locator('text = Fish').nth(0)
    await expect(fishButton).toBeVisible()
})
test('Text selector: кнопка Dogs -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const dogsButton = page.locator('text = Dogs').nth(0)
    await expect(dogsButton).toBeVisible()
})
test('Text selector: кнопка Reptiles -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const reptilesButton = page.locator('text = Reptiles').nth(0)
    await expect(reptilesButton).toBeVisible()
})
test('Text selector: кнопка Cats -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const catsButton = page.locator('text = Cats').nth(0)
    await expect(catsButton).toBeVisible()
})
test('Text selector: кнопка Birds -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const birdsButton = page.locator('text = Birds').nth(0)
    await expect(birdsButton).toBeVisible()
})
test('CSS selector: панель навигации -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const navigationBar = page.locator('#QuickLinks')
    await expect(navigationBar).toBeVisible()
})
test('CSS selector: баннер -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const banner = page.locator('.grid-x').first()
    await expect(banner).toBeVisible()
})
test('Selector combinations: кнопка Login -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    const loginButton = page.locator('button', {hasText: 'Login'})
    await expect(loginButton).toBeVisible()
})
test('Selector combinations: форма авторизации -> отображается', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/account/signonForm')
    const loginButton = page.locator('#Signon >> .panel').first()
    await expect(loginButton).toBeVisible()
})
test('Selector combinations: меню в шапке -> отображается ', async({page}) =>{
    await page.goto('https://jpetstore.aspectran.com/catalog/')
    const loginButton = page.locator('#Header', {has: page.locator('#Menu')})
    await expect(loginButton).toBeVisible()
})
