// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Vendelo Rapido", "Lo que mas se esta vendiendo  Categorías  Directorio de Proveedores  Quienes Somos  Quieres vender  2022 © Derechos Reservador  Como funciona   ", "");
   this[database_length++] = new SearchPage("Construccion.html", "Untitled Page", "Construcción  Excavadora  Modelo   SANY®  Año   2012  Precio   Lps 250,000.00  Mas Informacion    ", "");
   this[database_length++] = new SearchPage("01excabadora.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("Quieres-vender.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("Quienes-somos.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("Contacto.html", "Untitled Page", "Llamanos o Escribenos Tel 32323232 Whatssap Correo  info@vendelorapido.com   ", "");
   this[database_length++] = new SearchPage("Planes.html", "Untitled Page", "Planes Ecónomicos  Una plublicacion  Dos o más publicaciones   ", "");
   this[database_length++] = new SearchPage("Pagina-busqueda.html", "Untitled Page", "Resultados de las busquedas   ", "");
   return this;
}
