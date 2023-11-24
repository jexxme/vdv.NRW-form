# Berechnung der Gesamtkosten

# Vollkostensatz für Sachbearbeiter
vollkostensatz_sachbearbeiter = 47.5  # in Euro pro Stunde

# Anfragen zum Dokumentenversand
anfragen_pro_woche = 50
dauer_bearbeitung_anfrage = 5 / 60  # 5 Minuten in Stunden

# Spezialfälle mit Rückfragen
spezialfälle_pro_woche = 10
wochen_im_monat = 4.3554324  # Durchschnittlich 4 Wochen pro Monat
dauer_bearbeitung_spezialfall = 15 / 60  # 15 Minuten in Stunden

# Fehlzustellungen
fehlzustellungen_pro_jahr = 50
kosten_pro_fehlzustellung = 1.60  # in Euro

# Kostenberechnung
# Normale Anfragen
kosten_normale_anfragen_monatlich = anfragen_pro_woche * 4 * dauer_bearbeitung_anfrage * vollkostensatz_sachbearbeiter

# Spezialfälle
kosten_spezialfälle_monatlich = spezialfälle_pro_woche * wochen_im_monat * dauer_bearbeitung_spezialfall * vollkostensatz_sachbearbeiter

# Fehlzustellungen
kosten_fehlzustellungen_jährlich = fehlzustellungen_pro_jahr * kosten_pro_fehlzustellung

# Monatliche Gesamtkosten (ohne Fehlzustellungen)
gesamtkosten_monatlich = kosten_normale_anfragen_monatlich + kosten_spezialfälle_monatlich

# Jährliche Gesamtkosten (inklusive Fehlzustellungen)
gesamtkosten_jährlich = gesamtkosten_monatlich * 12 + kosten_fehlzustellungen_jährlich

print(gesamtkosten_jährlich) # 15786.49
print(gesamtkosten_monatlich) # 1308.87