<script defer>
(function() {
  // Função para obter os parâmetros UTM da URL atual
  function getUTMParameters() {
    var url = new URL(window.location.href);
    var utmParams = new URLSearchParams(url.search);
    
    return utmParams.toString();
  }

  // Função para atualizar os links internos com os parâmetros UTM
  function updateInternalLinks(utmString) {
    var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute('href');

      if (href && href.indexOf('http') !== 0) {
        // Adicionar os parâmetros UTM aos links internos
        if (href.indexOf('?') !== -1) {
          link.setAttribute('href', href + '&' + utmString);
        } else {
          link.setAttribute('href', href + '?' + utmString);
        }
      }
    }
  }

  // Obter os parâmetros UTM da URL atual
  var utmString = getUTMParameters();

  // Atualizar os links internos com os parâmetros UTM
  if (utmString) {
    updateInternalLinks(utmString);
  }
})();
</script>

<style>
	.weglot-container {
    display: none;
	}
</style>


<script defer>
    document.addEventListener('DOMContentLoaded', function() {
      // Função para remover parâmetros UTM de botões com uma classe específica
      function removeUtmParametersFromButtons() {
        var buttons = document.querySelectorAll('.remove-utm-button'); // Substitua 'remove-utm-button' pela classe real dos botões
  
        buttons.forEach(function(button) {
          var originalHref = button.getAttribute('href');
  
          // Verifica se o botão tem atributo 'href' e se a URL contém parâmetros UTM
          if (originalHref && originalHref.includes('?utm_')) {
            var urlParts = originalHref.split('?');
            var newHref = urlParts[0]; // Mantém a parte da URL antes dos parâmetros UTM
            button.setAttribute('href', newHref);
          }
        });
      }
  
      // Chame a função para remover parâmetros UTM após a carga da página
      removeUtmParametersFromButtons();
    });
</script>


<!-- Disable Scroll Script -->
<script async>
var Webflow=Webflow||[];Webflow.push(function(){$body=$(document.body);scrollPosition=0;$('[scroll="disable"]').on('click',function(){oldWidth=$body.innerWidth();scrollPosition=window.pageYOffset;$body.css('overflow','hidden');$body.css('position','fixed');$body.css('top',`-${scrollPosition}px`);$body.width(oldWidth)});$('[scroll="enable"]').on('click',function(){if($body.css('overflow')!='hidden'){scrollPosition=window.pageYOffset}$body.css('overflow','');$body.css('position','');$body.css('top','');$body.width('');$(window).scrollTop(scrollPosition)});$('[scroll="both"]').on('click',function(){if($body.css('overflow')!=='hidden'){oldWidth=$body.innerWidth();scrollPosition=window.pageYOffset;$body.css('overflow','hidden');$body.css('position','fixed');$body.css('top',`-${scrollPosition}px`);$body.width(oldWidth)}else{$body.css('overflow','');$body.css('position','');$body.css('top','');$body.width('');$(window).scrollTop(scrollPosition)}})});
</script>


<!-- Accordion jquery -->
<script defer>
  (function($){'use strict';$(".acc-head").on("click",function(){$(this).children(".toggle-arrow").toggleClass("rotate");$(".toggle-arrow").not($(this).children(".toggle-arrow")).removeClass("rotate");$(this).next().slideToggle(300);$(".acc-body").not($(this).next()).slideUp("fast")}),$(".acc-head-2").on("click",function(){$(this).children(".toggle-arrow-2").toggleClass("rotate");$(".toggle-arrow-2").not($(this).children(".toggle-arrow-2")).removeClass("rotate");$(this).next().slideToggle(300);$(".acc-body-2").not($(this).next()).slideUp("fast")})})(jQuery);
</script>
