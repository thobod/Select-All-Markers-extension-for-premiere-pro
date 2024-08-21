function selectAllMarkersInSelectedClip(colorIndex) {
    try {
        var sequence = app.project.activeSequence;

        if (sequence) {
			manipulateAllMarkersOfTracks(sequence.videoTracks, colorIndex);
			manipulateAllMarkersOfTracks(sequence.audioTracks, colorIndex);
			return "Markers selected successfully!";
        }
        return "No selected clip found.";
    }
	catch (e) {
        return "Error: " + e.message;
    }
}

function manipulateAllMarkersOfTracks(tracks, colorIndex){
	for (var i = 0; i < tracks.numTracks; i++) {
        var track = tracks[i];
        for (var j = 0; j < track.clips.numItems; j++) {
            var clip = track.clips[j];
            if (clip.isSelected()) {
				var clipItem = clip.projectItem;
                var markers = clipItem.getMarkers();
				var marker = markers.getFirstMarker();
                while (marker) {
					manipulateMarker(marker, colorIndex);
                    marker = markers.getNextMarker(marker);
                }
            }
        }
	}
}
	

function manipulateMarker(marker, colorIndex){
	marker.setColorByIndex(colorIndex);
}