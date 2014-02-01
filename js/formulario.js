var $form 	= $('#formulario'),
	$titulo = $('#titulo'),
	$url 	= $('#url'),
	$button = $('#mostrar-form'),
	$list 	= $('#contenido'),
	$post 	= $('.item').first(),
	ss 		= sessionStorage,
	ls 		= localStorage;
//Si existe el devolvera false o true
if(ls.getItem('autosave'))
{
	$titulo.val(ss.getItem('Titulo'));
	$url.val(ss.getItem('Url'));
}

var id = setInterval(function(){
		ss.setItem('Titulo', $titulo.val());
		ss.setItem('Url', $url.val());
	},
	1000
	);

//EVENTOS
function mostrarFormulario()
{

	$form.slideToggle();
	$list.slideToggle();
}

function agregarPost(e)
{
	e.preventDefault();

	var url = 	$url.val(), titulo = $titulo.val(),
				$clone = $post.clone();

	$clone.find('.titulo_item a').text(titulo).attr('href',url);
	
	$clone.hide();

	$list.prepend($clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();
}
/*
function grabarInformacion(e)
{
	e.preventDefault();

	var url = $url.val(),
		titulo = $titulo.val(),
		ls 	= localStorage,
		ss	= sessionStorage;

	ls.setItem('Titulo',titulo);
	ls.setItem('Url',url);

	ss.setItem('Titulo',titulo);
	ss.setItem('Url',url);

	mostrarFormulario();
	$titulo.val('');
	$url.val('');
}*/

//EVENTOS
$button.click(mostrarFormulario);
$form.on('submit', agregarPost);