const { test, expect } = require('@playwright/test');

 const nombre= ["SoniaName"];
 const correo_parte1 = ["sonia+prueba"];
 const correo_parte2=["@chilliapps.com"]; 
 const last_name = ["Morones"];
 const calle = ["Av.Siempre viva"];
 //var codigo_postal = 40000;
 var contador = 4;


test('Generar popus', async({page}) =>{
  for (var a = 0; a<=10; a++) {
  contador= contador + 1;
 
  var nombre_final = nombre+contador;
  var ape_pat_final = last_name+contador;
  var correo_final = correo_parte1+contador+correo_parte2;
  var calle_final = calle+contador;
 // var codigo_Postal_final = codigo_postal+contador;

  
  
 //test.setTimeout(120000001);
 await page.goto('https://hardtek.myshopify.com/');
 test.setTimeout(120000001);
 await page.locator('text=Search Cart 0 >> [placeholder="Search all products\\.\\.\\."]').click();
 await page.locator('text=Search Cart 0 >> [placeholder="Search all products\\.\\.\\."]').fill('microphone');
  
  await page.locator('header[role="banner"] button:has-text("Search")').click();
  await page.locator('img[alt="Tripod Microphone metalic"]').click();
  await page.locator('button:has-text("Add to Cart")').nth(1).click();

 
 // await page.locator('a:has-text("Add to cart")').click();
  test.setTimeout(120000002); 

  
  await page.locator('text=PAGAR').first().click();
 // await page.locator('text=PAGAR').first().click();
  test.setTimeout(120000003); 
 
  await page.locator('[placeholder="Email or mobile phone number"]').fill(correo_final);
  await page.locator('text=Email me with news and offers We’ll send you an order receipt and recurring ship >> input[type="checkbox"]').check();
  await page.locator('[placeholder="First name \\(optional\\)"]').fill(nombre_final);
  await page.locator('[placeholder="Last name"]').fill(ape_pat_final);
  await page.locator('[placeholder="Street and house number"]').fill(calle_final);
  await page.locator('[placeholder="Postal code"]').fill('40000');
  await page.locator('[placeholder="City"]').fill('Zapopan');

  // Select JAL
  await page.locator('select[name="checkout\\[shipping_address\\]\\[province\\]"]').selectOption('JAL');

  // Click button:has-text("Continue to shipping")
  await page.locator('button:has-text("Continue to shipping")').click();
 

  // Click button:has-text("Continue to payment")
  await page.locator('button:has-text("Continue to payment")').click();
 

  // Check #checkout_payment_gateway_66737995887
  await page.locator('#checkout_payment_gateway_66737995887').check();
  test.setTimeout(810000);
  // Click button:has-text("Complete order") >> nth=0
  await page.locator('button:has-text("Complete order")').first().click();
  test.setTimeout(120000004);

  console.log ("==>> Operación finalizada, número: "+ a +" , con correo: ",correo_final)

  await expect.soft(page.locator('body > div.content > div > div > main > div.step > div.step__sections > div:nth-child(2) > div > div:nth-child(1) > div.content-box__row.text-container > h2'))
                     .toHaveText('Your order is confirmed');
  

}
});