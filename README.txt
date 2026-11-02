Balkan Drive Radio V5.8

ÄNDERUNGEN
- Play nach einer Pause baut jetzt grundsätzlich eine frische Verbindung zum aktuell ausgewählten Live-Stream auf.
- Das gilt sowohl für den Play-Button in der App als auch für Media-Session-Play vom iPhone-Sperrbildschirm.
- Vor der Neuverbindung wird die alte Audioquelle pausiert, entfernt und das Audio-Element zurückgesetzt; danach wird dieselbe Stream-URL neu geladen und gestartet.
- Media-Session-Metadaten sowie playing/paused-Synchronisierung aus V5.7 bleiben erhalten.
- Senderliste mit 18 Sendern, Suche und Stream-Adressen bleiben unverändert.
- Offline-Cache auf bdr-v5-8-reconnect aktualisiert.

TESTERGÄNZUNG
- Radio Zavicaj TEST ergänzt.
- Testadresse: http://stream.radios.rs:9040/;
- Diese Adresse ist nicht als funktionierend verifiziert; sie basiert auf dem im Browser sichtbaren Host/Port und dient nur dem Praxistest.
