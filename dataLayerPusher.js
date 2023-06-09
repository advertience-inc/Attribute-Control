window.dataLayerPusher = (sheetName) => {
    // Send GET request to advertience API, then push returned data to dataLayer
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const data = JSON.parse(xhttp.responseText);
      
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: 'utmPush',
          source: data.source,
          medium: data.medium,
          name: data.name
      });
    }

    xhttp.open('GET', 'https://advertience-api.advertience.com/attribution/' + sheetName + '/' + window.location.search);
    xhttp.send();
}
