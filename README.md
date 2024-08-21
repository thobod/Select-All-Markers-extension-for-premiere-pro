How to install:
1. Place com.example.premiereMarkerSelector folder in the extensions folder of premiere probably C:\Program Files\Common Files\Adobe\CEP\extensions, or C:\Program Files (x84)\Common Files\Adobe\CEP\extensions
2. Enable debug mode in regedit (google this, you'll figure it out)
3. It should show up in premiere (window -> extensions)

How to use:
select clips with markers in timeline, select a color, and click 'Color all markers', it will color every marker of every selected clip in the active sequence.

How to alter:
change the effect on the marker in manipulateMarker() in host/index.jsx 
https://ppro-scripting.docsforadobe.dev/ is a usefull resource for any info on the models used.

PS: blame all the bad code on chatGPT :P 
