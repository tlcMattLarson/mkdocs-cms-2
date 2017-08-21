---
title: Iframes
date: 2017-08-21T17:06:46.287Z
---
# Full Page Embeds

If you want to embed a full page via an iframe, you will need to add it to the view with the following code:

``` html
   <div class="embed-responsive tlc-iframe-box clearfix">
    <iframe class="embed-responsive-item clearfix" src="url here" allowfullscreen></iframe>      
</div> 
```

You will also need to include the following script file somewhere in the view:

``` vbnet
   @Html.RequireScriptFile("/Scripts/tlciframes.js", 1, TLC.Constants.SCRIPTS_FOOTER)
```
