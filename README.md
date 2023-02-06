## Le sujet :
« comment faire pour optimiser l’affichage d’une carte quand l’interface dispose d’onglets ». En effet quand tu changes d’onglet la map va être détruite puis remontée par react lorsque l’onglet est changé. 

C’est problématique car le rechargement de la map est coûteux en termes d’appels réseau et licence pour récupérer les fonds de carte (qui sont facturés par appel). 

Dans les technos à utiliser : Reactjs bien sûr et MapLibre (qui est un fork open source de mapbox), pour les fonds de carte tu peux utiliser MapTiler. Pas besoin de styliser quoi que ce soit, je souhaite essentiellement voir ton approche sur ce type de cas un peu particulier.