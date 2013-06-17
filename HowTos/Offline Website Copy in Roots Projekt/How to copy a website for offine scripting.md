![How to copy a website for offline scripting – Screencast](OfflineCopy.gif)

### How to copy a website for offline scripting

#### 1. Erstelle ein neues Roots Projekt

Mit der Hilfe des Terminals brauchst Du die beiden Commandos (ändere den Namen in den Anführungszeichen zu einem Passenderen):

```
roots new "Incom Index Page Copy for Scriptings"
cd "Incom Index Page Copy for Scriptings"
```

_(siehe auch Commit: [0f21564](https://github.com/muthesius/How-to-offline-a-website/commit/0f21564))_

#### 2. Reduziere das Projekt auf die wesentlichen Dateien
Folgende Dateien können getrost gelöscht werden:

1. assets/css/_settings.styl
2. assets/css/master.styl
3. assets/img/noise.png
4. assets/js/_helper.coffee
5. assets/js/pie.htc
6. assets/js/require.js
7. views/_partial.jade
8. views/index.jade
9. views/layout.jade

Die _main.coffee_ Datei kann ebenfalls auf das folgende reduziert werden:

```
$ ->
  console.log("Lösche dieses log statement nach dem Import der Site")  
```

**Wenn Du Git verwendest, achte darauf, dass _public/_ in der _.gitignore_ Datei steht!**

_(siehe auch Commit: [549d2dd723](https://github.com/muthesius/How-to-offline-a-website/commit/549d2dd723))_


#### 3. Importiere die Website

Speichere die Website mit der "Speichern als..." Funktion Deines Browser – getestet mit Chromium; eventuell sind die Pfade der heruntergeladenen Bilder und Skripte unterschiedlich.

**Achtung speichere die Website NICHT in Deinem Roots-Projekt order, sondern an einem temporären Platz, z.B. Downloads!**

Nun verschiebe die Dateien nacheinander in Dein Roots-Projekt:

- Alle Bilder in _assets/img_
- Alle Skripte (.js) in _assets/js_
- Alle CSS Datein in _assets/css_
- Eventuell vorhandene *.ico Datein direkt in _assets/_
- Zum Schluß kommt die gespeicherte *.html Datei unter dem namen _index.html_ in _views/_ – also: _views/index.html_

_(siehe auch Commit: [9356cd4620](https://github.com/muthesius/How-to-offline-a-website/commit/9356cd4620))_


#### 4. Verlinkungen reparieren


Zu diesem Zeitpunkt kannst Du das Roots-Projekt im _watch_ Modus starten, um zu sehen, welche Verlinkungen nicht funktionieren – die Website wird sicherlich nicht korrekt aussehen.

Verwende dazu in der Commandozeile den folgenden Befehl – achte darauf, dass Du zuvor mit _cd_ in Deinen Roots-Ordner _hineingegeangen_ bist.

```
roots watch
```

Jetzt kannst Du im Browser die Site mit [localhost:1111](http://localhost:1111) aufrufen.

Schaue nun in der Console im _Network_ Tab nach, welche Dateien nicht gefunden wurden. Ändere die Verlinkungen in der _views/index.html_. Keine Bilder verschieben, das sorgt eher für Chaos.

Das gilt natürlich für: Bilder, Skripte & CSS. Repariere es in dieser Reihenfolge, damit eventuelle Bilder, die per Skript geladen wurden, auch entdeckt werden.

_(siehe auch Commit: [889e01bc84](https://github.com/muthesius/How-to-offline-a-website/commit/889e01bc84))_


##### 4.b Stylesheets haben andere URL Patterns!

In Stylesheets mußßt Du darauf achten, das mit _url(...)_ verlinkten Dateien meist als absolute Pfade angegeben werden.

Beispielsweise statt:

```
body, html { background: url('body-bg.gif') ... }
```

sollte die url mit einem Slash beginnen:
```
body, html { background: url('/img/body-bg.gif') ... }
```

_(siehe auch Commit: [8bc242e2a4](https://github.com/muthesius/How-to-offline-a-website/commit/8bc242e2a4))_



#### 5. Roots Live-Reload wiederherstellen

Um das nette Roots-Feature wieder nutzen zu können, müssen wir am Ende unserer _views/index.html_ manuell ein kleines Skript einfügen (siehe diesen Commit: [290d6f93d2](https://github.com/muthesius/How-to-offline-a-website/commit/290d6f93d2))



#### Fertig!

Überprüfe, ob alles soweit sichtbar ist und Du kannst beginnen in der _masters.coffee_ Dein eigenes Skript zu schreiben oder die _index.html_ zu verändern...

Viel Spaß!




