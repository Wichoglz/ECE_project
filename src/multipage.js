import React from 'react'
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './encabezado/encabezado.css';
import top_image from './assets/top_img.jpg';
import notice1 from './assets/notice1.jpg';
import notice2 from './assets/notice2.jpg';
import notice3 from './assets/notice3.jpg';
import notice4 from './assets/notice4.jpg';
import notice5 from './assets/notice5.jpg';
import notice6 from './assets/notice6.jpg';
import notice7 from './assets/notice7.jpg';
import notice8 from './assets/notice8.jpg';
import notice9 from './assets/notice9.jpg';
import notice10 from './assets/notice10.jpg';
import Notice from './noticias/notice';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <body>
  <div className = "containe">
          <br/><img src={top_image} className ="image1"/> <br/><br/>
        </div>
  
  <div class = "container">
    <div class = "row">
      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/16-july-world-cup-final-wrap-up-876-words-2986460">
          <div className = "Notice">
          <Notice 
          image = {notice1}
          displayName="Un mundial resumido en 7 detalles"       
          />
 </div>
 </a>
 
      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/asap-france-follow-up-2-459w-2986446">
          <div className = "Notice">
          <Notice
          image = {notice2}
          displayName="¡Francia lo ha conseguido 7 años despues!" 
          />
 </div>
 </a>
 
      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/croacia-y-un-recibimiento-acorde-al-logro">
          <div className = "Notice">
          <Notice
          image = {notice3}
          displayName="Croacia, y un recibimiento acorde al logro" 
          
          />
 </div>
 </a>
 </div>

  <div class = "row">
      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/mr-belgium-v-england-462w-2985724">
          <div className = "Notice">
          <Notice
          image = {notice4}
          displayName="Un bronce inedito para Belgica" 
          
          />
 </div>
 </a>

      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/champions-welcome-home-story-2986531">
          <div className = "Notice">
          <Notice
          image = {notice5}
          displayName="Francia homenajea a sus campeones" 
          
          />
 </div>
 </a>
      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/7-7-millones-de-aficionados-visitan-la-fifa-fan-festtm-durante-rusia-2018">
          <div className = "Notice">
          <Notice
          image = {notice6}
          displayName="7,7 millones de aficionados visitan FIFA Fan Fest 2018" 
          
          />
 </div>
 </a>
 </div>
 
  <div class = "row">
      <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/de-rusia-2018-a-qatar-2022-2986081">
         <div className = "Notice">
         <Notice
          image = {notice7}
          displayName="Adios Rusia, nos vemos Qatar 2022" 
          
          />
 </div>
 </a>
       <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/tras-62-partidos-disputados-que-jugadores-formaran-tu-once-ideal-2985369">
          <div className = "Notice">
          <Notice
          image = {notice8}
          displayName="Tras 62 partidos, ¿que jugadores formaran tu 11 ideal?" 
          
  />
 </div>
</a>
       <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/arbitraje-y-var-en-rusia-2018tm-la-nueva-era-del-futbol">
         <div className = "Notice">
         <Notice
          image = {notice9}
          displayName="Arbitraje y VAR en Rusia 2018: La nueva era del futbol" 
          
          />
 </div>
 </a>
 </div>

  <div class="row">
       <a className = "col-4" align="center" href = "https://es.fifa.com/worldcup/news/157-awards-piece-2986296">
        <div className = "Notice">
        <Notice
          image = {notice10}
          displayName="Consuelo de oro para Modric" 
          
         />
 </div>
 </a>
</div>

</div>
</body>
)

const About = () => (
  <body>
    <div class="container">
   <br/><br/><br/> <tittle className= "titulo2"><h1>¡LOS MEJORES DE RUSIA 2018!</h1></tittle>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="http://k.uecdn.es/html5/html5lib/v1.9.1-ue4/modules/KalturaSupport/thumbnail.php/p/110/uiconf_id/8705164/entry_id/0_0k3svul0/height/402?" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>MEXICO</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.elcomercio.pe/files/article_content_ec_fotos/uploads/2018/03/07/5a9fe94c08093.jpeg" alt="Second slide"/>
       <div class="carousel-caption d-none d-md-block">
        <h1>BRASIL</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://depor.com/files/article_main/uploads/2018/02/10/5a7ef6a80501e.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>BELGICA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.eluniverso.com/sites/default/files/styles/powgallery_800/public/fotos/2018/05/dinamarca.jpg?itok=UckBat1X" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>DINAMARCA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://cnnespanol2.files.wordpress.com/2016/06/gettyimages-517559118.jpg?quality=100&strip=info&w=940&h=530&crop=1" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>URUGUAY</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://media.cubadebate.cu/wp-content/uploads/2012/06/seleccion-nacional-de-futbol-de-espana.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>ESPAÑA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://images.clarin.com/2018/01/26/SJaVhc_Bz_1256x620__1.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>FRANCIA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://staticmd1.lavozdelinterior.com.ar/sites/default/files/styles/alto_529/public/listas/fe8b7bfc48b7796e5ff81ee26494c7d1.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>RUSIA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.minutouno.com/adjuntos/150/imagenes/028/442/0028442918.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>ARGENTINA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://as01.epimg.net/img/especiales/futbol/eurocopa/2016/selecciones/suecia/foto_ficha_1920.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>SUECIA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://www.milenio.com/uploads/media/2018/05/31/seleccion-suiza-copa-mundo-sfv.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>SUIZA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://cdn2.sefutbol.com/sites/default/files/n/portugal-s21-noti.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>PORTUGAL</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://i.deportes.televisa.com/2017/05/croacia.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>CROACIA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.depor.com/files/ec_article_multimedia_gallery/uploads/2017/09/05/59aefb83f2030.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>INGLATERRA</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://www.futbolred.com/files/article_main/files/crop/uploads/2018/04/19/5ad8a4e4a5116.r_1524147792618.0-0-1421-712.jpeg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>JAPON</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.panamericanworld.com/sites/default/files/styles/node-main-pic-700_320/public/seleccion_colombia_2.jpg?itok=AXpCxRxF" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>COLOMBIA</h1>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  <div class="container">
    <hr/><h1 class="subtitle1">Octavos de final</h1><br/>
    <img class= "img2" src="http://as01.epimg.net/futbol/imagenes/2018/07/06/mundial/1530876198_357918_1530876492_noticia_normal.jpg" alt="octavos"/>
  </div><br/>
 </body>

)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <br/><br/><h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Multipage = () => (
  <Router>
    <div>
      <ul className = "menubar">
        <li className = "menubar3 active1"><Link to="/" className ="menubar2" >Home</Link></li>
        <li className = "menubar3 active2"><Link to="/about" className ="menubar2" >Teams</Link></li>
        <li className = "menubar3 active3"><Link to="/topics" className ="menubar2" >Matches</Link></li>
      </ul>


      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

export default Multipage;