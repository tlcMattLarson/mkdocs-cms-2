---
title: Dev Machine Setup
date: 2017-08-25T15:19:21.736Z
---
This guide will walk you through the setup process for your development machine.

# 1-Folders to Add
* C:\\_code\\ folder.

# 2-SQL Server 2014

Install file can be found at: it\Applications\SQL2014  
*'it' may be 'corfileprint'*

**Installation Options**  
* Business Intelligence Studio
* Management Tools

# 3-Visual Studio 2015

Install file can be found at: it\Applications\Visual Studio  
*'it' may be 'corfileprint'*

**Installation Options**  
* Office Developer Tools
* SQL Server Data Tools
* Web Developer Tools
* Default Environment: Visual Basic

# 4-Team Foundation Server

Install file can be found at: ???  

**Installation Options**  
* Dev15\DefaultCollection
* Map TLC root project recursively to C:\\_code
  * Delete any extra folders it tries to add by default

# 5-Windows Features

For this section you will need to hit the windows button and search for "windows features." You are looking for the following option:  
![Windows Features](/assets/windows-features.PNG)  

Under the "Internet Information Services" category, make sure all boxes are checked, except for FTP Server.


