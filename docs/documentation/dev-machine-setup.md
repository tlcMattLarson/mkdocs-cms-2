---
title: Dev Machine Setup
date: 2017-08-25T15:19:21.736Z
---
This guide will walk you through the setup process for your development machine.

# 1-Folders to Add

* C:\\_code\\ folder.

# 2-SQL Server 2014

Install file can be found at: it\\Windows Images\\en_sql_server_2014_standard_edition_x64_dvd_3932034.iso  

*'it' may be 'corfileprint'*

You will need to right-click the file, and then click ‘Mount’ in order to load the iso as if it were a disk. Then you will need to click the setup icon.

**Installation Options**

* Business Intelligence Studio
* Management Tools

# 3-Visual Studio 2015

Install file can be found at:  
it\\Windows Images\\SW_DVD9_NTRL_Visual_Studio_Pro_2015_English_FPP_VL_MLF_X20-29901.ISO  

*'it' may be 'corfileprint'*

You will need to right-click the file, and then click ‘Mount’ in order to load the iso as if it were a disk. Then you will need to click the vs_professional.exe icon.

**Installation Options**

* Office Developer Tools
* SQL Server Data Tools
* Web Developer Tools
* Default Environment: Visual Basic

# 4-Team Foundation Server

Install file can be found at:  
it\\Windows Images\\en_visual_studio_team_foundation_server_2015_x86_x64_dvd_6909713.iso    

You will need to right-click the file, and then click ‘Mount’ in order to load the iso as if it were a disk. Then you will need to click the tfs_server.exe icon.

**Installation Options**

* Dev15\\DefaultCollection
* Map TLC root project recursively to C:\\_code
  * Delete any extra folders it tries to add by default

# 5-Windows Features

For this section you will need to hit the windows button and search for "windows features." You are looking for the following option:\
![Windows Features](/assets/windows-features.PNG)

Under the "Internet Information Services" category, make sure all boxes are checked, except for FTP Server.
