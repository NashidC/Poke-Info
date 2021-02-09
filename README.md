# Poké-Info

## A web based API application that services as n encyclopedia of various Pokémon (Generation 1 - 4). 
<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"/>

## Description

Poké-Info is a web application which allow users to have access to search and check detailed stats for every creature, including their favorite Pokémon species, in the Pokémon realm. Users will be allow to choose a Pokémon of interest based on generation or through search. With this they can  gain information in the following criteria: Pokémon name, number, evolution stages, type, and stats for HP, Attack, and Defense. Also included is what pokemon types they are weakest and strongest to.  The Pokémon information will be presented with a unique look inpired by the Pokémon card and its anatomy. This web application will be responsive which will be compatible for all screen sizes. 



## User Interfaces

Home<br>
<img src=Home.png/>

Bulbasaur Card<br>
<img src=Bulbasaur.png/>

## Component Hierarchy
<img src=Component_Hierarchy.png/>

## API Used

### PokéAPI + MVP Requirements

https://pokeapi.co/

Endpoints used: <br>

https://pokeapi.co/api/v2/pokemon/ {id or name}<br>
- [x] type
- [x] height(m) + weight (kg) 
- [x] different moves 
- [x] sprite image/icon 
- [x] stats --HP, Attack, Defense

https://pokeapi.co/api/v2/type/ {id or name}<br>
- [x] Double Damage From
- [x] Double Damage To 
- [x] Half Damage From 
- [x] Half Damage To
- [x] No Damage From
- [x] No Damage To 

https://pokeapi.co/api/v2/move {id or name} <br>
- [x] effect of move 

https://pokeapi.co/api/v2/evolution-chain/ {id} <br> 
- [x] evolution chain from 1st to 3rd stages


## Post MVP Goal


### React
- This web application will be built using React app
- 12 separate functional components rendering their specific content
- React Router will allow user to switch from one component to the next
- React Hooks implementation
- There's a chance redux might be apply into the web app
- Axios will be utilize to extract data from third party API, PokéAPI, render into the DOM
- The PokéAPI will not require an API KEY

### Styling
- Poké-info application will be developed using CSS flexbox layout to uniquely align and distribute elements on the web app page
- Responsive design will be implemented by utlizing media queries for all 3 screen sizes compatibility: desktop, tablet, and mobile

### Start Web App
- `npm start` or `yarn start` to run Poké-Info web application

## Inspiration

## Contact
