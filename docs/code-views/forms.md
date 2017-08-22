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

First you will need add the "enctype" attribute to the form element with the value of, "multipart/form-data".

``` vbnet
    @Using (Html.BeginForm("Edit", "VFC", FormMethod.Post, New With {.enctype = "multipart/form-data"}))

        'FORM ELEMENTS GO HERE

    End Using
```

Next you will need to include the following css and javascript libraries like so:

``` vbnet
    @Html.RequireScriptFile("~/Scripts/Tools/upload-form.bundle.js", 3, TLC.Constants.SCRIPTS_FOOTER)
    @Html.RequireCSSFile("~/Content/Tools/upload-form.css", 3, TLC.Constants.SCRIPTS_HEADER)
```

Finally, you will need to add a textarea element to your form like so:

``` vbnet
    <div class="form-group col-md-8">
        @Html.LabelFor(Function(m) m.Item.description, New With {.class = "control-label"})
        @Html.TextAreaFor(Function(m) m.Item.description, New With {.class = "form-control"})
        @Html.ValidationMessageFor(Function(m) m.Item.description)
    </div>
```
