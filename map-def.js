//Google Maps JS
function initialize() {
    
  var myLatlng0 = new google.maps.LatLng(51.5164343,-0.1423609);
    
  var myLatlng = new google.maps.LatLng(51.500729, -0.1246254);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng2 = new google.maps.LatLng(51.5043073, -0.0761757);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng3 = new google.maps.LatLng(51.503324, -0.119543);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng4 = new google.maps.LatLng(51.501364, -0.141889);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng5 = new google.maps.LatLng(51.5152117, -0.1418552);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng6 = new google.maps.LatLng(51.5072682, -0.1657302);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng7 = new google.maps.LatLng(51.4994054, -0.16323439);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng8 = new google.maps.LatLng(51.5110222, -0.0838238);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng9 = new google.maps.LatLng(51.5110222, -0.0838238);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng10 = new google.maps.LatLng(51.5194133, -0.1269565);
  var img2 = "upload/mapicons/museums.png"
  
  var myLatlng11 = new google.maps.LatLng(51.500729, -0.1246254);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng12 = new google.maps.LatLng(51.5043073, -0.0761757);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng13 = new google.maps.LatLng(51.503324, -0.119543);
  var img = "upload/mapicons/museums.png"
  
  var myLatlng14 = new google.maps.LatLng(51.501364, -0.141889);
  var img = "upload/mapicons/museums.png"
 
  
  var myMap = {
    scrollwheel: false,
    zoom: 14,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [
                {"color": "#ffffff"},
                {"weight": 0.1}
            ]
        },
                
        {
            featureType: "administrative.locality",
            stylers: [
                {"visibility": "off"}
            ]
        },
       
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {"visibility": "off"}
            ]
        },
        
        {
            featureType: "poi.park",
            stylers: [
                {"color":"#e2e0e0"}
            ]
        },
        
        {
            featureType: "poi",
            elementType: "all",
            stylers: [
                {"color":"#e2e0e0"}
            ]
        },
        
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {"color": "#000000"},
                {"weight": 1.5}
            ]
        },
        
                
        {
            featureType:  'road.local',
            stylers: [
                {'color': '#666666'},
                {'weight': 0.53}
            ]
        },
      
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {"color": "#b3b3b3"}
            ]
        },
    
        {
            featureType: "transit.line",
            stylers: [
                {"color": "#c2c2c2"}
            ]
        },
        
        {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
                {"color": "#ffffff"}
            ]
        },
        
        {
            featureType: "road",
            elementType: "labels.text",
            stylers: [
                {"weight": "#000000"}
            ]
        },
        

        
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {"color": "#000000"},
                {"weight": 1    }
            ]
        },
    
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {"color": "#000000"},
                {"weight": 0.5}
            ]
        },
        
        {
            featureType: "road.highway",
            elementType: "labels.text",
            stylers: [
                {"color": "#000000"},
                {"weight": 0.2}
            ]
        },
        
        {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
                {"color": "#ffffff"},
                {"weight": 4.78 }
            ]
        },
        
         {
            featureType: "administrative.neighborhood",
            elementType: "labels.text",
            stylers: [
                {"color": "#ffffff"},
                {"weight": 4.78}
            ]
        },        
   
        {
            featureType: "administrative.neighborhood",
            elementType: "labels.text.fill",
            stylers: [
                {"color": "#000000"},
                {"weight": 0.1}
            ]
        }        
    ]
  }
        
        

  var map = new google.maps.Map(document.getElementById('map'), myMap);
  //Callout Content
  var contentString = '<strong>TW Wholesale</strong><br>9013 Youngstown-Pittsburgh Rd<br>Youngstown, OH 44514';
  //Set window width + content
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 500
  });

  //Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker2 = new google.maps.Marker({
    position: myLatlng2, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker3 = new google.maps.Marker({
    position: myLatlng3, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker4 = new google.maps.Marker({
    position: myLatlng4, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker5 = new google.maps.Marker({
    position: myLatlng5, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker6 = new google.maps.Marker({
    position: myLatlng6, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker7 = new google.maps.Marker({
    position: myLatlng7, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker8 = new google.maps.Marker({
    position: myLatlng8, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker9 = new google.maps.Marker({
    position: myLatlng9, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker10 = new google.maps.Marker({
    position: myLatlng10, 
    map: map,
    icon: img2,
    title: 'image title'
  });
    
    var marker11 = new google.maps.Marker({
    position: myLatlng11, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker12 = new google.maps.Marker({
    position: myLatlng12, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker13 = new google.maps.Marker({
    position: myLatlng13, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    var marker14 = new google.maps.Marker({
    position: myLatlng14, 
    map: map,
    icon: img,
    title: 'image title'
  });
    
    
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
 

  //Resize Function
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);