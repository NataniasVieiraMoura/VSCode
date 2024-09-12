/*O exemplo abaixo e outros estão incluídos no examplediretório. Você também pode achar informativos os testes para selenium-webdriver.*/


const {Builder, Browser, By, Key, until} = requer('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();

/*
A Builderclasse é o seu balcão único para configurar novas instâncias do WebDriver. Em vez de sobrecarregar seu código com ramificações para vários navegadores, o construtor permite definir todas as opções em um fluxo. Quando você chama Builder#build(), todas as opções irrelevantes para o navegador selecionado são descartadas:
*/

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.FIREFOX)
    .setChromeOptions(/* ... */)
    .setFirefoxOptions(/* ... */)
    .build();

/*Por que você deseja configurar opções irrelevantes para o navegador de destino? A BuilderAPI do define sua configuração padrão . Você pode alterar o navegador de destino em tempo de execução por meio da SELENIUM_BROWSERvariável de ambiente. Por exemplo, o example/google_search.jsscript está configurado para ser executado no Firefox. Você pode executar o exemplo em outros navegadores apenas alterando o ambiente de execução

 # cd node_modules/selenium-webdriver
node example/google_search
SELENIUM_BROWSER=chrome node example/google_search
SELENIUM_BROWSER=safari node example/google_search

*/


/*O servidor Selenium autônomo
O Selenium Server autônomo atua como um proxy entre o seu script e os drivers específicos do navegador. O servidor pode ser usado durante a execução local, mas não é recomendado, pois introduz um salto extra para cada solicitação e torna as coisas mais lentas. O servidor é necessário, entretanto, para usar um navegador em um host remoto (a maioria dos drivers de navegador, como o IEDriverServer, não aceita conexões remotas).

Para usar o Selenium Server, você precisará instalar o JDK e baixar o servidor mais recente do Selenium . Depois de baixado, execute o servidor com

java -jar selenium-server-4.4.0.jar standalone

Você pode configurar seus testes para serem executados em um servidor remoto por meio da API do Builder: 
*/
let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.FIREFOX)
    .usingServer('http://localhost:4444/wd/hub')
    .build();


/*Ou altere a configuração do Builder em tempo de execução com a SELENIUM_REMOTE_URL variável de ambiente:
*/
SELENIUM_REMOTE_URL="http://localhost:4444/wd/hub" node script.js
/*
Você pode experimentar essas opções usando o example/google_search.js script fornecido com o selenium-webdriver.
*/
//Para startar  a sessão:

WebDriver driver = new ChromeDriver();//js
driver = webdriver.Chrome()//python

//Para fazer ações no Browser:

driver.get("https://www.selenium.dev/selenium/web/web-form.html");//js
driver.get("https://www.selenium.dev/selenium/web/web-form.html")//python

/*Solicitar informações do navegador
There are a bunch of types of information about the browser you can request, including window handles, browser size / position, cookies, alerts, etc.*/

driver.getTitle();//js
title = driver.title//python

/*
Estabelecer uma Estratégia de Espera

Sincronizar o código com o estado atual do navegador é um dos maiores desafios com o Selenium, e fazer isso corretamente é um tópico avançado.

Essencialmente, você deseja garantir que o elemento esteja na página antes de tentar localizá-lo e que o elemento esteja em um estado interativo antes de tentar interagir com ele.

Uma espera implícita raramente é a melhor solução, mas é a mais fácil de demonstrar aqui, então a usaremos como um marcador de posição.

Se precisar de mais ajuda ou tiver outras perguntas, estou à disposição
*/

drive.manage().timeouts().inplicitlyWait(Duration.ofMillis(500));//js
drive.inplicitly_wait(0.5)//python

/*
Localizar um elemento

A maioria dos comandos em sessões do Selenium está relacionada a elementos, e você não pode interagir com um elemento sem primeiro localizá-lo1.
*/

//Para js
        WebElement textBox = driver.findElement(By.name("my-text"));
        WebElement submitButton = driver.findElement(By.cssSelector("button"));

//Para python
    text_box = driver.find_element(by=By.NAME, value="my-text")
    submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")


/*Tomar ação em um elemento
Existem apenas algumas ações que você pode executar em um elemento, mas você as utilizará com frequência. */
/*Para js 
textBox.sendKeys("Selenium");
submitButton.click();
*/
/*Para python 
text_box.text_keys("Selenium")
submit_button.click()
*/

/* Solicitar informações do elemento
Os elementos armazenam muitas informações que podem ser solicitadas1.*/
/*Para Js
message.getTexto();
 */
/*Para python
text = message.text
 */

/*Para fechar o navegador*/
/*Para JS
diver.quit();
*/
/*Para Pyton 
driver.quit()
*/