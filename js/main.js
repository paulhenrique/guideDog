$(window).on("scroll", function () {
	
	var objTopo = $("#galeria").offset().top;

	var janelaTopo = $(window).scrollTop();
	//console.log(objTopo +":::::" + janelaTopo);


	if(objTopo <= janelaTopo){
		$("nav div ul li a").css({
			color: 'white'
		});
		$("body").addClass('teal').addClass('lighten-1');
	}else if(objTopo >= janelaTopo){
		$("nav div ul li a").css({
			color: '#00bfa5'
		});		
		$("body").removeClass('teal').removeClass('lighten-1');
	}
});

$.getJSON('./galeria.json',function(dados) {
	$.each(dados[0].imagens, function(index, el) {
		popGaleria(el);
	});
	$.each(dados[0].produtos, function(index, el) {
		popProdutos(this);
	});
});

function popGaleria(el){
	var div = $("<div>").addClass("card"),
	divimage = $('<div>').addClass('card-image'),
	image = $("<img/>").attr({src: 'img/galeria/'+el}),
	col = $("<div>").addClass('col s4');
	$(".fotos").append($(col).append($(div).append($(divimage).append(image))));
}
function popProdutos(parametro){

	var div = $("<div>").addClass("card"),
	divimage = $('<div>').addClass('card-image'),
	image = $("<img/>").attr({src: 'img/produtos/'+parametro.imagem}),
	divcontent = $("<div>").addClass('card-content'),
	icon = $('<i>').attr('class', 'material-icons right').append("more_vert"),
	icon2 = $('<i>').attr('class', 'material-icons right').append("close"),
	content = $("<span>").attr('class', 'card-title activator grey-text text-darken-4').append(parametro.titulo).append(icon),
	col = $("<div>").addClass('col s4'),
	a = $("<a>").attr({href : this.link}).append("Ver mais"),
	link = $("<p>").append(a),
	divreveal = $("<div>").addClass('card-reveal'),
	reveal = $("<span>").attr('class', 'card-title grey-text text-darken-4').append(parametro.titulo).append(icon2),
	descricao = $("<p>").append(this.descricao)
	;

	diverveal = $(divreveal).append(reveal).append(descricao);
	
	image = $(divimage).append(image);

	divcontent = $(divcontent).append(content).append(link);

	div = $(div).append(image).append(divcontent).append(divreveal);

	col = $(col).append(div);
	$(".produtos").append(col);
}