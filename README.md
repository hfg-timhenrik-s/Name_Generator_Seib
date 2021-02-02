# Semester-Projekt: TikTakToe

Der Klassiker unter den Beschäftigungen die man auf einer langweiligen Familienfeier mal schnell auf der Servierte spielen kann: TikTakToe. Tic-Tac-Toe oder Drei gewinnt ist ein klassisches, einfaches Zweipersonen-Strategiespiel, dessen Geschichte sich bis ins 12. Jahrhundert v. Chr. zurückverfolgen lässt. Und genau weil es so einfach und simpel ist, sollte man es eigentlich immer bei sich haben. Auch digital um dann, wenn man gerade keine Servierte und Stift zur Hand hat, trotzdem auf dem Laptop diesen Klassiker der Spielekultur spielen zu können. Dies nahm ich als Anlass und programmierte den Klassiker zur Digitalen Variante um. Und falls du den Klassiker erweitern willst, gibt es auch ein paar modifizierungen! 

![Dogs playing Poker, but thinking about TikTakToe!](https://pnimg.net/w/articles/4/564/fa0ba0726d.png)

## Benutzung

Hier beschreibe ich, wie man mein großartiges Projekt benutzen kann. Was ich tun muss um es zum Laufen zu bekommen (downloaden? welcher Browser? etc.). Wie ich es steuern kann. Was (noch) nicht richtig funktioniert und weshalb.

Um das TikTakToe spielen zu können muss man zuerst folgende Datein aus meinem Repository downloaden: tiktaktoe_jquery.html, tiktaktoe.css und tiktaktoe_jquery.js.

Ist dieser Schritt getan kann es auch schon los gehen. Öffne die Datein tiktaktoe_query.html in deinem Browser (programmiert in Opera), wähle die gewünschte Spielfeldgröße aus, confirm die Namen der Spieler und den Rest erledigt das Programm für dich! 

Du hast die Möglichkeit die Spielfeldgröße, Gewinnbedingung (Wie viele Kästchen eines Spielers müssen aneinader gereiht sein) und die Spielnamen individuell an deine Bedürfnisse anzupassen.

Wenn es einen Gewinner gibt, wird das vom Programm erkannt und es wird automatisch eine neue Runde gestartet. Der Spielstand wird unter dem Namensfeldern hochgezählt.

Falls dir das Spiel so zu langweilig wird, kannst du jederzeit die Spielfeldgröße oder die Gewinnbedingung ändern. Falls du während einem Spiel Die Spielfeldgröße änderst wird das aktuelle Spiel neu gestartet und es beginnt alles wieder von vorne. die Gewinnnbedingung kannst du jedoch jederzeit ändern und so auch noch während einem laufendem Spiel die Spannung steigern. Der Spielstand bleibt immer bestehen, außer du lädst die Seite neu. 

## Aufbau

Hier werden ich kurz die wichtigsten Variablen und Funktionen des Codes beschreiben, die eine tragende Rolle in meinem TikTakToe spielen. 
Klassen können z.B. wie folgt kurz beschrieben werden: Ich hab mein bestes gegeben, fand es aber voll schwer weil abstrakt und so .... blablabla 

* **Variablen im Code:** 
  * `pointsname`: Hält den Spielstand fest.
  * `playerOne/playerTwo`: Um die Spieler/Person im Code abzubilden welche gegeneinander spielen.
  * `aktuellerSpieler`: Der Name sagt alles! Beinhaltet den Spieler, welcher gerade am Zug ist.
  * `size`: Beinhaltet die Spielfeldgröße, welche von den Spielern angegebn wird.
  * `id`: Um jedem Spielfeld eine ID zuzuordnen und es so erkenntlich zumachen.
  * `fieldArray`: Beinhaltet das Spielfeld in Form eines Arrays.
  * `pointsToWin`: Der hier angegeben Wert bestimmt wie viele Felder nebeneinader ausgefüllt sein müssen um zu gewinnen.

_Zentrale Funktionen (die nicht zu Klassen gehören) folgen dem selben Muster, werden aber meist etwas ausführlicher beschrieben:_

`sizeOfField()`: Eine Funktion die das TikTakToe Spielfeld auf der HTML-Seite, sowie ein Array, welche Das Spielfeld im Code abbildet, kreiert. 

Die Funktion nimmt den Wert der angebenen Spielfeldgröße entgegen und lässt dem Wert entsprechend oft eine Schleife laufen. Jeder Durchlauf der Schleife, entspricht einer Zeile auf dem Spielfeld. Dabei werden bei jedem Durchgang der jeweils kreierten Zeile ein ID zugeordnet, sowie eine neues Array ins fieldArray Array eingefügt, diese Array steht im Code für eine Zeile auf dem Spielfeld. Anschließend wird durch ein Jquery-Befehl eine Zeile (tr) in die Tabelle (table) eingesetzt, welche in der HTML Datei das Spielfeld darstellt. Jeder kreierten Zeile wird dabei die zuvor erstellte ID für den jeweiligen Durchgang zugeordnet. Während diese Schleife jeweils die Zeilen im Spielfeld und Code darstellt und diese durch ID´s erkenntlich macht gibt es in der Schleife eine zweite Schleife, welche wiederum die Felder in den einzelnen Zeilen im Spielfeld und Code darstellt und diese ebenfalls durch ID´s erkenntlich macht. Da das Feld x*x Groß ist, nimmt die zweite Schleife ebenfalls den Wert der angebenen Spielfeldgröße aus der Size Variable entgegen und setzt in jedes zuvor kreiert Array im fieldArray einen Platzhalter für die jeweiligen Felder ein. Außerdem wird die ID der zuvor erstellte Zeilen (tr) für die Zeilen in der Spielfeld-Tabelle im HTML-Code entgegengenommen, und durch einen Jquery Befehl eine Zelle (td) eingefügt. Dies geschiet so oft wie die Schleife läuft. Jede Zelle bekommt eine eigene Id aus einer Kombintation der Durchlaufwerte der ersten und zweiten Schleife. Dadruch kan die Zellen-ID entgegengenommen werden und bei einem jedem Click auf das Feld die ID an die nächste wichtige Funktion, die clickPlayer Funktion weitergegeben werden.


`clickPlayer()`: Diese Funktion ist dafür zuständig auf jeden User Klick auf dem Spielfeld zureagieren und anschließend das Feld mit Farbe zufüllen, sowie im Code kenntlich zu machen welcher Spieler welche Felder besetzt hat. 

Die Funktion ist an eine If-Statement gebunden. Die Funktion nimmt die ID des angeklickten Feldes entgegen und nur wenn die background-color des Feldes im tiktaktoe.css file grau ist (rgb(204, 197, 185)) kann man auf das Feld drücken und die Funktion wird ausgeführt. Wenn das Feld diese Anforderungen erfüllt, wird mit einem Jquery Befehlt durch die ID auf die einzelen Zelle zugegriffen und die background-color im tiktaktoe.css file geändert. Da die ID der Zellen eine Kombintation aus der Id der jeweiligen Zeile (erste Schleife in function sizeOfField) in der Sie steht,sowie der Position in der Zeile (zweite Schleife in function sizeOfField) ist, teilen wir die ID in ihre Grundelemte auf,  so dass sie lediglich die jeweilige Schleifenwerte ausgibt. Zuerst löschen wir das wort "Zelle" in der ID, sodass jediglich die ziffern der Id übrig bleiben. Anschließend bestimmen wir Zwei Variablen, Zeile und Reihe, welche sich den jeweiligen Schleifenteil aus der id nehmen, heißt die kombination aus ziffern aufteilen und die ersten Stelle an Zeile übergeben und zweite Stelle an reihe übergeben. Anschließend können wir dadurch genau die Position in der Tabelle, sowie im Array bestimmen. Bspw. das Feld oben rechts in einem 3*3 Feld hat die Id=Zelle02, indem wir 02 nun in 0 & 2 aufgliedern, wissen wir das das der zugehörige Platzhalter im Array fieldArray im 0 Array an der 2 Stelle steht. Durch diese Information können wir nun dem Platzhalter im Array fieldArray einen neuen Wert zuteilen. Der Platzhalter wird mit dem jeweiligen aktuellenSpieler beschrieben. Indem wir diese Funktion jedes mal aufrufen wenn ein Spieler ein Feld belegt, wird das array immer aktuell gehalen und bildet das Spielfeld im code ab. Abschließend wird in der function die wichtige functin WinCheck aufgerufen, welche ich nun folgend erklären werde.

`WinCheck()`: Die WinCheck Funktion überprüft nach jedem Spieler-Klick im Spielfeld, anhand des Arrays im Code ob es einen Gewinner gibt.

Hätte man alle Gewinnmöglichkeiten in einer Funktion überprüft wäre die Funktion zu groß geworden, weshalb sie in WinCheck() und WinCheckDiagonal() aufgeteilt wurde. WinCheck() überprüft ob es horizontal oder vertikal einen Gewinner gibt (heißt ob dem Wert aus pointsToWin entsprechend viele Felder von einem Player nebeneinader belegt sind), während WinCheckDiagonal() überprüft ob es der Gewinnbedingung entsprechen diagonal einen Gewinner gibt. 

WinCheck() funktioniert dabei folgend: erst werden zwei Variablen mit einem leeren String bestimmt, namentlich horizontal und vertikal, diese werden später noch mit dem fieldArray Inhalt gefüllt. Anschließend  bestimmen wir die Gewinnbedingung worauf wir die später gefüllten Strings von den Variablen horizontal und vertikal überprüfen. Die Gewinnnedinung orientiert sich immer an  dem Wert aus dem pointToWin, wodurch sie sich die Gewinnbedingung immer an den jeweiligen Spielmodus anpasst. Dies machen wir in dem wir zwei variablen bestimmen, einmal die Gewinnbedingung für playerOne und für playerTwo, namentlich victoryOne und victoryTwo. Diese haben als Inhalt den Namen des Player-Strings (welchen sich sich aus der Player-Variable holen) so oft wiederholt / aneinader geschrieben wie es pointsToWin gibt. All das passiert durch den Java Befehl .repeat(pointsToWin), welcher jediglich den Wert aus der pointsToWin Variable holt und dem wert entsprechend oft den Playernamen aneinander kettet.

//Gewiiner finder (Felder auf Gewinnbedingung prüfen)
function WinCheck() {
    // Deklariation von Variablen (Gewinnmöglichkeiten/Spielfeldgröße)
    let horizontal = "";
    let vertikal = "";
    // Gewinnbedingung (Wie oft muss der Spieler Name hinter einanderstehen / Spielername wird aneinadergereiht)
    let victoryOne = playerOne.repeat(pointsToWin)
    let victoryTwo = playerTwo.repeat(pointsToWin)
    //  Schleife für Spalten 
    for (let i = 0; i < size; i++) {
        horizontal = "";
        vertikal = "";
        //Jedes Feld in der Spalte testen
        for (let t = 0; t < size; t++) {
            // Inhalt des Arrays in string einsetzen
            horizontal += fieldArray[i][t]
            vertikal += fieldArray[t][i]
        }
        // die erstellten Strings auf die Gewinnbedingung kontrollieren
        if (horizontal.includes(victoryOne)) {
            pointsname1++
            score();
            sizeOfField();
        }
        else if (horizontal.includes(victoryTwo)) {
            pointsname2++
            score();
            sizeOfField();
        }
        if (vertikal.includes(victoryOne)) {
            pointsname1++
            score();
            sizeOfField();
        }
        else if (vertikal.includes(victoryTwo)) {
            pointsname2++
            score();
            sizeOfField();
        }
    }
    //Spielfeld auf Diagonale Gewinnmöglichkeiten testen
    WinCheckDiagonal()
}

_(Achtung: Hier werden nur Funktionen beschrieben, die eine zentrale Rolle einnehmen.)_

Nach der Beschreibung der elementaren Bestandteile wird aus der Vogelperspektive nochmals beschrieben, welche Gesamtzustände euer System durchlaufen kann. In diesem Fall würde der User zunächst 0 bis n Personen erzeugen, und diese mit haveParty() zum Bier trinken bringen.  Dabei wird innerhalb von haveParty nacheinander für jede Person drinkBeer() aufgerufen, unter Benutzung von neuen Bier-Objekten. Nach Ende der Party muss das Programm neu gestartet werden um die Zustände zurückzusetzen.

_(Achtung, dieser Teil liest sich jetzt sehr ähnlich zur Funktionsbeschreibung von haveParty - das liegt daran dass es im Beispiel nur eine zentrale Funktion gibt. Ihr habt aber mehrere die zusammenspielen!)._

## Future Work

Was noch fehlt, und was die nächsten Schritte wären um es ggf. umzusetzen:
* Erweiterung der Party um Musik
* Berücksichtung individueller Verträglichkeiten von Bier in der Person-Klasse
* etc...

Das man das Spiel auch dann starten kann ohne das die Player confirmed werden. hab ich verscuht in dem ich die wichtigen Funktionen und zuordnungen ganz an den anfagn gemacht habe und den Spieler bereits Werte zuteile, aber es hat nicht geklapppt irgendein komischer bug. 
