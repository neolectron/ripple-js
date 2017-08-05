(function()
{
    document.querySelectorAll('.ripple').forEach(function(el)
    {
        el.addEventListener('click',function(ev)
        {
            var offset = this.getBoundingClientRect();
            var style  = window.getComputedStyle(this);
            
            var div = document.createElement('div');
            div.classList.add('effect-ripple');
            div.style.height        = style.height;
            div.style.width         = style.height;
            div.style.top           = `${(ev.clientY - offset.top)  - (parseInt(div.style.height) / 2)}px`;
            div.style.left          = `${(ev.clientX - offset.left) -  (parseInt(div.style.width) / 2)}px`;
            div.style.background    = style.color;

            this.appendChild(div);

            window.setTimeout(function()
            {
               div.outerHTML = "";
               delete div;
            },1990);
        });
    });
})();
