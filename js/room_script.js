
const content = [
{
  title: '<br>MEKONG SUITE',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'Araya Angkor Residence offers accommodation with a restaurant, Excellent facilities, lovely people and delicious breakfast!!! Best hotel i have been in Sou',
  '<br> 40x60 <br> 1day/$20 <br>Tel: 087-701-486/012-999-888',
  '<br><button class="custom-btn btn-7"><span>MORE INFO</span></button>'],

  preview: 'img/1.jpg' },

{
  title: '<br>PHNOM PENH RETREAT',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'An outdoor swimming pool and a bar. Excellent facilities, lovely people and delicious breakfast!!! Best hotel i have been in Sou'
  , '<br> 40x60 <br> 1day/$20 <br>Tel: 087-701-486/012-999-888',
  '<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/2.jpg' },

{
  title: '<br>CULINARY EXPERIENCES',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'Greenhouse Retreat features a restaurant, bar, a shared lounge and garden in Sen Monorom.',
  '<br> 30x60 <br> 1day/$15 <br>Tel: 087-701-486/012-999-888',
  '<br><br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/3.jpg' },
  {
  title: '<br>PASTRIES AND LIGHT SNACKS',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'Route76 Rooms features free WiFi throughout the property and views of city in Sen Monorom.this property also provides guests with a terrace.',
  '<br> 50x60 <br> 1day/$25 <br>Tel: 087-701-486/012-999-888',
  '<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/5.jpg' },
  {
  title: '<br>CULINARY EXPERIENCES',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'Naturally ventilated rooms with mountain views are available at Tree Lodge views are available at Tree Lodge in Sen Monorom.',
  '<br> 60x60 <br> 1day/$35 <br>Tel: 087-701-486/012-999-888',
  '<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/6.jpg' },
  {
  title: '<br>Munec Kar Guest House',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'Boasting a terrace, Avocado Guesthouse is situated in Sen Monorom. With a restaurant, free WiFi, each with a private bathroom.',
  '<br> 40x60 <br> 1day/$25 <br>Tel: 087-701-486/012-999-888',
  '<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/7.jpg' },
  {
  title: '<br>Chomkatae Bungalows',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'coffee',
  '<br> 30x60 <br> 1day/$15 <br>Tel: 087-701-486/012-999-888',
  '<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/8.jpg' },
  {
  title: '<br>Damrey So',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'swimming pool and a bar. Excellent facilities, lovely people and delicious breakfast!!! Best hotel i have been in Sou',
  '<br> 40x60 <br> 1day/$40 <br>Tel: 087-701-486/012-999-888',
 '<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/4.jpg' },

{
  title: '<br>palm trees',
  description: 'Elegant residential-style one-bedroom suite offering enhanced privacy and views of the Mekong River (65 sq. m.)',
  keywords: [
  'Situated in Siem Reap, just 700 metres from Pub Street, The Night Hotel features an outdoor swimming pool, a landscaped garden and free private parking on site.'
  ,'<br> 30x60 <br> 1day/$15 <br>Tel: 087-701-486/012-999-888'
  ,'<br><button class="custom-btn btn-5"><span>MORE INFO</span></button>'],

  preview: 'img/4.jpg' }];



function render() {
  let root = document.getElementById('root');

  for (i = 0; i < content.length; i++) {if (window.CP.shouldStopExecution(0)) break;

    let keywords = '';
    for (x = 0; x < content[i].keywords.length; x++) {if (window.CP.shouldStopExecution(1)) break;
      keywords += `
        <a href="#" class="keyword">
          #${content[i].keywords[x]}
        </a>
        `;
    }window.CP.exitedLoop(1);

    root.innerHTML += `
      <div class="item">
        <span class="title">
          ${content[i].title}
        </span>

        <span class="description">
          ${content[i].description}
        </span>

        <div class="image"
          style="background-image: url(${content[i].preview}?auto=compress&cs=tinysrgb&dpr=2&h=190&w=260)">
        </div>

        <span class="keywords">
          ${keywords}
        </span>
      </div>
    `;
  }window.CP.exitedLoop(0);
}

render();