---
title: Forms
date: 2017-08-22T15:13:13.986Z
---
# Forms

# Form Elements

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
*Source: <a href="https://www.w3schools.com/tags/att_input_type.asp" target="_blank">W3 Schools</a>*

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





