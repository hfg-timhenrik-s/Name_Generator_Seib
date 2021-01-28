# Semester-Projekt: TikTakToe

Der Klassiker unter den Beschäftigungen die man auf einer langweiligen Familienfeier mal schnell auf der Servierte spielen kann: TikTakToe. Tic-Tac-Toe oder Drei gewinnt ist ein klassisches, einfaches Zweipersonen-Strategiespiel, dessen Geschichte sich bis ins 12. Jahrhundert v. Chr. zurückverfolgen lässt. Und genau weil es so einfach und simpel ist, sollte man es eigentlich immer bei sich haben. Auch digital um dann, wenn man gerade keine Servierte und Stift zur Hand hat, trotzdem auf dem Laptop diesen Klassiker der Spielekultur spielen zu können. Dies nahm ich als Anlass und programmierte den Klassiker zur Digitalen Variante um. Und falls du den Klassiker erweitern willst, gibt es auch ein paar modifizierungen! 

![Dogs playing Poker, but thinking about TikTakToe!](https://pnimg.net/w/articles/4/564/fa0ba0726d.png)

> ```Dogs playing Poker, but thinking about TikTakToe!```

## Benutzung

Hier beschreibe ich, wie man mein großartiges Projekt benutzen kann. Was ich tun muss um es zum Laufen zu bekommen (downloaden? welcher Browser? etc.). Wie ich es steuern kann. Was (noch) nicht richtig funktioniert und weshalb.

Um das TikTakToe spielen zu können muss man zuerst folgende Datein aus meinem Repository downloaden: tiktaktoe_jquery.html, tiktaktoe.css und tiktaktoe_jquery.js.

Ist dieser Schritt getan kann es auch schon los gehen. Öffne die Datein tiktaktoe_query.html in deinem Browser (programmiert in Opera), wähle die gewünschte Spielfeldgröße aus, confirm die Namen der Spieler und den Rest erledigt das Programm für dich! 

Du hast die Möglichkeit die Spielfeldgröße, Gewinnbedingung (Wie viele Kästchen eines Spielers müssen aneinader gereiht sein) und die Spielnamen individuell an deine Bedprfnisse anzupassen.

Wenn es einen Gewinner gibt wird das vom Programm erkannt und es wird automatisch eine neue Runde gestartet. Der Spielstand wird unter dem Namenfeld hochgezählt.

Falls dir das Spiel so zu langweilig wird, kannst du jederzeit die Spielfeldgröße oder die Gewinnbedingung ändern. Falls du während einem Spiel Die Spielfeldgröße änderst wird das aktuelle Spiel neu gestartet und es beginnt alles wieder von vorne. die Gewinnnbedingung kannst du jedoch jederzeit ändern und so auch noch ein in einem laufendem Spiel die Spannung steigern. Der Spielstand bleibt immer bestehen. 

## Structure / Aufbau

Hier werden kurz die Klassen und Funktionen beschrieben, die eine tragende Rolle in eurem großartigen Projekt spielen. 
Klassen können z.B. wie folgt kurz beschrieben werden:

* **Beer:** Eine Klasse um ein Bier in Code abzubilden. Enthält typische Eigenschaften von Bier:
  * `alcVol`: der Alkoholgehalt (Property)
  * `amount`: die Menge (Property, Standardwert: 500ml)

* **Person:** Eine Klasse um eine Person in Code abzubilden. Enthält typische Eigenschaften und Methoden von Menschen, um mit Bier zu interagieren:
  * `drinkBeer(beer)`: trinkt ein Bier, welches als Parameter übergeben wird und vom Typ / Klasse "Beer" sein muss (Funktion)
  * `isDrunk`: gibt an ob eine Person betrunken ist (Property, Boolean)

_Zentrale Funktionen (die nicht zu Klassen gehören) folgen dem selben Muster, werden aber meist etwas ausführlicher beschrieben:_

`haveParty(persons[], interval)`: Eine Funktion die ein Array von Personen entgegennimmt, und diese dann im angegebenen Intervall Bier trinken lässt. Nach jedem Durchlauf durch das Biertrinken (durch Aufruf von drinkBeer mit einem neu erzeugten Bier-Objekt) wird überprüft, ob die Anzahl der betrunkenen Personen größer 0 ist. Wenn dies eintritt, wird das Intervall bei jedem Durchlauf auf die doppelte Länge verlängert. Die Funktion endet in ihrer Ausführung dann wenn alle Personen isDrunk = true zurückgeben, oder wenn das Interval größer als 1 Stunde wird. Wird die Funktion mit nur einer Person im Array aufgerufen, wird eine Warnmeldung ausgegeben, um versehentliches Trinken alleine zu vermeiden. 

_(Achtung: Hier werden nur Funktionen beschrieben, die eine zentrale Rolle einnehmen.)_

Nach der Beschreibung der elementaren Bestandteile wird aus der Vogelperspektive nochmals beschrieben, welche Gesamtzustände euer System durchlaufen kann. In diesem Fall würde der User zunächst 0 bis n Personen erzeugen, und diese mit haveParty() zum Bier trinken bringen.  Dabei wird innerhalb von haveParty nacheinander für jede Person drinkBeer() aufgerufen, unter Benutzung von neuen Bier-Objekten. Nach Ende der Party muss das Programm neu gestartet werden um die Zustände zurückzusetzen.

_(Achtung, dieser Teil liest sich jetzt sehr ähnlich zur Funktionsbeschreibung von haveParty - das liegt daran dass es im Beispiel nur eine zentrale Funktion gibt. Ihr habt aber mehrere die zusammenspielen!)._

## Future Work

Was noch fehlt, und was die nächsten Schritte wären um es ggf. umzusetzen:
* Erweiterung der Party um Musik
* Berücksichtung individueller Verträglichkeiten von Bier in der Person-Klasse
* etc...
