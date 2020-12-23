# Groep 1 Netflix Dashboard

- Tester: Michel
- Scrum master: Michel
- Product owner: Mario
- UX/UI Designer: Nathan
- Git verantwoordelijke: Kilian

## Afgewerkte functionaliteit Sprint 1

1. Algemeen
    1. Navigatie (moet nog responsive worden)
    2. footer

2. Home
    1. Component: User Avatar 

        Een afbeelding van de gebruiker met een melding of een welkom boodschap erbij

    2. Component: Featurecards

        Deze cards worden gebruikt om de verschillende data zorgvuldig op het dashboard te doen verschijnen.

    3. Component: Top 5 series / films Global

        Deze component geeft een Global top 5 van Films of series, dit kan aangepast worden aan de hand van de toggle button. (moet nog dynamisch gemaakt worden)

        1. Object: Toggle button

            Geeft de mogelijkheid om te kunnen wisselen tussen top 5 films en top 5 series

    4. Component: Subscriptions

        Deze component geeft het aantal subscriptions wereldwijd mee in een grafiek. Deze grafiek is gemaakt met Graph.js.

3. Users Archive
    1. Component: User Table

        Deze tabel bevat nu reeds statische gegevens van onze users. Ook bevat deze al een rij die ervoor zorgt dat we in de toekomst onze dynamische gegevens kunnen filteren op allerlei criteria.

4. Movie/Serie Input page
    1. Landing page

        Deze pagina zal de gebruiker naar het juiste inputveld leiden om een film of serie toe te voegen.

    2. Movie input

        Zorgt ervoor dat we op een gebruiksvriendelijke manier een film kunnen toevoegen

    3. Serie Input

        Zorgt ervoor dat we op een gebruiksvriendelijke manier een serie kunnen toevoegen

## **Afgewerkte functionaliteit Sprint 2**

1. Algemeen
    1. User Avatar

        Werd aangepast zodat het aan iedere pagina toegevoegd kon worden

    2. Navigatie responsive gemaakt
    3. Pagination statisch aangemaakt

2. Home
    1. Top 5 series / films

        Deze functionaliteit is volledig afgewerkt. De lijst wordt dynamisch ingeladen. Via de toggle-button kan makkelijk gewisseld worden tussen films en series. Tijdens het laden van de series/films wanneer men op de toggle klikt, is er gezorgd voor een vloeiende overgang door middel van een fade.

    2. Subscriptions

        De opmaak van de subscriptions tabel is aangepast zodat die zo goed mogelijk lijkt op die in het design.

    3. Active Users

        Er is een donut grafiek aangemaakt om het percentage gratis en betalende gebruikers te tonen. Deze grafiek is ook gemaakt met graph.js

        Er is een extra js-library toegevoegd om percentage-labels te kunnen toevoegen aan de grafiek.

    4. Global Sales by Top Locations

        Deze ‘Geo Graph’ is afkomstig van de Google graph library. Aan de hand van een Google API en bijhorende API-key, kunnen we een kaart renderen die het aantal klanten per land weergeeft.

        Boven de map bevind zich een tabel die de landen weergeeft met de meeste klanten.

    5. Netflix Server Capacity

        Deze grafiek, ook wel een ‘Gauge’ genoemd, geeft de capaciteit van de netflix servers weer. Deze grafiek is gemaakt aan de hand van de Gauge.js library.

3. Users Archive
    1. de users worden ingeladen uit de json en weergegevn in de table.
    2. searchbar en filterbar eerst statich gemaakt. De filterbar is een soort slidedown
    3. searchbar werkt, je kan een user zoeken via zijn naam, voornaam of email.
    4. sorteren werkt ook, je kan op een van de items in de sorteerbar klikken om de users te sorteren, ascending of descending.
    5. je kan users filteren via id (alle id’s groter dan de aangegeven id), alle users met een bepaalde plan, per land, Joined after, joined before. Je kan ook alle filter verwijderen door op de X knop te klikken.

4. Filter Archive
    1. De films en series worden gefilterd volgens 4 categorien namelijk films, series, all en aanbevolen met de laatste 2 die worden weergegeven door een dropdown.
    2. De filter wordt gedaan met js en bootstrap zoals gezien in de les frontend.
    3. filter werkt maar je kan maar eenmalig op elke link klikken.

5. Detail Archive
    1. Detail Archive is momenteel statisch maar wordt in sprint 3 met javascript gedaan.
    2. Pagina geeft omschrijving, beoordeling, soort, afbeelding, categorien weer.
