const puppeteer = require('puppeteer');
const fs=require("fs/promises")
 const start=async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com/search?q=jobs+near+me&ibp=htl;jobs&sa=X&ved=2ahUKEwj8iOnf4ZP4AhW3aGwGHbR6A1QQutcGKAF6BAgEEAY&sxsrf=ALiCzsa3r5oYRNHpRlEZKZw3GTyaEg8kJg:1654344562399#htivrt=jobs&htidocid=m9Ba-Z3N0lMAAAAAAAAAAA%3D%3D&fpstate=tldetail")
  
  let data = await page.evaluate(() => {
    let get_job = []
    let items = document.querySelectorAll('.h2Zk0d')
    
    items.forEach((item) => {
        get_job.push({
           
            title: item.querySelector('.BjJfJf').textContent,
            company:item.querySelector(".vNEEBe").textContent,
            location:item.querySelector(".Qk80Jf").textContent,
           
        })
    })
    return get_job
})
await browser.close()
 return data
 
};
module.exports=start