---
title: Forms
date: 2017-08-22T15:13:13.986Z
---
# Forms

# Form Elements

## TextArea

### Standard

### Trumbowyg (Fancy Editor)

![Trumbowyg Editor](/assets/trumbowyg-editor.PNG)

If you would like to create a Word-like text editor box, you will want to implement the Trumbowyg editor.

First you will need to include the following css and javascript libraries like so:

``` vbnet
@Html.RequireScriptFile("/Scripts/Trumbowyg/trumbowyg.js", 3, TLC.Constants.SCRIPTS_FOOTER)
@Html.RequireScriptFile("/Scripts/Trumbowyg/tlcTrumbowygInit.js", 2, TLC.Constants.SCRIPTS_FOOTER)
@Html.RequireCSSFile("/Content/Trumbowyg/trumbowyg.css", 3, TLC.Constants.SCRIPTS_HEADER)
```

Then you will need to add a textarea element to your form. 

* You need to add the "data_val" (underscore will be converted to a dash in html) attribute and set its value to "false".
* You will also need to add the trumbowyg class to the textarea element.


``` vbnet
<div class="form-group">
      @Html.LabelFor(Function(m) m.Item, New With {
        .class = "control-label"
      })
      @Html.TextAreaFor(Function(m) m.Item, New With {
        .class = "form-control trumbowyg",
        .data_val = "false"
      })
      @Html.ValidationMessageFor(Function(m) m.Item)
</div>
```

Now you should have a perfectly functioning version of the Trumbowyg textarea editor.
