---
title: Forms
date: 2017-08-30T19:51:49.787Z
---
# Forms

# Form Elements

This section will document proper implementations of various form input elements.

## Input Types

With HTML5, a lot of input types have been added to help with handling more complex data in forms.

They can be implemented like so:

``` html
<input type="value">
```

Here is a table with all the various types:
<table class="w3-table-all notranslate">
  <thead>
    <tr>
      <th style="width:22%">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>button</td>
    <td>Defines a clickable button (mostly used with a JavaScript to activate a script)</td>
  </tr>
  <tr>
    <td>checkbox</td>
    <td>Defines a checkbox</td>
  </tr>
  <tr>
  <td class="html5badge">color</td>
    <td>Defines a color picker</td>
  </tr>
  <tr>
  <td class="html5badge">date</td>
    <td>Defines a date control (year, month and day (no time))</td>
  </tr>
  <tr>
  <td class="html5badge">datetime-local</td>
    <td>Defines a date and time control (year,  month, day, hour, minute, second, and fraction of a second (no time zone)</td>
  </tr>
  <tr>
  <td class="html5badge">email</td>
    <td>Defines a field for an e-mail address</td>
  </tr>
  <tr>
    <td>file</td>
    <td>Defines a file-select field and a "Browse..." button (for file uploads)</td>
  </tr>
  <tr>
    <td>hidden</td>
    <td>Defines a hidden input field</td>
  </tr>
  <tr>
    <td>image</td>
    <td>Defines an image as the submit button</td>
  </tr>
  <tr>
  <td class="html5badge">month</td>
    <td>Defines a month and year control (no time zone)</td>
  </tr>
  <tr>
  <td class="html5badge">number</td>
    <td>Defines a field for entering a number</td>
  </tr>
  <tr>
    <td>password</td>
    <td>Defines a password field (characters are masked)</td>
  </tr>
  <tr>
    <td>radio</td>
    <td>Defines a radio button</td>
  </tr>
  <tr>
  <td class="html5badge">range</td>
    <td>Defines a control for entering a number whose exact value is not important (like a slider control).
    Default range is from 0 to 100</td>
  </tr>
  <tr>
    <td>reset</td>
    <td>Defines a reset button (resets all form values to default values)</td>
  </tr>
  <tr>
  <td class="html5badge">search</td>
    <td>Defines a text field for entering a search string</td>
  </tr>
  <tr>
    <td>submit</td>
    <td>Defines a submit button</td>
  </tr>
  <tr>
  <td class="html5badge">tel</td>
    <td>Defines a field for entering a telephone number</td>
  </tr>
  <tr>
    <td>text</td>
    <td>Default. Defines a single-line text field (default width is 20 characters)</td>
  </tr>
  <tr>
  <td class="html5badge">time</td>
    <td>Defines a control for entering a time (no time zone)</td>
  </tr>
  <tr>
  <td class="html5badge">url</td>
    <td>Defines a field for entering a URL</td>
  </tr>
  <tr>
  <td class="html5badge">week</td>
    <td>Defines a week and year control (no time zone)</td>
  </tr>
 </tbody></table>
*Source: <a href="https://www.w3schools.com/tags/att_input_type.asp" target="_top">W3 Schools</a>*

## Checkbox

For a single checkbox, you will need to use the following code block:

``` vbnet
<div class="form-group">
    <div class="checkbox">
        @Html.CheckBoxFor(Function(m) m.Item)
        @Html.LabelFor(Function(m) m.Item, New With {.class = "control-label"})
    </div>
    <div class="checkbox">
        @Html.CheckBoxFor(Function(m) m.Item)
        @Html.LabelFor(Function(m) m.Item, New With {.class = "control-label"})
    </div>
</div>
```

Checkboxes created in this way will look like this:  

![Checkbox](/assets/checkbox.PNG)  

!!! NOTE
    You can place multiple .checkbox divs inside of the .form-group div and they will stack nicely.

## Checkboxes - Generated

If you have data on the back-end (ie. from the server) and you want to render that out into a group of checkboxes, you will want to use one of our HTML Helpers. There are two helpers that can be used for generating groups of checkboxes: CheckBoxList (for medium sized groups of checkboxes) and CheckBoxDropdown (for large groups of checkboxes).

### Checkbox List - Medium

If you are generating a medium sized group of checkboxes, you will probably want to use the CheckBoxList helper. It can be implemented like so:

``` vbnet
<div class="form-group">
    @Html.CheckBoxList("Name", FunctionThatReturnsAMultiSelectList(Model.Values, Tools.eTOOLTYPE.Type), New With {.id = "itemID1"}, 6)

    ' Function Definitions
    ' Function CheckBoxList(ByVal helper As HtmlHelper, ByVal name As String, ByVal selectList As MultiSelectList, ByVal htmlAttributes As Object) As MvcHtmlString
    ' Function CheckBoxList(ByVal helper As HtmlHelper, ByVal name As String, ByVal selectList As MultiSelectList, ByVal htmlAttributes As Object, ByVal columnCount As Integer) As MvcHtmlString
    ' Function CheckBoxList(ByVal helper As HtmlHelper, ByVal name As String, ByVal selectList As MultiSelectList, ByVal htmlAttributes As Object, ByVal columnCount As Integer, ByVal columnSpan As Integer) As MvcHtmlString

</div>
```

Checkbox lists created in this way will look like this:  

![Checkbox List](/assets/checkbox-list.PNG)  

### Checkbox Drop-down - Large

If you are generating a large group of checkboxes, you will probably want to use the CheckBoxDropdown helper. It can be implemented like so:

``` vbnet
<div class="form-group">
    @Html.CheckBoxDropdown("Name", FunctionThatReturnsAMultiSelectList(Model.Values, Tools.eTOOLTYPE.Type), New With {.id = "itemID1"}, 6)

    ' Function Definitions
    ' Function CheckBoxDropdown(ByVal helper As HtmlHelper, ByVal name As String, ByVal selectList As MultiSelectList, ByVal htmlAttributes As Object) As MvcHtmlString
    ' Function CheckBoxDropdown(ByVal helper As HtmlHelper, ByVal name As String, ByVal selectList As MultiSelectList, ByVal htmlAttributes As Object, ByVal itemsPerRow As Integer) As MvcHtmlString

</div>
```

Checkbox drop-downs created in this way will look like this (when they are expanded):  

![Checkbox Drop-down](/assets/checkbox-dropdown.PNG)  

These checkbox drop-downs make use of the Semantic UI dropdown.js and transition.js libraries.  
*Documentation can be found <a href='https://semantic-ui.com/modules/dropdown.html#/settings'>here </a>.*

## TextArea

### Standard

### Trumbowyg (Fancy Editor)

![Trumbowyg Editor](/assets/trumbowyg-editor.PNG)

If you would like to create a Word-like text editor box, you will want to implement the Trumbowyg editor.

First you will need to include the following css and javascript libraries like so:

``` vbnet
@Html.RequireScriptFile("/bundles/trumbowyg-bundle", 1, TLC.Constants.SCRIPTS_FOOTER)
@Html.RequireCSSFile("/Content/trumbowyg-bundle", 1, TLC.Constants.SCRIPTS_HEADER)
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

## Radio

## Radio - Generated

If you have data on the back-end (ie. from the server) and you want to render that out into a group of radio buttons, you will want to use one of our HTML Helpers. There are two helpers that can be used for generating groups of radio buttons: RadioButtonGroup (for small groups of radio buttons) and RadioButtonList (for medium sized groups of radio buttons).

### Radio Button Group - Small

If you are generating a small group of radio buttons (think two or three), you will probably want to use the RadioButtonGroup helper. It can be implemented like so:

``` vbnet
' basic implementation 1 (280px max width)
<div class="form-group">
    @Html.LabelFor("FormItemName",
        New With {.class = "control-label"}
    )
    @Html.RadioButtonGroup("FormItemName",
        MultiSelectList Object,
        htmlAttributes, True
    )
</div>

' basic implementation 2 (fill parent width)
<div class="form-group">
    @Html.LabelFor("FormItemName",
        New With {.class = "control-label"}
    )
    @Html.RadioButtonGroup("FormItemName",
        MultiSelectList Object,
        htmlAttributes, False, True
    )
</div>

' inline implementation radio buttons filling parent width
<div class="form-group row">
    <div class="col-md-3 padding-left-sm">
        @Html.LabelFor("FormItemName",
            New With {.class = "control-label"}
        )
    </div>
    <div class="col-md-9 padding-right-sm padding-left-sm">
        @Html.RadioButtonGroup("FormItemName",
            MultiSelectList Object,
            htmlAttributes, True, True
        )
    </div>
</div>

' Function Definitions
' RadioButtonGroup(
'     ByVal helper As HtmlHelper,
'     ByVal name As String,
'     ByVal selectList As MultiSelectList,
'     ByVal htmlAttributes As Object,
'     ByVal addAnAnyOption As Boolean,
'     Optional ByVal fillParent As Boolean = False
' )
```

The three example implementations of the RadioButtonGroup helper listed above create the following three form elements:  

![Radio Button Groups](/assets/radio-button-groups.PNG)  

### Radio Button List - Medium


# Client-Side Validation

Because we use JQuery Unobtrusive Validation, you are able to display validation messages on the client-side machines, without having to perform a page refresh.

This works because validation attributes have been defined on the server-side entities/models, which then allow the jquery library to generate the required front-end code with very little custom coding on our part.

## Setup

In order to enable client-side validation, you first will need to be using a model/entity which has validation defined on the back-end.

Next, you will need to include the JQuery Validation libraries in your view.

``` vbnet
@Html.RequireScriptFile("/bundles/jqueryval", 1, TLC.Constants.SCRIPTS_FOOTER)
```

Finally, you will need to include the validation message elements to the form. There are two types:

First, there are the input specific validation messages. These can be added like so:

``` vbnet
@Html.ValidationMessageFor(Function(x) x.Item, "", New With {.class = "text-danger"})
```

Second, there are form summary validation messages. These are generally placed at the top of the form and can be added like so:

``` vbnet
@Html.ValidationSummary(True, "", New With {.class = "text-danger"})
```

!!! note "OPINION"
    The second parameters in the validation elements, the empty strings, are validation messages. They are most likely for adding custom validation messages, however, since the messages are being dynamically generated, we leave them blank.  
    Matt L. - 08/24/2017

## Disable Validation

If you would like to disable client-side validation on a form element that already has validation defined on the back-end, you will need to add the data-val attribute to the input element with a value of false.

``` vbnet
@Html.TextBoxFor(Function(x) x.Item, New With {.class = "form-control", .data_val = "false"})
```
