window.attributeControl = (clientTab) => {
    // Send GET request to advertience API, then push returned data to dataLayer
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const data = JSON.parse(xhttp.responseText);
      
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: 'adv_pageview',
          source: data.source,
          medium: data.medium,
          campaign: data.campaign
      });
    }

    xhttp.open('GET', 'https://advertience-api.advertience.com/v1/attribute/' + clientTab + '/' + window.location.search);
    xhttp.send();
}
